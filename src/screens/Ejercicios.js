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
              'Me estoy levantando a orinar por la noche. ??Tendr?? problemas en la pr??stata?'
            }
          </Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ??YO PUEDO HACER EJERCICIOS F??SICOS?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>N</Bold>o hay otra forma de ver la vida que mirando hacia
          adelante, y hacia adelante est?? el envejecimiento. Por ello, debemos
          pensar en c??mo vivir con la mejor salud posible, y para tener parte de
          esta salud que todos anhelamos tener, los ejercicios juegan un papel
          fundamental.
        </Paragraph>
        <Paragraph>
          Una conducta sedentaria act??a como un factor de riesgo para tener
          discapacidad y dependencia, lo cual conlleva a no tener la buena salud
          que deseamos. Esto genera un c??rculo vicioso, pues el tener mala salud
          favorece h??bitos de vida poco activos, que a su vez generan una salud
          m??s pobre.
        </Paragraph>
        <Paragraph>La actividad f??sica y los ejercicios:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Retrasan el declinar del funcionamiento del cuerpo, lo
          que nos permite seguir realizando las actividades del diario vivir por
          m??s tiempo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Previenen, frenan o logran mejorar muchas de las
          llamadas enfermedades cr??nicas que son comunes en las personas
          mayores.
        </Paragraph>
        <Paragraph>
          Debemos distinguir entre actividad f??sica y ejercicios. La primera se
          produce por el funcionamiento de los m??sculos que ponen en movimiento
          nuestro cuerpo. Son ejemplos de ellas el trabajo, las labores
          dom??sticas o el baile.
        </Paragraph>
        <Paragraph>
          Los ejercicios como tal son una manera de realizar actividad f??sica
          pero de forma planificada, con un objetivo, de manera repetitiva, para
          mejorar o mantener una buena salud.
        </Paragraph>
        <Fig21 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>??POR QU?? DEBEMOS HACER EJERCICIOS?</Subheading>
        <Paragraph>
          La pr??ctica de ejercicios de manera regular es importante para el
          cuerpo y para la mente, y esto es v??lido tanto para los ni??os como
          para las personas mayores.
        </Paragraph>
        <Paragraph>
          Permanecer activos desde el punto de vista f??sico nos permite
          continuar haciendo las cosas que nos dan placer y tener autonom??a con
          el paso de los a??os por lo que la pr??ctica de ejercicios puede mejorar
          el envejecimiento biol??gico.
        </Paragraph>
        <Paragraph>
          Llevar una vida sedentaria provoca cambios acelerados parecidos a los
          que ocurre con el paso de los a??os y puede favorecer la aparici??n o
          empeoramiento de algunas enfermedades como la diabetes, la presi??n
          alta o padecer del coraz??n. De hecho, los ejercicios f??sicos pueden
          ser parte del tratamiento de algunas de estas enfermedades.
        </Paragraph>
        <Paragraph>
          La pr??ctica de ejercicios trae un grupo de ventajas,
          independientemente de la edad que tengamos, las cuales se relacionan a
          continuaci??n:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Disminuyen la p??rdida de masa muscular que ocurre con
          el envejecimiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Reducen el riesgo de enfermedades del coraz??n.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contribuyen al fortalecimiento de los huesos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Limitan el riesgo de diabetes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contrarrestan la obesidad, depresi??n, ansiedad, presi??n
          alta y otras enfermedades.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mejoran la actividad mental.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Contribuyen a la autonom??a y el desempe??o f??sico de las
          personas.
        </Paragraph>
        <Paragraph>
          Todo esto lo logramos si nos mantenemos en buena forma f??sica, lo que
          equivale a realizar ejercicios o alguna actividad ligera o moderada
          sin tener un gran cansancio.
        </Paragraph>
        <Paragraph />
        <Subheading>
          CUANDO VOY A COMENZAR UN PROGRAMA DE EJERCICIOS...
        </Subheading>
        <Paragraph>
          Aunque las enfermedades cr??nicas aumentan con la edad, la mayor??a de
          las personas mayores no tienen enfermedades que los limiten a realizar
          actividades f??sicas ligeras o moderadas.
        </Paragraph>
        <Paragraph>
          La edad no impide que realicemos actividades f??sicas. No obstante,
          siempre que vaya a iniciar la pr??ctica de ejercicios f??sicos, consulte
          con su m??dico qu?? puede hacer y con qu?? intensidad. Debe decirle las
          enfermedades que padece, principalmente si padece de artrosis,
          diabetes y enfermedades del coraz??n, los medicamentos que usted toma,
          si fuma, y si ha realizado ejercicios f??sicos con anterioridad.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? TIPO DE EJERCICIO PUEDO HACER?</Subheading>
        <Paragraph>
          Los ejercicios pueden ser de diversos tipos, pero una forma c??moda de
          darnos cuenta de sus beneficios es clasificarlos en ejercicios
          cardiovasculares, de flexibilidad, para el equilibrio y de
          fortalecimiento de los m??sculos.
        </Paragraph>
        <Fig22 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Cualquier tipo de ejercicios debe comenzar con un calentamiento de
          cinco a diez minutos, y al finalizar los mismos tenga tiempo de
          descanso. Finalice su programa de ejercicio con un per??odo de
          relajaci??n de cinco a diez minutos.
        </Paragraph>
        <Paragraph>
          Los cardiovasculares se conocen tambi??n como ejercicios aer??bicos. Los
          ejemplos m??s t??picos son caminar, montar bicicleta y nadar. Se llaman
          as?? porque el organismo usa para realizarlos mucho ox??geno y son muy
          buenos para el coraz??n y los pulmones. Son aquellos que nos aumentan
          la frecuencia cardiaca y nos hacen sudar un poco. Unos 30 minutos al
          menos cuatro o cinco d??as a la semana nos permitir?? estar en buena
          forma f??sica, pero si quisi??ramos bajar de peso, debemos hacerlos por
          m??s tiempo o m??s d??as, siempre acompa??ados de una dieta
          preferiblemente baja en calor??as. Un entrenador nos puede aconsejar
          hasta donde puede subir su frecuencia card??aca sin que haya peligros.
        </Paragraph>
        <Paragraph>
          Los ejercicios de flexibilidad, como su nombre lo indica, ayudan
          mediante el estiramiento de los m??sculos y las articulaciones a
          prevenir enfermedades en ellos y a disminuir el dolor muscular y
          articular. Estos ejercicios se hacen por grupos musculares y por
          espacio de 15 a 20 segundos. No estire muchos los m??sculos, se puede
          lastimar.
        </Paragraph>
        <Paragraph>
          Los ejercicios para el equilibrio son para prevenir las ca??das,
          brind??ndonos un mejor balance del cuerpo cuando estamos parados o en
          movimiento. Muchos de estos ejercicios fortifican el cuerpo de la
          cintura para abajo. Se logra realizando, entre otros, Tai???Chi,
          bailando, par??ndonos en un solo pie (con cuidado de no caernos).
        </Paragraph>
        <Paragraph>
          Y los ejercicios de fortalecimiento, como tambi??n indica su nombre,
          son para fortificar los m??sculos. Habitualmente se realizan con pesas
          u otro objeto que pese, como un pomo de agua lleno de arena. Lo ideal
          es realizarlos dos a cuatro veces por semana. El peso debe ser c??modo
          para usted as?? como realizar las repeticiones que no le produzcan
          cansancio extremo en el grupo muscular que ejercita.
        </Paragraph>
        <Paragraph>
          Es muy importante lograr que la pr??ctica de ejercicios sea incorporada
          a la rutina diaria. Hag??monos la idea que el d??a tiene una hora menos
          y esa hora sobrante se la dedicamos a nuestro cuerpo.
        </Paragraph>
        <Paragraph>
          Existen formas de agregar actividad f??sica a nuestro d??a a d??a. Por
          ejemplo, utilizando las escaleras en vez de los elevadores o
          qued??ndonos en una parada antes del lugar a donde vamos.
        </Paragraph>
        <Paragraph>
          Los gimnasios est??n de moda. Si decide asistir a alguno, trate de
          elegir un instructor de su agrado y que est?? certificado.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? HAGO PARA EVITAR LASTIMARME?</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El calentamiento antes de comenzar los ejercicios es
          muy importante.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Use zapatos c??modos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No realice ejercicios reci??n haber ingerido grandes
          comidas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tome bastante agua, principalmente en verano. Tenga
          cuidado con el sol si realiza los ejercicios al aire libre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si presenta molestias, consulte a su entrenador o a una
          persona experimentada en la realizaci??n de estas actividades.
        </Paragraph>
        <Paragraph />
        <Subheading>POR ??LTIMO...</Subheading>
        <Paragraph>
          Hacer una dieta balanceada e ingerir las suficientes cantidades de
          l??quidos nos ayudar??n a mantenernos saludable junto a la realizaci??n
          de actividades f??sicas. No hace falta convertirnos en atletas, lo que
          queremos es lograr una buena salud.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'17-1'}
          question={'1. La actividad f??sica y los ejercicios:'}
          answers={[
            'Retrasan el declinar propio del envejecimiento.',
            'Mejoran enfermedades como la presi??n alta o la diabetes.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'17-2'}
          question={
            '2. Dentro de las ventajas de la pr??ctica de ejercicios est?? el aumento de:'
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
          question={'3. Si no practicamos ejercicios f??sicos nos puede pasar:'}
          answers={[
            'Que tengamos menos vigor para hacer las cosas.',
            'Que subamos demasiado de peso.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Los ejercicios m??s comunes son los aer??bicos, de flexibilidad, para el equilibrio y para fortalecer los m??sculos.',
            'La pr??ctica de ejercicios es buena aunque se comience en la tercera edad.',
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
