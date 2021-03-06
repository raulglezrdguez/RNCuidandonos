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
          ??C??MO ANDAN MIS HUESOS? LA OSTEOPOROSIS
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>H</Bold>ace unas d??cadas se mencionaba la palabra osteoporosis
          solo cuando una persona se fracturaba un hueso, en especial la cadera,
          le realizaban una radiograf??a y el m??dico le dec??a:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Italic>
            __ Se??ora, usted tiene osteoporosis, y por la ca??da que tuvo el
            hueso no resisti?? y se parti??.
          </Italic>
        </Paragraph>
        <Paragraph>
          Con la llegada de nuevos equipos para diagnosticarla m??s temprano, m??s
          conocimiento sobre la enfermedad, formas de prevenirla, y medicamentos
          efectivos para la misma, la osteoporosis ha pasado a ser una
          enfermedad m??s conocida, m??s diagnosticada y mejor tratada.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          La osteoporosis es una enfermedad que se caracteriza por la
          descalcificaci??n de los huesos. Los huesos est??n en constante
          renovaci??n del tejido que los componen, llamado tejido ??seo.
          Normalmente se forma hueso y se pierde hueso, es decir, se renueva.
          Desde que nacemos hasta que llegamos a los 20???24 a??os, la formaci??n de
          hueso es mayor que la p??rdida del mismo: es la etapa de crecer.
          Despu??s de esa edad, el crecimiento se detiene, y se crea un
          equilibrio entre el hueso que se crea y el que se pierde. En esos
          a??os, es cuando alcanzamos nuestro m??ximo de masa ??sea, que se
          mantiene m??s o menos igual hasta la menopausia en la mujer y un poco
          m??s adelante en la vida en los hombres.
        </Paragraph>
        <Paragraph>
          A partir de ese momento, el equilibrio entre formaci??n y p??rdida de
          hueso se comienza a inclinar m??s a la p??rdida, produci??ndose lo que se
          conoce como osteopenia, que no es m??s que la p??rdida de masa ??sea
          relacionada con la edad, y es normal.
        </Paragraph>
        <Paragraph>
          Cuando esta osteopenia pasa de ciertos l??mites, es cuando se produce
          la osteoporosis. El mayor problema que trae la osteoporosis, es el
          aumento del riesgo de fractura, al haberse debilitado los huesos pues
          esta enfermedad aumenta la fragilidad de los mismos. La osteoporosis
          ocurre m??s frecuentemente en mujeres.
        </Paragraph>
        <Paragraph />
        <Subheading>??POR QU?? SE PUEDE PRODUCIR LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          La osteoporosis se produce cuando disminuye el calcio de los huesos.
          Esto ocurre cuando no consumimos suficiente calcio y fosfatos en la
          dieta o no se absorbe adecuadamente por alguna enfermedad u operaci??n
          en el aparato digestivo, o por el propio proceso de envejecimiento.
        </Paragraph>
        <Paragraph>
          La vitamina D es necesaria para que el calcio se pueda absorber en el
          intestino, as?? que si no consumimos alimentos que la contengan,
          tambi??n nuestros huesos se pueden descalcificar.
        </Paragraph>
        <Paragraph>
          Como explicamos anteriormente, a partir de la menopausia en las
          mujeres se comienza a perder calcio en los huesos, y esto ocurre por
          la disminuci??n de los estr??genos, que son unas hormonas que se
          producen en los ovarios, y en los hombres por disminuci??n de la
          testosterona, que es otra hormona que se produce en los test??culos.
        </Paragraph>
        <Paragraph>
          Hay medicamentos, como los esteroides y algunos que se usan para
          combatir el c??ncer, que pueden producir osteoporosis. La falta de
          actividad f??sica es una de las principales causas de que se acelere la
          descalcificaci??n de los huesos.
        </Paragraph>
        <Paragraph>
          Existen los llamados factores de riesgo para la osteoporosis, entre
          los que se destacan, adem??s de la poca actividad f??sica, alcoholismo,
          h??bito de fumar y ser muy delgado.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? S??NTOMAS DA LA OSTEOPOROSIS?</Subheading>
        <Paragraph>
          Normalmente, la osteoporosis no da s??ntomas. La osteoporosis como tal
          no produce dolor. Comienza a dar s??ntomas cuando tenemos fracturas o
          fisuras en los huesos. Las fracturas m??s frecuentemente relacionadas
          con la osteoporosis son las de cadera, mu??eca y v??rtebras.
        </Paragraph>
        <Paragraph>
          La fractura de cadera es una de las complicaciones m??s temidas de la
          osteoporosis. Hasta hace unos a??os, se pensaba que estas fracturas se
          produc??an al caerse la persona. Hoy en d??a se sabe que no siempre es
          as??: a veces la persona se cae porque al realizar un giro, el hueso es
          tan fr??gil que se rompe y entonces la persona se cae. En el caso de
          las fracturas de mu??eca, ocurre casi siempre por una ca??da donde
          apoyamos la mano en el momento de caernos.
        </Paragraph>
        <Paragraph>
          Las v??rtebras son los huesos que componen la columna vertebral. Las
          fracturas vertebrales, en las personas mayores, no siempre se producen
          por ca??das. A veces, por la propia fragilidad del hueso, y por el peso
          del cuerpo, las v??rtebras se aplastan, y eso produce dolores en la
          zona de la columna que se puede irradiar a otras partes del cuerpo y
          la estatura de la persona mayor puede disminuir con el tiempo por
          estos aplastamientos, esta dolencia se detecta cuando se realiza una
          radiograf??a de columna.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO PUEDO SABER SI TENGO OSTEOPOROSIS?</Subheading>
        <Paragraph>
          Hace unas d??cadas, la forma de evaluar la existencia de osteoporosis
          era a trav??s de una radiograf??a convencional, pero para su detecci??n,
          la enfermedad deb??a estar avanzada, aunque no hubiera fractura.
        </Paragraph>
        <Fig19 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Actualmente existe una prueba llamada densitometr??a ??sea, que es una
          prueba que eval??a la densidad de nuestros huesos. Los lugares del
          cuerpo que m??s se eval??an son las caderas y la columna vertebral,
          aunque tambi??n es usual realizarla en las mu??ecas. La realizaci??n de
          esta prueba permite detectar la enfermedad desde su comienzo.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? HACER PARA EVITAR O DEMORAR LA APARICI??N DE OSTEOPOROSIS?
        </Subheading>
        <Paragraph>
          En la pr??ctica, la mayor??a de las personas tendremos alg??n grado de
          osteoporosis, principalmente las mujeres, as?? que es muy dif??cil
          separar la prevenci??n del tratamiento cuando ya la tenemos.
        </Paragraph>
        <Paragraph>
          Pero mientras m??s temprano comencemos estas medidas, m??s alejaremos su
          inicio, raz??n por lo cual se recomienda:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Dejar el h??bito de fumar y reducir el consumo de alcohol </Bold>
          disminuye el riesgo de osteoporosis.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>
            Establecerse una dieta orientada a ingerir suficientes cantidades de
            calcio, vitamina D y fosfato
          </Bold>
          , principalmente los dos primeros. Las principales fuentes de calcio y
          vitamina D son los l??cteos, las verduras y el pescado. Este ??ltimo es
          especialmente rico en vitamina D. Las necesidades diarias rondan los 1
          000 ???1 200 mg de calcio y las 800 unidades de vitamina D.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Realizaci??n de ejercicios f??sicos</Bold>, los cuales pueden ser
          de muchos tipos, de acuerdo a sus gustos y preferencias. Entre ellos
          est?? el caminar, ejercicios de fuerza o nadar. Siempre que vayamos a
          comenzar un r??gimen de ejercicios, debemos consultar a un m??dico para
          que nos diga hasta d??nde podemos hacer sin peligro.
        </Paragraph>
        <Paragraph>
          Tambi??n existen medicamentos para tratar la osteoporosis. Los m??s
          ampliamente usados son los llamados bifosfanatos. Los estr??genos
          fueron muy utilizados hace unos a??os pero se asoci?? su uso a ciertos
          tipos de c??ncer, por lo que se utilizan menos en la actualidad.
        </Paragraph>
        <Paragraph>
          En resumen, una dieta adecuada en calcio y vitamina D y la pr??ctica de
          h??bitos saludables, como no fumar, consumo moderado de alcohol y la
          pr??ctica de ejercicios f??sicos ayudan a retardar la aparici??n de
          osteoporosis y a prevenir las fracturas.
        </Paragraph>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>??C??MO EVITAR LA OSTEOPOROSIS?</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>PRACTICAR EJERCICIOS F??SICOS</DataTable.Title>
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

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'15-1'}
          question={
            '1. La mejor forma de saber si tenemos osteoporosis o no, es realizarse:'
          }
          answers={[
            'Una ???placa??? de las caderas.',
            'Una densitometr??a ??sea.',
            'Las dos son incorrectas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'15-2'}
          question={'2. La osteoporosis se produce por:'}
          answers={[
            'Disminuci??n de la masa ??sea.',
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
            'Hacer ejercicios f??sicos.',
            'Tomar suplementos de calcio y vitamina D.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La osteoporosis no da s??ntomas. Los s??ntomas son producidos por las complicaciones de la enfermedad.',
            'Osteoporosis y artrosis no es lo mismo.',
            'Los pilares del tratamiento preventivo de la osteoporosis son no fumar, beber con moderaci??n, el calcio de la dieta y hacer ejercicios.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Prostata')}>
          <Text>
            {
              'Me estoy levantando a orinar por la noche. ??Tendr?? problemas en la pr??stata?'
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
