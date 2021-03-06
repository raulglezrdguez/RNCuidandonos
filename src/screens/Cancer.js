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

const Cancer = ({navigation}) => {
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
      await AsyncStorage.setItem('@sCancer', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sCancer');
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
          onPress={() => navigate('PresionAlta')}>
          <Text>{'??Qu?? debo saber de la presi??n alta?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ??QU?? DEBEMOS SABER SOBRE EL C??NCER?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l c??ncer es una enfermedad frecuente. Durante muchos
          a??os, y hasta hace unos cuantos a??os, recibir la noticia de que
          ten??amos c??ncer era como recibir una sentencia de muerte.
        </Paragraph>
        <Paragraph>
          Hoy en d??a no es as??, muchas personas con el diagn??stico de c??ncer lo
          sobreviven y viven muchos a??os. Todos los meses salen noticias sobre
          tratamientos que mejoran la sobrevida de los pacientes con c??ncer. As??
          es como se le va ganando la batalla a la muerte, un mes hoy, otro mes
          ma??ana. Y esos meses van sumando a??os.
        </Paragraph>
        <Paragraph>
          A pesar de ello, tener el diagn??stico de c??ncer puede ser un reto
          enorme para las personas.
        </Paragraph>
        <Paragraph>
          Hace un siglo, la tuberculosis era mortal en casi todos los pacientes.
          Hoy en d??a es curable. Las apendicitis mataban a muchas de las
          personas que la padec??an, hoy con una operaci??n relativamente
          sencilla, que hasta se puede realizar por m??nimo acceso (t??cnica
          quir??rgica en la cual por unos peque??os orificios en ciertas partes
          del cuerpo se opera, se extirpan ri??ones y hasta tumores del cerebro),
          se opera la ap??ndice.
        </Paragraph>
        <Paragraph>
          En sentido general, a mayor edad mayor probabilidad de padecer de
          c??ncer, aunque hay algunos que son m??s frecuentes en personas j??venes.
          En los ??ltimos a??os, en la comunidad cient??fica se ha estado pensando
          con m??s fuerza que el c??ncer se podr?? tratar como una enfermedad
          cr??nica. ??Qu?? quiere decir esto? Bueno, pues al igual que la diabetes,
          la hipertensi??n o muchas de las enfermedades del coraz??n, enfermedades
          con las que las personas vivimos muchos a??os y se controlan con
          cambios en los estilos de vida y medicamentos, as?? ser?? con el c??ncer:
          viviremos mucho tiempo con la enfermedad controlada y moriremos de
          otra cosa (??de algo hay que morirse, no?).
        </Paragraph>
        <Paragraph>
          En este cap??tulo, abordaremos qu?? es el c??ncer, cu??les son los m??s
          frecuentes, y conoceremos sobre los factores que pueden favorecer que
          lo padezcamos o bien que disminuya la probabilidad de que lo tengamos.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES EL C??NCER?</Subheading>
        <Paragraph>
          El c??ncer no es una sola enfermedad. Se le da ese nombre general a un
          grupo de enfermedades que pueden tener diferentes causas y formas de
          comportarse, pero que comparten una caracter??stica com??n: el
          crecimiento descontrolado de algunas c??lulas, lo que puede provocar
          que invadan los tejidos que est??n cerca de la lesi??n primaria
          (invasi??n), o tambi??n que se propaguen a tejidos u ??rganos lejanos
          (met??stasis).
        </Paragraph>
        <Paragraph>
          Los tejidos est??n formados por c??lulas. Casi todas las c??lulas del
          cuerpo humano se pueden reproducir, y las nuevas c??lulas sustituyen
          las viejas o las que est??n da??adas.
        </Paragraph>
        <Paragraph>
          El pelo y las u??as son un ejemplo del crecimiento de las c??lulas, solo
          que en este caso los cortamos cuando crecen mucho, y en el resto del
          organismo, las c??lulas nuevas sustituyen las c??lulas viejas que son
          eliminadas por el propio cuerpo de varias maneras.
        </Paragraph>
        <Paragraph>
          La reproducci??n de las c??lulas est?? controlada por diversos
          mecanismos, para que no se reproduzcan en exceso ni dejen de
          reproducirse cuando es necesaria la renovaci??n de ellas.
        </Paragraph>
        <Paragraph>
          En el c??ncer, el control sobre la producci??n de c??lulas nuevas se
          pierde, y comienzan a proliferar de forma no controlada, aunque no
          sean necesarias.
        </Paragraph>
        <Paragraph>
          Este mismo descontrol en el crecimiento, provoca que las nuevas
          c??lulas formadas no cumplan las funciones que deben realizar las
          c??lulas normales.
        </Paragraph>
        <Paragraph>
          Por ejemplo, en el h??gado, las c??lulas hep??ticas que normalmente
          intervienen en el metabolismo del organismo transformando los
          nutrientes, pero al aparecer un c??ncer en este ??rgano (del que hay
          diversos tipos), esta funci??n se pierde en las c??lulas cancerosas.
        </Paragraph>
        <Paragraph>
          As??, el aumento del n??mero de c??lulas que consumen los nutrientes que
          necesitamos para seguir viviendo, comienzan a invadir los tejidos
          cercanos al tumor, sustituyendo las c??lulas ???buenas??? por c??lulas
          ???malas???.
        </Paragraph>
        <Paragraph>
          Al final, la falta de c??lulas normales para cumplir las funciones del
          cuerpo, el crecimiento desmesurado de las c??lulas tumorales con un
          aumento del consumo de energ??a, ocupando lugares y creciendo en
          tama??o, pueden llevar a la muerte.
        </Paragraph>
        <Paragraph />
        <Subheading>??TUMOR MALIGNO Y TUMOR BENIGNO?</Subheading>
        <Paragraph>
          Tumor no es sin??nimo de c??ncer. Existen tumores benignos y malignos.
          Decir tumor maligno es lo mismo que decir c??ncer. Los tumores benignos
          producen tambi??n crecimiento de c??lulas, pero no se propagan a otros
          ??rganos ni a los tejidos cercanos al tumor. Muchas veces crecen muy
          lentamente, aunque pueden alcanzar tama??os muy grandes. Habitualmente
          su extirpaci??n quir??rgica es suficiente. El m??s frecuente ejemplo son
          los lipomas, o ???bolas de cebo??? debajo de la piel.
        </Paragraph>
        <Paragraph>
          Hay tumores benignos que por su posici??n en el cuerpo pueden traer
          complicaciones y hasta la muerte, como en el cerebro (por estar este
          en una cavidad cerrada que no permite grandes crecimientos), y en el
          intestino porque puede llegar a ocluirlo y presentarse una urgencia
          quir??rgica. Pero como su nombre lo indica, su benignidad no ofrece
          casi nunca grandes peligros cuando se tratan a tiempo.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? PRODUCE EL C??NCER?</Subheading>
        <Paragraph>
          Hay m??ltiples causas que pueden propiciar la aparici??n de un c??ncer.
          Por un lado, est??n los genes. Los genes son peque??as porciones de los
          cromosomas que dan ??rdenes al organismo para que se produzcan
          determinados cambios. Los genes heredados de nuestros padres influyen
          en el color que tendremos en los ojos, si seremos m??s altos o m??s
          bajos, y tambi??n contienen ??rdenes que se dan en determinados per??odos
          de la vida, por ejemplo, cuando parar de crecer en estatura o si
          tendremos m??s posibilidad de padecer de alguna enfermedad.
        </Paragraph>
        <Paragraph>
          As??, hay genes que controlan el crecimiento y replicaci??n de las
          c??lulas, y cuando se alteran, se pierde el control de este
          crecimiento. Hay otros que se dedican a reparar estos genes da??ados.
          El balance entre estos genes hace que tengamos o no predisposici??n
          gen??tica a padecer de ciertos tipos de c??nceres.
        </Paragraph>
        <Paragraph>
          Hablamos de predisposici??n, pues hay un grupo de factores externos que
          pueden alterar este balance. Tomar mucho sol puede predisponernos a
          tener c??ncer de piel, ciertos tipos de alimentos predisponen al c??ncer
          de colon, el cigarro aumenta mucho la posibilidad de padecer c??ncer de
          pulm??n. Por el contrario, otros h??bitos nos protegen: la ingesti??n de
          fibra diet??tica nos protege del c??ncer de colon, la protecci??n
          (vacuna) del virus de la hepatitis B nos protege del c??ncer de h??gado.
        </Paragraph>
        <Paragraph>
          Hay cambios en el organismo que son benignos que aumentan la
          posibilidad de padecer de c??ncer. Por ejemplo, algunos tipos de
          adenomas del colon son benignos, pero la probabilidad de que se
          vuelvan malignos puede ser alta; algunos tipos de lunares de la piel
          son benignos pero pueden transformarse en malignos.
        </Paragraph>
        <Paragraph>
          Por ello, hay personas m??s propensas que otras a padecer de c??ncer.
          Depender?? de sus genes y de los h??bitos saludables o no que tenga a lo
          largo de la vida.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??NTOS TIPOS DE C??NCER HAY?</Subheading>
        <Paragraph>
          Aunque el mecanismo de producci??n de los tumores malignos en esencia
          es el mismo en todos, hay muchos tipos de c??ncer. Algunos son m??s
          frecuentes a edades m??s tempranas, y otros, como el de pr??stata y
          colon se ven m??s en edades avanzadas.
        </Paragraph>
        <Paragraph>
          Esto es importante pues no todos tienen el mismo comportamiento, el
          mismo tratamiento ni el mismo pron??stico. As??, hay tumores malignos de
          colon y de piel que cuando se detectan y se tratan oportunamente, la
          curaci??n es del 100%. Hay otros, como el de pr??stata, en que
          actualmente la sobrevida a los cinco a??os es de 95%, trat??ndolos
          adecuadamente.
        </Paragraph>
        <Paragraph>
          M??s de la tercera parte de casi todos los c??nceres puede prevenirse
          con algunos cambios en nuestras rutinas diarias.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? PODEMOS HACER PARA SU PREVENCI??N?</Subheading>
        <Paragraph>
          En la mayor??a de las enfermedades, la prevenci??n no es absoluta. ??Qu??
          quiere decir esto? Que aunque sigamos al pie de la letra las
          instrucciones para prevenir tal o cual enfermedad, existe cierta
          probabilidad de que la adquiramos. ??Entonces para qu?? hacer
          prevenci??n? Porque esta disminuye mucho el riesgo de padecer ciertas
          enfermedades. A la larga merece la pena.
        </Paragraph>
        <Paragraph>
          Por ejemplo, se sabe que el consumo excesivo de grasas y az??cares
          aumenta la posibilidad de que desarrollemos enfermedades del coraz??n o
          diabetes. Sin embargo, todos conocemos personas que consumen mucha
          grasa, tienen sobrepeso y no padecen del coraz??n ni son diab??ticos.
          ??Por qu?? ocurre esto? Hoy en d??a se sabe que los genes que tenemos,
          nos ayudan a no padecer determinadas enfermedades o a tenerlas a pesar
          de tener h??bitos saludables. Las personas con genes que nos hacen
          proclives a tener alguna enfermedad, y que tenemos h??bitos de vida
          saludables, en muchas ocasiones demoramos la aparici??n de la
          enfermedad. Este es otro motivo para practicar la prevenci??n. Y es el
          caso en muchos tipos de c??ncer.
        </Paragraph>
        <Paragraph />
        <Subheading>CREENCIAS POPULARES SOBRE EL C??NCER</Subheading>
        <Paragraph>
          Existen creencias populares sobre el c??ncer, que pueden hacer que
          tengamos conductas no saludables, como por ejemplo: ingerir sustancias
          que no se ha demostrado que sean beneficiosas, o que nos demoremos en
          tomar las medidas adecuadas para detectar el c??ncer tempranamente o
          que no comencemos tratamientos de eficacia demostrada.
        </Paragraph>
        <Paragraph>
          A continuaci??n abordemos algunas presunciones populares sobre esta
          enfermedad:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Si no tengo dolor no tengo c??ncer</Bold>. Esto no es as??, y
          puede crear conductas err??neas en la detecci??n temprana, como no me
          hago la prueba citol??gica si no tengo dolor o sangramiento, o el tacto
          rectal para ver c??mo est?? mi pr??stata. Mientras m??s temprano se
          detecte el c??ncer, mayor probabilidad de sobrevida tendremos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>El c??ncer es contagioso</Bold>. De manera excepcional el c??ncer
          se puede trasmitir de una persona a otra. Hay bacterias o virus que
          favorecen ciertos tipos de c??ncer, como el virus del papiloma humano,
          que s?? se pueden trasmitir de una persona a otra, pero el que se
          trasmita no quiere decir que se trasmita el c??ncer. Depende de la
          susceptibilidad de la persona a padecerlo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>
            Operar el c??ncer puede hacer que este se extienda m??s r??pido
          </Bold>
          . Hoy en d??a cada vez es m??s raro que esto ocurra si se siguen los
          procedimientos adecuados por el cirujano y su equipo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>El c??ncer es hereditario</Bold>. Pocas veces es as??. Menos del
          10% de los c??nceres son causados por da??os gen??ticos que heredamos. El
          resto, no tiene que ver con la herencia. Igualmente existen otras
          opiniones que vivir cerca de una central el??ctrica, el uso de
          tel??fonos celulares, ninguna de estas situaciones produce c??ncer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Finalmente, y en contra de lo que muchas personas creemos, no se ha
          demostrado cient??ficamente que alguna hierba medicinal cura el c??ncer.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? PUEDO HACER PARA PREVENIR EL C??NCER?</Subheading>
        <Paragraph>
          Ya hemos visto que la posibilidad de padecer de un c??ncer depende de
          nuestros genes y de los h??bitos de vida que tengamos. Tener genes
          ???malos??? puede atenuarse con estilos de vida saludables, y la
          protecci??n de genes ???buenos??? puede echarse a perder por h??bitos no
          saludables.
        </Paragraph>
        <Paragraph>
          La prevenci??n del c??ncer se basa en tener estilos de vida sanos y en
          realizar determinadas pruebas que est?? demostrado que detectan
          tempranamente ciertos tipos de c??ncer lo cual hace que sean curables
          muchas veces o que con tratamiento desde el inicio de la enfermedad,
          podamos vivir mucho tiempo.
        </Paragraph>
        <Paragraph />
        <Subheading>H??BITOS DE VIDA</Subheading>
        <Paragraph>
          M??s del 20% de los fallecimientos por c??ncer en el mundo se producen
          por el h??bito de fumar o mascar tabaco. Las sustancias contenidas en
          el tabaco, al ser inhaladas, aumenta la posibilidad de c??ncer de
          pulm??n, boca, vejiga y de las cuerdas vocales entre otros. Tambi??n la
          inhalaci??n del humo del cigarro de otra persona (fumador pasivo)
          aumenta el riesgo de padecerlo.
        </Paragraph>
        <Paragraph>
          Dejar de fumar no es f??cil, hay varios m??todos para ello, como
          terapias conductuales, parches de nicotina, entre otros. Consulte a su
          m??dico para que lo oriente.
        </Paragraph>
        <Paragraph>
          El sobrepeso se ha asociado a varios tipos de c??ncer, como mama, colon
          y ri????n. Esto est?? muy relacionado con la falta de actividad f??sica y
          con la dieta con muchas calor??as.
        </Paragraph>
        <Paragraph>
          Realizar alg??n tipo de actividad f??sica o ejercicios de forma regular
          ayuda a controlar el peso. Si somos de los que habitualmente no hemos
          realizado regularmente ejercicios, nos costar?? trabajo comenzar a
          hacerlo.
        </Paragraph>
        <Paragraph>
          Hay varios m??todos para ello, consulte a su m??dico para conocer si
          tiene alguna limitaci??n para alg??n tipo de ejercicio en particular.
          Realizar caminatas es un comienzo excelente.
        </Paragraph>
        <Paragraph>
          Existen otros factores que no se relacionan tanto con nuestros h??bitos
          de vida, como son la contaminaci??n ambiental, las radiaciones y el
          exceso de sol, que conocer sobre ellas nos puede ayudar a prevenir
          ciertos tipos de c??ncer.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ALIMENTOS SE ASOCIAN A TENER O NO C??NCER?</Subheading>
        <Paragraph>
          M??s del 20% del c??ncer de la boca se atribuye al alcohol. Si fumamos,
          el riesgo es mayor. El riesgo aumenta con la cantidad de alcohol que
          bebamos, y esto tambi??n es v??lido para el c??ncer de h??gado. El
          alcoholismo en exceso, al igual que el h??bito de fumar en cualquier
          magnitud, son dif??ciles de eliminar, pues crean dependencias en el
          cuerpo, pero no es imposible. Existen grupos de ayuda para el
          alcoholismo, consulte a su m??dico si considera que necesita ayuda.
        </Paragraph>
        <Paragraph>
          La ingesta de abundante fibra diet??tica, vegetales y frutas se ha
          asociado a protecci??n contra el c??ncer en general. Hay productos
          alimentarios a los que se les atribuye que previene o cura el c??ncer.
          Hasta ahora no hay ninguno demostrado que haga esto.
        </Paragraph>
        <Paragraph>
          Finalmente, es importante que usted conozca que hay algunos alimentos
          que parecen aumentar el riesgo de contraer c??ncer si se consumen
          mucho, como los alimentos ahumados y procesados (embutidos), podemos
          seguir comi??ndolos (pero...ojo con la sal y la presi??n arterial), no
          abusemos de ellos.
        </Paragraph>
        <Paragraph />
        <Subheading>EX??MENES PERI??DICOS PREVENTIVOS</Subheading>
        <Paragraph>
          La detecci??n temprana de muchos tipos de c??ncer los vuelve curables.
          Para ellos existen un grupo de pruebas que las personas debemos
          hacernos peri??dicamente, como son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Autoexamen de mama.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Mamograf??a.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Tacto rectal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Prueba citol??gica.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Sangre oculta en heces fecales.
        </Paragraph>
        <Paragraph>
          Consulte a su m??dico para informarse m??s y prevenir enfermedades.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'13-1'}
          question={'1. Sobre el c??ncer:'}
          answers={[
            'Si se detecta tempranamente, aumenta la posibilidad de curarnos.',
            'Hay cambios en nuestra vida diaria que puede ayudar a prevenirlos.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'13-2'}
          question={'2. De las siguientes afecciones, diga:'}
          answers={[
            'Tumor y c??ncer es lo mismo.',
            'El c??ncer siempre da dolor.',
            'Las dos anteriores son falsas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'13-3'}
          question={'3. Podemos disminuir la posibilidad de tener c??ncer si:'}
          answers={[
            'Si tenemos una dieta con bastantes vegetales.',
            'Si nos realizamos las pruebas de detecci??n temprana como sangre oculta en heces fecales.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Gran parte de todos los tipos de c??ncer son evitables.',
            'Mientras m??s temprano se detecte el c??ncer, mayor posibilidad de sobrevivir y llevar una vida normal.',
            'Comer poca ensalada predispone a padecer de tumores del colon.',
            'El exceso de sol predispone a c??ncer de piel. Prot??jase la piel.',
            'A los dos a??os de dejar de fumar, el riesgo de c??ncer de pulm??n disminuye notablemente.',
            'La actividad f??sica y estar normal de peso brinda alguna protecci??n para algunos tipos de c??ncer.',
            'Comer abundante fibra diet??tica, vegetales y frutas puede brindar protecci??n contra el c??ncer en general.',
            'La prueba citol??gica, el autoexamen de mama y la sangre oculta en heces fecales ayudan a que si se detecta algo, la posibilidad de curaci??n es mayor.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Isquemia')}>
          <Text>{'La isquemia cerebral'}</Text>
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

export default Cancer;
