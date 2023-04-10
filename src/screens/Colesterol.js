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
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';

const Colesterol = ({navigation}) => {
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
      await AsyncStorage.setItem('@sColesterol', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sColesterol');
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
          onPress={() => navigate('InsuficienciaRenal')}>
          <Text>{'Viviendo con insuficiencia renal'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          TENGO EL COLESTEROL ALTO... ¿Y AHORA QUÉ HAGO?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>as enfermedades del corazón y cerebro vasculares son dos
          de las principales causas de muerte en las personas de edad. Detrás de
          ellas dos hay varios factores de riesgo, es decir, que facilitan que
          se produzcan. Uno de ellos es la aterosclerosis, la que está muy
          ligada al colesterol.
        </Paragraph>
        <Paragraph>
          Se sabe que reduciendo el colesterol en exceso en sangre se disminuye
          la posibilidad de padecer del corazón o de tener un ictus. El
          colesterol es un tipo de grasa que hay en la sangre que es necesaria
          en la formación de ciertas células, principalmente para las membranas
          celulares, y para la producción de algunas hormonas.
        </Paragraph>
        <Paragraph>
          Normalmente el hígado produce el que se necesita. La principal causa
          de colesterol elevado es la grasa que contienen los alimentos o la
          grasa con la que los cocinamos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁNTO COLESTEROL DEBO TENER?</Subheading>
        <Paragraph>
          Existen varios tipos de colesterol: el total, el “bueno” y el “malo”.
          Pues sí, hay un colesterol bueno, y debe conocer que el colesterol
          circula en la sangre unido a otras sustancias que se llaman
          lipoproteínas. Las lipoproteínas de baja densidad son las malas, y las
          lipoproteínas de alta densidad son las buenas. Cuando se habla de
          buena quiere decir que no aumenta el riesgo de enfermedades del
          corazón ni del cerebro. La suma de las dos es el colesterol total.
        </Paragraph>
        <Paragraph>
          También existe otra grasa circulando en sangre que se llama
          triglicéridos. Su exceso es dañino también y aumenta cuando se come en
          exceso azúcares y alimentos con harina de trigo.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ SON LAS GRASAS MONOINSATURADAS, TRANS, POLINSATURDAS Y SATURADAS?
        </Subheading>
        <Paragraph>
          A continuación veremos qué alimentos contienen cada una de ellas.
          Cuando decimos que algunas de ellas son buenas, nos referimos que son
          menos malas que las otras, pero igual nos hacen daño si las ingerimos
          en exceso.
        </Paragraph>
        <Paragraph>
          Las monoinsaturadas son grasas buenas. Su principal exponente es el
          aceite de oliva. Forman parte de una dieta sana.
        </Paragraph>
        <Paragraph>
          Las grasas trans se utilizan en los alimentos comerciales y para
          cocinar en algunos restaurantes y en comida rápida. La leche, sus
          derivados y las carnes también la contienen. Son perjudiciales para la
          salud.
        </Paragraph>
        <Paragraph>
          Las poliinsaturadas son también buenas. Abundan en los pescados como
          el atún y salmón.
        </Paragraph>
        <Paragraph>
          Las saturadas se encuentran también en las grasas animales como la
          manteca y en algunos aceites como el de palma o coco. Son muy
          perjudiciales.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO PUEDO MEJORAR MIS NIVELES DE GRASA EN SANGRE?
        </Subheading>
        <Paragraph>
          Hay varias formas de disminuir el colesterol en sangre o mantenerlo “a
          raya”. Se debe mantener control sobre el colesterol y los
          triglicéridos. Para lograrlo, los pilares son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Consumir una alimentación saludable.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Bajar de peso (si tiene sobrepeso).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si fuma, suprimir el cigarro.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Hacer ejercicios.
        </Paragraph>
        <Paragraph>
          La dieta es esencial. Para tener los triglicéridos normales se
          recomienda ingerir pocos hidratos de carbono (azúcar, refrescos,
          dulces y panes en exceso).
        </Paragraph>
        <Paragraph>
          Durante muchos años se ha hablado mucho del daño de las grasas y poco
          del daño del exceso de azúcares. Actualmente se sabe que estos pueden
          ser tan dañinos como las grasas. En general, si se come muchos
          hidratos de carbono, estos terminan siendo transformados en grasa por
          el hígado.
        </Paragraph>
        <Paragraph />
        <Subheading>SUGERENCIAS PARA COMER MÁS SANO</Subheading>
        <Paragraph>
          Todas las personas deben comer lo más sano posible. Pero si tienen
          sobrepeso o padecen de diabetes, es más importante, porque tienen
          mayor riesgo de padecer del corazón o ictus.
        </Paragraph>
        <Paragraph>Algunos consejos para comer más sano:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Coma porciones de carne roja pequeñas y con poco
          contenido en grasa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Use poca grasa para cocinar, y cuando lo haga utilice
          preferentemente aceite de oliva. Disminuya los alimentos fritos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Coma la menor cantidad de comida rápida.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Hay formas saludables de cocinar los alimentos: a la
          parrilla, a la plancha o al horno.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Ingiera abundante cantidad de vegetales y de alimentos
          que contengan fibra (legumbres, alimentos integrales).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Coma frutas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Use aderezos y salsas bajos en calorías.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Revise las etiquetas de los alimentos y evite los que
          contengan grasas hidrogenadas o trans.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Ingiera leche o derivados de la leche{' '}
          <Bold>con bajo contenido de grasa</Bold>.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Puede comer dulces, pero no se exceda.
        </Paragraph>
        <Paragraph />
        <Subheading>ACTIVIDAD FÍSICA</Subheading>
        <Paragraph>
          La actividad física es muy importante para reducir los niveles de
          grasas en sangre. Tiene múltiples beneficios. Para que le orienten la
          mejor forma de hacer ejercicios o algún tipo de actividad física,
          consulte a un fisioterapeuta o entrenador. La edad no impide que se
          puedan realizar.
        </Paragraph>
        <Paragraph />
        <Subheading>HÁBITO DE FUMAR</Subheading>
        <Paragraph>
          El hábito de fumar sube el colesterol malo y disminuye el bueno,
          además de otros daños que produce. Se sabe que cuando se logra
          abandonar el hábito, se ven beneficios a las pocas semanas, tenga la
          edad que tenga y haya fumado el tiempo que sea. Muchas veces es
          difícil dejar de fumar, pero merece la pena. Acuda a su médico para
          que le indique la mejor forma de abandonar el hábito.
        </Paragraph>
        <Paragraph />
        <Subheading>MEDICINAS PARA BAJAR EL COLESTEROL</Subheading>
        <Paragraph>
          A veces es necesario tomar medicamentos para bajar el colesterol.
          Existen varias medicinas para bajar el colesterol malo y los
          triglicéridos. La selección dependerá principalmente de las reacciones
          adversas que puedan producir en usted.
        </Paragraph>
        <Paragraph>
          El hecho de que tome medicamentos no quiere decir que debe abandonar
          la práctica de ejercicios físicos y de tener una dieta saludable.
          Estos tienen otros beneficios además de bajar el colesterol.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CADA QUÉ TIEMPO DEBO REVISAR MIS GRASAS EN SANGRE?
        </Subheading>
        <Paragraph>
          Se sugiere que todas las personas deben revisarse su colesterol cada
          cinco años aunque lo tengan normal. Si usted tiene factores de riesgo
          de enfermedad del corazón o ictus, es posible que necesite revisarlos
          con más frecuencia. Su médico le indicará cada qué tiempo debe
          chequearlo.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'23-1'}
          question={
            '1. Las grasas saturadas son dañinas para la salud y se encuentran en:'
          }
          answers={[
            'Pescados.',
            'Aceite de palma o de coco.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'23-2'}
          question={'2. Se puede ayudar a controlar las grasas en sangre si:'}
          answers={[
            'Comer bajo de sal.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores son factores protectores.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'23-3'}
          question={'3. Una buena dieta para mantener normal el colesterol es:'}
          answers={[
            'Comer frito una o dos veces por semana nada más.',
            'Comer o tomar pocas cosas dulces.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Para tener a raya el colesterol debo: consumir una alimentación saludable, bajar de peso (si tiene sobrepeso), suprimir el cigarro y hacer ejercicios.',
            'El exceso de azúcar es tan malo para el colesterol como la grasa.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Bronquitis')}>
          <Text>{'Viviendo con bronquitis crónica o enfisema'}</Text>
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

export default Colesterol;
