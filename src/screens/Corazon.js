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
        <Headline style={styles.bold}>¿ESTOY ENFERMO DEL CORAZÓN?</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>as enfermedades del corazón son la primera o segunda
          causa de muerte para las personas mayores en muchos países, y en
          nuestro país son la primera causa. Por supuesto, de algo debemos
          morirnos, pero si logramos “empujar” para atrás el padecimiento del
          corazón, es decir, vivir más tiempo sin padecer de él, el tiempo que
          estaremos vivos lo podremos disfrutar mejor.
        </Paragraph>
        <Paragraph>
          Las enfermedades del corazón son muchas, desde las congénitas (quiere
          decir que nacemos con ellas) hasta las producidas por el alcohol o la
          inflamación del corazón, llamada miocarditis, que a su vez tiene
          múltiples causas. Pero en este capítulo estaremos hablando de las más
          frecuentes, que están agrupadas bajo el término de cardiopatía
          isquémica.
        </Paragraph>
        <Paragraph>
          La cardiopatía isquémica es un grupo de enfermedades que tiene como
          denominador común la aterosclerosis. Los vasos sanguíneos en general
          se dividen en arterias, venas y capilares. Las arterias son los vasos
          que salen del corazón, las venas las que entran, y los capilares son
          de diámetro muy pequeño, y pudiéramos decir que enlazan las arterias
          con las venas, y son los encargados de hacer llegar el oxígeno y los
          nutrientes a las células, así como recoger los desechos.
        </Paragraph>
        <Paragraph>
          La aterosclerosis de la que estamos hablando no tienen nada que ver
          con la mente: muchas veces hay una persona con demencia le decimos que
          está “esclerótica”, o que tiene aterosclerosis. Esto, aunque lo
          decimos frecuentemente, no es así.
        </Paragraph>
        <Fig12 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          La aterosclerosis ocurre cuando por dentro de las arterias se acumulan
          grasa y calcio, formando lo que se conoce como placa aterosclerótica.
          Esta placa con el paso de los años puede crecer y obstruir el paso de
          la sangre. El corazón tiene arterias que lo alimentan, se llaman
          arterias coronarias. Cuando esta acumulación de grasa y calcio ocurre
          en estas arterias coronarias, tenemos cardiopatía isquémica. Cuando se
          ocluye por completo el paso de la sangre por las arterias coronarias,
          entonces ocurre el infarto cardiaco.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿POR QUÉ PUEDO PADECER UNA CARDIOPATÍA ISQUÉMICA?
        </Subheading>
        <Paragraph>
          Se le llama factores de riesgo a las situaciones, hábitos o costumbres
          que aumentan la posibilidad de que ocurra un daño a nuestra salud. La
          cardiopatía isquémica tiene un grupo de factores de riesgo, que si los
          tenemos, nos hacen más propensos a padecer del corazón. Es bueno
          aclarar que los factores de riesgo no actúan igual en todas las
          personas, es decir, dos personas diferentes con el mismo factor de
          riesgo, de la misma intensidad, el efecto puede ser distinto. Pero de
          manera general, mientras más de estos factores tengamos, más
          posibilidad de padecer una cardiopatía isquémica tendremos. A
          continuación los explicamos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Colesterol alto</Bold>. Es uno de los principales factores. El
          colesterol se encuentra en todo el organismo, y hace falta para el
          buen funcionamiento del mismo. Se produce normalmente en el hígado, y
          además se obtiene por ciertos alimentos de la dieta. Los alimentos que
          contienen grasa de origen animal son los que más colesterol tienen. El
          colesterol está formado por colesterol “bueno” y “malo”. Cuando hay un
          exceso de colesterol malo, este se comienza a depositar en las paredes
          interiores de las arterias, y se forma la anteriormente mencionada
          placa aterosclerótica. Y esta placa ya sabemos lo que puede hacer.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Presión alta</Bold>. Conocida como hipertensión arterial, es
          otro de los principales factores que producen aterosclerosis. El hecho
          de que por las arterias la sangre circule con mayor presión, a la
          larga va lastimando las paredes de las mismas, y la va endureciendo y
          volviendo rígidas. Esto puede dificultar el paso de la sangre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Hábito de fumar</Bold>. Este hábito es un factor de riesgo para
          muchas enfermedades en diferentes órganos, principalmente los pulmones
          y el corazón. En las arterias acelera la aterosclerosis, con formación
          de placas y endurecimiento de las mismas. Cuando esto ocurre en el
          corazón, casi siempre desemboca en una cardiopatía isquémica. El
          hábito de fumar también sube la presión arterial, que como vimos
          anteriormente también es un factor de riesgo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Obesidad</Bold>. El aumento de peso por sí mismo, hace que el
          corazón tenga que trabajar más, pero el principal efecto de estar
          sobrepeso es que sube la presión arterial y puede producir diabetes,
          que a su vez son factores de riesgo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Diabetes</Bold>. Esta enfermedad acelera la aterosclerosis, a
          través del endurecimiento de las paredes de las arterias y su
          estrechamiento por la formación de placas ateroscleróticas. Esto
          ocurre principalmente cuando el azúcar en sangre se controla mal.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Falta de actividad física</Bold>. El ejercicio físico o
          actividad física tiene muchos beneficios sobre el corazón, como son
          mantener el peso del cuerpo, ayuda a mantener los niveles de azúcar
          normales, y que se padezca menos de presión alta. La falta de
          actividad física no aporta estos beneficios, por lo cual se considera
          también factor de riesgo.
        </Paragraph>

        <Paragraph>
          Además de estos factores, el <Bold>estrés</Bold> puede favorecer la
          enfermedad del corazón. No se conoce bien el mecanismo, pero cuando
          estamos estresados la presión arterial nos puede subir, así como
          aumentar la frecuencia del corazón, lo que hace que necesite más
          sangre para su funcionamiento y si las arterias coronarias están
          estrechadas por la aterosclerosis, esto pudiera elevar el riesgo de
          enfermedad del corazón.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ ENFERMEDADES DEL CORAZÓN SON LAS MÁS FRECUENTES Y CUÁLES SUS
          SÍNTOMAS?
        </Subheading>
        <Paragraph>
          Como son varias las enfermedades, también son variados los síntomas.
          Al principio de la enfermedad coronaria, y por varios años, esta puede
          no dar síntomas. En otros casos, el primer síntoma puede ser un
          infarto.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La <Bold>angina</Bold> es uno de los cuadros más frecuentes. Produce
          una molestia en el pecho, como una opresión, y no podemos identificar
          con un dedo el lugar del dolor, pues ocurre en un área del pecho más
          grande, generalmente en el centro o un poco a la izquierda. El dolor
          puede irradiarse al brazo izquierdo, al cuello, la espalda o al
          estómago. Puede acompañarse de falta de aire. Habitualmente calma con
          el reposo o con unas pastillas debajo de la lengua que se llaman
          nitroglicerina.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Si este dolor es persistente y no alivia con el reposo y con la
          nitroglicerina, pudiéramos estar en presencia de un infarto cardiaco.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La <Bold>insuficiencia cardíaca</Bold> es otra enfermedad del corazón,
          muy ligada a la cardiopatía isquémica. El corazón no puede bombear la
          sangre que el cuerpo necesita, lo que puede provocar síntomas de
          molestias en el pecho parecidas a la de la angina y falta de aire,
          principalmente por la noche cuando estamos acostados; también los pies
          se pueden hinchar, sentir agotamiento, decaimiento así como nos cuesta
          más trabajo realizar las actividades diarias.
        </Paragraph>

        <Paragraph style={{marginHorizontal: 16}}>
          El corazón late con un ritmo regular que puede variar entre 60 y 100
          latidos por minuto. La enfermedad del corazón puede expresarse por un
          trastorno de este ritmo, ya sea en su frecuencia como en su cadencia.
          Puede ser que lata a más de 100 latidos por minutos (taquicardia), a
          menos de 60 (bradicardia) o que lo haga de manera irregular. Todo eso
          se llama arritmia. Cuando esto ocurre, lo que sentimos son las
          llamadas palpitaciones.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO PUEDO SABER SI TENGO UNA ENFERMEDAD DEL CORAZÓN?
        </Subheading>
        <Paragraph>
          Si sospechamos que tenemos alguna enfermedad del corazón, debemos
          acudir al médico. Este nos hará un grupo de preguntas y algunas
          pruebas, como el electrocardiograma, un ecocardiograma (ultrasonido
          del corazón), u otras pruebas si lo entendiera pertinente para dar con
          lo que tenemos.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿Y CÓMO EVITAR UNA CARDIOPATÍA ISQUÉMICA O SI LA TENGO, CÓMO EVITAR
          UNA COMPLICACIÓN?
        </Subheading>
        <Paragraph>
          Para prevenir enfermarnos del corazón, o si ya tenemos una cardiopatía
          isquémica y queremos enlentecer o detener su progreso y que no ocurran
          complicaciones, hay varias cosas que podemos hacer. Por un lado están
          los medicamentos para los que ya la padecemos, y por el otro tan
          importante como las medicinas está el cambiar algunos hábitos de
          nuestra vida.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ MEDICAMENTOS SE TOMAN PARA LA CARDIOPATÍA ISQUÉMICA?
        </Subheading>
        <Paragraph>
          Los medicamentos los indica el médico, y entre ellos los más
          frecuentemente usados si no hay complicaciones de la enfermedad del
          corazón que tengamos, está la aspirina. Si no hay contraindicaciones
          de tomar la aspirina, este es uno de los mejores medicamentos si
          padecemos cardiopatía isquémica.
        </Paragraph>
        <Paragraph>
          No recomendamos que las personas la tomen (ni ningún otro medicamento)
          con cualquier fin sin consultar a su médico. Las personas que la
          tomen, deben estar atentas a las reacciones no deseadas que esta puede
          producir, como dolor de estómago, sangramientos digestivos o alergia a
          la misma.
        </Paragraph>
        <Paragraph>
          Existen otros medicamentos que ayudan a dilatar las arterias
          coronarias cuando están estrechadas. También hay medicamentos para
          bajar las grasas en exceso de la sangre, en especial el colesterol.
          Todos los medicamentos tienen reacciones no deseadas, más aún en las
          personas mayores donde el metabolismo y la excreción de los
          medicamentos cambian con el paso de los años. Por ello, recomendamos
          no automedicarse y consultar al médico.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ CAMBIOS PUEDO HACER EN MI VIDA QUE ME AYUDEN A COMBATIR LAS
          ENFERMEDADES DEL CORAZÓN?
        </Subheading>
        <Paragraph>
          Los hábitos que tenemos en la vida se establecen desde temprana edad.
          No son fáciles de cambiar, y menos cuando lo tratamos de hacer siendo
          ya personas mayores. La buena noticia es que aunque los cambiemos
          tardíamente en la vida, traen beneficios, aunque si eso lo hacemos a
          edades tempranas, los beneficios serán mayores. El cambio de hábitos
          es tan válido para los que no padecemos del corazón como para los que
          ya tenemos la enfermedad. Veremos los principales cambios que podemos
          hacer para tener una mejor salud cardiovascular y general.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Alimentación</Bold>. La dieta debe contener la menor cantidad
          posible de grasas, principalmente las llamadas saturadas, que en la
          práctica son las grasas provenientes de los animales. Eso no quiere
          decir que no ingiramos ninguna grasa. Esto se traduce en que comamos
          frito no más de una vez a la semana, que usemos papel absorbente para
          que le extraiga el exceso de grasa a lo que freímos, que no le
          agreguemos mucha grasa a la comida, y que cuando la usemos, sea
          preferiblemente de oliva.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Las carnes más saludables son el pollo y el pescado. Las verduras no
          deben faltar en nuestra mesa. Son fuente de vitaminas y minerales,
          combaten algunos tipos de cáncer y el estreñimiento. Las frutas
          también son muy saludables, pero su contenido en azúcar pudiera
          limitar las más dulces entre las personas diabéticas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Mucho se ha hablado de las grasas en la dieta, pero menos del azúcar.
          Dentro del organismo, los azúcares que ingerimos en forma de helados,
          refrescos, dulces y pan, se transforman en grasa, y terminan haciendo
          lo mismo. Por ello, debemos limitar nuestra ingestión de azúcares en
          la dieta. Es tan importante como limitar las grasas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Además de la grasa, debemos limitar la sal. Su exceso es muy dañino,
          porque favorece que padezcamos de presión alta o puede empeorar
          nuestra enfermedad del corazón si ya la padecemos. La presión arterial
          ideal es por debajo de 120 la máxima y 80 la mínima. Si no es
          hipertenso, chequéese la presión al menos dos veces al año. Mientras
          menos sal consumamos, más saludables seseremos. Una buena medida es no
          poner un salero en la mesa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Hábito de fumar</Bold>. El tabaco, en cualquiera de sus formas,
          es malo para la salud. Fumar puede ser una adicción, y resulta muy
          difícil a veces poder eliminarlo. Existen varios métodos con más o
          menos éxito para ello, hay parches de nicotina, cigarrillos
          electrónicos, y otros. Consulte a su médico para que lo oriente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Sobrepeso</Bold>. El estar pasado de peso no es bueno para el
          corazón, y mientras más libras en exceso tengamos, peor será. Una
          combinación de dieta baja en calorías y ejercicios físicos son la
          mejor combinación para bajar de peso. Las personas mayores podemos
          tener algunas limitaciones físicas para la realización de ejercicios,
          pero casi siempre se puede hacer algo de actividad física. Consulte a
          su médico para que le indique qué ejercicios puede realizar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Actividad física</Bold>. Ejercicios y actividad física no es lo
          mismo, pero ambas, en distinta medida, nos ayudan a gastar calorías y
          a mantenernos en forma.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Los ejercicios tienen múltiples beneficios. Las personas que logran
          realizar ejercicios físicos se siente con mejor ánimo, y más aptas
          para realizar las actividades de la vida diaria.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Caminar a paso rápido al menos tres o cuatro veces a la semana puede
          ayudar mucho a su corazón. Si tiene duda de cuánto puede hacer
          consulte a su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Otros cambios que ayudan</Bold>. Vivir sin estrés es imposible.
          Pero controlarlo y que no nos dañe sí es posible. Existen diferentes
          formas de aprender a manejarlo, desde los ejercicios Tai–Chi hasta
          técnicas de relajación relativamente fáciles. Acuda a un especialista
          si considera que tiene problemas de estrés.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'10-1'}
          question={'1. La aterosclerosis:'}
          answers={[
            'Es un tipo de demencia.',
            'Es producida por tomar mucha leche.',
            'Es el endurecimiento de las arterias y la principal causa de enfermedades del corazón.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'10-2'}
          question={'2. Son factores de riesgo para padecer del corazón:'}
          answers={[
            'Comer frito más de una vez a la semana.',
            'Tener la presión elevada.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'10-3'}
          question={
            '3. Son factores protectores para las enfermedades del corazón:'
          }
          answers={[
            'Comer bajo de sal.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores pueden ayudar a las personas a no padecer del corazón.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Las enfermedades del corazón se pueden evitar o retrasar su comienzo.',
            'Los enemigos del corazón que podemos evitar son: fumar, el sobrepeso, hacer poca actividad física, el colesterol y la presión alta.',
            'Si he tenido angina de pecho, no me deben faltar las pastillas de nitroglicerina a donde quiera que vaya.',
            'Comer bajo de sal y grasa es bueno para el corazón.',
            'Comer vegetales y frutas ayuda a tener un corazón saludable.',
            'Limitar las cosas dulces para el corazón es tan importante como limitar la grasa. Fría lo menos posible.',
            'La actividad física es muy buena para el corazón. Camine al menos unas cuadras diarias.',
            'El trabajo de la casa cansa mucho, pero no es tan bueno para el corazón como el caminar.',
            'Vivir sin estrés es imposible. Pero controlarlo y que no nos dañe sí es posible.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Diabetes')}>
          <Text>{'¿Qué es la diabetes y cómo manejarla?'}</Text>
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
