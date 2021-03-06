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
          <Text>{'??Qu?? es la diabetes y c??mo manejarla?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ??QU?? DEBO SABER DE LA PRESI??N ALTA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a hipertensi??n arterial es cada vez m??s frecuente en las
          personas, y a medida que envejecemos la probabilidad de tener presi??n
          alta aumenta, por varios motivos. La hipertensi??n arterial, o ???presi??n
          alta??? como le decimos la mayor??a de las veces, est?? presente en la
          mayor??a de los pacientes que fallecen por enfermedades del coraz??n y
          cerebrovasculares (???trombosis o derrames???), que son dos de las tres
          principales causas de muerte en las personas mayores.
        </Paragraph>
        <Paragraph>
          Primero hablaremos de qu?? es la presi??n arterial. Piensen en el
          coraz??n como un motor que impulsa agua por tuber??as hasta los tanques
          o las pilas de agua de nuestra casa. El coraz??n impulsa sangre dentro
          de las arterias para que lleguen los nutrientes y el ox??geno a todas
          las partes del cuerpo. La impulsa al contraerse (esta contracci??n se
          llama s??stole) y despu??s se relaja (la etapa de relajaci??n se llama
          di??stole) para llenarse de sangre de nuevo, y despu??s se vuelve a
          contraer y contin??a el ciclo. En el momento de contraerse, la sangre
          expulsada alcanza su mayor presi??n en las arterias, es la llamada
          presi??n sist??lica o ???la m??xima??? como decimos. En el momento en que el
          coraz??n est?? relajado y llen??ndose de sangre, es cuando la presi??n en
          las arterias es m??s baja, y se llama presi??n diast??lica o ???la m??nima???.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES LA PRESI??N ALTA?</Subheading>
        <Paragraph>
          Las cifras de presi??n por encima de ciertos par??metros es lo que se
          llama hipertensi??n arterial. En la siguiente tabla est??n las cifras
          normales y de hipertensi??n arterial.
        </Paragraph>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>CLASIFICACI??N DE PRESI??N ARTERIAL</DataTable.Title>
          </DataTable.Header>
          <DataTable.Header>
            <DataTable.Title>Categor??a</DataTable.Title>
            <DataTable.Title>Sist??lica (mm Hg) (m??xima)</DataTable.Title>
            <DataTable.Title>Diast??lica (mm Hg) (m??nima)</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Normal</DataTable.Cell>
            <DataTable.Cell>Inferior a 120</DataTable.Cell>
            <DataTable.Cell>Inferior a 80</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Prehipertensi??n</DataTable.Cell>
            <DataTable.Cell>120-139</DataTable.Cell>
            <DataTable.Cell>80-89</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header>
            <DataTable.Title>Hipertensi??n</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell>Grado 1</DataTable.Cell>
            <DataTable.Cell>140-159</DataTable.Cell>
            <DataTable.Cell>90-99</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Grado 2</DataTable.Cell>
            <DataTable.Cell>160 o m??s</DataTable.Cell>
            <DataTable.Cell>100 o m??s</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <Paragraph>
          Lo que dice en la tabla ???mm Hg??? quiere decir mil??metros de mercurio,
          que es la medida en que se mide la presi??n arterial. Esta tabla dice
          que lo ideal es que tengamos la presi??n sist??lica o m??xima en{' '}
          <Bold>120 o menos</Bold> y la diast??lica o m??nima en{' '}
          <Bold>80 o menos</Bold>. La presi??n se da en dos cifras, por ejemplo
          110 con 75. Esto quiere decir que la sist??lica o m??xima es 110 y la
          diast??lica o m??nima es 75. Han habido varios mitos, como que es normal
          que la presi??n suba en las personas mayores para que le llegue m??s
          sangre al cerebro; que si la presi??n est?? solo un poco alta no se debe
          tratar; que el que es hipertenso se acostumbra a esa presi??n alta y si
          se le baja se siente mal. Se ha demostrado que todos son falsos. Por
          otro lado, es bueno saber que no existe una presi??n normal para los
          j??venes y otra para las personas mayores.
        </Paragraph>
        <Paragraph />
        <Subheading>??POR QU?? ME PUEDO VOLVER HIPERTENSO?</Subheading>
        <Paragraph>
          Hay varias formas en las que nos podemos volver hipertensos. Existen
          varios factores de riesgo para ser hipertensos.
        </Paragraph>
        <Paragraph>
          Mientras m??s edad tengamos, m??s probable es que nos volvamos
          hipertensos. Esto sucede porque con los a??os, las arterias se vuelven
          m??s r??gidas. Al ser menos el??sticas, cuando el coraz??n bombea la
          sangre, la presi??n sist??lica o m??xima sube. Por ello la hipertensi??n
          sist??lica es m??s frecuente en las personas mayores.
        </Paragraph>
        <Paragraph>
          Si tenemos sobrepeso u obesidad es m??s probable que desarrollemos la
          presi??n alta. Si el afrontamiento que tenemos con los problemas de la
          vida diaria tambi??n nos produce estr??s o ansiedad. Hay personas que
          dicen tener ???presi??n alta emotiva???, es decir, cuando se emocionan.
          Todos nos emocionamos en la vida para bien o para mal, pero no a todos
          nos sube la presi??n por ello. Sencillamente son hipertensos.
        </Paragraph>
        <Paragraph>
          Si tomamos mucha bebida alcoh??lica, si fumamos, si somos diab??ticos o
          tenemos familiares cercanos (padres o hermanos) con hipertensi??n,
          tambi??n es m??s probable que lo seamos.
        </Paragraph>
        <Paragraph>
          Uno de los factores m??s importantes es comer con mucha sal los
          alimentos. La sal mejora el sabor de los mismos, pero en exceso es muy
          perjudicial.
        </Paragraph>
        <Paragraph>
          Tambi??n hay enfermedades que pueden subir la presi??n, como la
          insuficiencia renal cr??nica. Algunos medicamentos pueden subir la
          presi??n. Por ello es importante si estamos acudiendo al m??dico por
          sospecha de presi??n alta, informarle todas las medicinas que tomamos.
          En este caso hablamos de hipertensi??n secundaria. Solo es menos del
          10% de todas las personas hipertensas.
        </Paragraph>
        <Paragraph>
          Esto quiere decir que la mayor??a de las veces no se sabe la causa de
          la presi??n alta. Es la llamada hipertensi??n esencial o primaria. Es el
          90% de todos los hipertensos.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??N MALO ES SER HIPERTENSO?</Subheading>
        <Paragraph>
          Ser hipertenso controlado no es tan malo como si lo somos y no tenemos
          controlada nuestra presi??n. Cuando pasa el tiempo y somos hipertensos
          sin saberlo o no la tenemos controlada, esta puede producirnos
          distintas afectaciones que pueden llevarnos a estar muy enfermos,
          padecer de discapacidad o hasta llegar a la muerte. Los ??rganos que
          m??s se afectan son el coraz??n, el cerebro, los ri??ones y los ojos.
        </Paragraph>
        <Paragraph>
          El da??o principal que provoca enfermedades en estos ??rganos es el
          endurecimiento de las arterias. A??os de estar soportando presiones
          altas hacen que se endurezcan y se vuelvan m??s r??gidas, lo que a su
          vez produce que la presi??n suba m??s.
        </Paragraph>
        <Paragraph>
          En el coraz??n, el hecho de que est?? bombeando sangre contra una
          presi??n mayor durante a??os, hace que este se agrande para vencer esa
          presi??n. Ese agrandamiento produce que consuma m??s ox??geno, y como las
          arterias que lo alimentan (arterias coronarias) tambi??n est??n m??s
          r??gidas por la propia hipertensi??n, no pueden llevarle los nutrientes
          y ox??genos que necesita. Cuando esto llega al l??mite, se puede
          producir angina, un infarto o insuficiencia del coraz??n.
        </Paragraph>
        <Paragraph>
          Cuando esto mismo pasa en el cerebro, se producen isquemias
          cerebrales, trombosis o derrames, que pueden dejar secuelas
          importantes que nos generan discapacidad y dependencia.
        </Paragraph>
        <Paragraph>
          Si esto sucede en el ri????n, se producir?? una insuficiencia renal
          cr??nica que a su vez aumentar?? m??s la presi??n, pues el ri????n no ser??
          capaz de eliminar la sal y el exceso de agua del organismo.
        </Paragraph>
        <Paragraph>
          Y si sucede en las arterias de la retina, que est?? en la parte
          posterior del ojo, pueden producirse trastornos de la visi??n que
          pudieran llegar, si adem??s tenemos diabetes, a la ceguera.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO PUEDO SABER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Habitualmente la presi??n alta no da s??ntomas, cuando m??s, dolor de
          cabeza o molestias en el pecho (angina). Muchas veces el diagn??stico
          se hace de manera casual, cuando nos toman la presi??n porque vamos al
          m??dico por otro motivo. Esto puede provocar que la enfermedad avance
          sin que lo sepamos y produzca da??os en otros ??rganos, como vimos
          anteriormente.
        </Paragraph>
        <Paragraph>
          Por esta raz??n las personas que no son hipertensas deben medirse al
          menos dos veces al a??o la presi??n. Si es hipertenso, lo debe hacer con
          la frecuencia que le indique su m??dico.
        </Paragraph>
        <Paragraph>
          La presi??n que usted se tome en su casa es un mejor indicador de c??mo
          anda su presi??n, comparada con la que se toma en la consulta m??dica,
          pues el hecho de ir al m??dico, esperar, estar nerviosos por lo que nos
          van a decir, puede subir un poco la presi??n.
        </Paragraph>
        <Paragraph>
          Es importante tener un buen equipo y estar entrenados en tom??rnosla.
          Compare la presi??n que obtenga con un equipo port??til con la lectura
          que le haga el m??dico para estar seguros que su equipo es fiable.
        </Paragraph>
        <Fig15 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          A veces la presi??n sube en una persona que no es hipertensa, por una
          actividad f??sica intensa, o por otra causa. Casi siempre se necesitan
          al menos dos tomas de presi??n en d??as diferentes para hacer el
          diagn??stico.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? DEBO HACER PARA QUE MI PRESI??N SEA NORMAL?</Subheading>
        <Paragraph>
          Bueno, ya mi m??dico me dijo que soy hipertenso. Me encontraron la
          presi??n alta en una visita al m??dico casual por mi dolor en la
          espalda. Ya tengo 70 a??os y la espalda duele m??s a menudo que antes.
          El doctor me encontr?? la presi??n alta, me sugiri?? que me tomara la
          presi??n durante cuatro d??as y le llevara el record. Definitivamente
          soy hipertenso.
        </Paragraph>
        <Paragraph>
          Me indic?? unos an??lisis de sangre, me miraron dentro del ojo con un
          equipo a ver si ten??a lastimada la retina, que est?? dentro del ojo en
          su parte posterior, me indicaron un electrocardiograma y un
          ecocardiograma as?? como un ultrasonido de los ri??ones.
        </Paragraph>
        <Paragraph>
          Finalmente me dijo que no aparec??an da??os por la presi??n alta, pero
          que deb??a hacer algunos cambios en mis h??bitos diarios y quiz??s tomar
          unas medicinas para evitar que esto pudiera pasar.
        </Paragraph>
        <Paragraph>
          Me dijo tambi??n que si lograba hacer alguna actividad f??sica, bajar un
          poco de peso, y cambiar algunas cosas de la dieta, no deb??a
          preocuparme, pues mi presi??n debe tender a normalizarse. Si ello no
          fuera suficiente, entonces me a??adir??a unas medicinas. Le expliqu?? que
          yo tomo otros medicamentos para otras dolencias que tengo, me dijo que
          hice muy bien, pues las medicinas pueden actuar entre s?? y ??l deb??a
          conocerlo para que no me pasara. Me explic?? los cambios que deb??a
          hacer en mi vida y que volviera en un mes.
        </Paragraph>
        <Paragraph>
          Esta historia se repite a menudo, somos diagnosticados de hipertensi??n
          arterial y nuestra vida nos cambia. A veces nos resistimos a aceptar
          que nuestra presi??n arterial est?? elevada, pues no nos sentimos nada,
          pero finalmente, nos damos cuenta que ignorarlo puede ser peor que
          aceptarlo. Y entonces comenzamos a cambiar algunas cosas en nuestra
          vida.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO ES LA VIDA DE UN HIPERTENSO?</Subheading>
        <Paragraph>
          En esencia, la vida de una persona hipertensa es igual a las de las
          dem??s personas, principalmente si no hemos tenido complicaciones en
          otros ??rganos por ella. Por esto es importante diagnosticarla
          tempranamente. Si se logra controlar, har?? mucho menos da??o.
        </Paragraph>
        <Paragraph>
          Lo que se recomienda a las personas que son hipertensas es
          esencialmente lo que se le recomienda a cualquier persona que quiera
          estar saludable: realizaci??n de actividad f??sica, dejar de fumar, no
          beber en exceso, no estar obeso y tener una dieta sana. Por lo dem??s,
          las personas hipertensas pueden llevar una vida completamente normal.
        </Paragraph>

        <Paragraph />
        <Subheading>??QU?? COSAS DEBO HACER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Independientemente que el m??dico nos indique medicamentos o no, los
          cambios en los h??bitos y estilos de vida ser??n beneficiosos. Algunos
          de ellos es probable que ya los estemos haciendo desde antes, otros
          habr?? que cambiarlos. ??En qu?? consisten estos cambios?.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>No fumar</Bold>. Cuando fumamos, la presi??n sube un poco.
          Adem??s, las sustancias que tienen el humo del tabaco, hacen que
          nuestras arterias se endurezcan m??s r??pido.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>No beba en exceso</Bold>. El alcohol en exceso es da??ino para la
          salud. No lo haga en exceso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Alim??ntese sanamente</Bold>. Lo principal que debe tener en
          cuenta un hipertenso es ingerir poca sal y poca grasa saturada. M??s
          adelante trataremos este particular.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>Practique alguna actividad f??sica</Bold>. Tener poca actividad
          f??sica es malo para las enfermedades card??acas y cerebrales. Estos
          ??rganos son de los m??s ???atacados??? por la presi??n alta. Tambi??n
          favorece el sobrepeso, que a su vez predispone a la hipertensi??n. Lo
          ideal es hacer ejercicios del tipo aer??bico 3???4 d??as a la semana por
          30 minutos, seg??n otras enfermedades o limitaciones que tengamos. Pero
          caminar, arreglar el jard??n y otras actividades que hacemos casi todos
          los d??as, pueden ayudar si no podemos hacer ejercicios. La actividad
          f??sica baja la presi??n arterial y ayuda a combatir el sobrepeso,
          comience con ejercicios de poco esfuerzo y aumente la carga poco a
          poco. Consulte a su m??dico si cree que necesita orientaci??n.
        </Paragraph>
        <Fig16 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>??QU?? PUEDO COMER SI SOY HIPERTENSO?</Subheading>
        <Paragraph>
          Las personas hipertensas pueden comer cualquier alimento, pero deben
          limitar la cantidad de sal que tiene la comida. Mientras menos sal
          ingiera, mejor para su presi??n alta, aunque no es necesario comer sin
          sal.
        </Paragraph>
        <Paragraph>
          Una dieta buena para un hipertenso es muy parecida a la que se orienta
          para las personas que padecen del coraz??n: abundante en vegetales,
          frutas, baja en az??cares refinados y grasas, rica en fibras.
        </Paragraph>
        <Paragraph>
          Los alimentos ricos en sal como los quesos y algunos alimentos
          enlatados deben limitarse. No ponga salero en su mesa.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? OTRAS COSAS DEBO HACER PARA QUE MI PRESI??N SEA NORMAL?
        </Subheading>
        <Paragraph>
          Si tenemos sobrepeso, tratemos de alcanzar un peso normal, lo cual
          contribuye a bajar la presi??n arterial e incluso a estabilizarla.
        </Paragraph>
        <Paragraph>
          En ocasiones, a pesar de realizar cambios en los h??bitos de vida, el
          m??dico nos indica medicinas. Existen muchas medicinas para bajar la
          presi??n alta. A veces no es suficiente con un solo medicamento y debe
          tomar otro m??s. Es muy importante que su m??dico sepa todas las
          medicinas que usted toma, pues pueden reaccionar unas con otras.
        </Paragraph>
        <Paragraph>
          Tambi??n es importante que usted conozca los efectos indeseables que
          pueden tener las medicinas que toma. En el caso de las medicinas para
          la presi??n, los m??s frecuentes son tos, mareos, cansancio, decaimiento
          y dolor de cabeza, aunque pueden variar mucho de una persona a otra.
        </Paragraph>
        <Paragraph>
          El manejo del estr??s es importante. Existen t??cnicas para mejorar la
          tensi??n que nos causan los acontecimientos de la vida diaria.
          Ejercicios respiratorios pueden ayudar mucho y son sencillos. Consulte
          a un especialista. El Tai???Chi puede ayudarnos tambi??n a encontrar la
          tranquilidad interior que estamos buscando.
        </Paragraph>
        <Paragraph>
          Mientras la presi??n sea normal por m??s tiempo, menores ser??n las
          complicaciones. Ese es el objetivo que debemos seguir si somos
          hipertensos.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'12-1'}
          question={'1. Sobre la presi??n alta:'}
          answers={[
            'Agregar mucha sal a la comida es malo.',
            'La ???m??xima??? un poco alta es normal en las personas mayores.',
            'Las personas mayores tienen normalmente la presi??n m??s alta que los j??venes.',
          ]}
          correct={[0]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'12-2'}
          question={'2. Son factores de riesgo para padecer de presi??n alta:'}
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
            '3. Para lograr mejorar control de la presi??n alta debemos:'
          }
          answers={[
            'Agregar poca sal a la comida.',
            'Dar caminatas todos los d??as o casi todos los d??as.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La presi??n alta es evitable.',
            'Lo ideal es que tengamos la presi??n m??xima en 120 o menos y la m??nima en 80 o menos.',
            'La sal y el sobrepeso son el enemigo n??mero 1 de la presi??n.',
            'Si comes pizza en la calle, nunca le agregues sal.',
            'La presi??n alta emotiva no existe.',
            'Los principales da??os de la presi??n alta son en el coraz??n, los ojos, el cerebro y los ri??ones. Pero estos da??os son evitables si mantenemos nuestra presi??n normal.',
            'Las medicinas para la presi??n pueden dar efectos indeseables.',
            'Las personas con presi??n alta podemos llevar una vida normal.',
            'Si realizamos actividad f??sica, no fumamos, no bebemos en exceso, no estamos obeso y tenemos una dieta con muchos vegetales, frutas y poca sal, nuestra presi??n nos lo agradecer?? mucho.',
            'El hipertenso puede comer de todo pero bajo de sal.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Cancer')}>
          <Text>{'??Qu?? debemos saber sobre el c??ncer?'}</Text>
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
