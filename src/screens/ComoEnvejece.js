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
          ??C??MO ENVEJECE EL MUNDO?... Y NOSOTROS
        </Headline>
        <Paragraph>Lourdes Baldoqu??n de la Pe??a</Paragraph>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>ada vez son m??s las personas que llegamos a edades
          avanzadas. En general, las personas de la Roma de los c??sares viv??an
          m??s o menos 40 a??os, aunque siempre hubo personas que llegaban a
          viejos. Desde hace unos pocos a??os, la mayor??a de las personas que
          nacen en el mundo tienen la posibilidad de llegar a 60 a??os. En el
          caso de Cuba, un cubano o cubana que nazca en estos d??as, debe
          alcanzar los 78 a??os de vida.
        </Paragraph>
        <Paragraph>
          El envejecimiento de las poblaciones es un logro de la humanidad, que
          trae aparejados muchos retos, y uno de ellos es el cuidado de nuestros
          mayores.
        </Paragraph>
        <Paragraph>No todas las personas envejecemos de igual forma.</Paragraph>
        <Paragraph>
          Existen algunos pa??ses en los que hay m??s personas mayores que ni??os,
          Cuba es uno de ellos. En nuestro pa??s, esto pasa entre otros motivos,
          porque las mujeres tienen menos de una hija hembra que la reemplace en
          su funci??n de mantener la especie humana . Por muchos motivos, en todo
          el mundo las mujeres tienden a tener menos hijos. Si miramos retratos
          de la familia de nuestros abuelos, veremos a abuelo, abuela y cinco o
          seis hijos que fueron o son nuestros t??os. Si miramos a nuestras
          familias, veremos a mam??, pap?? y uno o dos hijos. Cada vez somos m??s
          padres y abuelos y menos hijos y nietos.
        </Paragraph>
        <Paragraph>
          Hoy en d??a ha aumentado la esperanza de vida, que es la cantidad de
          a??os que se espera que viva una persona, por lo que es m??s posible que
          lleguemos a edades mayores que antes. Es por esto que es importante
          conocer y entender por qu?? envejecemos y c??mo podemos envejecer mejor.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??NTAS EDADES TENEMOS?</Subheading>
        <Paragraph>
          Hay diferentes tipos de edades, como la <Bold>edad biol??gica</Bold>,
          que es la edad real que tienen nuestros tejidos, ??rganos y en general
          nuestro cuerpo, y tambi??n existe la <Bold>edad cronol??gica</Bold> que
          es la que se utiliza a los efectos de la ley, son los a??os que han
          pasado desde que nacimos. En esta ??ltima no podemos influir, pero en
          la otra, la biol??gica s??, esa es la que ???dice??? realmente c??mo nos
          sentimos y lo que podemos hacer.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES EL ENVEJECIMIENTO?</Subheading>
        <Paragraph>
          No hay una definici??n ??nica de envejecimiento. Esto est?? muy influido
          por nuestras experiencias. Cuando ??ramos ni??os, ve??amos a alguien de
          40 a??os y para nosotros era una persona mayor, pero si tenemos 65,
          decimos que una persona mayor es la que tiene 75 a??os o m??s. Hay quien
          dice que viejo es aquel que tiene 10 a??os m??s que uno.
        </Paragraph>
        <Paragraph>
          En la mayor??a de los pa??ses, se considera que el envejecimiento
          comienza a los 60 o 65 a??os de edad, y entonces una persona mayor o
          adulta mayor es la que tiene esa edad. Por otro lado, tambi??n se dice
          que comenzamos a envejecer desde que nacemos. Pero dejemos eso a los
          cient??ficos, y tomemos como comienzo de la llamada tercera edad los 60
          a??os.
        </Paragraph>
        <Paragraph>
          Como cada d??a hay m??s personas mayores en el mundo, y cada cual
          envejece como ha vivido, se producen grandes diferencias entre las
          personas mayores, por eso se han clasificado en:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Viejos???j??venes</Bold>: son las personas en edades entre los
          60???74 a??os de edad. En general estas personas gozan de buena salud y
          son aut??nomos e independientes, lo que quiere decir que est??n en
          capacidad de tomar decisiones por s?? solos y pueden hacer las cosas de
          todos los d??as sin ayuda, como por ejemplo: preparar alimentos,
          vestirse, ba??arse, caminar y hacer uso del servicio sanitario, entre
          otros.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Viejos???viejos</Bold>: son las personas mayores de 75 a??os de
          edad y llegan hasta 89 a??os. A partir de los 75 es que la salud puede
          sufrir mayor deterioro y puede aparecer una dependencia para realizar
          los quehaceres de todos los d??as ??? tanto hogare??os como fuera de casa
          ??? tales como el uso de transporte, la compra de alimentos o la
          adquisici??n de los medicamentos, entre otras actividades limitantes.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. Longevos</Bold>: son las personas que llegan a 90 a??os de edad
          o m??s. Se trata de ???personas excepcionales???, pues la mayor??a de los
          humanos no llegan a alcanzar esta cantidad de a??os, aunque cada vez se
          ven m??s nonagenarios y centenarios.
        </Paragraph>
        <Paragraph>
          Muchas de estas personas de 90 y m??s a??os no est??n tan mal de salud
          como pudiera pensarse, pues por algo han llegado a estas edades. Han
          sido capaces de ???empujar??? en el tiempo las enfermedades y la
          dependencia.
        </Paragraph>
        <Paragraph>
          Entonces, podemos decir que el envejecimiento es un per??odo en la vida
          de las personas que se caracteriza por una disminuci??n progresiva de
          la capacidad de adaptarnos a los problemas que pudieran presentarse
          (como por ejemplo enfermedades o ca??das) y tambi??n la p??rdida de la
          capacidad de reaccionar como cuando ??ramos m??s j??venes.
        </Paragraph>
        <Fig2 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Esta p??rdida de capacidad de adaptaci??n se produce porque la reserva
          del organismo para hacer frente a los eventos adversos de la vida ha
          ido disminuyendo, independientemente de las enfermedades que podamos
          padecer o haber padecido. Por eso la recuperaci??n de las enfermedades
          demora un poco m??s que en a??os anteriores de nuestra vida.
        </Paragraph>
        <Paragraph>
          Las personas j??venes tienen una mayor capacidad de reserva y
          adaptaci??n frente a las demandas de la vida cotidiana. Por ello su
          capacidad de recuperaci??n ante las enfermedades es mayor que en las
          personas mayores.
        </Paragraph>
        <Paragraph />
        <Subheading>??EL ENVEJECIMIENTO ES UNA ENFERMEDAD?</Subheading>
        <Paragraph>
          El envejecimiento es un proceso natural, que puede acompa??arse de
          mayor o menor n??mero de enfermedades, la mayor parte se trata de
          enfermedades cr??nicas como: artrosis, diabetes, hipertensi??n arterial
          o cataratas, por poner solo algunos ejemplos, las cuales contribuyen
          m??s a la discapacidad y a la dependencia que el propio envejecimiento
          por s?? solo, as?? como ocasionan una disminuci??n de la capacidad
          funcional de las personas y una mayor dependencia, reduciendo la
          participaci??n de las personas mayores en la vida social y familiar.
          Por eso afirmamos{' '}
          <Bold>que el envejecimiento no es una enfermedad</Bold>.
        </Paragraph>
        <Paragraph>
          La discapacidad y la dependencia pueden suceder por diferentes
          motivos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por las enfermedades</Bold>: estas aparecen a lo largo de la
          vida y van dejando su ???huella??? en el organismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por malos h??bitos</Bold>: las conductas no saludables como el
          sedentarismo, una nutrici??n no saludable, fumar, alcoholismo y otras
          nocivas pr??cticas que favorecen la aparici??n de enfermedades, y se
          conocen como <Bold>factores de riesgo</Bold>; mientras que en la cara
          opuesta de la moneda, est??n los h??bitos saludables como la pr??ctica de
          actividad f??sica, una alimentaci??n lo m??s sana posible, no fumar y
          tener o alcanzar un peso adecuado; estos son los{' '}
          <Bold>factores protectores</Bold>.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Por el paso de los a??os</Bold>: el propio paso del tiempo a??n
          sin enfermedades, produce ciertos cambios en nosotros, que al final
          disminuye nuestra capacidad de responder ante los eventos negativos y
          se reflejan en una disminuci??n de la autonom??a y el vigor f??sico.
        </Paragraph>

        <Paragraph>
          En el efecto del paso de los a??os no podemos intervenir hasta ahora,
          pero en las enfermedades y malos h??bitos, s?? podemos hacerlo. De
          acuerdo al cuidado que tengamos con nuestro cuerpo y nuestra mente,
          as?? nos convertiremos en personas mayores m??s o menos sanas.
        </Paragraph>
        <Paragraph>
          <Bold>Envejecemos de acuerdo a como hayamos vivido</Bold>.
        </Paragraph>
        <Paragraph>
          Cuando van pasando los a??os y nos vamos haciendo cada vez mayores, nos
          podemos sentir casi tan ??giles y despiertos como 10 a??os atr??s, o como
          si nos hubiera ???arrollado un cami??n???. En gran medida vamos a sentirnos
          de una u otra forma seg??n hayamos vivido y sobre todo ser?? el
          resultado de lo hecho y de lo no hecho.
        </Paragraph>
        <Paragraph>
          Esta historia de la vida de cada uno de nosotros, influye mucho en lo
          dependientes o independientes que somos ahora, y en la necesidad o no
          de ayuda de otras personas para seguir haciendo lo de todos los d??as.
        </Paragraph>
        <Paragraph>
          Como hemos visto hasta aqu??, el envejecimiento no es una enfermedad,
          pero s?? aumenta la posibilidad de que reaccionemos m??s lentamente.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??C??MO CAMBIA NUESTRO CUERPO? ??CU??NDO ENVEJECEMOS?
        </Subheading>
        <Paragraph>
          Los cambios que ocurren en nuestro cuerpo con los a??os pasan a
          diferentes niveles. A continuaci??n mencionaremos algunos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel biol??gico</Bold>, los cambios provocan que nuestros
          ??rganos no funcionen como cuando ??ramos j??venes, lo que en ocasiones
          favorece que se desarrollen algunas enfermedades. De igual forma
          caminamos con mas lentitud y la velocidad de reacci??n es menos r??pida
          al igual que el equilibrio, por lo que somos m??s propensos a caernos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel psicol??gico</Bold>, nos demoramos un poco m??s en
          procesar informaci??n nueva, y generalmente la memoria ya no es tan
          buena como antes, tampoco la atenci??n y la concentraci??n para realizar
          correctamente varias actividades al mismo tiempo. Pero por otro lado,
          la experiencia que hemos adquirido nos permite soportar mejor los
          eventos negativos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A <Bold>nivel social</Bold>, nos limitamos un poco de participar en
          actividades fuera del hogar, casi siempre el motivo est?? asociado a
          los cambios biol??gicos y psicol??gicos.
        </Paragraph>
        <Paragraph>
          Por supuesto, no podremos realizar las tareas de manera similar a como
          lo hac??amos a los 30 o 40 a??os (principalmente en las que necesiten
          esfuerzo f??sico), pero en muchas ocasiones el ambiente puede adaptarse
          a nuestra capacidad con la adopci??n de algunas medidas relativamente
          sencillas, como pueden ser por ejemplo: la ubicaci??n de pasamanos en
          nuestra vivienda.
        </Paragraph>
        <Paragraph>
          Debemos aclarar que todo lo anteriormente expuesto no siempre es as??,
          pues el paso de los a??os nos va haciendo diferentes unos de otros, por
          el envejecimiento y por las decisiones que hemos ido tomando sobre
          conductas saludables o no. Dos ni??os se parecen mucho m??s entre s?? que
          dos personas mayores y a su vez un ni??o no se parece desde el punto de
          vista conductual en absolutamente nada a una persona mayor, esto es
          porque todo lo que hemos vivido va dejando huellas, formando nuestra
          personalidad y nuestra capacidad de afrontamiento en la vida.
        </Paragraph>
        <Paragraph>
          Por eso decimos que{' '}
          <Bold>
            el envejecimiento no puede evitarse, pero depende de c??mo hayamos
            vivido
          </Bold>{' '}
          y que entremos a ??l mejor o peor preparados, con m??s o menos capacidad
          para hacer nuestras cosas de todos los d??as.
        </Paragraph>
        <Paragraph>
          Hemos hablado de enfermedades y p??rdida de reservas con los a??os, pero
          debemos ver el envejecimiento como una oportunidad de lograr cosas que
          no hicimos antes, de disfrutar placeres que por estar trabajando no
          dispon??amos del tiempo suficiente.
        </Paragraph>
        <Paragraph>
          Se puede conservar hasta edades avanzadas nuestra capacidad de
          realizar tareas cotidianas y seguir disfrutando de la vida. Vivir m??s
          es una oportunidad apreciable, m??s cuando lo hacemos con salud.
        </Paragraph>
        <Paragraph>
          En los temas siguientes podremos aprender c??mo pasar nuestra vejez
          mejor, con m??s salud, y as?? poder ayudar y cuidar a nuestros seres
          queridos.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'2-1'}
          question={'1. De las siguientes afirmaciones:'}
          answers={[
            'La mayor??a de las personas envejecen de forma parecida entre s??.',
            'El envejecimiento es muy parecido a una enfermedad cr??nica.',
            'Dos personas mayores se diferencian entre s?? m??s que dos ni??os peque??os.',
          ]}
          correct={[2]}
        />

        <AutoEvaluation
          questionID={'2-2'}
          question={'2. Sobre los diferentes tipos de edades que hay:'}
          answers={[
            'La cronol??gica es la que dice c??mo funciona nuestro cuerpo.',
            'La biol??gica se refiere a c??mo funciona nuestro cuerpo.',
            'Ambas sirven para tener una idea de c??mo funciona nuestro cuerpo.',
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
            'Vivir m??s a??os es un logro. Disfrut??moslo.',
            'Todos y todas envejecemos de maneras diferentes.',
            'La forma en que envejecemos depende de como hayamos vivido.',
            'Nuestra edad oficial es la del carnet de identidad, pero la que sentimos que tenemos, tiene m??s valor para nosotros mismos.',
            'En general, las personas llegamos hoy a los 65 a??os con mejor salud que nuestros mayores. Aprovech??moslo.',
            'El envejecimiento no es una enfermedad.',
            'Ninguna enfermedad est?? causada por la edad.',
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
