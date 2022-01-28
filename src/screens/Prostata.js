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
          <Text>{'¿Cómo andan mis huesos? La osteoporosis'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ME ESTOY LEVANTANDO A ORINAR POR LA NOCHE. ¿TENDRÉ PROBLEMAS EN LA
          PRÓSTATA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a próstata forma parte del aparato de reproducción de
          los hombres y es una glándula pequeña que se encuentra en la base de
          la vejiga. Por su interior pasa el conducto que une la vejiga con el
          exterior para poder orinar, que se llama uretra, que también atraviesa
          al pene. La próstata favorece la producción del semen en cuyo interior
          van los espermatozoides que vienen de los testículos y son los
          encargados de fecundar al óvulo para formar una nueva vida.
        </Paragraph>
        <Paragraph>
          Es normal que cuando envejecemos la próstata se agrande, pero si se
          agranda demasiado entonces padeceremos lo que se conoce como
          Hiperplasia Benigna de Próstata (HBP).
        </Paragraph>
        <Paragraph>
          Casi todos los hombres la padeceremos, la HBP no es un precursor de
          cáncer de próstata. El agrandamiento de la próstata comienza después
          de los 50–55 años, aunque algunas personas le comienza a los 40 y
          tantos años. Y otros tienen los primeros síntomas después de los 65
          años.
        </Paragraph>
        <Paragraph>
          Cuando la próstata comienza a crecer, el tramo de la uretra que pasa
          por dentro de ella atravesándola se empieza a comprimir y esto trae
          problemas para orinar. Aunque casi siempre mientras mayor sea la
          próstata, mayores síntomas habrá, pero no siempre es así. Hay
          próstatas que han crecido mucho y dan pocos síntomas, y otras que con
          un crecimiento pequeño ya dan muchas molestias.
        </Paragraph>
        <Paragraph>
          Aunque la HBP es la causa más frecuente de crecimiento prostático,
          existen otras causas que las pueden hacer crecer, como son el cáncer
          de próstata y las prostatitis o inflamación de la próstata. Haremos
          hincapié en la HBP y en cáncer de próstata.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SABER SI TENGO PROBLEMAS EN LA PRÓSTATA?</Subheading>
        <Paragraph>
          Casi siempre el primer síntoma que aparece de HBP es que comenzamos a
          levantarnos con deseos de orinar por la noche. Es normal a cualquier
          edad que si tomamos mucho líquido en la tarde–noche, nos levantemos
          quizás una vez a evacuar la orina. Pero ahora estamos hablando de otra
          cosa. Comenzamos levantándonos una vez, después dos, y si alguien nos
          pregunta a veces no le damos importancia o lo damos como normal.
          Realmente no es normal levantarse dos o tres veces en la noche a
          orinar. Esto puede aumentar, ser muchas veces y llegar a ser causa de
          insomnio.
        </Paragraph>
        <Paragraph>
          Estos deseos aumentados de orinar también ocurren durante el día, y a
          veces nos limitan para hacer salidas largas a lugares donde un baño no
          está siempre a mano.
        </Paragraph>
        <Paragraph>
          También llama la atención que podemos tener muchos deseos de orinar y
          cuando vamos al baño orinamos poco. Otro síntoma que aparece es la
          urgencia, es decir, que sentimos que si no vamos al baño, nos
          orinaremos encima. Y es verdad que puede pasar.
        </Paragraph>
        <Paragraph>
          También ocurre que el chorro es más débil que unos años atrás, y puede
          ser en tipo “regadera”, es decir, no es un solo chorro sino que se
          divide en dos o tres.
        </Paragraph>
        <Paragraph>
          Y cuando terminamos de orinar, nos quedamos goteando un poco, y
          debemos permanecer más tiempo en el baño antes de salir, para evitar
          que esas gotas vayan a los pantalones y lo mojen. Esto puede traernos
          limitaciones sociales y son los principales síntomas que nos pueden
          hacer sospechar que tenemos la próstata agrandada. Ante la aparición
          de cualquiera de ellos, debemos acudir al médico.
        </Paragraph>
        <Fig20 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>
          ¿QUÉ PROBLEMAS ME PUEDE TRAER LA PRÓSTATA AGRANDADA?
        </Subheading>
        <Paragraph>
          Ese agrandamiento de la próstata si se mantiene en el tiempo sin
          tratamiento, al dificultar la salida de la orina puede repercutir
          negativamente en los riñones, agrandándolos por el aumento de la
          presión y provocar una enfermedad llamada insuficiencia renal crónica.
        </Paragraph>
        <Paragraph>
          Por otro lado, la retención de orina en la vejiga hace que sea más
          frecuente la aparición de infecciones urinarias, a veces difíciles de
          erradicar hasta que no se resuelve el problema de la próstata.
        </Paragraph>
        <Paragraph>
          Esta misma retención de la orina puede llegar a un punto tal que su
          salida sea imposible, creándose lo que se conoce como retención
          urinaria, para lo cual se debe introducir una sonda por la uretra
          hasta la vejiga que permita la salida de orina.
        </Paragraph>
        <Paragraph>
          Cuando esto ocurre, a veces con medicamentos se puede retirar la sonda
          en unos días, pero otras veces no se puede retirar hasta que se opere
          la persona.
        </Paragraph>
        <Paragraph />
        <Subheading>¿Y QUÉ HAGO SI TENGO LA PRÓSTATA AGRANDADA?</Subheading>
        <Paragraph>
          Si aparece alguno de los síntomas descritos, o por otro motivo
          sospechamos que tenemos la próstata agrandada, debemos consultar al
          médico, que nos hará un grupo de preguntas y un tacto rectal. Esta
          prueba es sumamente importante realizarla a todos los hombres mayores
          de 45 o 50 años una vez al año. Quizás le indique algunas pruebas de
          laboratorio, ultrasonido así como le impondrá tratamiento.
        </Paragraph>
        <Paragraph>
          En dependencia del tamaño que a alcanzado la próstata, la intensidad
          de sus síntomas <Bold>y de sus preferencias</Bold>, el tratamiento
          puede ser con medicamentos o quirúrgico.
        </Paragraph>
        <Paragraph />
        <Subheading>CÁNCER DE PRÓSTATA</Subheading>
        <Paragraph>
          Otros de los problemas frecuentes de la próstata es el cáncer. Los
          síntomas de cáncer pueden o no parecerse a los de la HBP, pero puede
          aparecer sangrado por la orina, molestias al eyacular o dolor en la
          parte baja de la espalda o en las caderas. También puede no dar
          síntomas tempranos hasta que la enfermedad está avanzada.
        </Paragraph>
        <Paragraph>
          Como vemos, todo esto es bastante inespecífico, por lo cual la mejor
          conducta es la realización anual del tacto rectal, que le ayudará al
          médico a saber las características de la próstata. La combinación de
          tacto rectal y realización de un PSA (análisis de sangre) puede ayudar
          más.
        </Paragraph>
        <Paragraph>
          Mientras más precozmente se detecte un cáncer de próstata, mayor será
          la posibilidad tratarse de forma exitosa. Hasta ahora la mejor forma
          de detección temprana del cáncer de próstata es la combinación de
          tacto rectal y realización del PSA. Del resultado de estas dos pruebas
          pueden derivarse otras como biopsia de próstata, ultrasonidos
          abdominales o realización más frecuente del PSA.
        </Paragraph>
        <Paragraph>
          Hay varios tipos de tratamiento, desde la cirugía hasta el tratamiento
          con medicamentos, radiaciones o combinaciones de estos. Se ha dicho
          que casi la mitad de los hombres de 80 años o más pueden tener cáncer
          de próstata sin haber tenido síntomas nunca. La decisión de qué es lo
          mejor si se detecta, dependerá de su edad, los síntomas, el grado de
          malignidad del cáncer y la extensión que tiene. Debe tomarla en
          conjunto con su médico. Actualmente, si se detecta tempranamente, es
          uno de los tumores con los que se puede vivir una larga vida.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'16-1'}
          question={'1. Puedo tener problemas en la próstata si:'}
          answers={[
            'Me levanto muchas veces en la noche a orinar.',
            'Me demoro goteando después de terminar de orinar.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'16-2'}
          question={
            '2. La mejor manera de detectar tempranamente el cáncer de próstata es:'
          }
          answers={[
            'Que el médico me realice el tacto rectal todos los años después de los 50 años de edad.',
            'Haciéndome un PSA.',
            'Tacto rectal todos los años y PSA.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'16-3'}
          question={'3. Si tengo Hiperplasia Benigna de Próstata:'}
          answers={[
            'Puedo tener infecciones urinarias a repetición.',
            'Mi actividad sexual mejora.',
            'Las dos son correctas.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'No es normal orinar varias veces en la noche.',
            'Hay medicinas para mejorar el agrandamiento de la próstata.',
            'Realizarse un tacto rectal anual es recomendado para detectar tempranamente el cáncer de próstata.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Ejercicios')}>
          <Text>{'¿Yo puedo hacer ejercicios físicos?'}</Text>
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
