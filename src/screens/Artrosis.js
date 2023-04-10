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
import Fig29 from '../components/Fig29';

const Artrosis = ({navigation}) => {
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
      await AsyncStorage.setItem('@sArtrosis', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sArtrosis');
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
          onPress={() => navigate('Parkinson')}>
          <Text>{'Viviendo con parkinson'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ME DUELEN LAS ARTICULACIONES ¿SERÁ POR ARTROSIS?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>N</Bold>o siempre que las rodillas duelen (las dos o una de
          ellas) es por artrosis, pero la mayoría de las veces sí lo es. La
          artrosis se conoce desde hace miles de años, se han encontrado momias
          con signos de artrosis en sus huesos. A la artrosis se le conoce por
          varios nombres, los más comunes son la osteoartritis y la
          osteoartrosis. En este capítulo la llamaremos artrosis. Es el problema
          más frecuente de cualquier articulación.
        </Paragraph>
        <Paragraph>
          Hay varios tipos de articulaciones. Las que más movimiento tienen y
          mayor esfuerzo reciben, como las de los hombros, codos, rodillas o
          caderas, tienen cartílago que recubre la superficie de los huesos que
          forman la articulación. Este cartílago está formado de una sustancia
          elástica, que sirve para amortiguar la fricción entre la superficie de
          los huesos y actúa como una almohadilla al moverse unos contra otros.
        </Paragraph>
        <Paragraph>
          Cuando se padece artrosis, el cartílago se va desgastando, se vuelve
          más fino y puede llegar a desaparecer, por lo que los huesos rozan uno
          contra el otro lo cual puede producir deformaciones, y lo que más nos
          importa, dolor.
        </Paragraph>
        <Paragraph>
          Las articulaciones móviles son las que más se afectan por la
          enfermedad. Y dentro de estas, las manos, rodillas, caderas y aunque
          no son tan móviles, la columna vertebral y la unión del esternón con
          las costillas, en la parte delantera del pecho, se afecta también con
          mucha frecuencia.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ SE PRODUCE LA ARTROSIS?</Subheading>
        <Paragraph>
          No se sabe cuál es la causa de la artrosis, pero se sabe que el exceso
          de peso sobre las articulaciones y el desgaste por el tiempo juegan un
          papel muy importante. Los que nacimos con pie plano o alguna
          enfermedad de la cadera, o a los que con los años se nos unen o
          separan entre si las rodillas, es más probable que la padezcamos más
          tempranamente en estas articulaciones.
        </Paragraph>
        <Paragraph>
          Cuando el cartílago empieza a adelgazar, llega a romperse en algunos
          sitios, dejando ”desnudos” los huesos en esa zona, y ese roce produce
          inflamación. A esto se le suma que los pedacitos de cartílago rotos
          quedan sueltos dentro de la articulación, (“como piedra en el
          zapato”), lo cual hace más doloroso el movimiento de la articulación.
        </Paragraph>
        <Paragraph>
          La artrosis aumenta con el paso de los años y la mayoría de las
          personas mayores la sufrimos, aunque no todos la sufrimos en las
          mismas articulaciones, por el mismo tiempo ni con la misma intensidad.
          En el caso de las rodillas, que son de las articulaciones más
          afectadas, la debilidad de los cuádriceps (los músculos de la parte
          delantera de los muslos) provoca que las rodillas se vuelvan menos
          estables, y esto puede acelerar la enfermedad en ellas. Los tres
          factores que más aumentan la probabilidad de artrosis son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El sobrepeso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Los años.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Las lesiones antiguas en las articulaciones.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ SÍNTOMAS DA LA ARTROSIS?</Subheading>
        <Paragraph>
          Existen personas que en las radiografías se ve mucha artrosis y tienen
          poco dolor, y otras con menos cambios en las radiografías presentan
          más dolor o limitación.
        </Paragraph>
        <Paragraph>
          Los síntomas principales son el dolor y la rigidez, que empeoran
          después de hacer alguna actividad física, como caminar o estar de pie
          mucho tiempo o levantar pesos grandes. La rigidez aparece más
          frecuentemente por la mañana, al levantarse y dura de 30 a 40 minutos.
          Pero como comentamos, durante el día puede sentirse más dolor y
          rigidez al realizar lo que hacemos todos los días, aunque sea ligero,
          como los quehaceres domésticos, y mejora cuando nos sentamos a
          descansar.
        </Paragraph>
        <Paragraph>
          Cuando pasan los años, podemos llegar a sentir sensación de
          crepitación en la articulación con el movimiento, principalmente las
          rodillas y a veces en las caderas. El dolor nos puede despertar de
          noche.
        </Paragraph>
        <Paragraph />
        <Subheading>¿PUEDO PREVENIR LA ARTROSIS?</Subheading>
        <Paragraph>
          Existen ciertas cosas que podemos realizar para retrasar el comienzo
          de la enfermedad. Todas las medidas de prevención realmente no la
          previenen, sino que demoran su comienzo o hacen que la enfermedad sea
          más ligera, o si ya la tenemos, tiende a mejorar los síntomas. La
          mejor, pero a veces la más difícil de lograr, es{' '}
          <Bold>mantener un peso normal</Bold> o lo más cercano a lo normal,
          principalmente para la artrosis de las rodillas, aunque el exceso de
          libras también empeora la artrosis de la columna y las caderas.
        </Paragraph>
        <Paragraph>
          Mantener algún grado de actividad física ayuda también a disminuir el
          riesgo. El fortalecimiento de los músculos cercanos a las
          articulaciones da muy buenos resultados, pues produce mayor
          estabilidad de la articulación.
        </Paragraph>
        <Paragraph>
          Aumentar la estabilidad de una articulación quiere decir que se
          “bambolea” menos, sus partes están más firmemente unidas. Por ejemplo,
          cuando usamos una faja para reducir el dolor de la espalda baja,
          estamos estabilizando la columna vertebral, o una rodillera para la
          rodilla. Pero cuidado, el uso excesivo de fajas, rodilleras y
          tobilleras a la larga puede ser contraproducente, pues sustituye la
          acción de los músculos en la estabilización de la articulación y esto
          llega a debilitarlos.
        </Paragraph>
        <Paragraph>
          El fortalecimiento de los músculos cercanos a las articulaciones es
          especialmente importante con las articulaciones de las rodillas, con
          fortalecimiento de los cuádriceps (los músculos del muslo) y también
          de los músculos que rodean el hombro para esta articulación. Si cree
          que tiene esta situación, acérquese a su médico de familia para que lo
          remita a un fisioterapeuta.
        </Paragraph>
        <Paragraph />
        <Subheading>SI TENGO YA LA ARTROSIS, ¿QUÉ PUEDO HACER?</Subheading>
        <Paragraph>
          La artrosis no tiene cura. Esto pasa con muchas enfermedades, como la
          hipertensión arterial o la diabetes, como se ha mencionado
          anteriormente, pero todas tienen tratamiento. La artrosis tiende a
          empeorar con el tiempo, pero se pueden hacer muchas cosas para mejorar
          sus síntomas y lograr largos períodos sin síntomas. El objetivo
          principal del tratamiento de una persona con artrosis es mantener a
          raya el dolor y que no empeore el estado de la articulación. Esto se
          puede lograr:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Teniendo un peso normal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Manteniéndonos activos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Evitando lesiones de las articulaciones.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Medicamentos.
        </Paragraph>
        <Paragraph />
        <Subheading>TENIENDO UN PESO NORMAL</Subheading>
        <Paragraph>
          Es uno de los pilares del tratamiento, pues en las personas con exceso
          de peso es mucho más posible la aparición o el empeoramiento de la
          artrosis y de dolores en las articulaciones. Mantener una dieta
          adecuada y hacer ejercicios físicos lograrán que usted alcance y
          mantenga un buen peso.
        </Paragraph>
        <Paragraph />
        <Subheading>MANTENIÉNDONOS ACTIVOS</Subheading>
        <Paragraph>
          Mantener cierto grado de actividad física, además de mejorar la
          artrosis, también es beneficioso para el colesterol, el corazón, para
          mejorar el ánimo, para mantener el peso y para la artrosis, entre
          otros beneficios.
        </Paragraph>
        <Paragraph>
          No se debe hacer ejercicios con dolor en las articulaciones. Pero esto
          crea una duda: Si el dolor no se quita casi nunca, ¿cuándo puedo hacer
          ejercicios?
        </Paragraph>
        <Paragraph>
          Usted y su médico de familia, junto al fisiatra del policlínico, deben
          buscar un plan que permita el alivio del dolor y la realización de
          ejercicios. En general, los planes de ejercicios comprenden cuatro
          grandes grupos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejercicios aeróbicos</Bold>: estos ejercicios, como caminar,
          montar bicicleta o nadar provocan poca tensión sobre las
          articulaciones. Si utiliza bicicleta estática, el peso del cuerpo cae
          sobre el asiento de la bicicleta, y las rodillas y tobillos sufren
          menos el peso del cuerpo.
        </Paragraph>
        <Fig29 stroke={colors.text} width={min} height={min} />
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejercicios para fortalecer el cuerpo y los músculos</Bold>:
          estos ejercicios tonifican las articulaciones y las protegen. Estos
          ejercicios casi siempre se hacen con peso. Consulte a su médico,
          cuáles y cuándo puede hacerlos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejercicios de estiramiento o relajación muscular</Bold>: estos
          ejercicios vuelven más flexibles los músculos y disminuyen su rigidez
          y tensión. Si se realizan por la mañana al levantarse, de manera
          suave, ayudarán a que el dolor matutino disminuya. Girar el tronco, y
          estirar los músculos de las piernas sin forzar mucho que llegue a
          doler.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Ejercicios para el equilibrio</Bold>: tener dolor en las
          articulaciones provoca que el peligro de caídas aumente. El Tai–Chi es
          una muy buena opción para mejorar el equilibrio.
        </Paragraph>

        <Paragraph>
          Todos los ejercicios{' '}
          <Bold>
            deben comenzarse teniendo una guía y estando seguro que usted pueda
            hacerlos
          </Bold>
          . Para ello consulte a su médico de familia.
        </Paragraph>
        <Paragraph />
        <Subheading>EVITAR LAS LESIONES DE LAS ARTICULACIONES</Subheading>
        <Paragraph>
          Las personas que realizaron deportes extremos en su juventud tienden a
          padecer más artrosis cuando son mayores, por la sobrecarga excesiva a
          que sometieron sus articulaciones.
        </Paragraph>
        <Paragraph>
          Por ello, aunque no seamos jóvenes ya, no debemos sobrecargar las
          articulaciones con movimientos excesivos que puedan producir lesiones
          articulares, como cargar pesos grandes o flexionar demasiadas veces la
          cintura o las rodillas, principalmente cuando se tiene dolor.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CUÁLES SON LOS MEJORES MEDICAMENTOS PARA LA ARTROSIS?
        </Subheading>
        <Paragraph>
          Es una pregunta difícil de contestar. Se utilizan varias medicinas
          para disminuir el dolor de las articulaciones. Todos los medicamentos
          pueden provocar reacciones indeseables, algunas potencialmente
          peligrosas. Mientras menos tome, mejor, lo que no quiere decir que
          deba soportar dolor.
        </Paragraph>
        <Paragraph>
          Hay medicinas que se pueden tomar con más frecuencia, se llaman
          analgésicos, como el paracetamol y la duralgina; otras tienen mayores
          efectos indeseables, son los llamados antinflamatorios no esteroideos,
          como el ibuprofén y el diclofenaco. Sus principales efectos
          secundarios son que pueden subir la presión, provocar sangramiento
          digestivo y dañar el riñón. Estos, el médico los indica cuando hay
          inflamación en las articulaciones.
        </Paragraph>
        <Paragraph>
          También existen en pomadas y son menos dañinos que en tabletas.{' '}
          <Bold>En cualquier caso, no se automedique</Bold>.
        </Paragraph>
        <Paragraph>
          Cuando hay inflamación de la articulación (se siente caliente y está
          “hinchada”), el hielo puede ayudar dos o tres veces al día por
          períodos de 15–20 minutos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ SON LOS DISPOSITIVOS DE AYUDA?</Subheading>
        <Paragraph>
          Los dispositivos de ayuda pueden mejorar el dolor, hacer la vida
          diaria más llevadera y disminuir las caídas. Ejemplos de ellos son los
          bastones, los “burritos”, los andadores, las agarraderas en el baño,
          por citar algunos ejemplos.
        </Paragraph>
        <Paragraph>
          Además de ayudar a “compartir” el peso del cuerpo con las piernas, le
          ofrece más estabilidad al caminar y disminuyen el riesgo de caídas,
          por último, en algunos casos la cirugía puede ayudar mucho, desde las
          artroscopias hasta el remplazo de una articulación. Converse con su
          médico estas posibilidades si la enfermedad avanza.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'26-1'}
          question={'1. Sobre la artrosis:'}
          answers={[
            'Es la enfermedad más común de las articulaciones.',
            'Con la edad es normal padecer de artrosis.',
            'La columna, caderas y las rodillas son de las articulaciones que más sufren artrosis.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'26-2'}
          question={
            '2. No se conoce la causa de la artrosis, pero entre los factores que favorecen su aparición está:'
          }
          answers={[
            'Usar bastón.',
            'Comer alimentos con poco calcio.',
            'Tener sobrepeso.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'26-3'}
          question={'3. Para mejorar el dolor de la artrosis debe:'}
          answers={[
            'Mantener un peso normal.',
            'Mantener actividad física cuando no haya dolor.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Las tres cosas que más producen artrosis son: el sobrepeso, los años y las lesiones antiguas en las articulaciones.',
            'Mantener un peso normal o bajar un poco de peso ayuda mucho a la artrosis de las caderas, rodillas y pies.',
            'Los ejercicios que aumentan la fortaleza de los músculos de los muslos ayudan mucho a la artrosis de las rodillas.',
            'Hasta donde la artrosis nos deje, la práctica de caminatas mejora la artrosis.',
            'Los ejercicios que debemos hacer son: ejercicios aeróbicos, ejercicios para fortalecer los músculos, ejercicios de estiramiento o relajación muscular y ejercicios para el equilibrio. Consulte a su médico para que le diga cuáles puede hacer sin riesgos.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Saludable')}>
          <Text>{'Envejecimieto saludable'}</Text>
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

export default Artrosis;
