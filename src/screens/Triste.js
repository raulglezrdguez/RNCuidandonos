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
          <Text>{'??Qu?? es alimentarnos sanamente?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ESTOY TRISTE, PERO... ??ESTOY DEPRIMIDO?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a depresi??n es uno de los padecimientos mentales m??s
          frecuentes en las personas mayores y puede llegar a limitarnos en el
          d??a a d??a. Se ve con mayor frecuencia en las mujeres que en los
          hombres. A veces est?? asociada a cambios y procesos de adaptaci??n ante
          eventos t??picos de la edad, como la jubilaci??n o a la p??rdida de un
          ser querido, tener discapacidad y dependencia y en ocasiones puede
          deberse a algunos medicamentos o padecimientos m??dicos agregados.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??NDO ES DEPRESI??N Y CU??NDO ES TRISTEZA?</Subheading>
        <Paragraph>
          En alg??n per??odo de nuestras vidas, hemos tenido sentimientos de
          tristeza. Ante una situaci??n que nos cause aflicci??n, sentirse triste
          es normal. Casi siempre logramos superar ese momento y seguimos
          viviendo. Pero cuando esa tristeza no se puede rebasar y por el
          contrario dura meses, es muy intensa, y cambia nuestra vida; entonces
          estamos deprimidos.
        </Paragraph>
        <Paragraph>
          Cuando se tiene depresi??n, tenemos p??rdida de la capacidad de
          disfrutar las actividades que antes nos eran agradables y placenteras,
          sensaciones de desesperanza y des??nimo, de falta de vitalidad para
          hacer las cosas.
        </Paragraph>
        <Paragraph>
          Adem??s de lo referido hasta aqu??, tambi??n podemos tener sentimientos
          de inferioridad, hacernos demasiados reproches, sentir culpa excesiva,
          puede que comencemos a padecer insomnio o hipersomnia, disminuci??n o
          aumento del apetito, y en general habr?? una disminuci??n de nuestro
          funcionamiento si lo comparamos a como ??ramos antes de sentirnos as??.
        </Paragraph>
        <Paragraph>
          Adem??s de esta manera de sentirnos, en las personas mayores la
          depresi??n puede presentarse diferente a como se puede ver en las
          personas m??s j??venes y lo peor de todo es que se puede pensar que
          sentirse as?? es producto a que estamos m??s viejos, sobre todo por la
          lentitud en el andar y la falta de energ??a.
        </Paragraph>
        <Paragraph>
          Por eso es importante que sepamos qu?? cosa no es una depresi??n. La
          depresi??n es una enfermedad, no es un proceso normal asociado con el
          envejecimiento. Adem??s, la tristeza como tal no lleva tratamiento,
          quiz??s solo una buena conversaci??n con alguien en que confiemos, pero
          la depresi??n s?? debe llevar tratamiento para lograr la mejor??a.
        </Paragraph>
        <Paragraph>
          No es depresi??n sentirnos pesimistas o apenados debido a alguna
          p??rdida o evento negativo, ni tampoco es depresi??n cuando estamos
          triste por tener un duelo por la p??rdida de un ser querido, siempre y
          cuando nos vayamos reponiendo en las semanas siguientes.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??C??MO PUEDE PRESENTARSE LA DEPRESI??N EN LAS PERSONAS MAYORES?
        </Subheading>
        <Paragraph>
          La depresi??n en las personas mayores puede no presentarse igual que a
          otras edades como comentamos anteriormente. Por ejemplo, puede existir
          una asistencia excesiva al m??dico, por motivos poco claros, s??ntomas
          vagos, s??ntomas como dolores y por sentir fatiga principalmente en la
          primera mitad del d??a sin que haya motivo aparente que la pueda
          causar. Esta fatiga puede dificultar la realizaci??n de las actividades
          diarias.
        </Paragraph>
        <Paragraph>
          Hay personas que son m??s proclives a padecer depresi??n, y esto es
          debido a que presentan factores de riesgo para la misma. Como dijimos,
          somos m??s vulnerables si vivimos solos porque la familia es el grupo
          social m??s importante en la vida, al igual que si nos mantenemos
          aislados socialmente con pocos amigos y amigas. Adem??s, no tener
          pareja o haber enviudado recientemente son factores que pueden
          favorecer la depresi??n, con m??s frecuencia en los hombres que en las
          mujeres mayores. Asimismo, tener enfermedades cr??nicas mal controladas
          y que se acompa??en de discapacidad y dependencia, lo que conlleva a
          que ???no podemos hacer lo mismo de antes??? tambi??n nos predispone.
        </Paragraph>
        <Paragraph>
          Adem??s de lo anterior, si consideramos que nuestra salud es mala, si
          no vemos u o??mos bien, si tomamos demasiado alcohol y si tenemos bajos
          ingresos econ??micos, son cosas que nos hace m??s propensos a la
          depresi??n.
        </Paragraph>
        <Paragraph>
          Por otro lado, existen algunas medicinas que pueden ocasionar s??ntomas
          depresivos, por ejemplo, los que se toman ???para los nervios??? como el
          diazepam y clordiazep??xido, levodopa (que es un medicamento que se
          utiliza para tratar la enfermedad de Parkinson), algunas medicinas
          para las alergias, (llamados antihistam??nicos), el coraz??n o la
          presi??n alta como el atenolol, carvedilol o propranolol, entre otros.
          Esto no quiere decir que esas medicinas siempre producen depresi??n, es
          solo en pocos casos. Es importante tambi??n saber que no debe parar de
          tomar sus medicinas sin ver a su m??dico, ni tomar medicinas
          recomendadas por un amigo o vecino.
        </Paragraph>
        <Paragraph>
          Pero como mismo hay factores que nos predisponen a la depresi??n, hay
          otros que nos protegen de ella y nos ayudan a superarla si la
          padecemos. Estos factores se conocen como factores protectores. Ser
          mujer, a pesar de que las hace m??s propenso a padecerla, al mismo
          tiempo las ayuda a superarla, aunque parezca contradictorio, y esto se
          debe a que la depresi??n en las mujeres es menos da??ina que en los
          hombres. Tambi??n si tenemos un buen apoyo social y familiar, buenos
          vecinos, y no abusamos del alcohol, nos ayudar?? con esta enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO S?? SI TENGO DEPRESI??N?</Subheading>
        <Paragraph>
          Existen tres aspectos que pueden hacer que sospechemos que estamos
          deprimidos: tener una visi??n negativa del mundo, del futuro y de uno
          mismo. Pero todo lo que hemos mencionado aqu?? nos puede hacer
          sospechar que nosotros u otra persona a quien conozcamos, pudiera
          tener depresi??n, pero la certeza real de si la padece o no, solo la
          puede hacer un m??dico o psic??logo. Por ello siempre es aconsejable que
          se confirme o no el diagn??stico.
        </Paragraph>
        <Fig7 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          Habitualmente el m??dico de la familia o el psic??logo nos har?? un grupo
          de preguntas y quiz??s nos aplique alg??n cuestionario para confirmar o
          no la presencia de depresi??n. Casi siempre esto es suficiente para
          confirmar o no, si tenemos la enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>??Y QU?? HAGO SI TENGO DEPRESI??N?</Subheading>
        <Paragraph>
          Bueno, supongamos que ya un profesional nos confirm?? que tenemos
          depresi??n. Hay dos tipos de tratamientos: la psicoterapia y consejer??a
          ofrecida por un especialista y los medicamentos antidepresivos. La
          depresi??n habitualmente mejora o desaparece con uno de estos tipos de
          tratamiento o con la combinaci??n de ambos.
        </Paragraph>
        <Paragraph>
          Existen varios tipos de psicoterapia, como son las llamadas de apoyo,
          conductual, cognitiva y la socioterapia. La elecci??n de cu??l es la
          mejor para nosotros y el ??xito que se pueda lograr, va a depender
          muchas veces de la intensidad de la depresi??n y de la capacidad que
          tengamos en seguir los consejos que nos brinda. Este tratamiento lo
          ofrecen habitualmente psic??logos o m??dicos psiquiatras.
        </Paragraph>
        <Paragraph>
          A veces es suficiente con este tipo de tratamiento que no lleva
          medicinas, pero a veces ser?? necesario tomar medicinas para la
          depresi??n. Si este fuera el caso y su m??dico le indica medicamentos,
          tenga siempre en cuenta que:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Algunos medicamentos antidepresivos pueden tener
          efectos sedantes (dan un poco de sue??o) y pueden llegar, en las
          personas mayores, a causar estados de confusi??n como trastornos de la
          conducta.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Pueden tener otros efectos colaterales, en especial
          sobre el coraz??n, en este caso si padece del coraz??n o toma pastillas
          para esta enfermedad, no deje de coment??rselo a su m??dico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si est?? tomando medicamentos por otras enfermedades,
          estos pueden interactuar con los nuevos que le indiquen para la
          depresi??n y provocarle reacciones desagradables. No deje de decirle a
          su m??dico las medicinas que toma.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Si es consumidor de bebidas alcoh??licas debe tener
          especial precauci??n y consultarle a su m??dico sobre las interacciones
          de las medicinas con el alcohol.
        </Paragraph>
        <Paragraph />
        <Subheading>ALGUNOS CONSEJOS</Subheading>
        <Paragraph>
          Estos consejos son para todas las personas en general, para vivir
          mejor y en especial para aquellas que est??n tristes a menudo o padecen
          de depresi??n y que con independencia del tipo de tratamiento que nos
          hayan indicado, aconsejamos cumpla estas recomendaciones en
          correspondencia con su personalidad y sus h??bitos:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Viva cerca de personas queridas por usted y que le
          quieran.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Visite a su m??dico con la frecuencia que este se??ale si
          es que padece de alguna enfermedad. Varias enfermedades tienen
          s??ntomas depresivos, aunque no sean una depresi??n como tal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Aprenda a estar alerta ante los s??ntomas de depresi??n.
          Mientras m??s temprano act??e sobre ella, mejor ser??n los resultados.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Algunas situaciones que nos predisponen a tener
          s??ntomas depresivos no pueden ser resueltas por nosotros solos. En
          este caso busque ayuda profesional y hablemos de los nuevos problemas
          con alguien de nuestra confianza.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>No utilice bebidas alcoh??licas para ???salir??? de la
          depresi??n. Puede ser peor.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>El hogar no es el ??nico lugar donde podemos sentirnos
          felices, hay otros lugares cercanos en los que podamos pasar un buen
          rato. Busque compa????a si le gusta ir a estos lugares.
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
          Hagamos ???un tiempito??? todos los d??as. Si tenemos duda de cu??l
          ejercicio hacer, consultemos a un especialista.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Haga cosas que lo hagan sentirse feliz.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'7-1'}
          question={'1. La depresi??n:'}
          answers={[
            'Puede durar una o dos semanas.',
            'La tristeza y la depresi??n son lo mismo.',
            'Dura m??s de dos semanas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'7-2'}
          question={'2. Es m??s f??cil que aparezca depresi??n si:'}
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
          question={'3. Si tengo depresi??n o estoy triste me pudiera ayudar:'}
          answers={[
            'Tener contactos frecuentes con personas que nos quieren.',
            'Dar caminatas todos los d??as o casi todos los d??as.',
            'Las dos respuestas anteriores pueden ayudar a las personas con depresi??n.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La tristeza no es un estado natural en las personas mayores.',
            'La tristeza est?? presente en la depresi??n, pero la depresi??n no es solo tristeza.',
            'La depresi??n afecta TODA la vida de las personas mayores: su esfera mental, social, m??dica y funcional.',
            'Es importante buscar ayuda al notar cambios en el estado de ??nimo, la depresi??n tiene cura.',
            'Una vida social activa protege de la depresi??n.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('IrAlBano')}>
          <Text>{'Me cuesta trabajo ir al ba??o'}</Text>
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
