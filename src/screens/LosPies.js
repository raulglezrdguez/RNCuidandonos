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
import Fig10 from '../components/Fig10';
import Fig11 from '../components/Fig11';

const LosPies = ({navigation}) => {
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
      await AsyncStorage.setItem('@sLosPies', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sLosPies');
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
          onPress={() => navigate('IrAlBano')}>
          <Text>{'Me cuesta trabajo ir al baño'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>TENGO DOLOR EN LOS PIES</Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>n muchas ocasiones no les prestamos a nuestros pies la
          atención que necesitan, nos damos cuenta cuando se empieza a blanquear
          nuestro cabello, después de años de usar zapatos de moda aunque no tan
          cómodos.
        </Paragraph>
        <Paragraph>
          A veces tenemos desde que nacemos ciertos defectos ligeros en los
          pies, que son corregidos fácilmente por aditamentos o ejercicios, como
          pueden ser los llamados pies planos. Otras veces los defectos son de
          otras partes del cuerpo, como la columna, las caderas o las piernas y
          traen problemas a nuestros pies.
        </Paragraph>
        <Paragraph>
          También existen algunas enfermedades que pueden repercutir más
          severamente en nuestros pies, como la diabetes cuando no se logra
          controlar bien durante años y entonces debemos aumentar los cuidados.
        </Paragraph>
        <Paragraph>
          Los pies están formados por muchos huesos, articulaciones, ligamentos
          y músculos. Permiten que podamos mantener una postura erguida,
          soportando nuestro peso. La complejidad de los pies para mantener el
          equilibrio y aguantar a veces demasiado peso, provoca que sean muy
          sensibles a los cambios.
        </Paragraph>
        <Paragraph>
          Cada vez que caminamos o aun estando parados, todos los elementos de
          cada pie entran en movimiento y sufren tensiones. Con el paso del
          tiempo, estas acciones repetidas cientos de miles de veces pueden
          provocar cambios que son normales con el paso de los años, aunque en
          algunas personas sean más pronunciados que en otras. Por ejemplo, la
          grasa en la planta del pie que ayuda a amortiguar la pisada disminuye,
          y el arco longitudinal se aplana un poco. Todo esto es normal, pero
          por el propio paso del tiempo, se producen otros cambios que pueden
          ser enfermedades. Un ejemplo es la artrosis, que puede ocurrir en
          cualquier parte del cuerpo y los pies la sufren también. Cuando esto
          ocurre, la articulación del tobillo se ve limitada en sus movimientos
          y puede llegar a sentirse dolor, y esto puede ocurrir también en las
          otras treinta y tres articulaciones de cada pie. Si a esto se le
          agrega que usamos durante años zapatos no adecuados a la forma de
          nuestro pie o a los malestares que tengamos en ellos, entonces el daño
          de nuestros pies puede ser mayor. Y todos sabemos lo que son pies
          adoloridos después de un día de caminar.
        </Paragraph>
        <Fig10 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>
          ¿CUÁLES SON LOS PROBLEMAS MÁS FRECUENTES DE LOS PIES?
        </Subheading>
        <Paragraph>
          Ahora conversaremos sobre los problemas que con mayor frecuencia
          padecen nuestros pies.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Juanetes</Bold>: es un abultamiento que se produce en la
          articulación del dedo gordo del pie, es de hueso, y hace que este dedo
          se comience a desviar hacia los demás dedos, llegándose en algunos
          casos a estar por encima o por debajo de ellos. Además de modificar la
          estética de nuestros pies, puede ser muy doloroso y en ocasiones
          necesita ser operado.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Callos</Bold>: se producen por no usar zapatos adecuados. A
          veces la moda hace que usemos zapatos muy bonitos, pero que producen
          rozaduras en los pies, casi siempre en la parte trasera del calcañal
          (cuando son zapatos no cerrados atrás y de tiritas), o en los dedos, y
          también en la planta del pie en la zona del metatarso. Pueden ser muy
          molestos y dolorosos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Otras deformaciones de los dedos</Bold>: los llamados dedos en
          martillo se producen cuando estos se quedan flexionados y no se pueden
          enderezar, casi siempre por deformidades. El zapato comienza a rozar
          en la parte más elevada del dedo, llegando a producirse callos
          (recuerda que se forman por rozamiento) y hasta ulceraciones.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Uñas</Bold>: con todos estos cambios debido a rozaduras, callos,
          dedos apretados dentro de los zapatos, las uñas sufren, y pueden
          engrosarse, encarnarse y ser fuente de dolor.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Fascitis plantar</Bold>: ocurre cuando se inflama una vaina
          (fascia plantar) que envuelve músculos y tendones que pasan por la
          parte de debajo de los pies. La zona que más se inflama donde los
          huesos están más cercanos a ella, y esto donde más ocurre es en el
          calcañal. Esto produce mucho dolor en esta zona del pie y hace que
          cuando caminemos lleguemos a cojear. Si esta inflamación dura muchos
          meses y no se trata de forma oportuna, en la zona inflamada se produce
          el temido espolón calcáneo, que no es más la calcificación de la vaina
          y se ve en las radiografías como un gancho que recuerda las espuelas
          de los gallos, de ahí su nombre. Este espolón continúa irritando la
          fascia y puede llegar a provocar mucho dolor que incluso impida
          caminar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Hongos</Bold>: se desarrollan habitualmente en zonas húmedas, y
          el uso de zapatos cerrados y el sudor de los pies provocan un medio
          propicio para su crecimiento. Casi siempre salen entre los dedos de
          los pies y comienzan entre el dedo más pequeño y el que está al lado.
          También las uñas pueden tener hongos, que son diferentes a los que
          ocurren en la piel y hacen que estas se engruesen.
        </Paragraph>
        <Fig11 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>¿POR QUÉ SE HINCHAN MIS PIES?</Subheading>
        <Paragraph>
          Los pies pueden hincharse por diferentes causas. Nunca es normal que
          los pies se hinchen porque estemos viejos. Esto no es lo mismo que
          inflamación, aunque muchas personas usan esta palabra para referirse a
          los pies “hinchados”. Habitualmente, los pies se hinchan por
          acumulación de líquido en los mismos, lo que se conoce como edema.
          Casi siempre se hinchan más por las tardes y por las mañanas amanecen
          “desinflamados”.
        </Paragraph>
        <Paragraph>
          Esto ocurre frecuentemente en personas de edad avanzada, y puede ser
          por enfermedades que no tienen que ver directamente con los pies o por
          problemas propios de los pies. Las enfermedades generales que con más
          frecuencia producen edemas son algunas enfermedades del corazón, la
          insuficiencia renal crónica, la insuficiencia hepática y cualquier
          otra causa de que baje la albúmina en sangre, que es una proteína que
          circula por nuestro organismo. Casi siempre que estas son las causas
          del edema en los pies, esta “hinchazón” no duele.
        </Paragraph>
        <Paragraph>
          Otro problema frecuentemente de pies hinchados son las varices de las
          piernas. Ocurren con más frecuencia en las mujeres, en las que han
          tenido hijos y en las que están largo tiempo de pie. Las várices
          pueden provocar edemas y además tener la sensación de cansancio y
          pesadez, principalmente cuando permanecemos mucho tiempo de pie.
        </Paragraph>
        <Paragraph>
          Los pies también se pueden hinchar por deformidades u otros problemas
          propios del pie, como por ejemplo son el pie plano, el arco
          metatarsiano bajo, el espolón y los juanetes así como operaciones de
          cualquiera de estas dolencias.
        </Paragraph>
        <Paragraph>
          La mayoría de las veces, en las personas mayores los pies se hinchan
          por varias causas de las mencionadas anteriormente.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ ME DUELEN LOS PIES?</Subheading>
        <Paragraph>
          Todos los trastornos que se mencionaron anteriormente pueden provocar
          dolor en los pies. También causan dolor, caminar mucho o estar mucho
          tiempo de pie. Como se mencionó, muchas veces hay varios de estas
          situaciones al mismo tiempo. Si a cualquiera de estos problemas le
          añadimos unas cuantas libras de más, el problema se multiplica y será
          mucho más molesto.
        </Paragraph>
        <Paragraph>
          En ocasiones, los problemas de los pies pueden producir dolores en
          otras partes del cuerpo. Esto puede pasar porque cojeamos, recargamos
          más la pierna cuyo pie no duele tanto, y otras veces los dolores se
          reflejan en la zona baja de la espalda.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PUEDO HACER SI ALGO DE ESTO ME PASA?</Subheading>
        <Paragraph>
          Lo primero es tratar de evitar que esto pase, aunque no siempre es
          posible. Si ya los tenemos, puede ayudar a mitigarlos algunos de los
          siguientes consejos generales:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de usar zapatos que le queden cómodos, que el pie
          no le quede muy holgado ni muy ajustado, pues estas dos situaciones
          son causas de rozaduras y callos. Muchas veces los zapatos traen hoy
          en día un ligero soporte longitudinal adentro, que son de utilidad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de cambiar de zapatos con cierta frecuencia. EL
          usar siempre los mismos zapatos podrán producir rozaduras. El usar
          diferentes zapatos hará que las zonas de apoyo cambien, pues no todos
          los zapatos son iguales. El hecho de que el mismo zapato roce en el
          mismo lugar siempre, puede provocar callos y otros problemas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>A veces son necesarios los zapatos ortopédicos o
          soportes para poner dentro de los zapatos, lo cual mejorará la forma
          en que pisamos y puede aliviar mucho.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de mantener un buen peso o trate de bajar si está
          pasado, si los pies hablaran se lo agradecerían mucho. Con las
          primeras 6 u 8 libras que baje comenzará a notar la diferencia.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Haga ejercicios que fortalezcan sus pies. Puede acudir
          a su médico de familia para que lo oriente.
        </Paragraph>
        <Paragraph>Si tiene hinchazón o dolor en los pies:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Ponga los pies en alto, nunca por encima de las caderas
          cuando esté sentado, pues esta posición es incómoda.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El uso de paños fríos en los pies ayuda a descansarlos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Durante unos días no fuerce los pies, trate de estar
          menos tiempo de pie y de caminar menos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>En algunos de los casos se pueden utilizar medias
          elásticas, que producen una ligera compresión en el pie y las piernas
          y ayudan a que el edema disminuya. Las puede usar cuando esté mucho
          tiempo de pie.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Visite al quiropedista una vez al mes, sus pies merecen
          que los traten bien.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si tiene una enfermedad fuera de los pies, como las
          mencionadas al inicio y que produzcan edemas en los pies, acuda a su
          médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si en unos días no ha mejorado, o ha aumentado el dolor
          o la hinchazón, consulte a su médico de familia.
        </Paragraph>
        <Paragraph />
        <Subheading>SI SOY DIABÉTICO...</Subheading>
        <Paragraph>
          Si somos diabéticos, los pies necesitan cuidados especiales. La
          diabetes puede lesionar los nervios de los pies, y producirnos zonas
          de anestesia, lo cual puede ser muy peligroso pues no nos daremos
          cuenta de un roce que puede producir callos que finalmente pueden dar
          lugar a úlceras en los pies, de más difícil manejo. Además, la
          diabetes también puede estrechar los vasos sanguíneos lo que hace que
          llegue menos sangre a los pies, con la consiguiente disminución de
          oxígeno en los mismos, situación que favorece la formación de úlceras
          y demora su curación.
        </Paragraph>
        <Paragraph>
          Por ello, las personas que son diabéticas deben revisarse los pies
          diariamente aunque no se sientan nada, cambiar de zapatos con
          frecuencia y si los puede usar que sean suaves mejor, también deben
          secarse bien los pies después del baño así como utilizar siempre
          medias cuando esté usando zapatos.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'9-1'}
          question={'1. Con el paso de los años:'}
          answers={[
            'Se pueden producir normalmente cambios en los pies sin que sean enfermedades.',
            'Se producen los mismos cambios en todas las personas.',
            'Es normal que los pies se hinchen por las tardes.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'9-2'}
          question={
            '2. Son causa de dolor en los pies (puede marcar más de una):'
          }
          answers={[
            'Tener sobrepeso.',
            'Padecer de migraña.',
            'Padecer del corazón.',
          ]}
          correct={[0, 2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'9-3'}
          question={
            '3. Marque las respuestas correctas que ayuden a mantener los pies saludables (puede marcar más de una):'
          }
          answers={[
            'Tomar mucha agua.',
            'Estar bastante tiempo de pie.',
            'Asistir regularmente al quiropedista.',
          ]}
          correct={[0, 2]}
        />

        <MensajesClaves
          messages={[
            'Vayamos al quiropedista una vez al mes. Nuestros pies nos lo agradecerán.',
            'Los diabéticos deben tener mucho cuidado con sus pies.',
            'Pasar mucho tiempo sentados con los pies para abajo, puede causarnos “hinchazón” de los mismos.',
            'Cambiar de zapatos con cierta frecuencia ayuda a que no se nos formen callos.',
            'Mantener un buen peso ayuda mucho a que nuestros pies nos duelan menos.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Corazon')}>
          <Text>{'¿Estoy enfermo del corazón?'}</Text>
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

export default LosPies;
