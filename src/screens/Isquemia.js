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
import Fig17 from '../components/Fig17';
import Fig18 from '../components/Fig18';

const Isquemia = ({navigation}) => {
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
      await AsyncStorage.setItem('@sIsquemia', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sIsquemia');
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
          onPress={() => navigate('Cancer')}>
          <Text>{'¿Qué debemos saber sobre el cáncer?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>LA “ISQUEMIA” CEREBRAL</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>os ictus son conocidos popularmente por muchos nombres,
          como ataques cerebrales, accidente cerebrovascular, derrames
          cerebrales, trombosis, isquemias, que es como más nosotros le decimos.
          Realmente son parecidos, pero no son lo mismo ni tienen igual
          pronóstico. En este capítulo lo llamaremos ictus, más adelante veremos
          por qué. Ocurren más frecuentemente en las personas de edad avanzada,
          en hipertensos y en fumadores.
        </Paragraph>
        <Paragraph>
          El denominador común es que casi siempre una parte del cuerpo y de la
          cara pueden verse limitados en su movimiento, y según la magnitud del
          daño, otras funciones del cuerpo pueden verse afectadas.
        </Paragraph>
        <Paragraph>
          Detrás de la mayoría de los ictus está la presión alta como el factor
          de riesgo prevenible más importante. Mientras más controlada tengamos
          la presión, la posibilidad de tener un ictus disminuye mucho.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES EL ICTUS?</Subheading>
        <Paragraph>
          Cuando ocurre un ictus, habitualmente le pasa algo a la circulación
          del cerebro. El cerebro es alimentado por arterias, que llevan el
          oxígeno y los nutrientes necesarios para que las células cerebrales
          funcionen. Si estas arterias se tupen por algún motivo, deja de llegar
          sangre a una parte del cerebro y las células cerebrales se comienzan a
          morir. Estamos en presencia de un <Bold>ictus isquémico</Bold>.
        </Paragraph>
        <Paragraph>
          La arteria se puede tupir porque se estreche tanto que deje de fluir
          la sangre, o por un coágulo que viaja por la sangre y la ocluye. El
          estrechamiento es producido por la aterosclerosis, y habitualmente una
          alimentación poco sana, la presión alta y la diabetes son sus
          principales factores de riesgo para que esto ocurra.
        </Paragraph>
        <Paragraph>
          Cuando un coágulo viene por la sangre y tupe una arteria del cerebro,
          casi siempre se origina en el corazón o en las arterias carótidas, que
          están en el cuello.
        </Paragraph>
        <Paragraph>
          Si la obstrucción es pasajera, dura poco tiempo y no deja daños
          permanentes, entonces estamos en presencia de un{' '}
          <Bold>ataque transitorio de isquemia</Bold> o <Bold>ATI</Bold> como
          también se le conoce (por eso en este capítulo preferimos hablar de
          ictus y no de isquemia). Las personas habitualmente se refieren a este
          hecho como “tuve una isquemia”.
        </Paragraph>
        <Paragraph>
          Muchas veces estos ATI ocurren como preámbulo de un ictus isquémico de
          mayor magnitud. Constituyen una alarma a la que se le debe prestar
          atención.
        </Paragraph>
        <Paragraph>
          Lo que hemos visto hasta ahora son los llamados ictus isquémicos, y
          para su conocimiento la palabra isquemia quiere decir{' '}
          <Bold>falta de circulación sanguínea</Bold>.
        </Paragraph>
        <Paragraph>
          El otro tipo de ictus se produce cuando la arteria se rompe, y sale
          sangre de manera brusca y comprime las células que están cercanas a la
          ruptura. Estas células mueren. Es lo que se conoce como un{' '}
          <Bold>ictus hemorrágico o hemorragia cerebral</Bold>. Casi siempre,
          este episodio tiene peor pronóstico que el isquémico.
        </Paragraph>
        <Paragraph>
          Tanto uno como el otro, pueden dañar zonas del cerebro que controlan
          los movimientos del cuerpo, así como otras funciones del mismo. Según
          el lugar donde se produzca, y la cantidad de células muertas, así será
          el daño.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SÉ QUE TENGO UN ICTUS?</Subheading>
        <Paragraph>
          Los ictus ocurren habitualmente de manera súbita e inesperada. Los
          síntomas pueden variar mucho de una persona a otra, pero con
          frecuencia las personas refieren dolor de cabeza casi siempre fuerte,
          mareos, notan que tienen una parte de la cara o del cuerpo dormida o
          que no responde. Si la persona puede caminar, lo hace con dificultad,
          se “va de lado”, y le puede costar trabajo entender lo que le dicen o
          hablar. Puede haber torpeza y falta de coordinación.
        </Paragraph>
        <Paragraph>
          Si presenta algunos de estos síntomas de forma súbita, no dude en
          pedir ayuda y acudir rápidamente a un servicio de salud donde atiendan
          urgencias.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO PUEDO EVITAR UN ICTUS?</Subheading>
        <Paragraph>
          En ocasiones, al tener un ictus es cuando se sabe que la persona tiene
          la presión alta, es diabética o padece de alguna enfermedad del
          corazón, como tener una válvula dañada o padecer de algún trastorno
          del ritmo del corazón.
        </Paragraph>
        <Paragraph>
          Los ictus pueden prevenirse. La prevención no quiere decir siempre que
          no va a ocurrir, sino que la probabilidad de que ocurra es menor.
        </Paragraph>
        <Paragraph>
          Todo lo que reduzca la posibilidad de tener aterosclerosis, disminuirá
          la ocurrencia de ictus.
        </Paragraph>
        <Paragraph>
          ¿De qué estamos hablando? Pues de no fumar, de tomar alcohol de forma
          responsable sin excesos, de hacer una dieta saludable, de realizar
          actividad física, y de controlar algunas enfermedades si la padecemos,
          como la diabetes, corazón y principalmente la presión alta.
        </Paragraph>
        <Paragraph>
          Cuando dejamos de fumar, aún después de haber fumado muchos años, los
          beneficios se notan bastante rápido. Mejora la respiración, la
          probabilidad de cáncer pulmonar disminuye, y el daño aterosclerótico
          por el cigarro se detiene o disminuye mucho.
        </Paragraph>
        <Paragraph>
          Con respecto a la dieta, hay estudios recientes que plantean que la
          dieta mediterránea disminuye más que los medicamentos la probabilidad
          de tener enfermedades cardiovasculares. Esta dieta consiste en ingerir
          abundantes frijoles, verduras, frutas frescas, que las carnes sean
          preferiblemente blancas (pollo y pescado) y la grasa que se use sea
          aceite, aunque se debe freír lo menos posible. Además de estos
          elementos de la dieta mediterránea, en general se aconseja que no
          ingiramos exceso de sal, así como que comamos pocos dulces.
        </Paragraph>
        <Fig17 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          La actividad física mejora muchas cosas, dentro de ellas disminuye la
          presión arterial, el sobrepeso, y se ha visto que tiene efectos
          beneficiosos en el cerebro, según algunos estudios. Lo ideal es hacer
          ejercicios del tipo aeróbicos, como caminar, montar bicicleta o nadar,
          pero también se sabe que personas mayores con limitaciones físicas,
          mejoran sus niveles de azúcar en la sangre y la presión arterial con
          solo pasear al menos unos minutos al día, en vez de quedarse sentados
          todo el día. Es decir, mientras más ejercicios hagamos mejor, pero
          también algo es mejor que nada.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ NO PUEDO CAMBIAR?</Subheading>
        <Paragraph>
          Hay algunos factores de riesgo que no se pueden modificar, y que
          aumentan el riesgo de padecer un ictus, como la edad (a mayor edad más
          probabilidad de padecer un ictus) o el sexo (los hombres tienen más
          riesgo de padecerlo).
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ ENFERMEDADES DEBO CONTROLAR PARA NO PADECER DE ICTUS?
        </Subheading>
        <Paragraph>
          Hay enfermedades que aumentan la probabilidad de padecer un ictus.
          Tener colesterol elevado, padecer diabetes, tener fibrilación
          auricular y tener la presión alta son las principales. Por ello, debe
          tener controlado los niveles de colesterol y de azúcar, los que se
          regulan con la dieta o medicamentos que le indique su médico.
        </Paragraph>
        <Paragraph>
          La presión arterial debe permanecer por debajo de 120 la máxima y 80
          la mínima para que sea normal, y si padece de fibrilación auricular su
          médico le indicará algunos medicamentos para evitar que se forme un
          coágulo en el corazón y se desprenda hasta el cerebro.
        </Paragraph>
        <Paragraph>
          Es importante que acuda regularmente al médico para detectar
          tempranamente cualquiera de estos factores.
        </Paragraph>
        <Paragraph>
          La buena noticia es que se ha demostrado que mientras más temprano en
          la vida comencemos con estos cambios en los estilos de vida, mejor
          resultado tendrán, pero también se sabe que estas medidas preventivas{' '}
          <Bold>surten efecto a cualquier edad que se comiencen</Bold>. Así que,
          nunca es tarde, anímese.
        </Paragraph>
        <Paragraph />
        <Subheading>RECUPERÁNDOME DE UN ICTUS: LA REHABILITACIÓN</Subheading>
        <Paragraph>
          Los ictus pueden dejar secuelas. Si son pequeños, las secuelas son
          mínimas y llegan a desaparecer con unos meses de rehabilitación.
        </Paragraph>
        <Paragraph>
          Pero si las secuelas que dejó son mayores, quizás nos sintamos
          abrumados por la pérdida de capacidad para realizar las cosas que
          hacíamos antes, y entonces hay que hacer algunos reajustes de la vida.
        </Paragraph>
        <Paragraph>
          La rehabilitación brinda grandes oportunidades de mejorar el desempeño
          diario y con algunos cambios, mantener una cierta independencia. La
          incapacidad puede generar complicaciones, que también la
          rehabilitación ayuda a paliar.
        </Paragraph>
        <Paragraph>
          Toda esta nueva situación puede crear frustración y tristeza, pero la
          rehabilitación, un poco de voluntad y de disciplina harán que las
          cosas mejoren.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ DEBO HACER REHABILITACIÓN?</Subheading>
        <Paragraph>
          Las habilidades que se perdieron o quedaron dañadas con el ictus, casi
          siempre se recuperan bastante con un buen programa de rehabilitación.
          Puede ser un proceso largo y frustrante en ocasiones. El tiempo de
          rehabilitación dependerá del estado de salud previo al ictus y de la
          magnitud de las secuelas que dejó.
        </Paragraph>
        <Paragraph>
          Las personas necesitarán diferentes tiempos para recuperar las
          funciones dañadas y generalmente las grandes mejorías se consiguen en
          las primeras semanas o meses. Las mejorías siguientes son más lentas
          en lograrse.
        </Paragraph>
        <Paragraph>
          Las personas pueden llegar a recobrar las habilidades para la
          realización de las actividades de la vida diaria, como caminar, comer,
          hablar y cuidar de uno mismo. La terapia ocupacional ayuda mucho en la
          recuperación de las habilidades manuales.
        </Paragraph>
        <Paragraph>
          Quizás para algunas tareas más complejas, se necesite algún tipo de
          ayuda externa, ya sea de otra persona o de un bastón o andador.
        </Paragraph>
        <Paragraph>
          Es común que en los meses siguientes a un ictus, las personas sufran
          de depresión por las habilidades perdidas. Superar esta depresión es
          uno de los objetivos de la rehabilitación.
        </Paragraph>
        <Fig18 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>¿DÓNDE PUEDO HACER LA REHABILITACIÓN?</Subheading>
        <Paragraph>
          En la gran mayoría de los casos la rehabilitación se puede realizar en
          el policlínico. En ocasiones, al inicio es conveniente por una o dos
          semanas realizarlas en un centro de salud para dar un “empujón
          inicial” a la persona que se rehabilita, y después continuar en el
          policlínico. Este tiempo en el hospital tras el ictus está relacionado
          con:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La capacidad que quedó para cuidarnos a nosotros
          mismos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>En caso de que necesitemos ayuda, de cuánta
          dispondremos en nuestra casa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La seguridad de la casa para recibirnos con algunas
          habilidades disminuidas.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ FUNCIÓN PUEDO TENER ALTERADA Y CÓMO HACER PARA MEJORARLA?
        </Subheading>
        <Paragraph>
          Producto del ictus, se pueden afectar diferentes funciones del cuerpo,
          y esto estará en dependencia de la zona del cerebro afectada y de la
          magnitud del daño producido. Estos cambios pueden estar relacionados
          con el movimiento de una parte del cuerpo, comer, hablar, ver, orinar,
          caminar, tomar objetos con la mano o escribir.
        </Paragraph>
        <Paragraph>
          También se puede afectar la memoria y el comportamiento de las
          personas, así como su estado de ánimo. Se verá a continuación los más
          importantes y qué se puede hacer para mejorar.
        </Paragraph>
        <Subheading>Movimiento</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hacer las actividades diarias de la casa, caminar dentro de ella,
          puede ser más difícil que antes. En muchas ocasiones, un lado del
          cuerpo se queda más débil, lo que dificulta utilizar bien el brazo y
          la pierna de ese lado. Se conoce como hemiplejia.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Estas dificultades pueden ocasionar dolores en las articulaciones, que
          se pueden poner rígidas por el poco movimiento. La persona que esté
          guiando la rehabilitación nos ayudará a aprender de nuevo cómo usar
          las partes paralizadas. El ejercicio físico de los miembros afectados
          mejorará la fuerza muscular y la coordinación del movimiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Ponerse y quitarse la ropa y los zapatos puede ser difícil. Utilice
          ropa con velcro y zapatos sin cordones, son más fáciles de usar. Hay
          calzadores con mango largo muy útiles para quienes no se pueden
          agachar a calzarse los zapatos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Es posible que por un tiempo o permanentemente usted tenga que
          utilizar bastón, andador, o silla de ruedas. Quizás en la casa haya
          que realizar algunas modificaciones para aumentar su seguridad en
          ella. Hay cambios que se pueden realizar para evitar caídas. Debe
          evitar las lesiones en la piel que se producen por estar acostado o
          sentado sin moverse.
        </Paragraph>
        <Subheading>Comunicándome con los demás</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hablar o entender a los demás se puede afectar. Es posible que se
          necesite más tiempo para contestar. Tómese el suyo. Utilice frases
          cortas. En los ambientes ruidosos puede ser más difícil la
          comunicación. Mire a los ojos a las personas, será más fácil hablar y
          escuchar. Si es necesario, un logopeda o especialista del habla puede
          ayudar mucho con ejercicios sencillos. Hay otras formas de comunicarse
          además de la palabra. Aprenda otras maneras. Recuperar el habla puede
          demorar más de un año.
        </Paragraph>
        <Subheading>Me atraganto cuando como o bebo</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Comer alimentos sólidos o tomar líquidos puede ser difícil. Los
          principales síntomas que esto producen son toser cuando se está
          tragando, y puede llegar a la falta de aire. Es cuando la comida se
          nos va “por el camino viejo”. Además, pueden producirse ruidos en la
          garganta después de haber comido, esto es porque se queda comida
          acumulada sin tragarse en la parte baja de la garganta. Puede aparecer
          hipo. Todo esto puede traer como consecuencias un proceso de
          desnutrición de la persona afectada por alimentarse mal así como se
          puede provocar neumonías por aspiración de alimentos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Debe masticar lentamente, no llevarse grandes bocados de comida a la
          boca. Cuando los líquidos son los causantes de los mayores problemas,
          si se espesan pueden tolerarse mejor. Los purés o papillas pueden ser
          parte de la solución. Estos alimentos deben ser ricos en calorías para
          que la persona no se desnutra.
        </Paragraph>
        <Subheading>Ir al baño</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Los actos de orinar o defecar pueden alterarse. Hay varias cosas que
          se pueden hacer:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Si lo tenía y lo perdió, debe volver a hacerse un hábito para defecar.
          Ir al baño a la misma hora y frotarse la zona del estómago ayuda. Sea
          paciente, puede tardar más de lo habitual.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Trate de evitar el estreñimiento comiendo suficiente fibra dietética y
          tomando más líquidos. Recuerde que algunas de las medicinas que toma
          pueden agravarlo. Pregúntele a su médico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La orina puede tener dificultades, o porque no le da tiempo de llegar
          al baño o porque no se da cuenta de que debe orinar. Haga el hábito de
          ir durante el día cada dos horas al baño y orinar aunque no se tenga
          deseos, esto le ayuda.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A veces no queda más remedio que usar aditamentos como colectores de
          orina o pañales. En pocos casos se necesita sonda vesical permanente.
        </Paragraph>
        <Subheading>Capacidad mental</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Pueden ocurrir cambios en la capacidad de razonar y en el
          comportamiento, memoria y trastornos del sueño. También puede haber
          sentimientos de tristeza y depresión por la nueva situación. En la
          medida que mejore, estos sentimientos disminuirán. Cuando comience a
          mejorar, trate de tener una vida social más activa.
        </Paragraph>
        <Subheading>Otros aspectos importantes en su vida</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          A veces las secuelas son por largo tiempo, y se necesitan cambios en
          la casa para mejorar la calidad de vida de la persona enferma y de sus
          cuidadores.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Ajustes en el baño, la cama, mover los muebles para crear espacios de
          paso sin dificultad ni peligro, uso de pasamanos, pueden ser
          necesarios.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Conversar con la familia puede ser muy bueno para una mayor
          comprensión.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Debe tener cuidado con los medicamentos que consume. Si es necesario,
          ponga recordatorios de los horarios bien visibles.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'14-1'}
          question={'1. Son factores de riesgo para tener un ictus:'}
          answers={[
            'Comer frito más de una vez a la semana.',
            'Tener la presión elevada.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'14-2'}
          question={'2. Son factores protectores para no tener un ictus:'}
          answers={[
            'Comer bajo de sal.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores son factores protectores.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'14-3'}
          question={'3. Si tuve un ictus:'}
          answers={[
            'La rehabilitación mientras más temprano la comience es mejor.',
            'Los cambios en la casa no mejoran la independencia después de un ictus.',
            'Después de tener un ictus puedo comer lo que quiera, pues lo malo ya sucedió.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'Los ictus se pueden evitar o retrasar su comienzo.',
            'Los factores de riesgo para tener un ictus que podemos evitar son: fumar, el sobrepeso, hacer poca actividad física, el colesterol y la presión alta.',
            'Comer bajo de sal y grasa es bueno para el cerebro.',
            'Comer vegetales y frutas ayuda a tener un cerebro saludable.',
            'Limitar las cosas dulces para evitar los ictus es tan importante como limitar la grasa. Fría lo menos posible',
            'La actividad física es muy buena para el cerebro. Camine al menos unas cuadras diarias.',
            'Aunque si cambiamos los hábitos dañinos para la salud siendo más jóvenes es mejor, cambiarlos a cualquier edad mejoran nuestra salud.',
            'Algunos cambios en la casa pueden ayudar mucho a volver a ser independientes después de tener un ictus.',
            'Vivir sin estrés es imposible. Pero controlarlo y que no nos dañe sí es posible.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Osteoporosis')}>
          <Text>{'¿Cómo andan mis huesos? La osteoporosis'}</Text>
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

export default Isquemia;
