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
          <Text>{'¿Estoy enfermo del corazón?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          ¿QUÉ ES LA DIABETES Y CÓMO MANEJARLA?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>E</Bold>l páncreas es un órgano que se encuentra en el abdomen.
          Una de las funciones que tiene el páncreas es fabricar y llevar a la
          sangre una sustancia que se llama insulina, que es una hormona. La
          insulina es la que se encarga de regular el azúcar en la sangre. Esta
          azúcar se llama glucosa. Cuando el páncreas es incapaz de producir
          insulina, o la produce en cantidades muy bajas o esta no es bien
          utilizada por el cuerpo, entonces tenemos diabetes.
        </Paragraph>
        <Paragraph>
          La diabetes también se conoce con el término de diabetes mellitus. Es
          lo mismo, y en este capítulo la llamaremos como diabetes solamente.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES LA DIABETES?</Subheading>
        <Paragraph>
          Entonces ya sabemos que la diabetes es enfermedad causada por la
          ausencia de insulina o que aunque exista esta, hay muy poca o el
          cuerpo humano no reacciona a ella. Teniendo en cuenta esto, la
          diabetes se divide en diabetes tipo I y tipo II.
        </Paragraph>
        <Paragraph>
          La diabetes tipo I es cuando el páncreas no produce insulina. También
          se le llama diabetes insulinodependiente, pues las personas para vivir
          necesitan administrarse insulina. Otro nombre por el que se la conoce
          es diabetes juvenil, pues es en edades jóvenes cuando más se
          diagnostica, lo cual no quiere decir que no se diagnostiquen por
          primera vez en personas mayores, aunque esto no es lo más frecuente.
        </Paragraph>
        <Paragraph>
          La diabetes tipo II es cuando se produce poca insulina en el páncreas
          pero esta no es suficiente, o cuando el organismo no reconoce la
          insulina que vierte el páncreas en la sangre.
        </Paragraph>
        <Paragraph>
          Las células producen energía a partir del azúcar o glucosa. La glucosa
          es un tipo de azúcar, e indistintamente las personas decimos “tengo
          azúcar en la sangre” que es lo mismo que padecer de diabetes. Otras
          veces decimos “tengo el azúcar alta”, que es lo mismo que decir “tengo
          la glucosa alta”. Aquí la mencionaremos indistintamente como azúcar o
          glucosa. La mayoría de los alimentos que comemos, al final se
          transforman en glucosa para que pueda ser utilizada por las células.
          Pero esta glucosa debe entrar a las células para que la usen, y
          precisamente eso es lo que hace la insulina: entrar el azúcar a través
          de las membranas de las células hacia su interior. Cuando no hay
          insulina, o esta falla o hay poca, aumenta mucho el azúcar en sangre.
        </Paragraph>
        <Paragraph>
          Cuando el azúcar está elevada en la sangre por mucho tiempo, se
          producen muchos trastornos en todo el organismo, que son las llamadas
          complicaciones de la diabetes.
        </Paragraph>
        <Paragraph>
          Hay otro estado que se conoce como pre–diabetes, o intolerancia a la
          glucosa, que es cuando el azúcar sube en sangre pero no lo suficiente
          para decir que hay diabetes. Este estado, si no se atiende a tiempo y
          se trata de revertir, puede conducir a la diabetes, principalmente la
          tipo II.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁLES SON LOS SÍNTOMAS DE LA DIABETES?</Subheading>
        <Paragraph>
          Los síntomas pueden variar en intensidad y rapidez de aparición si se
          trata de diabetes tipo I o tipo II. En la diabetes tipo I aparecen más
          rápidamente, en la diabetes tipo II pueden demorar mucho más tiempo y
          ser menos intensos, y a veces la enfermedad se diagnostica por las
          complicaciones sin que haya dado los síntomas típicos antes.
        </Paragraph>
        <Paragraph>
          En general, los síntomas son mucha sed, orinar mucha cantidad y tener
          mucho hambre. A esto se une una pérdida de peso inexplicable.
        </Paragraph>
        <Paragraph>
          Otros síntomas pueden ser demora en curarse las heridas, que se
          infestan con facilidad, la visión puede ser borrosa, las personas
          pueden estar fatigadas sin motivo.
        </Paragraph>
        <Paragraph>
          Son más frecuentes las infecciones en la piel, principalmente por
          hongos en las zonas húmedas, como son las axilas, en el pliegue
          inguinal y debajo de las mamas en las mujeres.
        </Paragraph>
        <Paragraph>
          Los síntomas pueden no ser siempre los mismos. Puede haber personas
          con glicemia elevada sin que tengan síntomas.
        </Paragraph>
        <Paragraph>
          Las complicaciones pueden ser muchas, pero{' '}
          <Bold>
            mientras mejor controlados tengamos los niveles de azúcar en sangre,
            menos serán
          </Bold>
          .
        </Paragraph>
        <Paragraph>
          Podemos sentir en las piernas y pies adormecimiento, hormigueo,
          sensación de quemazón, ardentía, calambres. Todo esto es producido por
          el daño en los nervios. Se pueden llegar a producir úlceras en los
          pies.
        </Paragraph>
        <Paragraph>
          La diabetes acelera la aterosclerosis, con obstrucción al paso de
          sangre por las arterias. Esto puede producir úlceras en las piernas,
          de muy difícil curación, y hasta gangrena en los dedos de los pies o
          parte de este.
        </Paragraph>
        <Paragraph>
          Estos mismos daños en las arterias si se producen en los ojos pueden
          provocar daños en la retina (parte posterior del ojo) que nos
          dificulten ver, llegando a la ceguera en casos severos.
        </Paragraph>
        <Paragraph>
          Si los cambios ocurren en los riñones, puede producirse insuficiencia
          renal crónica.
        </Paragraph>
        <Paragraph>
          Si ocurren en las arterias coronarias (arterias que alimentan al
          corazón) se puede producir cardiopatía isquémica que puede llegar al
          infarto cardiaco, y si ocurren en las arterias cerebrales, puede
          aparecer una trombosis o derrame cerebral.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SÉ SI TENGO DIABETES?</Subheading>
        <Paragraph>
          Para saber si tenemos diabetes, se deben hacer determinaciones de
          glucosa en sangre. Esto puede ser en <Bold>ayunas</Bold>,
          habitualmente se hace por la mañana después de al menos ocho horas sin
          ingerir alimentos.
        </Paragraph>
        <Paragraph>
          Otra prueba que le puede solicitar su médico es la llamada{' '}
          <Bold>prueba de tolerancia a la glucosa</Bold> “glicemia provocada”,
          como también se le conoce.
        </Paragraph>
        <Paragraph />
        <Subheading>¿PUEDO PREVENIR LA DIABETES?</Subheading>
        <Paragraph>
          La diabetes tiene un componente hereditario: aunque no siempre, hijos
          de padres diabéticos tienen más probabilidad de padecerla. Igual si
          tienen hermanos o tíos en esta situación.
        </Paragraph>
        <Paragraph>
          Las personas no pueden hacer nada sobre la herencia genética, pero hay
          otros factores que sí pueden ser modificados, aun teniendo familiares
          diabéticos, y retrasar el comienzo de la enfermedad e incluso
          evitarlo.
        </Paragraph>
        <Paragraph>
          Entre los factores de riesgo que favorecen la aparición de la
          diabetes, el más importante de todos es la obesidad. El sobrepeso
          favorece la aparición de diabetes tipo II, que es con mucho la más
          frecuente. Por ello la dieta es importante.
        </Paragraph>
        <Paragraph>
          El exceso de comer dulces por sí mismo no produce diabetes, pero sí
          aumenta de peso. Por ello se recomienda no ingerir grandes cantidades
          al día de refrescos u otras bebidas azucaradas. Los jugos de frutas
          son saludables, pero si están muy dulces pueden llegar a lastimar
          nuestra salud.
        </Paragraph>
        <Paragraph>
          Hay varias formas para saber si estamos pasados de peso o no, aunque
          casi siempre lo sabemos de mirarnos en el espejo o por la ropa que ya
          no nos sirve. Si tiene duda, consulte a su médico.
        </Paragraph>
        <Paragraph>
          Al sobrepeso están asociados muy estrechamente la actividad física y
          la dieta. Una dieta muy rica en calorías o la inactividad física,
          harán que subamos de peso. Tanto la dieta, como el ejercicio y su peso
          podemos controlarlos.
        </Paragraph>
        <Paragraph>
          Podemos prevenir la diabetes tipo II viviendo una vida normal.
        </Paragraph>
        <Paragraph>Merece la pena. Intentémoslo.</Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ PUEDO HACER PARA EVITAR O DEMORAR LAS COMPLICACIONES?
        </Subheading>
        <Paragraph>
          Si ya somos diabéticos, hay muchas cosas que puedo hacer para que no
          se complique la enfermedad. Las personas que tenemos diabetes podemos
          vivir largos años y una vida relativamente normal con algunos
          cuidados.
        </Paragraph>
        <Paragraph>
          Muchos de estos cuidados son parecidos a los que debemos tener para
          una vida sana, aunque no tengamos diabetes.
        </Paragraph>
        <Paragraph>
          Los diabéticos podemos vivir casi igual que los demás, solo tomando
          algunas precauciones.
        </Paragraph>
        <Paragraph>
          Se puede decir que los tres pilares para mantener controlada a la
          diabetes son la <Bold>dieta</Bold>, los <Bold>ejercicios</Bold> y los{' '}
          <Bold>medicamentos</Bold>.
        </Paragraph>
        <Fig14 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          No todas las personas diabéticas necesitamos medicinas. En algunas,
          solo la dieta y los ejercicios son suficientes para mantener los
          niveles de azúcar en sangre dentro de los límites normales.
        </Paragraph>
        <Paragraph>
          El objetivo es mantener normales en sangre los niveles de glucosa.
          Mientras más tiempo tengamos normales estos niveles, menos
          complicaciones tendremos en el futuro. A continuación veremos cómo
          podemos lograrlo.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES LO PRIMERO QUE DEBO HACER?</Subheading>
        <Paragraph>
          Lo primero es conocer la enfermedad y conocer cómo se comporta esta en
          nosotros. No todas las personas diabéticas evolucionan igual, ni
          presentan los mismos síntomas. Por ello es importante conocer cómo
          está nuestra azúcar en sangre.
        </Paragraph>
        <Paragraph>
          En ocasiones, podemos tener el azúcar baja o alta, y no tener
          síntomas, especialmente cuando está alta. Con el tiempo, los
          diabéticos aprenden a reconocer sus síntomas, pero siempre debemos
          tener presente que este no es un método infalible para saber cómo
          estamos. Pero debemos aprender a conocer cómo se manifiesta la
          enfermedad en nosotros, principalmente cuando el azúcar está baja en
          sangre.
        </Paragraph>
        <Paragraph>
          El azúcar en sangre se llama glicemia. Para conocer exactamente cómo
          tenemos la glicemia, existe un equipo sencillo y fácil de usar que se
          llama glucómetro. La enfermera de la familia nos puede enseñar a
          usarlo. También es útil que
        </Paragraph>
        <Fig13 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          algún familiar cercano a nosotros lo sepa utilizar, pues si no estamos
          en condiciones de hacerlo, esto puede ser de gran ayuda.
        </Paragraph>
        <Paragraph>
          Los síntomas del azúcar baja pueden ser muy variados, desde sudoración
          o visión borrosa hasta dolor de cabeza o cansancio.
        </Paragraph>
        <Paragraph>
          El tratamiento es sencillamente ingerir algo azucarado, como un
          caramelo, una cucharadita de azúcar o un poco de jugo de frutas con
          azúcar. Un consejo útil es tener encima algún caramelo o algo dulce
          por si esto sucediera.
        </Paragraph>
        <Paragraph>
          El mejor tratamiento es evitar que esto ocurra, para lo cual debemos
          tener en cuenta que las personas diabéticas no deben pasar largos
          períodos en ayunas, sin ingerir alimentos, y ser cuidadosos con los
          medicamentos para la diabetes.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ DIETA DEBO HACER?</Subheading>
        <Paragraph>
          No debemos pasar largos períodos sin alimentarnos. El diabético puede
          casi comer de todo. La diferencia con la persona que no lo es, está en
          las cantidades y la frecuencia. La persona diabética no debe ingerir
          de una sentada grandes cantidades de alimentos que suban mucho la
          glicemia en sangre.
        </Paragraph>
        <Paragraph>
          ¿Y cuáles son estos alimentos? Los ricos en carbohidratos,
          principalmente los que tienen azúcares refinados. También el pan,
          galletas y pastas están compuestos principalmente de carbohidratos,
          por lo que las porciones de ellos no deben ser grandes. No hay una
          medida exacta para cada persona, su médico de familia le puede indicar
          cuál es el que usted necesita.
        </Paragraph>
        <Paragraph>
          La ingesta de calorías estará muy relacionada con la cantidad de
          ejercicios que hagamos.
        </Paragraph>
        <Paragraph>
          Aunque algunos alimentos vienen etiquetados “para diabéticos”, el
          principio es comer alimentos bajos en calorías. Los vegetales son un
          ejemplo de alimentos que puede comer abundantemente. Tengamos cuidado
          con las frutas, en su mayoría si las comemos en exceso pueden subir
          demasiado el azúcar en sangre, principalmente las que son más dulces.
        </Paragraph>
        <Paragraph>
          Podemos comer dulces, pero en muy pequeñas porciones, y quizás
          dejándolos para algunos momentos como celebraciones, siempre
          acompañados de comida sana.
        </Paragraph>
        <Paragraph>
          En general, la comida que se recomienda para una persona diabética es
          la misma comida <Bold>sana</Bold> que se recomienda para todas las
          personas, solo que como dijimos, varían las proporciones y quizás un
          poco los horarios. Trate de comer a horarios fijos, tres veces por
          día, y a media mañana, a media tarde y al acostarse trate de merendar
          algo sencillo, con poco contenido en carbohidratos.
        </Paragraph>
        <Paragraph>
          Es importante que <Bold>si tiene sobrepeso, trate de perderlo</Bold>.
          El cuerpo maneja mejor las cifras de azúcar en sangre cuando tenemos
          buen peso, frecuentemente se necesitan menos medicamentos, y a veces
          el médico decide retirarlos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿DEBO HACER EJERCICIOS?</Subheading>
        <Paragraph>
          Los ejercicios son muy buenos amigos de la persona diabética. Ellos
          permitirán que los niveles de azúcar en sangre se acerquen más a la
          normalidad, y permitirán que podamos comer un poco más, pues quemamos
          las calorías que ingerimos.
        </Paragraph>
        <Paragraph>
          Los ejercicios son buenos para todas las personas, pero especialmente
          para los diabéticos. Recuerde que siempre que los haga, debe haber
          ingerido algún alimento y tener consigo par de caramelos para evitar
          que le baje demasiado la glucosa en sangre.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ MEDICAMENTOS DEBO TOMAR?</Subheading>
        <Paragraph>
          Muchas personas controlan su diabetes con la dieta y los ejercicios,
          principalmente si tienen un buen peso. Cuando ello no sucede, existen
          múltiples medicinas (hipoglucemiantes) que pueden ayudarnos con esto,
          que pueden ser tabletas o insulina. A veces los pacientes con diabetes
          tipo II, que son los que se controlan sin medicamentos o con tabletas,
          su médico les sugiere el uso de insulina. No siempre esto es porque
          haya empeorado la enfermedad, sino para tener un mejor control del
          azúcar en sangre.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿Y SI TENGO OTRAS ENFERMEDADES JUNTO A LA DIABETES?
        </Subheading>
        <Paragraph>
          Bueno, dado el mejor control que existe actualmente sobre la diabetes,
          las personas viven muchos años con ella, y habitualmente con el paso
          de los años aparecen otras enfermedades como la presión alta, o la
          cardiopatía isquémica. Si realizamos ejercicios físicos, llevamos una
          diera adecuada, no fumamos y no tomamos alcohol en exceso, más
          tardíamente aparecerán estas enfermedades. Cuando visite a su médico,
          infórmele de todas las enfermedades que padece y los medicamentos que
          consume. Algunos de estos pueden subir el azúcar en sangre.
        </Paragraph>
        <Paragraph>
          Hay otros problemas de salud que pueden aparecer en las personas
          diabéticas, principalmente las que padecen la enfermedad por muchos
          años. Entre ellas está el daño que ocasiona la enfermedad en los ojos
          (retinopatía diabética), o en los nervios periféricos (neuropatía
          diabética), o en los riñones (nefropatía diabética) o en los pies
          (llamado pie diabético). En la piel son frecuentes las infecciones por
          hongos.
        </Paragraph>
        <Paragraph>
          Podemos retrasar la aparición de estas complicaciones con un mejor
          control del azúcar en sangre. Es muy importante que conozcamos la
          enfermedad, que introduzcamos algunos cambios en nuestros hábitos, que
          son muy parecidos a los que se recomiendan en las personas no
          diabéticas para vivir más sanamente, y personalicemos cómo debemos
          enfrentar la enfermedad. Esto hará más llevadera la vida.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'11-1'}
          question={'1. Sobre la diabetes responda:'}
          answers={[
            'Se produce porque falta una hormona que se produce en la glándula tiroides.',
            'Aparece más frecuentemente en las personas delgadas.',
            'El sobrepeso favorece su aparición.',
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
            '3. Para lograr mejorar el control del azúcar en la sangre, las personas diabéticas pueden:'
          }
          answers={[
            'Tener un peso normal.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Todos los alimentos que comemos se transforman en glucosa para ser usada por nuestro cuerpo.',
            'Hay alimentos que suben más rápido el azúcar en sangre que otros. Debemos comer menos de ellos.',
            'La azúcar alta en sangre nos puede traer problemas con el corazón, el cerebro, los riñones y la vista.',
            'Mientras más normal tengamos la azúcar en sangre, el daño será menor.',
            'Muchas veces la diabetes se puede prevenir, si mantenemos una dieta adecuada, un peso normal y practicamos ejercicios físicos.',
            'Si somos diabéticos, tener una alimentación sana, un peso normal y hacer actividad física nos ayuda a controlar el azúcar en sangre.',
            'Si somos diabéticos, tengamos siempre par de caramelos en el bolsillo por si nos baja el azúcar.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('PresionAlta')}>
          <Text>{'¿Qué debo saber de la presión alta?'}</Text>
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
