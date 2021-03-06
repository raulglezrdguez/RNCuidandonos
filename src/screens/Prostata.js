/* eslint-disable prettier/prettier */
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
import Fig20 from '../components/Fig20';

const Prostata = ({navigation}) => {
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
      await AsyncStorage.setItem('@sProstata', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sProstata');
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
          onPress={() => navigate('Osteoporosis')}>
          <Text>{'??C??mo andan mis huesos? La osteoporosis'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ME ESTOY LEVANTANDO A ORINAR POR LA NOCHE. ??TENDR?? PROBLEMAS EN LA
          PR??STATA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a pr??stata forma parte del aparato de reproducci??n de
          los hombres y es una gl??ndula peque??a que se encuentra en la base de
          la vejiga. Por su interior pasa el conducto que une la vejiga con el
          exterior para poder orinar, que se llama uretra, que tambi??n atraviesa
          al pene. La pr??stata favorece la producci??n del semen en cuyo interior
          van los espermatozoides que vienen de los test??culos y son los
          encargados de fecundar al ??vulo para formar una nueva vida.
        </Paragraph>
        <Paragraph>
          Es normal que cuando envejecemos la pr??stata se agrande, pero si se
          agranda demasiado entonces padeceremos lo que se conoce como
          Hiperplasia Benigna de Pr??stata (HBP).
        </Paragraph>
        <Paragraph>
          Casi todos los hombres la padeceremos, la HBP no es un precursor de
          c??ncer de pr??stata. El agrandamiento de la pr??stata comienza despu??s
          de los 50???55 a??os, aunque algunas personas le comienza a los 40 y
          tantos a??os. Y otros tienen los primeros s??ntomas despu??s de los 65
          a??os.
        </Paragraph>
        <Paragraph>
          Cuando la pr??stata comienza a crecer, el tramo de la uretra que pasa
          por dentro de ella atraves??ndola se empieza a comprimir y esto trae
          problemas para orinar. Aunque casi siempre mientras mayor sea la
          pr??stata, mayores s??ntomas habr??, pero no siempre es as??. Hay
          pr??statas que han crecido mucho y dan pocos s??ntomas, y otras que con
          un crecimiento peque??o ya dan muchas molestias.
        </Paragraph>
        <Paragraph>
          Aunque la HBP es la causa m??s frecuente de crecimiento prost??tico,
          existen otras causas que las pueden hacer crecer, como son el c??ncer
          de pr??stata y las prostatitis o inflamaci??n de la pr??stata. Haremos
          hincapi?? en la HBP y en c??ncer de pr??stata.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO SABER SI TENGO PROBLEMAS EN LA PR??STATA?</Subheading>
        <Paragraph>
          Casi siempre el primer s??ntoma que aparece de HBP es que comenzamos a
          levantarnos con deseos de orinar por la noche. Es normal a cualquier
          edad que si tomamos mucho l??quido en la tarde???noche, nos levantemos
          quiz??s una vez a evacuar la orina. Pero ahora estamos hablando de otra
          cosa. Comenzamos levant??ndonos una vez, despu??s dos, y si alguien nos
          pregunta a veces no le damos importancia o lo damos como normal.
          Realmente no es normal levantarse dos o tres veces en la noche a
          orinar. Esto puede aumentar, ser muchas veces y llegar a ser causa de
          insomnio.
        </Paragraph>
        <Paragraph>
          Estos deseos aumentados de orinar tambi??n ocurren durante el d??a, y a
          veces nos limitan para hacer salidas largas a lugares donde un ba??o no
          est?? siempre a mano.
        </Paragraph>
        <Paragraph>
          Tambi??n llama la atenci??n que podemos tener muchos deseos de orinar y
          cuando vamos al ba??o orinamos poco. Otro s??ntoma que aparece es la
          urgencia, es decir, que sentimos que si no vamos al ba??o, nos
          orinaremos encima. Y es verdad que puede pasar.
        </Paragraph>
        <Paragraph>
          Tambi??n ocurre que el chorro es m??s d??bil que unos a??os atr??s, y puede
          ser en tipo ???regadera???, es decir, no es un solo chorro sino que se
          divide en dos o tres.
        </Paragraph>
        <Paragraph>
          Y cuando terminamos de orinar, nos quedamos goteando un poco, y
          debemos permanecer m??s tiempo en el ba??o antes de salir, para evitar
          que esas gotas vayan a los pantalones y lo mojen. Esto puede traernos
          limitaciones sociales y son los principales s??ntomas que nos pueden
          hacer sospechar que tenemos la pr??stata agrandada. Ante la aparici??n
          de cualquiera de ellos, debemos acudir al m??dico.
        </Paragraph>
        <Fig20 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>
          ??QU?? PROBLEMAS ME PUEDE TRAER LA PR??STATA AGRANDADA?
        </Subheading>
        <Paragraph>
          Ese agrandamiento de la pr??stata si se mantiene en el tiempo sin
          tratamiento, al dificultar la salida de la orina puede repercutir
          negativamente en los ri??ones, agrand??ndolos por el aumento de la
          presi??n y provocar una enfermedad llamada insuficiencia renal cr??nica.
        </Paragraph>
        <Paragraph>
          Por otro lado, la retenci??n de orina en la vejiga hace que sea m??s
          frecuente la aparici??n de infecciones urinarias, a veces dif??ciles de
          erradicar hasta que no se resuelve el problema de la pr??stata.
        </Paragraph>
        <Paragraph>
          Esta misma retenci??n de la orina puede llegar a un punto tal que su
          salida sea imposible, cre??ndose lo que se conoce como retenci??n
          urinaria, para lo cual se debe introducir una sonda por la uretra
          hasta la vejiga que permita la salida de orina.
        </Paragraph>
        <Paragraph>
          Cuando esto ocurre, a veces con medicamentos se puede retirar la sonda
          en unos d??as, pero otras veces no se puede retirar hasta que se opere
          la persona.
        </Paragraph>
        <Paragraph />
        <Subheading>??Y QU?? HAGO SI TENGO LA PR??STATA AGRANDADA?</Subheading>
        <Paragraph>
          Si aparece alguno de los s??ntomas descritos, o por otro motivo
          sospechamos que tenemos la pr??stata agrandada, debemos consultar al
          m??dico, que nos har?? un grupo de preguntas y un tacto rectal. Esta
          prueba es sumamente importante realizarla a todos los hombres mayores
          de 45 o 50 a??os una vez al a??o. Quiz??s le indique algunas pruebas de
          laboratorio, ultrasonido as?? como le impondr?? tratamiento.
        </Paragraph>
        <Paragraph>
          En dependencia del tama??o que a alcanzado la pr??stata, la intensidad
          de sus s??ntomas <Bold>y de sus preferencias</Bold>, el tratamiento
          puede ser con medicamentos o quir??rgico.
        </Paragraph>
        <Paragraph />
        <Subheading>C??NCER DE PR??STATA</Subheading>
        <Paragraph>
          Otros de los problemas frecuentes de la pr??stata es el c??ncer. Los
          s??ntomas de c??ncer pueden o no parecerse a los de la HBP, pero puede
          aparecer sangrado por la orina, molestias al eyacular o dolor en la
          parte baja de la espalda o en las caderas. Tambi??n puede no dar
          s??ntomas tempranos hasta que la enfermedad est?? avanzada.
        </Paragraph>
        <Paragraph>
          Como vemos, todo esto es bastante inespec??fico, por lo cual la mejor
          conducta es la realizaci??n anual del tacto rectal, que le ayudar?? al
          m??dico a saber las caracter??sticas de la pr??stata. La combinaci??n de
          tacto rectal y realizaci??n de un PSA (an??lisis de sangre) puede ayudar
          m??s.
        </Paragraph>
        <Paragraph>
          Mientras m??s precozmente se detecte un c??ncer de pr??stata, mayor ser??
          la posibilidad tratarse de forma exitosa. Hasta ahora la mejor forma
          de detecci??n temprana del c??ncer de pr??stata es la combinaci??n de
          tacto rectal y realizaci??n del PSA. Del resultado de estas dos pruebas
          pueden derivarse otras como biopsia de pr??stata, ultrasonidos
          abdominales o realizaci??n m??s frecuente del PSA.
        </Paragraph>
        <Paragraph>
          Hay varios tipos de tratamiento, desde la cirug??a hasta el tratamiento
          con medicamentos, radiaciones o combinaciones de estos. Se ha dicho
          que casi la mitad de los hombres de 80 a??os o m??s pueden tener c??ncer
          de pr??stata sin haber tenido s??ntomas nunca. La decisi??n de qu?? es lo
          mejor si se detecta, depender?? de su edad, los s??ntomas, el grado de
          malignidad del c??ncer y la extensi??n que tiene. Debe tomarla en
          conjunto con su m??dico. Actualmente, si se detecta tempranamente, es
          uno de los tumores con los que se puede vivir una larga vida.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'16-1'}
          question={'1. Puedo tener problemas en la pr??stata si:'}
          answers={[
            'Me levanto muchas veces en la noche a orinar.',
            'Me demoro goteando despu??s de terminar de orinar.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'16-2'}
          question={
            '2. La mejor manera de detectar tempranamente el c??ncer de pr??stata es:'
          }
          answers={[
            'Que el m??dico me realice el tacto rectal todos los a??os despu??s de los 50 a??os de edad.',
            'Haci??ndome un PSA.',
            'Tacto rectal todos los a??os y PSA.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'16-3'}
          question={'3. Si tengo Hiperplasia Benigna de Pr??stata:'}
          answers={[
            'Puedo tener infecciones urinarias a repetici??n.',
            'Mi actividad sexual mejora.',
            'Las dos son correctas.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'No es normal orinar varias veces en la noche.',
            'Hay medicinas para mejorar el agrandamiento de la pr??stata.',
            'Realizarse un tacto rectal anual es recomendado para detectar tempranamente el c??ncer de pr??stata.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Ejercicios')}>
          <Text>{'??Yo puedo hacer ejercicios f??sicos?'}</Text>
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

export default Prostata;
