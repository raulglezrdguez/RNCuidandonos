/* eslint-disable prettier/prettier */
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
import Fig13 from '../components/Fig13';
import Fig14 from '../components/Fig14';

const Diabetes = ({navigation}) => {
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
      await AsyncStorage.setItem('@sDiabetes', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sDiabetes');
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
          onPress={() => navigate('Corazon')}>
          <Text>{'??Estoy enfermo del coraz??n?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ??QU?? ES LA DIABETES Y C??MO MANEJARLA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l p??ncreas es un ??rgano que se encuentra en el abdomen.
          Una de las funciones que tiene el p??ncreas es fabricar y llevar a la
          sangre una sustancia que se llama insulina, que es una hormona. La
          insulina es la que se encarga de regular el az??car en la sangre. Esta
          az??car se llama glucosa. Cuando el p??ncreas es incapaz de producir
          insulina, o la produce en cantidades muy bajas o esta no es bien
          utilizada por el cuerpo, entonces tenemos diabetes.
        </Paragraph>
        <Paragraph>
          La diabetes tambi??n se conoce con el t??rmino de diabetes mellitus. Es
          lo mismo, y en este cap??tulo la llamaremos como diabetes solamente.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES LA DIABETES?</Subheading>
        <Paragraph>
          Entonces ya sabemos que la diabetes es enfermedad causada por la
          ausencia de insulina o que aunque exista esta, hay muy poca o el
          cuerpo humano no reacciona a ella. Teniendo en cuenta esto, la
          diabetes se divide en diabetes tipo I y tipo II.
        </Paragraph>
        <Paragraph>
          La diabetes tipo I es cuando el p??ncreas no produce insulina. Tambi??n
          se le llama diabetes insulinodependiente, pues las personas para vivir
          necesitan administrarse insulina. Otro nombre por el que se la conoce
          es diabetes juvenil, pues es en edades j??venes cuando m??s se
          diagnostica, lo cual no quiere decir que no se diagnostiquen por
          primera vez en personas mayores, aunque esto no es lo m??s frecuente.
        </Paragraph>
        <Paragraph>
          La diabetes tipo II es cuando se produce poca insulina en el p??ncreas
          pero esta no es suficiente, o cuando el organismo no reconoce la
          insulina que vierte el p??ncreas en la sangre.
        </Paragraph>
        <Paragraph>
          Las c??lulas producen energ??a a partir del az??car o glucosa. La glucosa
          es un tipo de az??car, e indistintamente las personas decimos ???tengo
          az??car en la sangre??? que es lo mismo que padecer de diabetes. Otras
          veces decimos ???tengo el az??car alta???, que es lo mismo que decir ???tengo
          la glucosa alta???. Aqu?? la mencionaremos indistintamente como az??car o
          glucosa. La mayor??a de los alimentos que comemos, al final se
          transforman en glucosa para que pueda ser utilizada por las c??lulas.
          Pero esta glucosa debe entrar a las c??lulas para que la usen, y
          precisamente eso es lo que hace la insulina: entrar el az??car a trav??s
          de las membranas de las c??lulas hacia su interior. Cuando no hay
          insulina, o esta falla o hay poca, aumenta mucho el az??car en sangre.
        </Paragraph>
        <Paragraph>
          Cuando el az??car est?? elevada en la sangre por mucho tiempo, se
          producen muchos trastornos en todo el organismo, que son las llamadas
          complicaciones de la diabetes.
        </Paragraph>
        <Paragraph>
          Hay otro estado que se conoce como pre???diabetes, o intolerancia a la
          glucosa, que es cuando el az??car sube en sangre pero no lo suficiente
          para decir que hay diabetes. Este estado, si no se atiende a tiempo y
          se trata de revertir, puede conducir a la diabetes, principalmente la
          tipo II.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??LES SON LOS S??NTOMAS DE LA DIABETES?</Subheading>
        <Paragraph>
          Los s??ntomas pueden variar en intensidad y rapidez de aparici??n si se
          trata de diabetes tipo I o tipo II. En la diabetes tipo I aparecen m??s
          r??pidamente, en la diabetes tipo II pueden demorar mucho m??s tiempo y
          ser menos intensos, y a veces la enfermedad se diagnostica por las
          complicaciones sin que haya dado los s??ntomas t??picos antes.
        </Paragraph>
        <Paragraph>
          En general, los s??ntomas son mucha sed, orinar mucha cantidad y tener
          mucho hambre. A esto se une una p??rdida de peso inexplicable.
        </Paragraph>
        <Paragraph>
          Otros s??ntomas pueden ser demora en curarse las heridas, que se
          infestan con facilidad, la visi??n puede ser borrosa, las personas
          pueden estar fatigadas sin motivo.
        </Paragraph>
        <Paragraph>
          Son m??s frecuentes las infecciones en la piel, principalmente por
          hongos en las zonas h??medas, como son las axilas, en el pliegue
          inguinal y debajo de las mamas en las mujeres.
        </Paragraph>
        <Paragraph>
          Los s??ntomas pueden no ser siempre los mismos. Puede haber personas
          con glicemia elevada sin que tengan s??ntomas.
        </Paragraph>
        <Paragraph>
          Las complicaciones pueden ser muchas, pero{' '}
          <Bold>
            mientras mejor controlados tengamos los niveles de az??car en sangre,
            menos ser??n
          </Bold>
          .
        </Paragraph>
        <Paragraph>
          Podemos sentir en las piernas y pies adormecimiento, hormigueo,
          sensaci??n de quemaz??n, ardent??a, calambres. Todo esto es producido por
          el da??o en los nervios. Se pueden llegar a producir ??lceras en los
          pies.
        </Paragraph>
        <Paragraph>
          La diabetes acelera la aterosclerosis, con obstrucci??n al paso de
          sangre por las arterias. Esto puede producir ??lceras en las piernas,
          de muy dif??cil curaci??n, y hasta gangrena en los dedos de los pies o
          parte de este.
        </Paragraph>
        <Paragraph>
          Estos mismos da??os en las arterias si se producen en los ojos pueden
          provocar da??os en la retina (parte posterior del ojo) que nos
          dificulten ver, llegando a la ceguera en casos severos.
        </Paragraph>
        <Paragraph>
          Si los cambios ocurren en los ri??ones, puede producirse insuficiencia
          renal cr??nica.
        </Paragraph>
        <Paragraph>
          Si ocurren en las arterias coronarias (arterias que alimentan al
          coraz??n) se puede producir cardiopat??a isqu??mica que puede llegar al
          infarto cardiaco, y si ocurren en las arterias cerebrales, puede
          aparecer una trombosis o derrame cerebral.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO S?? SI TENGO DIABETES?</Subheading>
        <Paragraph>
          Para saber si tenemos diabetes, se deben hacer determinaciones de
          glucosa en sangre. Esto puede ser en <Bold>ayunas</Bold>,
          habitualmente se hace por la ma??ana despu??s de al menos ocho horas sin
          ingerir alimentos.
        </Paragraph>
        <Paragraph>
          Otra prueba que le puede solicitar su m??dico es la llamada{' '}
          <Bold>prueba de tolerancia a la glucosa</Bold> ???glicemia provocada???,
          como tambi??n se le conoce.
        </Paragraph>
        <Paragraph />
        <Subheading>??PUEDO PREVENIR LA DIABETES?</Subheading>
        <Paragraph>
          La diabetes tiene un componente hereditario: aunque no siempre, hijos
          de padres diab??ticos tienen m??s probabilidad de padecerla. Igual si
          tienen hermanos o t??os en esta situaci??n.
        </Paragraph>
        <Paragraph>
          Las personas no pueden hacer nada sobre la herencia gen??tica, pero hay
          otros factores que s?? pueden ser modificados, aun teniendo familiares
          diab??ticos, y retrasar el comienzo de la enfermedad e incluso
          evitarlo.
        </Paragraph>
        <Paragraph>
          Entre los factores de riesgo que favorecen la aparici??n de la
          diabetes, el m??s importante de todos es la obesidad. El sobrepeso
          favorece la aparici??n de diabetes tipo II, que es con mucho la m??s
          frecuente. Por ello la dieta es importante.
        </Paragraph>
        <Paragraph>
          El exceso de comer dulces por s?? mismo no produce diabetes, pero s??
          aumenta de peso. Por ello se recomienda no ingerir grandes cantidades
          al d??a de refrescos u otras bebidas azucaradas. Los jugos de frutas
          son saludables, pero si est??n muy dulces pueden llegar a lastimar
          nuestra salud.
        </Paragraph>
        <Paragraph>
          Hay varias formas para saber si estamos pasados de peso o no, aunque
          casi siempre lo sabemos de mirarnos en el espejo o por la ropa que ya
          no nos sirve. Si tiene duda, consulte a su m??dico.
        </Paragraph>
        <Paragraph>
          Al sobrepeso est??n asociados muy estrechamente la actividad f??sica y
          la dieta. Una dieta muy rica en calor??as o la inactividad f??sica,
          har??n que subamos de peso. Tanto la dieta, como el ejercicio y su peso
          podemos controlarlos.
        </Paragraph>
        <Paragraph>
          Podemos prevenir la diabetes tipo II viviendo una vida normal.
        </Paragraph>
        <Paragraph>Merece la pena. Intent??moslo.</Paragraph>
        <Paragraph />
        <Subheading>
          ??QU?? PUEDO HACER PARA EVITAR O DEMORAR LAS COMPLICACIONES?
        </Subheading>
        <Paragraph>
          Si ya somos diab??ticos, hay muchas cosas que puedo hacer para que no
          se complique la enfermedad. Las personas que tenemos diabetes podemos
          vivir largos a??os y una vida relativamente normal con algunos
          cuidados.
        </Paragraph>
        <Paragraph>
          Muchos de estos cuidados son parecidos a los que debemos tener para
          una vida sana, aunque no tengamos diabetes.
        </Paragraph>
        <Paragraph>
          Los diab??ticos podemos vivir casi igual que los dem??s, solo tomando
          algunas precauciones.
        </Paragraph>
        <Paragraph>
          Se puede decir que los tres pilares para mantener controlada a la
          diabetes son la <Bold>dieta</Bold>, los <Bold>ejercicios</Bold> y los{' '}
          <Bold>medicamentos</Bold>.
        </Paragraph>
        <Fig14 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          No todas las personas diab??ticas necesitamos medicinas. En algunas,
          solo la dieta y los ejercicios son suficientes para mantener los
          niveles de az??car en sangre dentro de los l??mites normales.
        </Paragraph>
        <Paragraph>
          El objetivo es mantener normales en sangre los niveles de glucosa.
          Mientras m??s tiempo tengamos normales estos niveles, menos
          complicaciones tendremos en el futuro. A continuaci??n veremos c??mo
          podemos lograrlo.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES LO PRIMERO QUE DEBO HACER?</Subheading>
        <Paragraph>
          Lo primero es conocer la enfermedad y conocer c??mo se comporta esta en
          nosotros. No todas las personas diab??ticas evolucionan igual, ni
          presentan los mismos s??ntomas. Por ello es importante conocer c??mo
          est?? nuestra az??car en sangre.
        </Paragraph>
        <Paragraph>
          En ocasiones, podemos tener el az??car baja o alta, y no tener
          s??ntomas, especialmente cuando est?? alta. Con el tiempo, los
          diab??ticos aprenden a reconocer sus s??ntomas, pero siempre debemos
          tener presente que este no es un m??todo infalible para saber c??mo
          estamos. Pero debemos aprender a conocer c??mo se manifiesta la
          enfermedad en nosotros, principalmente cuando el az??car est?? baja en
          sangre.
        </Paragraph>
        <Paragraph>
          El az??car en sangre se llama glicemia. Para conocer exactamente c??mo
          tenemos la glicemia, existe un equipo sencillo y f??cil de usar que se
          llama gluc??metro. La enfermera de la familia nos puede ense??ar a
          usarlo. Tambi??n es ??til que
        </Paragraph>
        <Fig13 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          alg??n familiar cercano a nosotros lo sepa utilizar, pues si no estamos
          en condiciones de hacerlo, esto puede ser de gran ayuda.
        </Paragraph>
        <Paragraph>
          Los s??ntomas del az??car baja pueden ser muy variados, desde sudoraci??n
          o visi??n borrosa hasta dolor de cabeza o cansancio.
        </Paragraph>
        <Paragraph>
          El tratamiento es sencillamente ingerir algo azucarado, como un
          caramelo, una cucharadita de az??car o un poco de jugo de frutas con
          az??car. Un consejo ??til es tener encima alg??n caramelo o algo dulce
          por si esto sucediera.
        </Paragraph>
        <Paragraph>
          El mejor tratamiento es evitar que esto ocurra, para lo cual debemos
          tener en cuenta que las personas diab??ticas no deben pasar largos
          per??odos en ayunas, sin ingerir alimentos, y ser cuidadosos con los
          medicamentos para la diabetes.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? DIETA DEBO HACER?</Subheading>
        <Paragraph>
          No debemos pasar largos per??odos sin alimentarnos. El diab??tico puede
          casi comer de todo. La diferencia con la persona que no lo es, est?? en
          las cantidades y la frecuencia. La persona diab??tica no debe ingerir
          de una sentada grandes cantidades de alimentos que suban mucho la
          glicemia en sangre.
        </Paragraph>
        <Paragraph>
          ??Y cu??les son estos alimentos? Los ricos en carbohidratos,
          principalmente los que tienen az??cares refinados. Tambi??n el pan,
          galletas y pastas est??n compuestos principalmente de carbohidratos,
          por lo que las porciones de ellos no deben ser grandes. No hay una
          medida exacta para cada persona, su m??dico de familia le puede indicar
          cu??l es el que usted necesita.
        </Paragraph>
        <Paragraph>
          La ingesta de calor??as estar?? muy relacionada con la cantidad de
          ejercicios que hagamos.
        </Paragraph>
        <Paragraph>
          Aunque algunos alimentos vienen etiquetados ???para diab??ticos???, el
          principio es comer alimentos bajos en calor??as. Los vegetales son un
          ejemplo de alimentos que puede comer abundantemente. Tengamos cuidado
          con las frutas, en su mayor??a si las comemos en exceso pueden subir
          demasiado el az??car en sangre, principalmente las que son m??s dulces.
        </Paragraph>
        <Paragraph>
          Podemos comer dulces, pero en muy peque??as porciones, y quiz??s
          dej??ndolos para algunos momentos como celebraciones, siempre
          acompa??ados de comida sana.
        </Paragraph>
        <Paragraph>
          En general, la comida que se recomienda para una persona diab??tica es
          la misma comida <Bold>sana</Bold> que se recomienda para todas las
          personas, solo que como dijimos, var??an las proporciones y quiz??s un
          poco los horarios. Trate de comer a horarios fijos, tres veces por
          d??a, y a media ma??ana, a media tarde y al acostarse trate de merendar
          algo sencillo, con poco contenido en carbohidratos.
        </Paragraph>
        <Paragraph>
          Es importante que <Bold>si tiene sobrepeso, trate de perderlo</Bold>.
          El cuerpo maneja mejor las cifras de az??car en sangre cuando tenemos
          buen peso, frecuentemente se necesitan menos medicamentos, y a veces
          el m??dico decide retirarlos.
        </Paragraph>
        <Paragraph />
        <Subheading>??DEBO HACER EJERCICIOS?</Subheading>
        <Paragraph>
          Los ejercicios son muy buenos amigos de la persona diab??tica. Ellos
          permitir??n que los niveles de az??car en sangre se acerquen m??s a la
          normalidad, y permitir??n que podamos comer un poco m??s, pues quemamos
          las calor??as que ingerimos.
        </Paragraph>
        <Paragraph>
          Los ejercicios son buenos para todas las personas, pero especialmente
          para los diab??ticos. Recuerde que siempre que los haga, debe haber
          ingerido alg??n alimento y tener consigo par de caramelos para evitar
          que le baje demasiado la glucosa en sangre.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? MEDICAMENTOS DEBO TOMAR?</Subheading>
        <Paragraph>
          Muchas personas controlan su diabetes con la dieta y los ejercicios,
          principalmente si tienen un buen peso. Cuando ello no sucede, existen
          m??ltiples medicinas (hipoglucemiantes) que pueden ayudarnos con esto,
          que pueden ser tabletas o insulina. A veces los pacientes con diabetes
          tipo II, que son los que se controlan sin medicamentos o con tabletas,
          su m??dico les sugiere el uso de insulina. No siempre esto es porque
          haya empeorado la enfermedad, sino para tener un mejor control del
          az??car en sangre.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ??Y SI TENGO OTRAS ENFERMEDADES JUNTO A LA DIABETES?
        </Subheading>
        <Paragraph>
          Bueno, dado el mejor control que existe actualmente sobre la diabetes,
          las personas viven muchos a??os con ella, y habitualmente con el paso
          de los a??os aparecen otras enfermedades como la presi??n alta, o la
          cardiopat??a isqu??mica. Si realizamos ejercicios f??sicos, llevamos una
          diera adecuada, no fumamos y no tomamos alcohol en exceso, m??s
          tard??amente aparecer??n estas enfermedades. Cuando visite a su m??dico,
          inf??rmele de todas las enfermedades que padece y los medicamentos que
          consume. Algunos de estos pueden subir el az??car en sangre.
        </Paragraph>
        <Paragraph>
          Hay otros problemas de salud que pueden aparecer en las personas
          diab??ticas, principalmente las que padecen la enfermedad por muchos
          a??os. Entre ellas est?? el da??o que ocasiona la enfermedad en los ojos
          (retinopat??a diab??tica), o en los nervios perif??ricos (neuropat??a
          diab??tica), o en los ri??ones (nefropat??a diab??tica) o en los pies
          (llamado pie diab??tico). En la piel son frecuentes las infecciones por
          hongos.
        </Paragraph>
        <Paragraph>
          Podemos retrasar la aparici??n de estas complicaciones con un mejor
          control del az??car en sangre. Es muy importante que conozcamos la
          enfermedad, que introduzcamos algunos cambios en nuestros h??bitos, que
          son muy parecidos a los que se recomiendan en las personas no
          diab??ticas para vivir m??s sanamente, y personalicemos c??mo debemos
          enfrentar la enfermedad. Esto har?? m??s llevadera la vida.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'11-1'}
          question={'1. Sobre la diabetes responda:'}
          answers={[
            'Se produce porque falta una hormona que se produce en la gl??ndula tiroides.',
            'Aparece m??s frecuentemente en las personas delgadas.',
            'El sobrepeso favorece su aparici??n.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'11-2'}
          question={'2. Son factores de riesgo para padecer de diabetes:'}
          answers={[
            'No realizar ejercicios.',
            'Tener familiares cercanos con diabetes.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'11-3'}
          question={
            '3. Para lograr mejorar el control del az??car en la sangre, las personas diab??ticas pueden:'
          }
          answers={[
            'Tener un peso normal.',
            'Dar caminatas todos los d??as o casi todos los d??as.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Todos los alimentos que comemos se transforman en glucosa para ser usada por nuestro cuerpo.',
            'Hay alimentos que suben m??s r??pido el az??car en sangre que otros. Debemos comer menos de ellos.',
            'La az??car alta en sangre nos puede traer problemas con el coraz??n, el cerebro, los ri??ones y la vista.',
            'Mientras m??s normal tengamos la az??car en sangre, el da??o ser?? menor.',
            'Muchas veces la diabetes se puede prevenir, si mantenemos una dieta adecuada, un peso normal y practicamos ejercicios f??sicos.',
            'Si somos diab??ticos, tener una alimentaci??n sana, un peso normal y hacer actividad f??sica nos ayuda a controlar el az??car en sangre.',
            'Si somos diab??ticos, tengamos siempre par de caramelos en el bolsillo por si nos baja el az??car.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('PresionAlta')}>
          <Text>{'??Qu?? debo saber de la presi??n alta?'}</Text>
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

export default Diabetes;
