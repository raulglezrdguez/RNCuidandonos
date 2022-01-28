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
import Fig7 from '../components/Fig7';

const Triste = ({navigation}) => {
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
      await AsyncStorage.setItem('@sTriste', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sTriste');
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
          onPress={() => navigate('Alimentarnos')}>
          <Text>{'¿Qué es alimentarnos sanamente?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ESTOY TRISTE, PERO... ¿ESTOY DEPRIMIDO?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a depresión es uno de los padecimientos mentales más
          frecuentes en las personas mayores y puede llegar a limitarnos en el
          día a día. Se ve con mayor frecuencia en las mujeres que en los
          hombres. A veces está asociada a cambios y procesos de adaptación ante
          eventos típicos de la edad, como la jubilación o a la pérdida de un
          ser querido, tener discapacidad y dependencia y en ocasiones puede
          deberse a algunos medicamentos o padecimientos médicos agregados.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁNDO ES DEPRESIÓN Y CUÁNDO ES TRISTEZA?</Subheading>
        <Paragraph>
          En algún período de nuestras vidas, hemos tenido sentimientos de
          tristeza. Ante una situación que nos cause aflicción, sentirse triste
          es normal. Casi siempre logramos superar ese momento y seguimos
          viviendo. Pero cuando esa tristeza no se puede rebasar y por el
          contrario dura meses, es muy intensa, y cambia nuestra vida; entonces
          estamos deprimidos.
        </Paragraph>
        <Paragraph>
          Cuando se tiene depresión, tenemos pérdida de la capacidad de
          disfrutar las actividades que antes nos eran agradables y placenteras,
          sensaciones de desesperanza y desánimo, de falta de vitalidad para
          hacer las cosas.
        </Paragraph>
        <Paragraph>
          Además de lo referido hasta aquí, también podemos tener sentimientos
          de inferioridad, hacernos demasiados reproches, sentir culpa excesiva,
          puede que comencemos a padecer insomnio o hipersomnia, disminución o
          aumento del apetito, y en general habrá una disminución de nuestro
          funcionamiento si lo comparamos a como éramos antes de sentirnos así.
        </Paragraph>
        <Paragraph>
          Además de esta manera de sentirnos, en las personas mayores la
          depresión puede presentarse diferente a como se puede ver en las
          personas más jóvenes y lo peor de todo es que se puede pensar que
          sentirse así es producto a que estamos más viejos, sobre todo por la
          lentitud en el andar y la falta de energía.
        </Paragraph>
        <Paragraph>
          Por eso es importante que sepamos qué cosa no es una depresión. La
          depresión es una enfermedad, no es un proceso normal asociado con el
          envejecimiento. Además, la tristeza como tal no lleva tratamiento,
          quizás solo una buena conversación con alguien en que confiemos, pero
          la depresión sí debe llevar tratamiento para lograr la mejoría.
        </Paragraph>
        <Paragraph>
          No es depresión sentirnos pesimistas o apenados debido a alguna
          pérdida o evento negativo, ni tampoco es depresión cuando estamos
          triste por tener un duelo por la pérdida de un ser querido, siempre y
          cuando nos vayamos reponiendo en las semanas siguientes.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO PUEDE PRESENTARSE LA DEPRESIÓN EN LAS PERSONAS MAYORES?
        </Subheading>
        <Paragraph>
          La depresión en las personas mayores puede no presentarse igual que a
          otras edades como comentamos anteriormente. Por ejemplo, puede existir
          una asistencia excesiva al médico, por motivos poco claros, síntomas
          vagos, síntomas como dolores y por sentir fatiga principalmente en la
          primera mitad del día sin que haya motivo aparente que la pueda
          causar. Esta fatiga puede dificultar la realización de las actividades
          diarias.
        </Paragraph>
        <Paragraph>
          Hay personas que son más proclives a padecer depresión, y esto es
          debido a que presentan factores de riesgo para la misma. Como dijimos,
          somos más vulnerables si vivimos solos porque la familia es el grupo
          social más importante en la vida, al igual que si nos mantenemos
          aislados socialmente con pocos amigos y amigas. Además, no tener
          pareja o haber enviudado recientemente son factores que pueden
          favorecer la depresión, con más frecuencia en los hombres que en las
          mujeres mayores. Asimismo, tener enfermedades crónicas mal controladas
          y que se acompañen de discapacidad y dependencia, lo que conlleva a
          que “no podemos hacer lo mismo de antes” también nos predispone.
        </Paragraph>
        <Paragraph>
          Además de lo anterior, si consideramos que nuestra salud es mala, si
          no vemos u oímos bien, si tomamos demasiado alcohol y si tenemos bajos
          ingresos económicos, son cosas que nos hace más propensos a la
          depresión.
        </Paragraph>
        <Paragraph>
          Por otro lado, existen algunas medicinas que pueden ocasionar síntomas
          depresivos, por ejemplo, los que se toman “para los nervios” como el
          diazepam y clordiazepóxido, levodopa (que es un medicamento que se
          utiliza para tratar la enfermedad de Parkinson), algunas medicinas
          para las alergias, (llamados antihistamínicos), el corazón o la
          presión alta como el atenolol, carvedilol o propranolol, entre otros.
          Esto no quiere decir que esas medicinas siempre producen depresión, es
          solo en pocos casos. Es importante también saber que no debe parar de
          tomar sus medicinas sin ver a su médico, ni tomar medicinas
          recomendadas por un amigo o vecino.
        </Paragraph>
        <Paragraph>
          Pero como mismo hay factores que nos predisponen a la depresión, hay
          otros que nos protegen de ella y nos ayudan a superarla si la
          padecemos. Estos factores se conocen como factores protectores. Ser
          mujer, a pesar de que las hace más propenso a padecerla, al mismo
          tiempo las ayuda a superarla, aunque parezca contradictorio, y esto se
          debe a que la depresión en las mujeres es menos dañina que en los
          hombres. También si tenemos un buen apoyo social y familiar, buenos
          vecinos, y no abusamos del alcohol, nos ayudará con esta enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SÉ SI TENGO DEPRESIÓN?</Subheading>
        <Paragraph>
          Existen tres aspectos que pueden hacer que sospechemos que estamos
          deprimidos: tener una visión negativa del mundo, del futuro y de uno
          mismo. Pero todo lo que hemos mencionado aquí nos puede hacer
          sospechar que nosotros u otra persona a quien conozcamos, pudiera
          tener depresión, pero la certeza real de si la padece o no, solo la
          puede hacer un médico o psicólogo. Por ello siempre es aconsejable que
          se confirme o no el diagnóstico.
        </Paragraph>
        <Fig7 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Habitualmente el médico de la familia o el psicólogo nos hará un grupo
          de preguntas y quizás nos aplique algún cuestionario para confirmar o
          no la presencia de depresión. Casi siempre esto es suficiente para
          confirmar o no, si tenemos la enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>¿Y QUÉ HAGO SI TENGO DEPRESIÓN?</Subheading>
        <Paragraph>
          Bueno, supongamos que ya un profesional nos confirmó que tenemos
          depresión. Hay dos tipos de tratamientos: la psicoterapia y consejería
          ofrecida por un especialista y los medicamentos antidepresivos. La
          depresión habitualmente mejora o desaparece con uno de estos tipos de
          tratamiento o con la combinación de ambos.
        </Paragraph>
        <Paragraph>
          Existen varios tipos de psicoterapia, como son las llamadas de apoyo,
          conductual, cognitiva y la socioterapia. La elección de cuál es la
          mejor para nosotros y el éxito que se pueda lograr, va a depender
          muchas veces de la intensidad de la depresión y de la capacidad que
          tengamos en seguir los consejos que nos brinda. Este tratamiento lo
          ofrecen habitualmente psicólogos o médicos psiquiatras.
        </Paragraph>
        <Paragraph>
          A veces es suficiente con este tipo de tratamiento que no lleva
          medicinas, pero a veces será necesario tomar medicinas para la
          depresión. Si este fuera el caso y su médico le indica medicamentos,
          tenga siempre en cuenta que:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Algunos medicamentos antidepresivos pueden tener
          efectos sedantes (dan un poco de sueño) y pueden llegar, en las
          personas mayores, a causar estados de confusión como trastornos de la
          conducta.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Pueden tener otros efectos colaterales, en especial
          sobre el corazón, en este caso si padece del corazón o toma pastillas
          para esta enfermedad, no deje de comentárselo a su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si está tomando medicamentos por otras enfermedades,
          estos pueden interactuar con los nuevos que le indiquen para la
          depresión y provocarle reacciones desagradables. No deje de decirle a
          su médico las medicinas que toma.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si es consumidor de bebidas alcohólicas debe tener
          especial precaución y consultarle a su médico sobre las interacciones
          de las medicinas con el alcohol.
        </Paragraph>
        <Paragraph />
        <Subheading>ALGUNOS CONSEJOS</Subheading>
        <Paragraph>
          Estos consejos son para todas las personas en general, para vivir
          mejor y en especial para aquellas que están tristes a menudo o padecen
          de depresión y que con independencia del tipo de tratamiento que nos
          hayan indicado, aconsejamos cumpla estas recomendaciones en
          correspondencia con su personalidad y sus hábitos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Viva cerca de personas queridas por usted y que le
          quieran.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Visite a su médico con la frecuencia que este señale si
          es que padece de alguna enfermedad. Varias enfermedades tienen
          síntomas depresivos, aunque no sean una depresión como tal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Aprenda a estar alerta ante los síntomas de depresión.
          Mientras más temprano actúe sobre ella, mejor serán los resultados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Algunas situaciones que nos predisponen a tener
          síntomas depresivos no pueden ser resueltas por nosotros solos. En
          este caso busque ayuda profesional y hablemos de los nuevos problemas
          con alguien de nuestra confianza.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No utilice bebidas alcohólicas para “salir” de la
          depresión. Puede ser peor.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El hogar no es el único lugar donde podemos sentirnos
          felices, hay otros lugares cercanos en los que podamos pasar un buen
          rato. Busque compañía si le gusta ir a estos lugares.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si ayudamos a alguien nos sentiremos mejor, entonces
          considere que siempre hay alguien a quien podamos ayudar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Discuta lo menos posible, si decimos nuestras
          inquietudes de forma directa, en buen tono, en el momento y a la
          persona adecuada, tendremos mejores resultados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de dormir lo necesario. Recuerde que no todos
          necesitamos el mismo tiempo de dormir. Lo importante es que
          amanezcamos descansados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Practicar ejercicios nos mantienen saludable y activos.
          Hagamos “un tiempito” todos los días. Si tenemos duda de cuál
          ejercicio hacer, consultemos a un especialista.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Haga cosas que lo hagan sentirse feliz.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'7-1'}
          question={'1. La depresión:'}
          answers={[
            'Puede durar una o dos semanas.',
            'La tristeza y la depresión son lo mismo.',
            'Dura más de dos semanas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'7-2'}
          question={'2. Es más fácil que aparezca depresión si:'}
          answers={[
            'Si no tenemos pareja o vivimos solos.',
            'Padecemos alguna discapacidad o dependencia.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'7-3'}
          question={'3. Si tengo depresión o estoy triste me pudiera ayudar:'}
          answers={[
            'Tener contactos frecuentes con personas que nos quieren.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores pueden ayudar a las personas con depresión.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La tristeza no es un estado natural en las personas mayores.',
            'La tristeza está presente en la depresión, pero la depresión no es solo tristeza.',
            'La depresión afecta TODA la vida de las personas mayores: su esfera mental, social, médica y funcional.',
            'Es importante buscar ayuda al notar cambios en el estado de ánimo, la depresión tiene cura.',
            'Una vida social activa protege de la depresión.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('IrAlBano')}>
          <Text>{'Me cuesta trabajo ir al baño'}</Text>
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

export default Triste;
