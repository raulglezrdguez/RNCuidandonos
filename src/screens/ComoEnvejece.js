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
import Fig2 from '../components/Fig2';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';

const ComoEnvejece = ({navigation}) => {
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
      await AsyncStorage.setItem('@sComoEnvejece', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sComoEnvejece');
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
          onPress={() => navigate('TerceraEdad')}>
          <Text>{'La tercera edad...sus retos'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿CÓMO ENVEJECE EL MUNDO?... Y NOSOTROS
        </Headline>
        <Paragraph>Lourdes Baldoquín de la Peña</Paragraph>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>ada vez son más las personas que llegamos a edades
          avanzadas. En general, las personas de la Roma de los césares vivían
          más o menos 40 años, aunque siempre hubo personas que llegaban a
          viejos. Desde hace unos pocos años, la mayoría de las personas que
          nacen en el mundo tienen la posibilidad de llegar a 60 años. En el
          caso de Cuba, un cubano o cubana que nazca en estos días, debe
          alcanzar los 78 años de vida.
        </Paragraph>
        <Paragraph>
          El envejecimiento de las poblaciones es un logro de la humanidad, que
          trae aparejados muchos retos, y uno de ellos es el cuidado de nuestros
          mayores.
        </Paragraph>
        <Paragraph>No todas las personas envejecemos de igual forma.</Paragraph>
        <Paragraph>
          Existen algunos países en los que hay más personas mayores que niños,
          Cuba es uno de ellos. En nuestro país, esto pasa entre otros motivos,
          porque las mujeres tienen menos de una hija hembra que la reemplace en
          su función de mantener la especie humana . Por muchos motivos, en todo
          el mundo las mujeres tienden a tener menos hijos. Si miramos retratos
          de la familia de nuestros abuelos, veremos a abuelo, abuela y cinco o
          seis hijos que fueron o son nuestros tíos. Si miramos a nuestras
          familias, veremos a mamá, papá y uno o dos hijos. Cada vez somos más
          padres y abuelos y menos hijos y nietos.
        </Paragraph>
        <Paragraph>
          Hoy en día ha aumentado la esperanza de vida, que es la cantidad de
          años que se espera que viva una persona, por lo que es más posible que
          lleguemos a edades mayores que antes. Es por esto que es importante
          conocer y entender por qué envejecemos y cómo podemos envejecer mejor.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁNTAS EDADES TENEMOS?</Subheading>
        <Paragraph>
          Hay diferentes tipos de edades, como la <Bold>edad biológica</Bold>,
          que es la edad real que tienen nuestros tejidos, órganos y en general
          nuestro cuerpo, y también existe la <Bold>edad cronológica</Bold> que
          es la que se utiliza a los efectos de la ley, son los años que han
          pasado desde que nacimos. En esta última no podemos influir, pero en
          la otra, la biológica sí, esa es la que “dice” realmente cómo nos
          sentimos y lo que podemos hacer.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES EL ENVEJECIMIENTO?</Subheading>
        <Paragraph>
          No hay una definición única de envejecimiento. Esto está muy influido
          por nuestras experiencias. Cuando éramos niños, veíamos a alguien de
          40 años y para nosotros era una persona mayor, pero si tenemos 65,
          decimos que una persona mayor es la que tiene 75 años o más. Hay quien
          dice que viejo es aquel que tiene 10 años más que uno.
        </Paragraph>
        <Paragraph>
          En la mayoría de los países, se considera que el envejecimiento
          comienza a los 60 o 65 años de edad, y entonces una persona mayor o
          adulta mayor es la que tiene esa edad. Por otro lado, también se dice
          que comenzamos a envejecer desde que nacemos. Pero dejemos eso a los
          científicos, y tomemos como comienzo de la llamada tercera edad los 60
          años.
        </Paragraph>
        <Paragraph>
          Como cada día hay más personas mayores en el mundo, y cada cual
          envejece como ha vivido, se producen grandes diferencias entre las
          personas mayores, por eso se han clasificado en:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Viejos–jóvenes</Bold>: son las personas en edades entre los
          60–74 años de edad. En general estas personas gozan de buena salud y
          son autónomos e independientes, lo que quiere decir que están en
          capacidad de tomar decisiones por sí solos y pueden hacer las cosas de
          todos los días sin ayuda, como por ejemplo: preparar alimentos,
          vestirse, bañarse, caminar y hacer uso del servicio sanitario, entre
          otros.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Viejos–viejos</Bold>: son las personas mayores de 75 años de
          edad y llegan hasta 89 años. A partir de los 75 es que la salud puede
          sufrir mayor deterioro y puede aparecer una dependencia para realizar
          los quehaceres de todos los días — tanto hogareños como fuera de casa
          — tales como el uso de transporte, la compra de alimentos o la
          adquisición de los medicamentos, entre otras actividades limitantes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Longevos</Bold>: son las personas que llegan a 90 años de edad
          o más. Se trata de “personas excepcionales”, pues la mayoría de los
          humanos no llegan a alcanzar esta cantidad de años, aunque cada vez se
          ven más nonagenarios y centenarios.
        </Paragraph>
        <Paragraph>
          Muchas de estas personas de 90 y más años no están tan mal de salud
          como pudiera pensarse, pues por algo han llegado a estas edades. Han
          sido capaces de “empujar” en el tiempo las enfermedades y la
          dependencia.
        </Paragraph>
        <Paragraph>
          Entonces, podemos decir que el envejecimiento es un período en la vida
          de las personas que se caracteriza por una disminución progresiva de
          la capacidad de adaptarnos a los problemas que pudieran presentarse
          (como por ejemplo enfermedades o caídas) y también la pérdida de la
          capacidad de reaccionar como cuando éramos más jóvenes.
        </Paragraph>
        <Fig2 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Esta pérdida de capacidad de adaptación se produce porque la reserva
          del organismo para hacer frente a los eventos adversos de la vida ha
          ido disminuyendo, independientemente de las enfermedades que podamos
          padecer o haber padecido. Por eso la recuperación de las enfermedades
          demora un poco más que en años anteriores de nuestra vida.
        </Paragraph>
        <Paragraph>
          Las personas jóvenes tienen una mayor capacidad de reserva y
          adaptación frente a las demandas de la vida cotidiana. Por ello su
          capacidad de recuperación ante las enfermedades es mayor que en las
          personas mayores.
        </Paragraph>
        <Paragraph />
        <Subheading>¿EL ENVEJECIMIENTO ES UNA ENFERMEDAD?</Subheading>
        <Paragraph>
          El envejecimiento es un proceso natural, que puede acompañarse de
          mayor o menor número de enfermedades, la mayor parte se trata de
          enfermedades crónicas como: artrosis, diabetes, hipertensión arterial
          o cataratas, por poner solo algunos ejemplos, las cuales contribuyen
          más a la discapacidad y a la dependencia que el propio envejecimiento
          por sí solo, así como ocasionan una disminución de la capacidad
          funcional de las personas y una mayor dependencia, reduciendo la
          participación de las personas mayores en la vida social y familiar.
          Por eso afirmamos{' '}
          <Bold>que el envejecimiento no es una enfermedad</Bold>.
        </Paragraph>
        <Paragraph>
          La discapacidad y la dependencia pueden suceder por diferentes
          motivos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por las enfermedades</Bold>: estas aparecen a lo largo de la
          vida y van dejando su “huella” en el organismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por malos hábitos</Bold>: las conductas no saludables como el
          sedentarismo, una nutrición no saludable, fumar, alcoholismo y otras
          nocivas prácticas que favorecen la aparición de enfermedades, y se
          conocen como <Bold>factores de riesgo</Bold>; mientras que en la cara
          opuesta de la moneda, están los hábitos saludables como la práctica de
          actividad física, una alimentación lo más sana posible, no fumar y
          tener o alcanzar un peso adecuado; estos son los{' '}
          <Bold>factores protectores</Bold>.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por el paso de los años</Bold>: el propio paso del tiempo aún
          sin enfermedades, produce ciertos cambios en nosotros, que al final
          disminuye nuestra capacidad de responder ante los eventos negativos y
          se reflejan en una disminución de la autonomía y el vigor físico.
        </Paragraph>

        <Paragraph>
          En el efecto del paso de los años no podemos intervenir hasta ahora,
          pero en las enfermedades y malos hábitos, sí podemos hacerlo. De
          acuerdo al cuidado que tengamos con nuestro cuerpo y nuestra mente,
          así nos convertiremos en personas mayores más o menos sanas.
        </Paragraph>
        <Paragraph>
          <Bold>Envejecemos de acuerdo a como hayamos vivido</Bold>.
        </Paragraph>
        <Paragraph>
          Cuando van pasando los años y nos vamos haciendo cada vez mayores, nos
          podemos sentir casi tan ágiles y despiertos como 10 años atrás, o como
          si nos hubiera “arrollado un camión”. En gran medida vamos a sentirnos
          de una u otra forma según hayamos vivido y sobre todo será el
          resultado de lo hecho y de lo no hecho.
        </Paragraph>
        <Paragraph>
          Esta historia de la vida de cada uno de nosotros, influye mucho en lo
          dependientes o independientes que somos ahora, y en la necesidad o no
          de ayuda de otras personas para seguir haciendo lo de todos los días.
        </Paragraph>
        <Paragraph>
          Como hemos visto hasta aquí, el envejecimiento no es una enfermedad,
          pero sí aumenta la posibilidad de que reaccionemos más lentamente.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO CAMBIA NUESTRO CUERPO? ¿CUÁNDO ENVEJECEMOS?
        </Subheading>
        <Paragraph>
          Los cambios que ocurren en nuestro cuerpo con los años pasan a
          diferentes niveles. A continuación mencionaremos algunos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel biológico</Bold>, los cambios provocan que nuestros
          órganos no funcionen como cuando éramos jóvenes, lo que en ocasiones
          favorece que se desarrollen algunas enfermedades. De igual forma
          caminamos con mas lentitud y la velocidad de reacción es menos rápida
          al igual que el equilibrio, por lo que somos más propensos a caernos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel psicológico</Bold>, nos demoramos un poco más en
          procesar información nueva, y generalmente la memoria ya no es tan
          buena como antes, tampoco la atención y la concentración para realizar
          correctamente varias actividades al mismo tiempo. Pero por otro lado,
          la experiencia que hemos adquirido nos permite soportar mejor los
          eventos negativos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel social</Bold>, nos limitamos un poco de participar en
          actividades fuera del hogar, casi siempre el motivo está asociado a
          los cambios biológicos y psicológicos.
        </Paragraph>
        <Paragraph>
          Por supuesto, no podremos realizar las tareas de manera similar a como
          lo hacíamos a los 30 o 40 años (principalmente en las que necesiten
          esfuerzo físico), pero en muchas ocasiones el ambiente puede adaptarse
          a nuestra capacidad con la adopción de algunas medidas relativamente
          sencillas, como pueden ser por ejemplo: la ubicación de pasamanos en
          nuestra vivienda.
        </Paragraph>
        <Paragraph>
          Debemos aclarar que todo lo anteriormente expuesto no siempre es así,
          pues el paso de los años nos va haciendo diferentes unos de otros, por
          el envejecimiento y por las decisiones que hemos ido tomando sobre
          conductas saludables o no. Dos niños se parecen mucho más entre sí que
          dos personas mayores y a su vez un niño no se parece desde el punto de
          vista conductual en absolutamente nada a una persona mayor, esto es
          porque todo lo que hemos vivido va dejando huellas, formando nuestra
          personalidad y nuestra capacidad de afrontamiento en la vida.
        </Paragraph>
        <Paragraph>
          Por eso decimos que{' '}
          <Bold>
            el envejecimiento no puede evitarse, pero depende de cómo hayamos
            vivido
          </Bold>{' '}
          y que entremos a él mejor o peor preparados, con más o menos capacidad
          para hacer nuestras cosas de todos los días.
        </Paragraph>
        <Paragraph>
          Hemos hablado de enfermedades y pérdida de reservas con los años, pero
          debemos ver el envejecimiento como una oportunidad de lograr cosas que
          no hicimos antes, de disfrutar placeres que por estar trabajando no
          disponíamos del tiempo suficiente.
        </Paragraph>
        <Paragraph>
          Se puede conservar hasta edades avanzadas nuestra capacidad de
          realizar tareas cotidianas y seguir disfrutando de la vida. Vivir más
          es una oportunidad apreciable, más cuando lo hacemos con salud.
        </Paragraph>
        <Paragraph>
          En los temas siguientes podremos aprender cómo pasar nuestra vejez
          mejor, con más salud, y así poder ayudar y cuidar a nuestros seres
          queridos.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'2-1'}
          question={'1. De las siguientes afirmaciones:'}
          answers={[
            'La mayoría de las personas envejecen de forma parecida entre sí.',
            'El envejecimiento es muy parecido a una enfermedad crónica.',
            'Dos personas mayores se diferencian entre sí más que dos niños pequeños.',
          ]}
          correct={[2]}
        />

        <AutoEvaluation
          questionID={'2-2'}
          question={'2. Sobre los diferentes tipos de edades que hay:'}
          answers={[
            'La cronológica es la que dice cómo funciona nuestro cuerpo.',
            'La biológica se refiere a cómo funciona nuestro cuerpo.',
            'Ambas sirven para tener una idea de cómo funciona nuestro cuerpo.',
          ]}
          correct={[1]}
        />

        <AutoEvaluation
          questionID={'2-3'}
          question={'3. La dependencia puede ocurrir por:'}
          answers={[
            'Enfermedades que padezcamos.',
            'Por el propio envejecimiento.',
            'Por ambas causas.',
          ]}
          correct={[1]}
        />

        <MensajesClaves
          messages={[
            'Vivir más años es un logro. Disfrutémoslo.',
            'Todos y todas envejecemos de maneras diferentes.',
            'La forma en que envejecemos depende de como hayamos vivido.',
            'Nuestra edad oficial es la del carnet de identidad, pero la que sentimos que tenemos, tiene más valor para nosotros mismos.',
            'En general, las personas llegamos hoy a los 65 años con mejor salud que nuestros mayores. Aprovechémoslo.',
            'El envejecimiento no es una enfermedad.',
            'Ninguna enfermedad está causada por la edad.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('EnvejecimientoSentidos')}>
          <Text>{'El envejecimiento de los sentidos'}</Text>
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

export default ComoEnvejece;
