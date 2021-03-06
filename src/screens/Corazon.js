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
import Fig12 from '../components/Fig12';

const Corazon = ({navigation}) => {
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
      await AsyncStorage.setItem('@sCorazon', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sCorazon');
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
          onPress={() => navigate('LosPies')}>
          <Text>{'Tengo dolor en los pies'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>??ESTOY ENFERMO DEL CORAZ??N?</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>as enfermedades del coraz??n son la primera o segunda
          causa de muerte para las personas mayores en muchos pa??ses, y en
          nuestro pa??s son la primera causa. Por supuesto, de algo debemos
          morirnos, pero si logramos ???empujar??? para atr??s el padecimiento del
          coraz??n, es decir, vivir m??s tiempo sin padecer de ??l, el tiempo que
          estaremos vivos lo podremos disfrutar mejor.
        </Paragraph>
        <Paragraph>
          Las enfermedades del coraz??n son muchas, desde las cong??nitas (quiere
          decir que nacemos con ellas) hasta las producidas por el alcohol o la
          inflamaci??n del coraz??n, llamada miocarditis, que a su vez tiene
          m??ltiples causas. Pero en este cap??tulo estaremos hablando de las m??s
          frecuentes, que est??n agrupadas bajo el t??rmino de cardiopat??a
          isqu??mica.
        </Paragraph>
        <Paragraph>
          La cardiopat??a isqu??mica es un grupo de enfermedades que tiene como
          denominador com??n la aterosclerosis. Los vasos sangu??neos en general
          se dividen en arterias, venas y capilares. Las arterias son los vasos
          que salen del coraz??n, las venas las que entran, y los capilares son
          de di??metro muy peque??o, y pudi??ramos decir que enlazan las arterias
          con las venas, y son los encargados de hacer llegar el ox??geno y los
          nutrientes a las c??lulas, as?? como recoger los desechos.
        </Paragraph>
        <Paragraph>
          La aterosclerosis de la que estamos hablando no tienen nada que ver
          con la mente: muchas veces hay una persona con demencia le decimos que
          est?? ???escler??tica???, o que tiene aterosclerosis. Esto, aunque lo
          decimos frecuentemente, no es as??.
        </Paragraph>
        <Fig12 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          La aterosclerosis ocurre cuando por dentro de las arterias se acumulan
          grasa y calcio, formando lo que se conoce como placa ateroscler??tica.
          Esta placa con el paso de los a??os puede crecer y obstruir el paso de
          la sangre. El coraz??n tiene arterias que lo alimentan, se llaman
          arterias coronarias. Cuando esta acumulaci??n de grasa y calcio ocurre
          en estas arterias coronarias, tenemos cardiopat??a isqu??mica. Cuando se
          ocluye por completo el paso de la sangre por las arterias coronarias,
          entonces ocurre el infarto cardiaco.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??POR QU?? PUEDO PADECER UNA CARDIOPAT??A ISQU??MICA?
        </Subheading>
        <Paragraph>
          Se le llama factores de riesgo a las situaciones, h??bitos o costumbres
          que aumentan la posibilidad de que ocurra un da??o a nuestra salud. La
          cardiopat??a isqu??mica tiene un grupo de factores de riesgo, que si los
          tenemos, nos hacen m??s propensos a padecer del coraz??n. Es bueno
          aclarar que los factores de riesgo no act??an igual en todas las
          personas, es decir, dos personas diferentes con el mismo factor de
          riesgo, de la misma intensidad, el efecto puede ser distinto. Pero de
          manera general, mientras m??s de estos factores tengamos, m??s
          posibilidad de padecer una cardiopat??a isqu??mica tendremos. A
          continuaci??n los explicamos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Colesterol alto</Bold>. Es uno de los principales factores. El
          colesterol se encuentra en todo el organismo, y hace falta para el
          buen funcionamiento del mismo. Se produce normalmente en el h??gado, y
          adem??s se obtiene por ciertos alimentos de la dieta. Los alimentos que
          contienen grasa de origen animal son los que m??s colesterol tienen. El
          colesterol est?? formado por colesterol ???bueno??? y ???malo???. Cuando hay un
          exceso de colesterol malo, este se comienza a depositar en las paredes
          interiores de las arterias, y se forma la anteriormente mencionada
          placa ateroscler??tica. Y esta placa ya sabemos lo que puede hacer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Presi??n alta</Bold>. Conocida como hipertensi??n arterial, es
          otro de los principales factores que producen aterosclerosis. El hecho
          de que por las arterias la sangre circule con mayor presi??n, a la
          larga va lastimando las paredes de las mismas, y la va endureciendo y
          volviendo r??gidas. Esto puede dificultar el paso de la sangre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>H??bito de fumar</Bold>. Este h??bito es un factor de riesgo para
          muchas enfermedades en diferentes ??rganos, principalmente los pulmones
          y el coraz??n. En las arterias acelera la aterosclerosis, con formaci??n
          de placas y endurecimiento de las mismas. Cuando esto ocurre en el
          coraz??n, casi siempre desemboca en una cardiopat??a isqu??mica. El
          h??bito de fumar tambi??n sube la presi??n arterial, que como vimos
          anteriormente tambi??n es un factor de riesgo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Obesidad</Bold>. El aumento de peso por s?? mismo, hace que el
          coraz??n tenga que trabajar m??s, pero el principal efecto de estar
          sobrepeso es que sube la presi??n arterial y puede producir diabetes,
          que a su vez son factores de riesgo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Diabetes</Bold>. Esta enfermedad acelera la aterosclerosis, a
          trav??s del endurecimiento de las paredes de las arterias y su
          estrechamiento por la formaci??n de placas ateroscler??ticas. Esto
          ocurre principalmente cuando el az??car en sangre se controla mal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Falta de actividad f??sica</Bold>. El ejercicio f??sico o
          actividad f??sica tiene muchos beneficios sobre el coraz??n, como son
          mantener el peso del cuerpo, ayuda a mantener los niveles de az??car
          normales, y que se padezca menos de presi??n alta. La falta de
          actividad f??sica no aporta estos beneficios, por lo cual se considera
          tambi??n factor de riesgo.
        </Paragraph>

        <Paragraph>
          Adem??s de estos factores, el <Bold>estr??s</Bold> puede favorecer la
          enfermedad del coraz??n. No se conoce bien el mecanismo, pero cuando
          estamos estresados la presi??n arterial nos puede subir, as?? como
          aumentar la frecuencia del coraz??n, lo que hace que necesite m??s
          sangre para su funcionamiento y si las arterias coronarias est??n
          estrechadas por la aterosclerosis, esto pudiera elevar el riesgo de
          enfermedad del coraz??n.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? ENFERMEDADES DEL CORAZ??N SON LAS M??S FRECUENTES Y CU??LES SUS
          S??NTOMAS?
        </Subheading>
        <Paragraph>
          Como son varias las enfermedades, tambi??n son variados los s??ntomas.
          Al principio de la enfermedad coronaria, y por varios a??os, esta puede
          no dar s??ntomas. En otros casos, el primer s??ntoma puede ser un
          infarto.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La <Bold>angina</Bold> es uno de los cuadros m??s frecuentes. Produce
          una molestia en el pecho, como una opresi??n, y no podemos identificar
          con un dedo el lugar del dolor, pues ocurre en un ??rea del pecho m??s
          grande, generalmente en el centro o un poco a la izquierda. El dolor
          puede irradiarse al brazo izquierdo, al cuello, la espalda o al
          est??mago. Puede acompa??arse de falta de aire. Habitualmente calma con
          el reposo o con unas pastillas debajo de la lengua que se llaman
          nitroglicerina.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Si este dolor es persistente y no alivia con el reposo y con la
          nitroglicerina, pudi??ramos estar en presencia de un infarto cardiaco.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La <Bold>insuficiencia card??aca</Bold> es otra enfermedad del coraz??n,
          muy ligada a la cardiopat??a isqu??mica. El coraz??n no puede bombear la
          sangre que el cuerpo necesita, lo que puede provocar s??ntomas de
          molestias en el pecho parecidas a la de la angina y falta de aire,
          principalmente por la noche cuando estamos acostados; tambi??n los pies
          se pueden hinchar, sentir agotamiento, decaimiento as?? como nos cuesta
          m??s trabajo realizar las actividades diarias.
        </Paragraph>

        <Paragraph style={{marginHorizontal: 16}}>
          El coraz??n late con un ritmo regular que puede variar entre 60 y 100
          latidos por minuto. La enfermedad del coraz??n puede expresarse por un
          trastorno de este ritmo, ya sea en su frecuencia como en su cadencia.
          Puede ser que lata a m??s de 100 latidos por minutos (taquicardia), a
          menos de 60 (bradicardia) o que lo haga de manera irregular. Todo eso
          se llama arritmia. Cuando esto ocurre, lo que sentimos son las
          llamadas palpitaciones.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??C??MO PUEDO SABER SI TENGO UNA ENFERMEDAD DEL CORAZ??N?
        </Subheading>
        <Paragraph>
          Si sospechamos que tenemos alguna enfermedad del coraz??n, debemos
          acudir al m??dico. Este nos har?? un grupo de preguntas y algunas
          pruebas, como el electrocardiograma, un ecocardiograma (ultrasonido
          del coraz??n), u otras pruebas si lo entendiera pertinente para dar con
          lo que tenemos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??Y C??MO EVITAR UNA CARDIOPAT??A ISQU??MICA O SI LA TENGO, C??MO EVITAR
          UNA COMPLICACI??N?
        </Subheading>
        <Paragraph>
          Para prevenir enfermarnos del coraz??n, o si ya tenemos una cardiopat??a
          isqu??mica y queremos enlentecer o detener su progreso y que no ocurran
          complicaciones, hay varias cosas que podemos hacer. Por un lado est??n
          los medicamentos para los que ya la padecemos, y por el otro tan
          importante como las medicinas est?? el cambiar algunos h??bitos de
          nuestra vida.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? MEDICAMENTOS SE TOMAN PARA LA CARDIOPAT??A ISQU??MICA?
        </Subheading>
        <Paragraph>
          Los medicamentos los indica el m??dico, y entre ellos los m??s
          frecuentemente usados si no hay complicaciones de la enfermedad del
          coraz??n que tengamos, est?? la aspirina. Si no hay contraindicaciones
          de tomar la aspirina, este es uno de los mejores medicamentos si
          padecemos cardiopat??a isqu??mica.
        </Paragraph>
        <Paragraph>
          No recomendamos que las personas la tomen (ni ning??n otro medicamento)
          con cualquier fin sin consultar a su m??dico. Las personas que la
          tomen, deben estar atentas a las reacciones no deseadas que esta puede
          producir, como dolor de est??mago, sangramientos digestivos o alergia a
          la misma.
        </Paragraph>
        <Paragraph>
          Existen otros medicamentos que ayudan a dilatar las arterias
          coronarias cuando est??n estrechadas. Tambi??n hay medicamentos para
          bajar las grasas en exceso de la sangre, en especial el colesterol.
          Todos los medicamentos tienen reacciones no deseadas, m??s a??n en las
          personas mayores donde el metabolismo y la excreci??n de los
          medicamentos cambian con el paso de los a??os. Por ello, recomendamos
          no automedicarse y consultar al m??dico.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? CAMBIOS PUEDO HACER EN MI VIDA QUE ME AYUDEN A COMBATIR LAS
          ENFERMEDADES DEL CORAZ??N?
        </Subheading>
        <Paragraph>
          Los h??bitos que tenemos en la vida se establecen desde temprana edad.
          No son f??ciles de cambiar, y menos cuando lo tratamos de hacer siendo
          ya personas mayores. La buena noticia es que aunque los cambiemos
          tard??amente en la vida, traen beneficios, aunque si eso lo hacemos a
          edades tempranas, los beneficios ser??n mayores. El cambio de h??bitos
          es tan v??lido para los que no padecemos del coraz??n como para los que
          ya tenemos la enfermedad. Veremos los principales cambios que podemos
          hacer para tener una mejor salud cardiovascular y general.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Alimentaci??n</Bold>. La dieta debe contener la menor cantidad
          posible de grasas, principalmente las llamadas saturadas, que en la
          pr??ctica son las grasas provenientes de los animales. Eso no quiere
          decir que no ingiramos ninguna grasa. Esto se traduce en que comamos
          frito no m??s de una vez a la semana, que usemos papel absorbente para
          que le extraiga el exceso de grasa a lo que fre??mos, que no le
          agreguemos mucha grasa a la comida, y que cuando la usemos, sea
          preferiblemente de oliva.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Las carnes m??s saludables son el pollo y el pescado. Las verduras no
          deben faltar en nuestra mesa. Son fuente de vitaminas y minerales,
          combaten algunos tipos de c??ncer y el estre??imiento. Las frutas
          tambi??n son muy saludables, pero su contenido en az??car pudiera
          limitar las m??s dulces entre las personas diab??ticas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Mucho se ha hablado de las grasas en la dieta, pero menos del az??car.
          Dentro del organismo, los az??cares que ingerimos en forma de helados,
          refrescos, dulces y pan, se transforman en grasa, y terminan haciendo
          lo mismo. Por ello, debemos limitar nuestra ingesti??n de az??cares en
          la dieta. Es tan importante como limitar las grasas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Adem??s de la grasa, debemos limitar la sal. Su exceso es muy da??ino,
          porque favorece que padezcamos de presi??n alta o puede empeorar
          nuestra enfermedad del coraz??n si ya la padecemos. La presi??n arterial
          ideal es por debajo de 120 la m??xima y 80 la m??nima. Si no es
          hipertenso, chequ??ese la presi??n al menos dos veces al a??o. Mientras
          menos sal consumamos, m??s saludables seseremos. Una buena medida es no
          poner un salero en la mesa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>H??bito de fumar</Bold>. El tabaco, en cualquiera de sus formas,
          es malo para la salud. Fumar puede ser una adicci??n, y resulta muy
          dif??cil a veces poder eliminarlo. Existen varios m??todos con m??s o
          menos ??xito para ello, hay parches de nicotina, cigarrillos
          electr??nicos, y otros. Consulte a su m??dico para que lo oriente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Sobrepeso</Bold>. El estar pasado de peso no es bueno para el
          coraz??n, y mientras m??s libras en exceso tengamos, peor ser??. Una
          combinaci??n de dieta baja en calor??as y ejercicios f??sicos son la
          mejor combinaci??n para bajar de peso. Las personas mayores podemos
          tener algunas limitaciones f??sicas para la realizaci??n de ejercicios,
          pero casi siempre se puede hacer algo de actividad f??sica. Consulte a
          su m??dico para que le indique qu?? ejercicios puede realizar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Actividad f??sica</Bold>. Ejercicios y actividad f??sica no es lo
          mismo, pero ambas, en distinta medida, nos ayudan a gastar calor??as y
          a mantenernos en forma.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Los ejercicios tienen m??ltiples beneficios. Las personas que logran
          realizar ejercicios f??sicos se siente con mejor ??nimo, y m??s aptas
          para realizar las actividades de la vida diaria.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Caminar a paso r??pido al menos tres o cuatro veces a la semana puede
          ayudar mucho a su coraz??n. Si tiene duda de cu??nto puede hacer
          consulte a su m??dico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Otros cambios que ayudan</Bold>. Vivir sin estr??s es imposible.
          Pero controlarlo y que no nos da??e s?? es posible. Existen diferentes
          formas de aprender a manejarlo, desde los ejercicios Tai???Chi hasta
          t??cnicas de relajaci??n relativamente f??ciles. Acuda a un especialista
          si considera que tiene problemas de estr??s.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'10-1'}
          question={'1. La aterosclerosis:'}
          answers={[
            'Es un tipo de demencia.',
            'Es producida por tomar mucha leche.',
            'Es el endurecimiento de las arterias y la principal causa de enfermedades del coraz??n.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'10-2'}
          question={'2. Son factores de riesgo para padecer del coraz??n:'}
          answers={[
            'Comer frito m??s de una vez a la semana.',
            'Tener la presi??n elevada.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'10-3'}
          question={
            '3. Son factores protectores para las enfermedades del coraz??n:'
          }
          answers={[
            'Comer bajo de sal.',
            'Dar caminatas todos los d??as o casi todos los d??as.',
            'Las dos respuestas anteriores pueden ayudar a las personas a no padecer del coraz??n.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Las enfermedades del coraz??n se pueden evitar o retrasar su comienzo.',
            'Los enemigos del coraz??n que podemos evitar son: fumar, el sobrepeso, hacer poca actividad f??sica, el colesterol y la presi??n alta.',
            'Si he tenido angina de pecho, no me deben faltar las pastillas de nitroglicerina a donde quiera que vaya.',
            'Comer bajo de sal y grasa es bueno para el coraz??n.',
            'Comer vegetales y frutas ayuda a tener un coraz??n saludable.',
            'Limitar las cosas dulces para el coraz??n es tan importante como limitar la grasa. Fr??a lo menos posible.',
            'La actividad f??sica es muy buena para el coraz??n. Camine al menos unas cuadras diarias.',
            'El trabajo de la casa cansa mucho, pero no es tan bueno para el coraz??n como el caminar.',
            'Vivir sin estr??s es imposible. Pero controlarlo y que no nos da??e s?? es posible.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Diabetes')}>
          <Text>{'??Qu?? es la diabetes y c??mo manejarla?'}</Text>
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

export default Corazon;
