/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Chip,
  Headline,
  Text,
  Subheading,
  TouchableRipple,
  useTheme,
  Paragraph,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';
import Fig26 from '../components/Fig26';

const InsuficienciaRenal = ({navigation}) => {
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
      await AsyncStorage.setItem('@sInsuficienciaRenal', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sInsuficienciaRenal');
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
          onPress={() => navigate('Verano')}>
          <Text>{'En verano...¡Cuidado con el calor!'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          VIVIENDO CON INSUFICIENCIA RENAL
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l organismo humano produce desechos. Ellos circulan en
          la sangre, y los riñones los filtran para extraerlos y expulsarlos a
          través de la orina. Cuando los riñones fallan en esta función, aparece
          la insuficiencia renal crónica.
        </Paragraph>
        <Paragraph>
          La insuficiencia renal ha aumentado mucho en los últimos años, al
          vivir más años las personas, motivo por el cual cuando esta
          incapacidad comienza en la tercera edad, es necesario observar
          atentamente el comportamiento de determinados indicadores para
          potenciar un tratamiento adecuado.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES LA INSUFICIENCIA RENAL CRÓNICA?</Subheading>
        <Paragraph>
          Los riñones disminuyen normalmente su funcionamiento con el paso de
          los años. Se dice que después de los 60 años se pierde el 1% de las
          estructuras que funcionan como filtro en los riñones, llamadas
          nefronas. Nacemos con millones de ellas e incluso se puede vivir con
          un solo riñón, porque la reserva del riñón para funcionar es muy
          grande.
        </Paragraph>
        <Paragraph>
          Además de su función de excreción de desechos, los riñones tienen
          otras funciones: ayudan a controlar la presión de la sangre e
          intervienen en la producción de glóbulos rojos y en que ciertas
          sustancias llamadas electrolitos (por ejemplo sodio, potasio, cloro),
          muy importantes para la vida se mantengan en cantidades normales en el
          cuerpo. Por ello, la enfermedad renal crónica puede producir también
          descontrol de la presión arterial y anemia.
        </Paragraph>
        <Paragraph>
          La insuficiencia renal crónica no tiene cura y al igual que la
          diabetes o la presión alta, con tratamiento médico y cumpliendo las
          medidas de cuidado para este caso, podremos vivir muchos años.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PRODUCE LA INSUFICIENCIA RENAL CRÓNICA?</Subheading>
        <Paragraph>
          Las causas principales de insuficiencia renal son la diabetes y la
          presión alta. Pero en las personas mayores, también hay otras causas
          frecuentes. Existe un grupo de medicamentos que las personas de edad
          tomamos con frecuencia para los dolores de artrosis, que se llaman
          antinflamatorios no esteroideos, como por ejemplo naproxeno,
          ibuprofeno y diclofenaco, entre otros. Tomarlos durante años por los
          dolores articulares puede causar insuficiencia renal.
        </Paragraph>
        <Paragraph>
          Por otro lado, en los hombres mayores con frecuencia la próstata crece
          de tamaño, lo que dificulta la salida de orina. Esto repercute en los
          riñones, y con el tiempo, puede también ser causa de insuficiencia
          renal.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CUÁLES SON LOS SÍNTOMAS DE INSUFICIENCIA RENAL CRÓNICA?
        </Subheading>
        <Paragraph>
          La insuficiencia renal habitualmente evoluciona por años, con muy
          pocos síntomas y en ocasiones es detectada por un análisis de sangre
          llamado creatinina de manera fortuita.
        </Paragraph>
        <Paragraph>
          Los síntomas pueden ser debilidad, decaimiento, falta de apetito,
          retención de líquido que produce hinchazón de los pies y en los
          tobillos, así como palidez y cierta resequedad en la piel.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SÉ SI TENGO INSUFICIENCIA RENAL CRÓNICA?</Subheading>
        <Paragraph>
          Un análisis de orina para buscar proteínas en ellas puede dar positivo
          años antes de que se manifieste la enfermedad. La creatinina es un
          producto de desecho, que normalmente existe en la sangre pero que el
          riñón la elimina. Valores elevados de esta en sangre indican
          probablemente insuficiencia renal.
        </Paragraph>
        <Paragraph>
          La presión alta es una de las causas más frecuentes de insuficiencia
          renal, pero a su vez la insuficiencia renal sube la presión. Por ello
          la toma de presión es importante. También se realizan otras pruebas
          para saber el daño que tienen los riñones y la posible causa de la
          enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO PUEDO PREVENIR LA INSUFICIENCIA RENAL CRÓNICA?
        </Subheading>
        <Paragraph>
          Las personas que más riesgo tienen de padecer insuficiencia renal son
          las personas mayores de 65 años, los diabéticos y los hipertensos.
          Tomar medicamentos que dañan el riñón también aumenta el riesgo. Así
          que la prevención va encaminada a controlar la diabetes y la presión
          principalmente.
        </Paragraph>
        <Paragraph>
          La diabetes se controla con dieta y con medicamentos. Los diabéticos
          pueden comer de todo o casi todo, pero en cantidades moderadas. Las
          medicinas para la diabetes pueden ser pastillas, insulina o una
          combinación de ambas. Un buen control de la diabetes puede llegar a
          evitar la enfermedad renal o que esta no avance mucho.
        </Paragraph>
        <Paragraph>Lo mismo pasa con la presión arterial.</Paragraph>
        <Chip icon="information" onPress={() => navigate('PresionAlta')}>
          Revisar ¿Qué debo saber de la presión alta?
        </Chip>
        <Paragraph />
        <Subheading>¿CÓMO SE VIVE CON INSUFICIENCIA RENAL CRÓNICA?</Subheading>
        <Paragraph>
          La clave de vivir bien con insuficiencia renal está en:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Control de la presión.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Control de la diabetes si la tuviera.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Dieta.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Medicamentos que le indique su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Chequeos periódicos.
        </Paragraph>
        <Paragraph>
          De la presión y la diabetes ya hemos hablado anteriormente. Los
          medicamentos estarán en relación al control de la propia presión, para
          ayudar al riñón a que expulse mejor los productos de desecho y también
          se usa eritropoyetina para mejorar la anemia. El médico también puede
          indicarle suplementos de calcio, vitamina D y algo de hierro en
          algunas de sus formas para combatir la anemia.
        </Paragraph>
        <Paragraph>
          Hablemos ahora de la dieta. Es importante que el acto de comer no se
          convierta en un momento desagradable. Esto se logra seleccionando los
          alimentos y teniendo voluntad y disciplina.
        </Paragraph>
        <Fig26 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          La dieta le ayudará a tener una cantidad de líquidos, minerales y
          electrolitos en su cuerpo lo más cercana a lo normal. Los principales
          cambios son: beber menos líquidos, disminuir la sal de las comidas al
          mínimo, ingerir menos proteínas, disminuir los alimentos que tengan
          fósforo y potasio y lograr que las calorías sean suficiente para que
          no pierda mucho peso ni se engorde.
        </Paragraph>
        <Paragraph>
          Al inicio de la enfermedad, no tendrá que limitar los líquidos, pero
          si la enfermedad avanza o si está en diálisis, sí. El médico le
          indicará cómo.
        </Paragraph>
        <Paragraph>
          Las proteínas en exceso pueden aumentar la creatinina. Por ello debe
          limitarlas a dos porciones pequeñas al día. Si puede hacer el cálculo,
          por cada kilogramo de peso debe ingerir 1 gramo de proteína al día. Su
          médico lo ayudará con esto.
        </Paragraph>
        <Paragraph>
          Si no es diabético, los carbohidratos son la principal fuente de
          energía en la dieta que debe hacer. Los puede obtener de los frijoles,
          panes, frutas, un poco de dulces. Si es diabético, hay alimentos que
          le estarán limitados y debe entonces consumir los carbohidratos lo
          menos refinados posible. Con respecto a las grasas, deben ser
          preferiblemente aceites.
        </Paragraph>
        <Paragraph>
          El potasio puede subir mucho por la enfermedad, en ese caso deberá
          limitar cítricos, plátanos, ciruelas y las frutas deshidratadas.
          También evite o limite la espinaca, tomates, pimientos y aguacate.
          Todo lo anterior su médico le indicará cómo hacerlo.
        </Paragraph>
        <Paragraph>
          Si la enfermedad avanza, será necesario diálisis. La diálisis es un
          proceder para extraer las impurezas de su sangre. Actualmente las
          personas con insuficiencia renal crónica pueden vivir muchos años.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'22-1'}
          question={'1. La insuficiencia renal crónica se puede producir por:'}
          answers={[
            'Tener presión alta o diabetes.',
            'Tomar mucho ibuprofeno.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'22-2'}
          question={'2. Se puede prevenir la insuficiencia renal crónica si:'}
          answers={[
            'Soy una persona hipertensa o diabética, estar bien controlada.',
            'No abuso de la sal.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'22-3'}
          question={
            '3. Una buena dieta, si tengo enfermedad renal crónica puede ser:'
          }
          answers={[
            'Disminuir la sal de las comidas.',
            'La sal no es importante limitarla, pero sí las proteínas.',
            'La dieta no ayuda a que la enfermedad no avance.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'No abusar del ibuprofeno, diclofenaco, indometacina o piroxicam.',
            'La diabetes y la presión alta mal controladas son la principal causa de insuficiencia renal crónica.',
            'Tener infección en los riñones no es lo mismo que padecer de insuficiencia renal.',
            'Si padecemos de insuficiencia renal, se puede llevar una vida casi normal si tomamos ciertas medidas.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Colesterol')}>
          <Text>{'Tengo el colesterol alto... ¿Y ahora qué hago?'}</Text>
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

export default InsuficienciaRenal;
