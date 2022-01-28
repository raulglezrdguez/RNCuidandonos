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
          <Text>{'¿Qué debo saber de la presión alta?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿QUÉ DEBEMOS SABER SOBRE EL CÁNCER?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l cáncer es una enfermedad frecuente. Durante muchos
          años, y hasta hace unos cuantos años, recibir la noticia de que
          teníamos cáncer era como recibir una sentencia de muerte.
        </Paragraph>
        <Paragraph>
          Hoy en día no es así, muchas personas con el diagnóstico de cáncer lo
          sobreviven y viven muchos años. Todos los meses salen noticias sobre
          tratamientos que mejoran la sobrevida de los pacientes con cáncer. Así
          es como se le va ganando la batalla a la muerte, un mes hoy, otro mes
          mañana. Y esos meses van sumando años.
        </Paragraph>
        <Paragraph>
          A pesar de ello, tener el diagnóstico de cáncer puede ser un reto
          enorme para las personas.
        </Paragraph>
        <Paragraph>
          Hace un siglo, la tuberculosis era mortal en casi todos los pacientes.
          Hoy en día es curable. Las apendicitis mataban a muchas de las
          personas que la padecían, hoy con una operación relativamente
          sencilla, que hasta se puede realizar por mínimo acceso (técnica
          quirúrgica en la cual por unos pequeños orificios en ciertas partes
          del cuerpo se opera, se extirpan riñones y hasta tumores del cerebro),
          se opera la apéndice.
        </Paragraph>
        <Paragraph>
          En sentido general, a mayor edad mayor probabilidad de padecer de
          cáncer, aunque hay algunos que son más frecuentes en personas jóvenes.
          En los últimos años, en la comunidad científica se ha estado pensando
          con más fuerza que el cáncer se podrá tratar como una enfermedad
          crónica. ¿Qué quiere decir esto? Bueno, pues al igual que la diabetes,
          la hipertensión o muchas de las enfermedades del corazón, enfermedades
          con las que las personas vivimos muchos años y se controlan con
          cambios en los estilos de vida y medicamentos, así será con el cáncer:
          viviremos mucho tiempo con la enfermedad controlada y moriremos de
          otra cosa (¿de algo hay que morirse, no?).
        </Paragraph>
        <Paragraph>
          En este capítulo, abordaremos qué es el cáncer, cuáles son los más
          frecuentes, y conoceremos sobre los factores que pueden favorecer que
          lo padezcamos o bien que disminuya la probabilidad de que lo tengamos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES EL CÁNCER?</Subheading>
        <Paragraph>
          El cáncer no es una sola enfermedad. Se le da ese nombre general a un
          grupo de enfermedades que pueden tener diferentes causas y formas de
          comportarse, pero que comparten una característica común: el
          crecimiento descontrolado de algunas células, lo que puede provocar
          que invadan los tejidos que están cerca de la lesión primaria
          (invasión), o también que se propaguen a tejidos u órganos lejanos
          (metástasis).
        </Paragraph>
        <Paragraph>
          Los tejidos están formados por células. Casi todas las células del
          cuerpo humano se pueden reproducir, y las nuevas células sustituyen
          las viejas o las que están dañadas.
        </Paragraph>
        <Paragraph>
          El pelo y las uñas son un ejemplo del crecimiento de las células, solo
          que en este caso los cortamos cuando crecen mucho, y en el resto del
          organismo, las células nuevas sustituyen las células viejas que son
          eliminadas por el propio cuerpo de varias maneras.
        </Paragraph>
        <Paragraph>
          La reproducción de las células está controlada por diversos
          mecanismos, para que no se reproduzcan en exceso ni dejen de
          reproducirse cuando es necesaria la renovación de ellas.
        </Paragraph>
        <Paragraph>
          En el cáncer, el control sobre la producción de células nuevas se
          pierde, y comienzan a proliferar de forma no controlada, aunque no
          sean necesarias.
        </Paragraph>
        <Paragraph>
          Este mismo descontrol en el crecimiento, provoca que las nuevas
          células formadas no cumplan las funciones que deben realizar las
          células normales.
        </Paragraph>
        <Paragraph>
          Por ejemplo, en el hígado, las células hepáticas que normalmente
          intervienen en el metabolismo del organismo transformando los
          nutrientes, pero al aparecer un cáncer en este órgano (del que hay
          diversos tipos), esta función se pierde en las células cancerosas.
        </Paragraph>
        <Paragraph>
          Así, el aumento del número de células que consumen los nutrientes que
          necesitamos para seguir viviendo, comienzan a invadir los tejidos
          cercanos al tumor, sustituyendo las células “buenas” por células
          “malas”.
        </Paragraph>
        <Paragraph>
          Al final, la falta de células normales para cumplir las funciones del
          cuerpo, el crecimiento desmesurado de las células tumorales con un
          aumento del consumo de energía, ocupando lugares y creciendo en
          tamaño, pueden llevar a la muerte.
        </Paragraph>
        <Paragraph />
        <Subheading>¿TUMOR MALIGNO Y TUMOR BENIGNO?</Subheading>
        <Paragraph>
          Tumor no es sinónimo de cáncer. Existen tumores benignos y malignos.
          Decir tumor maligno es lo mismo que decir cáncer. Los tumores benignos
          producen también crecimiento de células, pero no se propagan a otros
          órganos ni a los tejidos cercanos al tumor. Muchas veces crecen muy
          lentamente, aunque pueden alcanzar tamaños muy grandes. Habitualmente
          su extirpación quirúrgica es suficiente. El más frecuente ejemplo son
          los lipomas, o “bolas de cebo” debajo de la piel.
        </Paragraph>
        <Paragraph>
          Hay tumores benignos que por su posición en el cuerpo pueden traer
          complicaciones y hasta la muerte, como en el cerebro (por estar este
          en una cavidad cerrada que no permite grandes crecimientos), y en el
          intestino porque puede llegar a ocluirlo y presentarse una urgencia
          quirúrgica. Pero como su nombre lo indica, su benignidad no ofrece
          casi nunca grandes peligros cuando se tratan a tiempo.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PRODUCE EL CÁNCER?</Subheading>
        <Paragraph>
          Hay múltiples causas que pueden propiciar la aparición de un cáncer.
          Por un lado, están los genes. Los genes son pequeñas porciones de los
          cromosomas que dan órdenes al organismo para que se produzcan
          determinados cambios. Los genes heredados de nuestros padres influyen
          en el color que tendremos en los ojos, si seremos más altos o más
          bajos, y también contienen órdenes que se dan en determinados períodos
          de la vida, por ejemplo, cuando parar de crecer en estatura o si
          tendremos más posibilidad de padecer de alguna enfermedad.
        </Paragraph>
        <Paragraph>
          Así, hay genes que controlan el crecimiento y replicación de las
          células, y cuando se alteran, se pierde el control de este
          crecimiento. Hay otros que se dedican a reparar estos genes dañados.
          El balance entre estos genes hace que tengamos o no predisposición
          genética a padecer de ciertos tipos de cánceres.
        </Paragraph>
        <Paragraph>
          Hablamos de predisposición, pues hay un grupo de factores externos que
          pueden alterar este balance. Tomar mucho sol puede predisponernos a
          tener cáncer de piel, ciertos tipos de alimentos predisponen al cáncer
          de colon, el cigarro aumenta mucho la posibilidad de padecer cáncer de
          pulmón. Por el contrario, otros hábitos nos protegen: la ingestión de
          fibra dietética nos protege del cáncer de colon, la protección
          (vacuna) del virus de la hepatitis B nos protege del cáncer de hígado.
        </Paragraph>
        <Paragraph>
          Hay cambios en el organismo que son benignos que aumentan la
          posibilidad de padecer de cáncer. Por ejemplo, algunos tipos de
          adenomas del colon son benignos, pero la probabilidad de que se
          vuelvan malignos puede ser alta; algunos tipos de lunares de la piel
          son benignos pero pueden transformarse en malignos.
        </Paragraph>
        <Paragraph>
          Por ello, hay personas más propensas que otras a padecer de cáncer.
          Dependerá de sus genes y de los hábitos saludables o no que tenga a lo
          largo de la vida.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁNTOS TIPOS DE CÁNCER HAY?</Subheading>
        <Paragraph>
          Aunque el mecanismo de producción de los tumores malignos en esencia
          es el mismo en todos, hay muchos tipos de cáncer. Algunos son más
          frecuentes a edades más tempranas, y otros, como el de próstata y
          colon se ven más en edades avanzadas.
        </Paragraph>
        <Paragraph>
          Esto es importante pues no todos tienen el mismo comportamiento, el
          mismo tratamiento ni el mismo pronóstico. Así, hay tumores malignos de
          colon y de piel que cuando se detectan y se tratan oportunamente, la
          curación es del 100%. Hay otros, como el de próstata, en que
          actualmente la sobrevida a los cinco años es de 95%, tratándolos
          adecuadamente.
        </Paragraph>
        <Paragraph>
          Más de la tercera parte de casi todos los cánceres puede prevenirse
          con algunos cambios en nuestras rutinas diarias.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PODEMOS HACER PARA SU PREVENCIÓN?</Subheading>
        <Paragraph>
          En la mayoría de las enfermedades, la prevención no es absoluta. ¿Qué
          quiere decir esto? Que aunque sigamos al pie de la letra las
          instrucciones para prevenir tal o cual enfermedad, existe cierta
          probabilidad de que la adquiramos. ¿Entonces para qué hacer
          prevención? Porque esta disminuye mucho el riesgo de padecer ciertas
          enfermedades. A la larga merece la pena.
        </Paragraph>
        <Paragraph>
          Por ejemplo, se sabe que el consumo excesivo de grasas y azúcares
          aumenta la posibilidad de que desarrollemos enfermedades del corazón o
          diabetes. Sin embargo, todos conocemos personas que consumen mucha
          grasa, tienen sobrepeso y no padecen del corazón ni son diabéticos.
          ¿Por qué ocurre esto? Hoy en día se sabe que los genes que tenemos,
          nos ayudan a no padecer determinadas enfermedades o a tenerlas a pesar
          de tener hábitos saludables. Las personas con genes que nos hacen
          proclives a tener alguna enfermedad, y que tenemos hábitos de vida
          saludables, en muchas ocasiones demoramos la aparición de la
          enfermedad. Este es otro motivo para practicar la prevención. Y es el
          caso en muchos tipos de cáncer.
        </Paragraph>
        <Paragraph />
        <Subheading>CREENCIAS POPULARES SOBRE EL CÁNCER</Subheading>
        <Paragraph>
          Existen creencias populares sobre el cáncer, que pueden hacer que
          tengamos conductas no saludables, como por ejemplo: ingerir sustancias
          que no se ha demostrado que sean beneficiosas, o que nos demoremos en
          tomar las medidas adecuadas para detectar el cáncer tempranamente o
          que no comencemos tratamientos de eficacia demostrada.
        </Paragraph>
        <Paragraph>
          A continuación abordemos algunas presunciones populares sobre esta
          enfermedad:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Si no tengo dolor no tengo cáncer</Bold>. Esto no es así, y
          puede crear conductas erróneas en la detección temprana, como no me
          hago la prueba citológica si no tengo dolor o sangramiento, o el tacto
          rectal para ver cómo está mi próstata. Mientras más temprano se
          detecte el cáncer, mayor probabilidad de sobrevida tendremos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>El cáncer es contagioso</Bold>. De manera excepcional el cáncer
          se puede trasmitir de una persona a otra. Hay bacterias o virus que
          favorecen ciertos tipos de cáncer, como el virus del papiloma humano,
          que sí se pueden trasmitir de una persona a otra, pero el que se
          trasmita no quiere decir que se trasmita el cáncer. Depende de la
          susceptibilidad de la persona a padecerlo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>
            Operar el cáncer puede hacer que este se extienda más rápido
          </Bold>
          . Hoy en día cada vez es más raro que esto ocurra si se siguen los
          procedimientos adecuados por el cirujano y su equipo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>El cáncer es hereditario</Bold>. Pocas veces es así. Menos del
          10% de los cánceres son causados por daños genéticos que heredamos. El
          resto, no tiene que ver con la herencia. Igualmente existen otras
          opiniones que vivir cerca de una central eléctrica, el uso de
          teléfonos celulares, ninguna de estas situaciones produce cáncer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Finalmente, y en contra de lo que muchas personas creemos, no se ha
          demostrado científicamente que alguna hierba medicinal cura el cáncer.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PUEDO HACER PARA PREVENIR EL CÁNCER?</Subheading>
        <Paragraph>
          Ya hemos visto que la posibilidad de padecer de un cáncer depende de
          nuestros genes y de los hábitos de vida que tengamos. Tener genes
          “malos” puede atenuarse con estilos de vida saludables, y la
          protección de genes “buenos” puede echarse a perder por hábitos no
          saludables.
        </Paragraph>
        <Paragraph>
          La prevención del cáncer se basa en tener estilos de vida sanos y en
          realizar determinadas pruebas que está demostrado que detectan
          tempranamente ciertos tipos de cáncer lo cual hace que sean curables
          muchas veces o que con tratamiento desde el inicio de la enfermedad,
          podamos vivir mucho tiempo.
        </Paragraph>
        <Paragraph />
        <Subheading>HÁBITOS DE VIDA</Subheading>
        <Paragraph>
          Más del 20% de los fallecimientos por cáncer en el mundo se producen
          por el hábito de fumar o mascar tabaco. Las sustancias contenidas en
          el tabaco, al ser inhaladas, aumenta la posibilidad de cáncer de
          pulmón, boca, vejiga y de las cuerdas vocales entre otros. También la
          inhalación del humo del cigarro de otra persona (fumador pasivo)
          aumenta el riesgo de padecerlo.
        </Paragraph>
        <Paragraph>
          Dejar de fumar no es fácil, hay varios métodos para ello, como
          terapias conductuales, parches de nicotina, entre otros. Consulte a su
          médico para que lo oriente.
        </Paragraph>
        <Paragraph>
          El sobrepeso se ha asociado a varios tipos de cáncer, como mama, colon
          y riñón. Esto está muy relacionado con la falta de actividad física y
          con la dieta con muchas calorías.
        </Paragraph>
        <Paragraph>
          Realizar algún tipo de actividad física o ejercicios de forma regular
          ayuda a controlar el peso. Si somos de los que habitualmente no hemos
          realizado regularmente ejercicios, nos costará trabajo comenzar a
          hacerlo.
        </Paragraph>
        <Paragraph>
          Hay varios métodos para ello, consulte a su médico para conocer si
          tiene alguna limitación para algún tipo de ejercicio en particular.
          Realizar caminatas es un comienzo excelente.
        </Paragraph>
        <Paragraph>
          Existen otros factores que no se relacionan tanto con nuestros hábitos
          de vida, como son la contaminación ambiental, las radiaciones y el
          exceso de sol, que conocer sobre ellas nos puede ayudar a prevenir
          ciertos tipos de cáncer.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ALIMENTOS SE ASOCIAN A TENER O NO CÁNCER?</Subheading>
        <Paragraph>
          Más del 20% del cáncer de la boca se atribuye al alcohol. Si fumamos,
          el riesgo es mayor. El riesgo aumenta con la cantidad de alcohol que
          bebamos, y esto también es válido para el cáncer de hígado. El
          alcoholismo en exceso, al igual que el hábito de fumar en cualquier
          magnitud, son difíciles de eliminar, pues crean dependencias en el
          cuerpo, pero no es imposible. Existen grupos de ayuda para el
          alcoholismo, consulte a su médico si considera que necesita ayuda.
        </Paragraph>
        <Paragraph>
          La ingesta de abundante fibra dietética, vegetales y frutas se ha
          asociado a protección contra el cáncer en general. Hay productos
          alimentarios a los que se les atribuye que previene o cura el cáncer.
          Hasta ahora no hay ninguno demostrado que haga esto.
        </Paragraph>
        <Paragraph>
          Finalmente, es importante que usted conozca que hay algunos alimentos
          que parecen aumentar el riesgo de contraer cáncer si se consumen
          mucho, como los alimentos ahumados y procesados (embutidos), podemos
          seguir comiéndolos (pero...ojo con la sal y la presión arterial), no
          abusemos de ellos.
        </Paragraph>
        <Paragraph />
        <Subheading>EXÁMENES PERIÓDICOS PREVENTIVOS</Subheading>
        <Paragraph>
          La detección temprana de muchos tipos de cáncer los vuelve curables.
          Para ellos existen un grupo de pruebas que las personas debemos
          hacernos periódicamente, como son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Autoexamen de mama.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Mamografía.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Tacto rectal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Prueba citológica.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold>Sangre oculta en heces fecales.
        </Paragraph>
        <Paragraph>
          Consulte a su médico para informarse más y prevenir enfermedades.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'13-1'}
          question={'1. Sobre el cáncer:'}
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
            'Tumor y cáncer es lo mismo.',
            'El cáncer siempre da dolor.',
            'Las dos anteriores son falsas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'13-3'}
          question={'3. Podemos disminuir la posibilidad de tener cáncer si:'}
          answers={[
            'Si tenemos una dieta con bastantes vegetales.',
            'Si nos realizamos las pruebas de detección temprana como sangre oculta en heces fecales.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Gran parte de todos los tipos de cáncer son evitables.',
            'Mientras más temprano se detecte el cáncer, mayor posibilidad de sobrevivir y llevar una vida normal.',
            'Comer poca ensalada predispone a padecer de tumores del colon.',
            'El exceso de sol predispone a cáncer de piel. Protéjase la piel.',
            'A los dos años de dejar de fumar, el riesgo de cáncer de pulmón disminuye notablemente.',
            'La actividad física y estar normal de peso brinda alguna protección para algunos tipos de cáncer.',
            'Comer abundante fibra dietética, vegetales y frutas puede brindar protección contra el cáncer en general.',
            'La prueba citológica, el autoexamen de mama y la sangre oculta en heces fecales ayudan a que si se detecta algo, la posibilidad de curación es mayor.',
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
