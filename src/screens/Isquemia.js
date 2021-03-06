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
          <Text>{'??Qu?? debemos saber sobre el c??ncer?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>LA ???ISQUEMIA??? CEREBRAL</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>os ictus son conocidos popularmente por muchos nombres,
          como ataques cerebrales, accidente cerebrovascular, derrames
          cerebrales, trombosis, isquemias, que es como m??s nosotros le decimos.
          Realmente son parecidos, pero no son lo mismo ni tienen igual
          pron??stico. En este cap??tulo lo llamaremos ictus, m??s adelante veremos
          por qu??. Ocurren m??s frecuentemente en las personas de edad avanzada,
          en hipertensos y en fumadores.
        </Paragraph>
        <Paragraph>
          El denominador com??n es que casi siempre una parte del cuerpo y de la
          cara pueden verse limitados en su movimiento, y seg??n la magnitud del
          da??o, otras funciones del cuerpo pueden verse afectadas.
        </Paragraph>
        <Paragraph>
          Detr??s de la mayor??a de los ictus est?? la presi??n alta como el factor
          de riesgo prevenible m??s importante. Mientras m??s controlada tengamos
          la presi??n, la posibilidad de tener un ictus disminuye mucho.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES EL ICTUS?</Subheading>
        <Paragraph>
          Cuando ocurre un ictus, habitualmente le pasa algo a la circulaci??n
          del cerebro. El cerebro es alimentado por arterias, que llevan el
          ox??geno y los nutrientes necesarios para que las c??lulas cerebrales
          funcionen. Si estas arterias se tupen por alg??n motivo, deja de llegar
          sangre a una parte del cerebro y las c??lulas cerebrales se comienzan a
          morir. Estamos en presencia de un <Bold>ictus isqu??mico</Bold>.
        </Paragraph>
        <Paragraph>
          La arteria se puede tupir porque se estreche tanto que deje de fluir
          la sangre, o por un co??gulo que viaja por la sangre y la ocluye. El
          estrechamiento es producido por la aterosclerosis, y habitualmente una
          alimentaci??n poco sana, la presi??n alta y la diabetes son sus
          principales factores de riesgo para que esto ocurra.
        </Paragraph>
        <Paragraph>
          Cuando un co??gulo viene por la sangre y tupe una arteria del cerebro,
          casi siempre se origina en el coraz??n o en las arterias car??tidas, que
          est??n en el cuello.
        </Paragraph>
        <Paragraph>
          Si la obstrucci??n es pasajera, dura poco tiempo y no deja da??os
          permanentes, entonces estamos en presencia de un{' '}
          <Bold>ataque transitorio de isquemia</Bold> o <Bold>ATI</Bold> como
          tambi??n se le conoce (por eso en este cap??tulo preferimos hablar de
          ictus y no de isquemia). Las personas habitualmente se refieren a este
          hecho como ???tuve una isquemia???.
        </Paragraph>
        <Paragraph>
          Muchas veces estos ATI ocurren como pre??mbulo de un ictus isqu??mico de
          mayor magnitud. Constituyen una alarma a la que se le debe prestar
          atenci??n.
        </Paragraph>
        <Paragraph>
          Lo que hemos visto hasta ahora son los llamados ictus isqu??micos, y
          para su conocimiento la palabra isquemia quiere decir{' '}
          <Bold>falta de circulaci??n sangu??nea</Bold>.
        </Paragraph>
        <Paragraph>
          El otro tipo de ictus se produce cuando la arteria se rompe, y sale
          sangre de manera brusca y comprime las c??lulas que est??n cercanas a la
          ruptura. Estas c??lulas mueren. Es lo que se conoce como un{' '}
          <Bold>ictus hemorr??gico o hemorragia cerebral</Bold>. Casi siempre,
          este episodio tiene peor pron??stico que el isqu??mico.
        </Paragraph>
        <Paragraph>
          Tanto uno como el otro, pueden da??ar zonas del cerebro que controlan
          los movimientos del cuerpo, as?? como otras funciones del mismo. Seg??n
          el lugar donde se produzca, y la cantidad de c??lulas muertas, as?? ser??
          el da??o.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO S?? QUE TENGO UN ICTUS?</Subheading>
        <Paragraph>
          Los ictus ocurren habitualmente de manera s??bita e inesperada. Los
          s??ntomas pueden variar mucho de una persona a otra, pero con
          frecuencia las personas refieren dolor de cabeza casi siempre fuerte,
          mareos, notan que tienen una parte de la cara o del cuerpo dormida o
          que no responde. Si la persona puede caminar, lo hace con dificultad,
          se ???va de lado???, y le puede costar trabajo entender lo que le dicen o
          hablar. Puede haber torpeza y falta de coordinaci??n.
        </Paragraph>
        <Paragraph>
          Si presenta algunos de estos s??ntomas de forma s??bita, no dude en
          pedir ayuda y acudir r??pidamente a un servicio de salud donde atiendan
          urgencias.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO PUEDO EVITAR UN ICTUS?</Subheading>
        <Paragraph>
          En ocasiones, al tener un ictus es cuando se sabe que la persona tiene
          la presi??n alta, es diab??tica o padece de alguna enfermedad del
          coraz??n, como tener una v??lvula da??ada o padecer de alg??n trastorno
          del ritmo del coraz??n.
        </Paragraph>
        <Paragraph>
          Los ictus pueden prevenirse. La prevenci??n no quiere decir siempre que
          no va a ocurrir, sino que la probabilidad de que ocurra es menor.
        </Paragraph>
        <Paragraph>
          Todo lo que reduzca la posibilidad de tener aterosclerosis, disminuir??
          la ocurrencia de ictus.
        </Paragraph>
        <Paragraph>
          ??De qu?? estamos hablando? Pues de no fumar, de tomar alcohol de forma
          responsable sin excesos, de hacer una dieta saludable, de realizar
          actividad f??sica, y de controlar algunas enfermedades si la padecemos,
          como la diabetes, coraz??n y principalmente la presi??n alta.
        </Paragraph>
        <Paragraph>
          Cuando dejamos de fumar, a??n despu??s de haber fumado muchos a??os, los
          beneficios se notan bastante r??pido. Mejora la respiraci??n, la
          probabilidad de c??ncer pulmonar disminuye, y el da??o ateroscler??tico
          por el cigarro se detiene o disminuye mucho.
        </Paragraph>
        <Paragraph>
          Con respecto a la dieta, hay estudios recientes que plantean que la
          dieta mediterr??nea disminuye m??s que los medicamentos la probabilidad
          de tener enfermedades cardiovasculares. Esta dieta consiste en ingerir
          abundantes frijoles, verduras, frutas frescas, que las carnes sean
          preferiblemente blancas (pollo y pescado) y la grasa que se use sea
          aceite, aunque se debe fre??r lo menos posible. Adem??s de estos
          elementos de la dieta mediterr??nea, en general se aconseja que no
          ingiramos exceso de sal, as?? como que comamos pocos dulces.
        </Paragraph>
        <Fig17 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          La actividad f??sica mejora muchas cosas, dentro de ellas disminuye la
          presi??n arterial, el sobrepeso, y se ha visto que tiene efectos
          beneficiosos en el cerebro, seg??n algunos estudios. Lo ideal es hacer
          ejercicios del tipo aer??bicos, como caminar, montar bicicleta o nadar,
          pero tambi??n se sabe que personas mayores con limitaciones f??sicas,
          mejoran sus niveles de az??car en la sangre y la presi??n arterial con
          solo pasear al menos unos minutos al d??a, en vez de quedarse sentados
          todo el d??a. Es decir, mientras m??s ejercicios hagamos mejor, pero
          tambi??n algo es mejor que nada.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? NO PUEDO CAMBIAR?</Subheading>
        <Paragraph>
          Hay algunos factores de riesgo que no se pueden modificar, y que
          aumentan el riesgo de padecer un ictus, como la edad (a mayor edad m??s
          probabilidad de padecer un ictus) o el sexo (los hombres tienen m??s
          riesgo de padecerlo).
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? ENFERMEDADES DEBO CONTROLAR PARA NO PADECER DE ICTUS?
        </Subheading>
        <Paragraph>
          Hay enfermedades que aumentan la probabilidad de padecer un ictus.
          Tener colesterol elevado, padecer diabetes, tener fibrilaci??n
          auricular y tener la presi??n alta son las principales. Por ello, debe
          tener controlado los niveles de colesterol y de az??car, los que se
          regulan con la dieta o medicamentos que le indique su m??dico.
        </Paragraph>
        <Paragraph>
          La presi??n arterial debe permanecer por debajo de 120 la m??xima y 80
          la m??nima para que sea normal, y si padece de fibrilaci??n auricular su
          m??dico le indicar?? algunos medicamentos para evitar que se forme un
          co??gulo en el coraz??n y se desprenda hasta el cerebro.
        </Paragraph>
        <Paragraph>
          Es importante que acuda regularmente al m??dico para detectar
          tempranamente cualquiera de estos factores.
        </Paragraph>
        <Paragraph>
          La buena noticia es que se ha demostrado que mientras m??s temprano en
          la vida comencemos con estos cambios en los estilos de vida, mejor
          resultado tendr??n, pero tambi??n se sabe que estas medidas preventivas{' '}
          <Bold>surten efecto a cualquier edad que se comiencen</Bold>. As?? que,
          nunca es tarde, an??mese.
        </Paragraph>
        <Paragraph />
        <Subheading>RECUPER??NDOME DE UN ICTUS: LA REHABILITACI??N</Subheading>
        <Paragraph>
          Los ictus pueden dejar secuelas. Si son peque??os, las secuelas son
          m??nimas y llegan a desaparecer con unos meses de rehabilitaci??n.
        </Paragraph>
        <Paragraph>
          Pero si las secuelas que dej?? son mayores, quiz??s nos sintamos
          abrumados por la p??rdida de capacidad para realizar las cosas que
          hac??amos antes, y entonces hay que hacer algunos reajustes de la vida.
        </Paragraph>
        <Paragraph>
          La rehabilitaci??n brinda grandes oportunidades de mejorar el desempe??o
          diario y con algunos cambios, mantener una cierta independencia. La
          incapacidad puede generar complicaciones, que tambi??n la
          rehabilitaci??n ayuda a paliar.
        </Paragraph>
        <Paragraph>
          Toda esta nueva situaci??n puede crear frustraci??n y tristeza, pero la
          rehabilitaci??n, un poco de voluntad y de disciplina har??n que las
          cosas mejoren.
        </Paragraph>
        <Paragraph />
        <Subheading>??POR QU?? DEBO HACER REHABILITACI??N?</Subheading>
        <Paragraph>
          Las habilidades que se perdieron o quedaron da??adas con el ictus, casi
          siempre se recuperan bastante con un buen programa de rehabilitaci??n.
          Puede ser un proceso largo y frustrante en ocasiones. El tiempo de
          rehabilitaci??n depender?? del estado de salud previo al ictus y de la
          magnitud de las secuelas que dej??.
        </Paragraph>
        <Paragraph>
          Las personas necesitar??n diferentes tiempos para recuperar las
          funciones da??adas y generalmente las grandes mejor??as se consiguen en
          las primeras semanas o meses. Las mejor??as siguientes son m??s lentas
          en lograrse.
        </Paragraph>
        <Paragraph>
          Las personas pueden llegar a recobrar las habilidades para la
          realizaci??n de las actividades de la vida diaria, como caminar, comer,
          hablar y cuidar de uno mismo. La terapia ocupacional ayuda mucho en la
          recuperaci??n de las habilidades manuales.
        </Paragraph>
        <Paragraph>
          Quiz??s para algunas tareas m??s complejas, se necesite alg??n tipo de
          ayuda externa, ya sea de otra persona o de un bast??n o andador.
        </Paragraph>
        <Paragraph>
          Es com??n que en los meses siguientes a un ictus, las personas sufran
          de depresi??n por las habilidades perdidas. Superar esta depresi??n es
          uno de los objetivos de la rehabilitaci??n.
        </Paragraph>
        <Fig18 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>??D??NDE PUEDO HACER LA REHABILITACI??N?</Subheading>
        <Paragraph>
          En la gran mayor??a de los casos la rehabilitaci??n se puede realizar en
          el policl??nico. En ocasiones, al inicio es conveniente por una o dos
          semanas realizarlas en un centro de salud para dar un ???empuj??n
          inicial??? a la persona que se rehabilita, y despu??s continuar en el
          policl??nico. Este tiempo en el hospital tras el ictus est?? relacionado
          con:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La capacidad que qued?? para cuidarnos a nosotros
          mismos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>En caso de que necesitemos ayuda, de cu??nta
          dispondremos en nuestra casa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La seguridad de la casa para recibirnos con algunas
          habilidades disminuidas.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? FUNCI??N PUEDO TENER ALTERADA Y C??MO HACER PARA MEJORARLA?
        </Subheading>
        <Paragraph>
          Producto del ictus, se pueden afectar diferentes funciones del cuerpo,
          y esto estar?? en dependencia de la zona del cerebro afectada y de la
          magnitud del da??o producido. Estos cambios pueden estar relacionados
          con el movimiento de una parte del cuerpo, comer, hablar, ver, orinar,
          caminar, tomar objetos con la mano o escribir.
        </Paragraph>
        <Paragraph>
          Tambi??n se puede afectar la memoria y el comportamiento de las
          personas, as?? como su estado de ??nimo. Se ver?? a continuaci??n los m??s
          importantes y qu?? se puede hacer para mejorar.
        </Paragraph>
        <Subheading>Movimiento</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hacer las actividades diarias de la casa, caminar dentro de ella,
          puede ser m??s dif??cil que antes. En muchas ocasiones, un lado del
          cuerpo se queda m??s d??bil, lo que dificulta utilizar bien el brazo y
          la pierna de ese lado. Se conoce como hemiplejia.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Estas dificultades pueden ocasionar dolores en las articulaciones, que
          se pueden poner r??gidas por el poco movimiento. La persona que est??
          guiando la rehabilitaci??n nos ayudar?? a aprender de nuevo c??mo usar
          las partes paralizadas. El ejercicio f??sico de los miembros afectados
          mejorar?? la fuerza muscular y la coordinaci??n del movimiento.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Ponerse y quitarse la ropa y los zapatos puede ser dif??cil. Utilice
          ropa con velcro y zapatos sin cordones, son m??s f??ciles de usar. Hay
          calzadores con mango largo muy ??tiles para quienes no se pueden
          agachar a calzarse los zapatos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Es posible que por un tiempo o permanentemente usted tenga que
          utilizar bast??n, andador, o silla de ruedas. Quiz??s en la casa haya
          que realizar algunas modificaciones para aumentar su seguridad en
          ella. Hay cambios que se pueden realizar para evitar ca??das. Debe
          evitar las lesiones en la piel que se producen por estar acostado o
          sentado sin moverse.
        </Paragraph>
        <Subheading>Comunic??ndome con los dem??s</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hablar o entender a los dem??s se puede afectar. Es posible que se
          necesite m??s tiempo para contestar. T??mese el suyo. Utilice frases
          cortas. En los ambientes ruidosos puede ser m??s dif??cil la
          comunicaci??n. Mire a los ojos a las personas, ser?? m??s f??cil hablar y
          escuchar. Si es necesario, un logopeda o especialista del habla puede
          ayudar mucho con ejercicios sencillos. Hay otras formas de comunicarse
          adem??s de la palabra. Aprenda otras maneras. Recuperar el habla puede
          demorar m??s de un a??o.
        </Paragraph>
        <Subheading>Me atraganto cuando como o bebo</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Comer alimentos s??lidos o tomar l??quidos puede ser dif??cil. Los
          principales s??ntomas que esto producen son toser cuando se est??
          tragando, y puede llegar a la falta de aire. Es cuando la comida se
          nos va ???por el camino viejo???. Adem??s, pueden producirse ruidos en la
          garganta despu??s de haber comido, esto es porque se queda comida
          acumulada sin tragarse en la parte baja de la garganta. Puede aparecer
          hipo. Todo esto puede traer como consecuencias un proceso de
          desnutrici??n de la persona afectada por alimentarse mal as?? como se
          puede provocar neumon??as por aspiraci??n de alimentos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Debe masticar lentamente, no llevarse grandes bocados de comida a la
          boca. Cuando los l??quidos son los causantes de los mayores problemas,
          si se espesan pueden tolerarse mejor. Los pur??s o papillas pueden ser
          parte de la soluci??n. Estos alimentos deben ser ricos en calor??as para
          que la persona no se desnutra.
        </Paragraph>
        <Subheading>Ir al ba??o</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Los actos de orinar o defecar pueden alterarse. Hay varias cosas que
          se pueden hacer:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Si lo ten??a y lo perdi??, debe volver a hacerse un h??bito para defecar.
          Ir al ba??o a la misma hora y frotarse la zona del est??mago ayuda. Sea
          paciente, puede tardar m??s de lo habitual.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Trate de evitar el estre??imiento comiendo suficiente fibra diet??tica y
          tomando m??s l??quidos. Recuerde que algunas de las medicinas que toma
          pueden agravarlo. Preg??ntele a su m??dico.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La orina puede tener dificultades, o porque no le da tiempo de llegar
          al ba??o o porque no se da cuenta de que debe orinar. Haga el h??bito de
          ir durante el d??a cada dos horas al ba??o y orinar aunque no se tenga
          deseos, esto le ayuda.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          A veces no queda m??s remedio que usar aditamentos como colectores de
          orina o pa??ales. En pocos casos se necesita sonda vesical permanente.
        </Paragraph>
        <Subheading>Capacidad mental</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Pueden ocurrir cambios en la capacidad de razonar y en el
          comportamiento, memoria y trastornos del sue??o. Tambi??n puede haber
          sentimientos de tristeza y depresi??n por la nueva situaci??n. En la
          medida que mejore, estos sentimientos disminuir??n. Cuando comience a
          mejorar, trate de tener una vida social m??s activa.
        </Paragraph>
        <Subheading>Otros aspectos importantes en su vida</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          A veces las secuelas son por largo tiempo, y se necesitan cambios en
          la casa para mejorar la calidad de vida de la persona enferma y de sus
          cuidadores.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Ajustes en el ba??o, la cama, mover los muebles para crear espacios de
          paso sin dificultad ni peligro, uso de pasamanos, pueden ser
          necesarios.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Conversar con la familia puede ser muy bueno para una mayor
          comprensi??n.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Debe tener cuidado con los medicamentos que consume. Si es necesario,
          ponga recordatorios de los horarios bien visibles.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'14-1'}
          question={'1. Son factores de riesgo para tener un ictus:'}
          answers={[
            'Comer frito m??s de una vez a la semana.',
            'Tener la presi??n elevada.',
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
            'Dar caminatas todos los d??as o casi todos los d??as.',
            'Las dos respuestas anteriores son factores protectores.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'14-3'}
          question={'3. Si tuve un ictus:'}
          answers={[
            'La rehabilitaci??n mientras m??s temprano la comience es mejor.',
            'Los cambios en la casa no mejoran la independencia despu??s de un ictus.',
            'Despu??s de tener un ictus puedo comer lo que quiera, pues lo malo ya sucedi??.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'Los ictus se pueden evitar o retrasar su comienzo.',
            'Los factores de riesgo para tener un ictus que podemos evitar son: fumar, el sobrepeso, hacer poca actividad f??sica, el colesterol y la presi??n alta.',
            'Comer bajo de sal y grasa es bueno para el cerebro.',
            'Comer vegetales y frutas ayuda a tener un cerebro saludable.',
            'Limitar las cosas dulces para evitar los ictus es tan importante como limitar la grasa. Fr??a lo menos posible',
            'La actividad f??sica es muy buena para el cerebro. Camine al menos unas cuadras diarias.',
            'Aunque si cambiamos los h??bitos da??inos para la salud siendo m??s j??venes es mejor, cambiarlos a cualquier edad mejoran nuestra salud.',
            'Algunos cambios en la casa pueden ayudar mucho a volver a ser independientes despu??s de tener un ictus.',
            'Vivir sin estr??s es imposible. Pero controlarlo y que no nos da??e s?? es posible.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Osteoporosis')}>
          <Text>{'??C??mo andan mis huesos? La osteoporosis'}</Text>
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
