/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Headline,
  Text,
  Subheading,
  TouchableRipple,
  useTheme,
  Paragraph,
  DataTable,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';
import Italic from '../components/Italic';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';
import Fig19 from '../components/Fig19';

const Osteoporosis = ({navigation}) => {
  const {colors} = useTheme();
  const {height, width} = useWindowDimensions();

  const dispatch = usePreferencesDispatch();

  const scrollView = useRef(null);

  let min = width;
  if (height < min) {
    min = height;
  }
  min = (min / 4) * 3;

  const navigate = async c => {
    try {
      await AsyncStorage.setItem('@chapter', c);
      dispatch({type: 'SET_CHAPTER', payload: c});
    } catch (e) {
      console.log(e);
    }
  };

  const saveScrollPos = async event => {
    const s = event.nativeEvent.contentOffset.y.toString();
    try {
      await AsyncStorage.setItem('@sOsteoporosis', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sOsteoporosis');
        if (s !== null) {
          scrollView.current.scrollTo({x: 0, y: parseFloat(s), animated: true});
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchScroll();
  }, []);

  return (
    <ScrollView
      ref={scrollView}
      onMomentumScrollEnd={saveScrollPos}
      contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Headline />
        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Isquemia')}>
          <Text>{'La isquemia cerebral'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿CÓMO ANDAN MIS HUESOS? LA OSTEOPOROSIS
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>H</Bold>ace unas décadas se mencionaba la palabra osteoporosis
          solo cuando una persona se fracturaba un hueso, en especial la cadera,
          le realizaban una radiografía y el médico le decía:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ Señora, usted tiene osteoporosis, y por la caída que tuvo el
            hueso no resistió y se partió.
          </Italic>
        </Paragraph>
        <Paragraph>
          Con la llegada de nuevos equipos para diagnosticarla más temprano, más
          conocimiento sobre la enfermedad, formas de prevenirla, y medicamentos
          efectivos para la misma, la osteoporosis ha pasado a ser una
          enfermedad más conocida, más diagnosticada y mejor tratada.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          La osteoporosis es una enfermedad que se caracteriza por la
          descalcificación de los huesos. Los huesos están en constante
          renovación del tejido que los componen, llamado tejido óseo.
          Normalmente se forma hueso y se pierde hueso, es decir, se renueva.
          Desde que nacemos hasta que llegamos a los 20–24 años, la formación de
          hueso es mayor que la pérdida del mismo: es la etapa de crecer.
          Después de esa edad, el crecimiento se detiene, y se crea un
          equilibrio entre el hueso que se crea y el que se pierde. En esos
          años, es cuando alcanzamos nuestro máximo de masa ósea, que se
          mantiene más o menos igual hasta la menopausia en la mujer y un poco
          más adelante en la vida en los hombres.
        </Paragraph>
        <Paragraph>
          A partir de ese momento, el equilibrio entre formación y pérdida de
          hueso se comienza a inclinar más a la pérdida, produciéndose lo que se
          conoce como osteopenia, que no es más que la pérdida de masa ósea
          relacionada con la edad, y es normal.
        </Paragraph>
        <Paragraph>
          Cuando esta osteopenia pasa de ciertos límites, es cuando se produce
          la osteoporosis. El mayor problema que trae la osteoporosis, es el
          aumento del riesgo de fractura, al haberse debilitado los huesos pues
          esta enfermedad aumenta la fragilidad de los mismos. La osteoporosis
          ocurre más frecuentemente en mujeres.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ SE PUEDE PRODUCIR LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          La osteoporosis se produce cuando disminuye el calcio de los huesos.
          Esto ocurre cuando no consumimos suficiente calcio y fosfatos en la
          dieta o no se absorbe adecuadamente por alguna enfermedad u operación
          en el aparato digestivo, o por el propio proceso de envejecimiento.
        </Paragraph>
        <Paragraph>
          La vitamina D es necesaria para que el calcio se pueda absorber en el
          intestino, así que si no consumimos alimentos que la contengan,
          también nuestros huesos se pueden descalcificar.
        </Paragraph>
        <Paragraph>
          Como explicamos anteriormente, a partir de la menopausia en las
          mujeres se comienza a perder calcio en los huesos, y esto ocurre por
          la disminución de los estrógenos, que son unas hormonas que se
          producen en los ovarios, y en los hombres por disminución de la
          testosterona, que es otra hormona que se produce en los testículos.
        </Paragraph>
        <Paragraph>
          Hay medicamentos, como los esteroides y algunos que se usan para
          combatir el cáncer, que pueden producir osteoporosis. La falta de
          actividad física es una de las principales causas de que se acelere la
          descalcificación de los huesos.
        </Paragraph>
        <Paragraph>
          Existen los llamados factores de riesgo para la osteoporosis, entre
          los que se destacan, además de la poca actividad física, alcoholismo,
          hábito de fumar y ser muy delgado.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ SÍNTOMAS DA LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          Normalmente, la osteoporosis no da síntomas. La osteoporosis como tal
          no produce dolor. Comienza a dar síntomas cuando tenemos fracturas o
          fisuras en los huesos. Las fracturas más frecuentemente relacionadas
          con la osteoporosis son las de cadera, muñeca y vértebras.
        </Paragraph>
        <Paragraph>
          La fractura de cadera es una de las complicaciones más temidas de la
          osteoporosis. Hasta hace unos años, se pensaba que estas fracturas se
          producían al caerse la persona. Hoy en día se sabe que no siempre es
          así: a veces la persona se cae porque al realizar un giro, el hueso es
          tan frágil que se rompe y entonces la persona se cae. En el caso de
          las fracturas de muñeca, ocurre casi siempre por una caída donde
          apoyamos la mano en el momento de caernos.
        </Paragraph>
        <Paragraph>
          Las vértebras son los huesos que componen la columna vertebral. Las
          fracturas vertebrales, en las personas mayores, no siempre se producen
          por caídas. A veces, por la propia fragilidad del hueso, y por el peso
          del cuerpo, las vértebras se aplastan, y eso produce dolores en la
          zona de la columna que se puede irradiar a otras partes del cuerpo y
          la estatura de la persona mayor puede disminuir con el tiempo por
          estos aplastamientos, esta dolencia se detecta cuando se realiza una
          radiografía de columna.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO PUEDO SABER SI TENGO OSTEOPOROSIS?</Subheading>
        <Paragraph>
          Hace unas décadas, la forma de evaluar la existencia de osteoporosis
          era a través de una radiografía convencional, pero para su detección,
          la enfermedad debía estar avanzada, aunque no hubiera fractura.
        </Paragraph>
        <Fig19 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Actualmente existe una prueba llamada densitometría ósea, que es una
          prueba que evalúa la densidad de nuestros huesos. Los lugares del
          cuerpo que más se evalúan son las caderas y la columna vertebral,
          aunque también es usual realizarla en las muñecas. La realización de
          esta prueba permite detectar la enfermedad desde su comienzo.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ HACER PARA EVITAR O DEMORAR LA APARICIÓN DE OSTEOPOROSIS?
        </Subheading>
        <Paragraph>
          En la práctica, la mayoría de las personas tendremos algún grado de
          osteoporosis, principalmente las mujeres, así que es muy difícil
          separar la prevención del tratamiento cuando ya la tenemos.
        </Paragraph>
        <Paragraph>
          Pero mientras más temprano comencemos estas medidas, más alejaremos su
          inicio, razón por lo cual se recomienda:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Dejar el hábito de fumar y reducir el consumo de alcohol </Bold>
          disminuye el riesgo de osteoporosis.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>
            Establecerse una dieta orientada a ingerir suficientes cantidades de
            calcio, vitamina D y fosfato
          </Bold>
          , principalmente los dos primeros. Las principales fuentes de calcio y
          vitamina D son los lácteos, las verduras y el pescado. Este último es
          especialmente rico en vitamina D. Las necesidades diarias rondan los 1
          000 –1 200 mg de calcio y las 800 unidades de vitamina D.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Realización de ejercicios físicos</Bold>, los cuales pueden ser
          de muchos tipos, de acuerdo a sus gustos y preferencias. Entre ellos
          está el caminar, ejercicios de fuerza o nadar. Siempre que vayamos a
          comenzar un régimen de ejercicios, debemos consultar a un médico para
          que nos diga hasta dónde podemos hacer sin peligro.
        </Paragraph>
        <Paragraph>
          También existen medicamentos para tratar la osteoporosis. Los más
          ampliamente usados son los llamados bifosfanatos. Los estrógenos
          fueron muy utilizados hace unos años pero se asoció su uso a ciertos
          tipos de cáncer, por lo que se utilizan menos en la actualidad.
        </Paragraph>
        <Paragraph>
          En resumen, una dieta adecuada en calcio y vitamina D y la práctica de
          hábitos saludables, como no fumar, consumo moderado de alcohol y la
          práctica de ejercicios físicos ayudan a retardar la aparición de
          osteoporosis y a prevenir las fracturas.
        </Paragraph>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>¿CÓMO EVITAR LA OSTEOPOROSIS?</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>PRACTICAR EJERCICIOS FÍSICOS</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>DIETA ADECUADA</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>NO FUMAR</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>NO BEBER</DataTable.Title>
          </DataTable.Header>
        </DataTable>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'15-1'}
          question={
            '1. La mejor forma de saber si tenemos osteoporosis o no, es realizarse:'
          }
          answers={[
            'Una “placa” de las caderas.',
            'Una densitometría ósea.',
            'Las dos son incorrectas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'15-2'}
          question={'2. La osteoporosis se produce por:'}
          answers={[
            'Disminución de la masa ósea.',
            'Por caernos y fracturarnos.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'15-3'}
          question={
            '3. Una de las mejores formas de prevenir la osteoporosis es:'
          }
          answers={[
            'Hacer ejercicios físicos.',
            'Tomar suplementos de calcio y vitamina D.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La osteoporosis no da síntomas. Los síntomas son producidos por las complicaciones de la enfermedad.',
            'Osteoporosis y artrosis no es lo mismo.',
            'Los pilares del tratamiento preventivo de la osteoporosis son no fumar, beber con moderación, el calcio de la dieta y hacer ejercicios.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Prostata')}>
          <Text>
            {
              'Me estoy levantando a orinar por la noche. ¿Tendré problemas en la próstata?'
            }
          </Text>
        </TouchableRipple>

        <Headline />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 12,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default Osteoporosis;
