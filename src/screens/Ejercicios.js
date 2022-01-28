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
import Fig21 from '../components/Fig21';
import Fig22 from '../components/Fig22';

const Ejercicios = ({navigation}) => {
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
      await AsyncStorage.setItem('@sEjercicios', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sEjercicios');
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
          onPress={() => navigate('Prostata')}>
          <Text>
            {
              'Me estoy levantando a orinar por la noche. ¿Tendré problemas en la próstata?'
            }
          </Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿YO PUEDO HACER EJERCICIOS FÍSICOS?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>N</Bold>o hay otra forma de ver la vida que mirando hacia
          adelante, y hacia adelante está el envejecimiento. Por ello, debemos
          pensar en cómo vivir con la mejor salud posible, y para tener parte de
          esta salud que todos anhelamos tener, los ejercicios juegan un papel
          fundamental.
        </Paragraph>
        <Paragraph>
          Una conducta sedentaria actúa como un factor de riesgo para tener
          discapacidad y dependencia, lo cual conlleva a no tener la buena salud
          que deseamos. Esto genera un círculo vicioso, pues el tener mala salud
          favorece hábitos de vida poco activos, que a su vez generan una salud
          más pobre.
        </Paragraph>
        <Paragraph>La actividad física y los ejercicios:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Retrasan el declinar del funcionamiento del cuerpo, lo
          que nos permite seguir realizando las actividades del diario vivir por
          más tiempo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Previenen, frenan o logran mejorar muchas de las
          llamadas enfermedades crónicas que son comunes en las personas
          mayores.
        </Paragraph>
        <Paragraph>
          Debemos distinguir entre actividad física y ejercicios. La primera se
          produce por el funcionamiento de los músculos que ponen en movimiento
          nuestro cuerpo. Son ejemplos de ellas el trabajo, las labores
          domésticas o el baile.
        </Paragraph>
        <Paragraph>
          Los ejercicios como tal son una manera de realizar actividad física
          pero de forma planificada, con un objetivo, de manera repetitiva, para
          mejorar o mantener una buena salud.
        </Paragraph>
        <Fig21 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>¿POR QUÉ DEBEMOS HACER EJERCICIOS?</Subheading>
        <Paragraph>
          La práctica de ejercicios de manera regular es importante para el
          cuerpo y para la mente, y esto es válido tanto para los niños como
          para las personas mayores.
        </Paragraph>
        <Paragraph>
          Permanecer activos desde el punto de vista físico nos permite
          continuar haciendo las cosas que nos dan placer y tener autonomía con
          el paso de los años por lo que la práctica de ejercicios puede mejorar
          el envejecimiento biológico.
        </Paragraph>
        <Paragraph>
          Llevar una vida sedentaria provoca cambios acelerados parecidos a los
          que ocurre con el paso de los años y puede favorecer la aparición o
          empeoramiento de algunas enfermedades como la diabetes, la presión
          alta o padecer del corazón. De hecho, los ejercicios físicos pueden
          ser parte del tratamiento de algunas de estas enfermedades.
        </Paragraph>
        <Paragraph>
          La práctica de ejercicios trae un grupo de ventajas,
          independientemente de la edad que tengamos, las cuales se relacionan a
          continuación:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuyen la pérdida de masa muscular que ocurre con
          el envejecimiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Reducen el riesgo de enfermedades del corazón.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contribuyen al fortalecimiento de los huesos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Limitan el riesgo de diabetes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contrarrestan la obesidad, depresión, ansiedad, presión
          alta y otras enfermedades.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mejoran la actividad mental.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contribuyen a la autonomía y el desempeño físico de las
          personas.
        </Paragraph>
        <Paragraph>
          Todo esto lo logramos si nos mantenemos en buena forma física, lo que
          equivale a realizar ejercicios o alguna actividad ligera o moderada
          sin tener un gran cansancio.
        </Paragraph>
        <Paragraph />
        <Subheading>
          CUANDO VOY A COMENZAR UN PROGRAMA DE EJERCICIOS...
        </Subheading>
        <Paragraph>
          Aunque las enfermedades crónicas aumentan con la edad, la mayoría de
          las personas mayores no tienen enfermedades que los limiten a realizar
          actividades físicas ligeras o moderadas.
        </Paragraph>
        <Paragraph>
          La edad no impide que realicemos actividades físicas. No obstante,
          siempre que vaya a iniciar la práctica de ejercicios físicos, consulte
          con su médico qué puede hacer y con qué intensidad. Debe decirle las
          enfermedades que padece, principalmente si padece de artrosis,
          diabetes y enfermedades del corazón, los medicamentos que usted toma,
          si fuma, y si ha realizado ejercicios físicos con anterioridad.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ TIPO DE EJERCICIO PUEDO HACER?</Subheading>
        <Paragraph>
          Los ejercicios pueden ser de diversos tipos, pero una forma cómoda de
          darnos cuenta de sus beneficios es clasificarlos en ejercicios
          cardiovasculares, de flexibilidad, para el equilibrio y de
          fortalecimiento de los músculos.
        </Paragraph>
        <Fig22 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Cualquier tipo de ejercicios debe comenzar con un calentamiento de
          cinco a diez minutos, y al finalizar los mismos tenga tiempo de
          descanso. Finalice su programa de ejercicio con un período de
          relajación de cinco a diez minutos.
        </Paragraph>
        <Paragraph>
          Los cardiovasculares se conocen también como ejercicios aeróbicos. Los
          ejemplos más típicos son caminar, montar bicicleta y nadar. Se llaman
          así porque el organismo usa para realizarlos mucho oxígeno y son muy
          buenos para el corazón y los pulmones. Son aquellos que nos aumentan
          la frecuencia cardiaca y nos hacen sudar un poco. Unos 30 minutos al
          menos cuatro o cinco días a la semana nos permitirá estar en buena
          forma física, pero si quisiéramos bajar de peso, debemos hacerlos por
          más tiempo o más días, siempre acompañados de una dieta
          preferiblemente baja en calorías. Un entrenador nos puede aconsejar
          hasta donde puede subir su frecuencia cardíaca sin que haya peligros.
        </Paragraph>
        <Paragraph>
          Los ejercicios de flexibilidad, como su nombre lo indica, ayudan
          mediante el estiramiento de los músculos y las articulaciones a
          prevenir enfermedades en ellos y a disminuir el dolor muscular y
          articular. Estos ejercicios se hacen por grupos musculares y por
          espacio de 15 a 20 segundos. No estire muchos los músculos, se puede
          lastimar.
        </Paragraph>
        <Paragraph>
          Los ejercicios para el equilibrio son para prevenir las caídas,
          brindándonos un mejor balance del cuerpo cuando estamos parados o en
          movimiento. Muchos de estos ejercicios fortifican el cuerpo de la
          cintura para abajo. Se logra realizando, entre otros, Tai–Chi,
          bailando, parándonos en un solo pie (con cuidado de no caernos).
        </Paragraph>
        <Paragraph>
          Y los ejercicios de fortalecimiento, como también indica su nombre,
          son para fortificar los músculos. Habitualmente se realizan con pesas
          u otro objeto que pese, como un pomo de agua lleno de arena. Lo ideal
          es realizarlos dos a cuatro veces por semana. El peso debe ser cómodo
          para usted así como realizar las repeticiones que no le produzcan
          cansancio extremo en el grupo muscular que ejercita.
        </Paragraph>
        <Paragraph>
          Es muy importante lograr que la práctica de ejercicios sea incorporada
          a la rutina diaria. Hagámonos la idea que el día tiene una hora menos
          y esa hora sobrante se la dedicamos a nuestro cuerpo.
        </Paragraph>
        <Paragraph>
          Existen formas de agregar actividad física a nuestro día a día. Por
          ejemplo, utilizando las escaleras en vez de los elevadores o
          quedándonos en una parada antes del lugar a donde vamos.
        </Paragraph>
        <Paragraph>
          Los gimnasios están de moda. Si decide asistir a alguno, trate de
          elegir un instructor de su agrado y que esté certificado.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ HAGO PARA EVITAR LASTIMARME?</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El calentamiento antes de comenzar los ejercicios es
          muy importante.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Use zapatos cómodos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No realice ejercicios recién haber ingerido grandes
          comidas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tome bastante agua, principalmente en verano. Tenga
          cuidado con el sol si realiza los ejercicios al aire libre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si presenta molestias, consulte a su entrenador o a una
          persona experimentada en la realización de estas actividades.
        </Paragraph>
        <Paragraph />
        <Subheading>POR ÚLTIMO...</Subheading>
        <Paragraph>
          Hacer una dieta balanceada e ingerir las suficientes cantidades de
          líquidos nos ayudarán a mantenernos saludable junto a la realización
          de actividades físicas. No hace falta convertirnos en atletas, lo que
          queremos es lograr una buena salud.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'17-1'}
          question={'1. La actividad física y los ejercicios:'}
          answers={[
            'Retrasan el declinar propio del envejecimiento.',
            'Mejoran enfermedades como la presión alta o la diabetes.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'17-2'}
          question={
            '2. Dentro de las ventajas de la práctica de ejercicios está el aumento de:'
          }
          answers={[
            'La masa muscular.',
            'El pelo de la cabeza.',
            'Las dos son correctas.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'17-3'}
          question={'3. Si no practicamos ejercicios físicos nos puede pasar:'}
          answers={[
            'Que tengamos menos vigor para hacer las cosas.',
            'Que subamos demasiado de peso.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Los ejercicios más comunes son los aeróbicos, de flexibilidad, para el equilibrio y para fortalecer los músculos.',
            'La práctica de ejercicios es buena aunque se comience en la tercera edad.',
            'Hacer ejercicios aunque sean pocos, es mejor que no hacer ninguno.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Alimentarnos')}>
          <Text>{'Estoy durmiendo mal...'}</Text>
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

export default Ejercicios;
