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
  DataTable,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';
import Fig15 from '../components/Fig15';
import Fig16 from '../components/Fig16';

const PresionAlta = ({navigation}) => {
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
      await AsyncStorage.setItem('@sPresionAlta', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sPresionAlta');
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
          onPress={() => navigate('Diabetes')}>
          <Text>{'¿Qué es la diabetes y cómo manejarla?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿QUÉ DEBO SABER DE LA PRESIÓN ALTA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a hipertensión arterial es cada vez más frecuente en las
          personas, y a medida que envejecemos la probabilidad de tener presión
          alta aumenta, por varios motivos. La hipertensión arterial, o “presión
          alta” como le decimos la mayoría de las veces, está presente en la
          mayoría de los pacientes que fallecen por enfermedades del corazón y
          cerebrovasculares (“trombosis o derrames”), que son dos de las tres
          principales causas de muerte en las personas mayores.
        </Paragraph>
        <Paragraph>
          Primero hablaremos de qué es la presión arterial. Piensen en el
          corazón como un motor que impulsa agua por tuberías hasta los tanques
          o las pilas de agua de nuestra casa. El corazón impulsa sangre dentro
          de las arterias para que lleguen los nutrientes y el oxígeno a todas
          las partes del cuerpo. La impulsa al contraerse (esta contracción se
          llama sístole) y después se relaja (la etapa de relajación se llama
          diástole) para llenarse de sangre de nuevo, y después se vuelve a
          contraer y continúa el ciclo. En el momento de contraerse, la sangre
          expulsada alcanza su mayor presión en las arterias, es la llamada
          presión sistólica o “la máxima” como decimos. En el momento en que el
          corazón está relajado y llenándose de sangre, es cuando la presión en
          las arterias es más baja, y se llama presión diastólica o “la mínima”.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES LA PRESIÓN ALTA?</Subheading>
        <Paragraph>
          Las cifras de presión por encima de ciertos parámetros es lo que se
          llama hipertensión arterial. En la siguiente tabla están las cifras
          normales y de hipertensión arterial.
        </Paragraph>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>CLASIFICACIÓN DE PRESIÓN ARTERIAL</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>Categoría</DataTable.Title>
            <DataTable.Title>Sistólica (mm Hg) (máxima)</DataTable.Title>
            <DataTable.Title>Diastólica (mm Hg) (mínima)</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Normal</DataTable.Cell>
            <DataTable.Cell>Inferior a 120</DataTable.Cell>
            <DataTable.Cell>Inferior a 80</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Prehipertensión</DataTable.Cell>
            <DataTable.Cell>120-139</DataTable.Cell>
            <DataTable.Cell>80-89</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header>
            <DataTable.Title>Hipertensión</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Grado 1</DataTable.Cell>
            <DataTable.Cell>140-159</DataTable.Cell>
            <DataTable.Cell>90-99</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Grado 2</DataTable.Cell>
            <DataTable.Cell>160 o más</DataTable.Cell>
            <DataTable.Cell>100 o más</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <Paragraph>
          Lo que dice en la tabla “mm Hg” quiere decir milímetros de mercurio,
          que es la medida en que se mide la presión arterial. Esta tabla dice
          que lo ideal es que tengamos la presión sistólica o máxima en{' '}
          <Bold>120 o menos</Bold> y la diastólica o mínima en{' '}
          <Bold>80 o menos</Bold>. La presión se da en dos cifras, por ejemplo
          110 con 75. Esto quiere decir que la sistólica o máxima es 110 y la
          diastólica o mínima es 75. Han habido varios mitos, como que es normal
          que la presión suba en las personas mayores para que le llegue más
          sangre al cerebro; que si la presión está solo un poco alta no se debe
          tratar; que el que es hipertenso se acostumbra a esa presión alta y si
          se le baja se siente mal. Se ha demostrado que todos son falsos. Por
          otro lado, es bueno saber que no existe una presión normal para los
          jóvenes y otra para las personas mayores.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ ME PUEDO VOLVER HIPERTENSO?</Subheading>
        <Paragraph>
          Hay varias formas en las que nos podemos volver hipertensos. Existen
          varios factores de riesgo para ser hipertensos.
        </Paragraph>
        <Paragraph>
          Mientras más edad tengamos, más probable es que nos volvamos
          hipertensos. Esto sucede porque con los años, las arterias se vuelven
          más rígidas. Al ser menos elásticas, cuando el corazón bombea la
          sangre, la presión sistólica o máxima sube. Por ello la hipertensión
          sistólica es más frecuente en las personas mayores.
        </Paragraph>
        <Paragraph>
          Si tenemos sobrepeso u obesidad es más probable que desarrollemos la
          presión alta. Si el afrontamiento que tenemos con los problemas de la
          vida diaria también nos produce estrés o ansiedad. Hay personas que
          dicen tener “presión alta emotiva”, es decir, cuando se emocionan.
          Todos nos emocionamos en la vida para bien o para mal, pero no a todos
          nos sube la presión por ello. Sencillamente son hipertensos.
        </Paragraph>
        <Paragraph>
          Si tomamos mucha bebida alcohólica, si fumamos, si somos diabéticos o
          tenemos familiares cercanos (padres o hermanos) con hipertensión,
          también es más probable que lo seamos.
        </Paragraph>
        <Paragraph>
          Uno de los factores más importantes es comer con mucha sal los
          alimentos. La sal mejora el sabor de los mismos, pero en exceso es muy
          perjudicial.
        </Paragraph>
        <Paragraph>
          También hay enfermedades que pueden subir la presión, como la
          insuficiencia renal crónica. Algunos medicamentos pueden subir la
          presión. Por ello es importante si estamos acudiendo al médico por
          sospecha de presión alta, informarle todas las medicinas que tomamos.
          En este caso hablamos de hipertensión secundaria. Solo es menos del
          10% de todas las personas hipertensas.
        </Paragraph>
        <Paragraph>
          Esto quiere decir que la mayoría de las veces no se sabe la causa de
          la presión alta. Es la llamada hipertensión esencial o primaria. Es el
          90% de todos los hipertensos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁN MALO ES SER HIPERTENSO?</Subheading>
        <Paragraph>
          Ser hipertenso controlado no es tan malo como si lo somos y no tenemos
          controlada nuestra presión. Cuando pasa el tiempo y somos hipertensos
          sin saberlo o no la tenemos controlada, esta puede producirnos
          distintas afectaciones que pueden llevarnos a estar muy enfermos,
          padecer de discapacidad o hasta llegar a la muerte. Los órganos que
          más se afectan son el corazón, el cerebro, los riñones y los ojos.
        </Paragraph>
        <Paragraph>
          El daño principal que provoca enfermedades en estos órganos es el
          endurecimiento de las arterias. Años de estar soportando presiones
          altas hacen que se endurezcan y se vuelvan más rígidas, lo que a su
          vez produce que la presión suba más.
        </Paragraph>
        <Paragraph>
          En el corazón, el hecho de que esté bombeando sangre contra una
          presión mayor durante años, hace que este se agrande para vencer esa
          presión. Ese agrandamiento produce que consuma más oxígeno, y como las
          arterias que lo alimentan (arterias coronarias) también están más
          rígidas por la propia hipertensión, no pueden llevarle los nutrientes
          y oxígenos que necesita. Cuando esto llega al límite, se puede
          producir angina, un infarto o insuficiencia del corazón.
        </Paragraph>
        <Paragraph>
          Cuando esto mismo pasa en el cerebro, se producen isquemias
          cerebrales, trombosis o derrames, que pueden dejar secuelas
          importantes que nos generan discapacidad y dependencia.
        </Paragraph>
        <Paragraph>
          Si esto sucede en el riñón, se producirá una insuficiencia renal
          crónica que a su vez aumentará más la presión, pues el riñón no será
          capaz de eliminar la sal y el exceso de agua del organismo.
        </Paragraph>
        <Paragraph>
          Y si sucede en las arterias de la retina, que está en la parte
          posterior del ojo, pueden producirse trastornos de la visión que
          pudieran llegar, si además tenemos diabetes, a la ceguera.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO PUEDO SABER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Habitualmente la presión alta no da síntomas, cuando más, dolor de
          cabeza o molestias en el pecho (angina). Muchas veces el diagnóstico
          se hace de manera casual, cuando nos toman la presión porque vamos al
          médico por otro motivo. Esto puede provocar que la enfermedad avance
          sin que lo sepamos y produzca daños en otros órganos, como vimos
          anteriormente.
        </Paragraph>
        <Paragraph>
          Por esta razón las personas que no son hipertensas deben medirse al
          menos dos veces al año la presión. Si es hipertenso, lo debe hacer con
          la frecuencia que le indique su médico.
        </Paragraph>
        <Paragraph>
          La presión que usted se tome en su casa es un mejor indicador de cómo
          anda su presión, comparada con la que se toma en la consulta médica,
          pues el hecho de ir al médico, esperar, estar nerviosos por lo que nos
          van a decir, puede subir un poco la presión.
        </Paragraph>
        <Paragraph>
          Es importante tener un buen equipo y estar entrenados en tomárnosla.
          Compare la presión que obtenga con un equipo portátil con la lectura
          que le haga el médico para estar seguros que su equipo es fiable.
        </Paragraph>
        <Fig15 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          A veces la presión sube en una persona que no es hipertensa, por una
          actividad física intensa, o por otra causa. Casi siempre se necesitan
          al menos dos tomas de presión en días diferentes para hacer el
          diagnóstico.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ DEBO HACER PARA QUE MI PRESIÓN SEA NORMAL?</Subheading>
        <Paragraph>
          Bueno, ya mi médico me dijo que soy hipertenso. Me encontraron la
          presión alta en una visita al médico casual por mi dolor en la
          espalda. Ya tengo 70 años y la espalda duele más a menudo que antes.
          El doctor me encontró la presión alta, me sugirió que me tomara la
          presión durante cuatro días y le llevara el record. Definitivamente
          soy hipertenso.
        </Paragraph>
        <Paragraph>
          Me indicó unos análisis de sangre, me miraron dentro del ojo con un
          equipo a ver si tenía lastimada la retina, que está dentro del ojo en
          su parte posterior, me indicaron un electrocardiograma y un
          ecocardiograma así como un ultrasonido de los riñones.
        </Paragraph>
        <Paragraph>
          Finalmente me dijo que no aparecían daños por la presión alta, pero
          que debía hacer algunos cambios en mis hábitos diarios y quizás tomar
          unas medicinas para evitar que esto pudiera pasar.
        </Paragraph>
        <Paragraph>
          Me dijo también que si lograba hacer alguna actividad física, bajar un
          poco de peso, y cambiar algunas cosas de la dieta, no debía
          preocuparme, pues mi presión debe tender a normalizarse. Si ello no
          fuera suficiente, entonces me añadiría unas medicinas. Le expliqué que
          yo tomo otros medicamentos para otras dolencias que tengo, me dijo que
          hice muy bien, pues las medicinas pueden actuar entre sí y él debía
          conocerlo para que no me pasara. Me explicó los cambios que debía
          hacer en mi vida y que volviera en un mes.
        </Paragraph>
        <Paragraph>
          Esta historia se repite a menudo, somos diagnosticados de hipertensión
          arterial y nuestra vida nos cambia. A veces nos resistimos a aceptar
          que nuestra presión arterial está elevada, pues no nos sentimos nada,
          pero finalmente, nos damos cuenta que ignorarlo puede ser peor que
          aceptarlo. Y entonces comenzamos a cambiar algunas cosas en nuestra
          vida.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO ES LA VIDA DE UN HIPERTENSO?</Subheading>
        <Paragraph>
          En esencia, la vida de una persona hipertensa es igual a las de las
          demás personas, principalmente si no hemos tenido complicaciones en
          otros órganos por ella. Por esto es importante diagnosticarla
          tempranamente. Si se logra controlar, hará mucho menos daño.
        </Paragraph>
        <Paragraph>
          Lo que se recomienda a las personas que son hipertensas es
          esencialmente lo que se le recomienda a cualquier persona que quiera
          estar saludable: realización de actividad física, dejar de fumar, no
          beber en exceso, no estar obeso y tener una dieta sana. Por lo demás,
          las personas hipertensas pueden llevar una vida completamente normal.
        </Paragraph>

        <Paragraph />
        <Subheading>¿QUÉ COSAS DEBO HACER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Independientemente que el médico nos indique medicamentos o no, los
          cambios en los hábitos y estilos de vida serán beneficiosos. Algunos
          de ellos es probable que ya los estemos haciendo desde antes, otros
          habrá que cambiarlos. ¿En qué consisten estos cambios?.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>No fumar</Bold>. Cuando fumamos, la presión sube un poco.
          Además, las sustancias que tienen el humo del tabaco, hacen que
          nuestras arterias se endurezcan más rápido.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>No beba en exceso</Bold>. El alcohol en exceso es dañino para la
          salud. No lo haga en exceso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Aliméntese sanamente</Bold>. Lo principal que debe tener en
          cuenta un hipertenso es ingerir poca sal y poca grasa saturada. Más
          adelante trataremos este particular.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Practique alguna actividad física</Bold>. Tener poca actividad
          física es malo para las enfermedades cardíacas y cerebrales. Estos
          órganos son de los más “atacados” por la presión alta. También
          favorece el sobrepeso, que a su vez predispone a la hipertensión. Lo
          ideal es hacer ejercicios del tipo aeróbico 3–4 días a la semana por
          30 minutos, según otras enfermedades o limitaciones que tengamos. Pero
          caminar, arreglar el jardín y otras actividades que hacemos casi todos
          los días, pueden ayudar si no podemos hacer ejercicios. La actividad
          física baja la presión arterial y ayuda a combatir el sobrepeso,
          comience con ejercicios de poco esfuerzo y aumente la carga poco a
          poco. Consulte a su médico si cree que necesita orientación.
        </Paragraph>
        <Fig16 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>¿QUÉ PUEDO COMER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Las personas hipertensas pueden comer cualquier alimento, pero deben
          limitar la cantidad de sal que tiene la comida. Mientras menos sal
          ingiera, mejor para su presión alta, aunque no es necesario comer sin
          sal.
        </Paragraph>
        <Paragraph>
          Una dieta buena para un hipertenso es muy parecida a la que se orienta
          para las personas que padecen del corazón: abundante en vegetales,
          frutas, baja en azúcares refinados y grasas, rica en fibras.
        </Paragraph>
        <Paragraph>
          Los alimentos ricos en sal como los quesos y algunos alimentos
          enlatados deben limitarse. No ponga salero en su mesa.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ OTRAS COSAS DEBO HACER PARA QUE MI PRESIÓN SEA NORMAL?
        </Subheading>
        <Paragraph>
          Si tenemos sobrepeso, tratemos de alcanzar un peso normal, lo cual
          contribuye a bajar la presión arterial e incluso a estabilizarla.
        </Paragraph>
        <Paragraph>
          En ocasiones, a pesar de realizar cambios en los hábitos de vida, el
          médico nos indica medicinas. Existen muchas medicinas para bajar la
          presión alta. A veces no es suficiente con un solo medicamento y debe
          tomar otro más. Es muy importante que su médico sepa todas las
          medicinas que usted toma, pues pueden reaccionar unas con otras.
        </Paragraph>
        <Paragraph>
          También es importante que usted conozca los efectos indeseables que
          pueden tener las medicinas que toma. En el caso de las medicinas para
          la presión, los más frecuentes son tos, mareos, cansancio, decaimiento
          y dolor de cabeza, aunque pueden variar mucho de una persona a otra.
        </Paragraph>
        <Paragraph>
          El manejo del estrés es importante. Existen técnicas para mejorar la
          tensión que nos causan los acontecimientos de la vida diaria.
          Ejercicios respiratorios pueden ayudar mucho y son sencillos. Consulte
          a un especialista. El Tai–Chi puede ayudarnos también a encontrar la
          tranquilidad interior que estamos buscando.
        </Paragraph>
        <Paragraph>
          Mientras la presión sea normal por más tiempo, menores serán las
          complicaciones. Ese es el objetivo que debemos seguir si somos
          hipertensos.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'12-1'}
          question={'1. Sobre la presión alta:'}
          answers={[
            'Agregar mucha sal a la comida es malo.',
            'La “máxima” un poco alta es normal en las personas mayores.',
            'Las personas mayores tienen normalmente la presión más alta que los jóvenes.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'12-2'}
          question={'2. Son factores de riesgo para padecer de presión alta:'}
          answers={[
            'No realizar ejercicios.',
            'Tener sobrepeso.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'12-3'}
          question={
            '3. Para lograr mejorar control de la presión alta debemos:'
          }
          answers={[
            'Agregar poca sal a la comida.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La presión alta es evitable.',
            'Lo ideal es que tengamos la presión máxima en 120 o menos y la mínima en 80 o menos.',
            'La sal y el sobrepeso son el enemigo número 1 de la presión.',
            'Si comes pizza en la calle, nunca le agregues sal.',
            'La presión alta emotiva no existe.',
            'Los principales daños de la presión alta son en el corazón, los ojos, el cerebro y los riñones. Pero estos daños son evitables si mantenemos nuestra presión normal.',
            'Las medicinas para la presión pueden dar efectos indeseables.',
            'Las personas con presión alta podemos llevar una vida normal.',
            'Si realizamos actividad física, no fumamos, no bebemos en exceso, no estamos obeso y tenemos una dieta con muchos vegetales, frutas y poca sal, nuestra presión nos lo agradecerá mucho.',
            'El hipertenso puede comer de todo pero bajo de sal.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Cancer')}>
          <Text>{'¿Qué debemos saber sobre el cáncer?'}</Text>
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

export default PresionAlta;
