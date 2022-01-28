/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Chip,
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
import Fig8 from '../components/Fig8';
import Fig9 from '../components/Fig9';

const IrAlBano = ({navigation}) => {
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
      await AsyncStorage.setItem('@sIrAlBano', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sIrAlBano');
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
          onPress={() => navigate('Triste')}>
          <Text>{'Estoy triste, pero... ¿Estoy deprimido?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>ME CUESTA TRABAJO IR AL BAÑO</Headline>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>asi todos hemos tenido algo de estreñimiento en algún
          momento de nuestra vida. El estreñimiento no es una enfermedad, y en
          general, no es grave, pero es molesto. La defecación puede convertirse
          en algo doloroso.
        </Paragraph>
        <Paragraph>
          Por lo general, el estreñimiento de muchos años es debido a la dieta
          que tenemos. Pero si el estreñimiento es de poco tiempo, y a pesar de
          una dieta abundante en fibras dietéticas no mejora, debemos acudir al
          médico.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES EL ESTREÑIMIENTO?</Subheading>
        <Paragraph>
          Ser estreñido se puede manifestar de diferentes formas. Una de ellas
          es defecar cada tres, cuatro días o a veces hasta una semana o más.
        </Paragraph>
        <Paragraph>
          Pero también se puede ser estreñido defecando casi todos los días,
          pero las heces son tan duras y resecas que cuesta mucho trabajo
          expulsarlas, tenemos que pujar y puede llegar a ser doloroso.
        </Paragraph>
        <Paragraph>
          Cuando las heces son muy duras pueden producir una fisura anal, que
          provoca sangramiento y mucho dolor. Quedarse con deseos de defecar
          después de haber terminado no es normal tampoco.
        </Paragraph>
        <Paragraph>
          Todas las personas no tenemos el mismo patrón de defecación. Hay
          quienes defecamos diariamente, y hay quienes no lo hacemos
          diariamente, pero lo hacemos de una manera que no es dolorosa ni
          molesta.
        </Paragraph>
        <Paragraph>
          Hay personas quienes desde siempre defecan moldeado, y hay quien
          defeca más suave, y ese es su patrón defecatorio. Es decir, no es
          obligatorio tener deposiciones diarias.
        </Paragraph>
        <Paragraph>
          Las heces fecales contienen agua, y el contenido de agua es el que va
          a definir si somos estreñidos o no.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Cuando el contenido de agua es el adecuado, las heces
          no son dolorosas ni muy duras en el momento de ser expulsadas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Cuando contienen poca agua, es cuando si molestan al
          salir y tenemos que pujar.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Cuando tienen demasiada agua, son las diarreas.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ CAUSA EL ESTREÑIMIENTO?</Subheading>
        <Paragraph>
          En general, como comentamos, si las heces tienen poca agua, puede
          haber estreñimiento. ¿Cuáles son las causas de que haya poca agua en
          las heces? La mayoría de las veces se debe a la poca ingestión de
          fibra dietética. Esta fibra dietética, que es una forma de hidratos de
          carbono, habitualmente no se absorbe en el intestino, es decir, no
          pasa a la sangre, y esto provoca que entre al intestino mayor cantidad
          de agua desde la sangre y el tejido que rodea al mismo, lo que al
          final hace que las heces sean más blandas.
        </Paragraph>
        <Chip icon="information" onPress={() => navigate('Alimentarnos')}>
          Revisar ¿Qué es alimentarnos sanamente?
        </Chip>
        <Paragraph>
          Pero también hay enfermedades que pueden producir estreñimiento, como
          la enfermedad de Parkinson, el cáncer de colon y enfermedades del
          tiroides.
        </Paragraph>
        <Paragraph>
          Los medicamentos son causa frecuente de estreñimiento. Los
          medicamentos para los dolores que contienen opiáceos, los que tienen
          efectos atropínicos, pueden causar estreñimiento, pues disminuye la
          movilidad del mismo. Por otro lado, el abuso de los laxantes por el
          propio estreñimiento durante años lo puede empeorar, pues esto
          “acostumbra al intestino, y si la persona no se toma el laxante,
          tendrá gran dificultad para defecar.
        </Paragraph>
        <Paragraph>
          El hábito de defecar, como su nombre lo dice, es un hábito, valga la
          redundancia. Si cuando tenemos la sensación de defecar, frecuentemente
          no lo hacemos, terminaremos inhibiendo este hábito y nos podemos
          convertir en estreñidos.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁNDO IR AL MÉDICO?</Subheading>
        <Paragraph>
          Hay personas que son estreñidas por muchos años. Pero lo más
          preocupante puede ser que una persona que no lo sea, se vuelva
          estreñida en pocos meses o que ese estreñimiento se acompañe de una
          pérdida de peso importante de forma involuntaria en los últimos dos o
          tres meses. Otro signo de alarma es que aparezca sangre en las
          deposiciones, o que comience a presentar dolor abdominal,
          principalmente del tipo de cólicos.
        </Paragraph>
        <Paragraph>
          La forma de las heces puede cambiar, se pueden hacer más delgadas y
          finas, a pesar de mantener la misma consistencia. También hay
          ocasiones en que el estreñimiento comienza a alternar con períodos de
          diarreas. En cualquiera de los casos descritos debe acudir al médico.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO CONFIRMAR SI TENGO O NO ESTREÑIMIENTO?</Subheading>
        <Paragraph>
          Realmente, saber si se tiene estreñimiento o no es fácil, pero lo
          importante es conocer la causa. El médico le hará varias preguntas
          para tratar de definir su patrón de defecación y la duración del
          estreñimiento. Posteriormente le puede hacer un tacto rectal y una
          exploración anal.
        </Paragraph>
        <Paragraph>
          Con frecuencia le podrán indicar un análisis llamado sangre oculta en
          heces fecales, que como su nombre lo indica busca la presencia
          microscópica de sangre en las heces. Normalmente las heces no deben
          contener sangre.
        </Paragraph>
        <Paragraph>
          En determinados casos, principalmente cuando la prueba de sangre
          oculta en heces fecales da positiva, le pueden indicar una radiografía
          del colon por enema o una colonoscopía. La mayoría de las veces con un
          grupo de preguntas que nos realiza el médico se identifica la causa.
          No deje nunca de mencionarle los medicamentos que consume.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ DEBO HACER PARA NO SER ESTREÑIDO?</Subheading>
        <Paragraph>
          Aquí hablaremos del estreñimiento que no tiene ninguna enfermedad o
          medicamento como causa, que es el más frecuente. En primer lugar
          tendremos que introducir algunos cambios en nuestro día a día. Estos
          cambios se concentran, para la mayoría de las personas en agregar
          fibra a la dieta, tomar abundantes líquidos y realizar actividades
          físicas en la medida de sus posibilidades.
        </Paragraph>
        <Fig8 stroke={colors.text} width={min} height={min} />

        <Subheading>Agregando fibra a la dieta</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hay muchos alimentos ricos en fibra dietética. Los principales son los
          vegetales, los frijoles y las frutas. Dentro de los vegetales, los de
          hoja verde son los que más tienen. Otros ejemplos de alimentos ricos
          en fibra son el pan integral y el arroz integral. El salvado de trigo
          se comercializa como tal, pruebe a agregar una o dos cucharadas en la
          sopa o en el yogurt.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La fibra tiene otros beneficios, porque ayuda a evitar el cáncer de
          colon y a bajar el colesterol.
        </Paragraph>
        <Subheading>Tomando abundante líquido</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Debemos tomar al menos seis vasos de agua al día, más aún en verano.
          Hay preparaciones de alimentos que contienen bastante líquido, como
          los jugos de fruta y las sopas. No tome refrescos como sustitutos del
          agua.
        </Paragraph>
        <Fig9 stroke={colors.text} width={min} height={min} />
        <Subheading>Realizando actividad física</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          La realización de actividad física ayuda a “mover los intestinos”.
          Caminar, regar el jardín, salir con amigos, tratemos de unir la
          actividad física con cosas que nos den placer, será mucho más
          agradable. Lo ideal es hacer ejercicios físicos, pero cuando no se
          puede por alguna condición médica, las caminatas ayudan. Lo importante
          es evitar ser sedentario.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Hay algunos ejercicios específicos para fortalecer algunos de los
          músculos que intervienen en la defecación, son los llamados ejercicios
          de Kegel. Indague con su médico.
        </Paragraph>
        <Paragraph />
        <Subheading>Y... ¿PUEDO TOMAR LAXANTES?</Subheading>
        <Paragraph>
          Siempre que podamos, debemos evitarlos. Su uso por largos períodos de
          tiempo puede traer efectos contrarios a los deseados. Existen un grupo
          de laxantes que lo que hacen es parecido a la fibra de la dieta:
          atraer agua hacia las heces dentro de los intestinos, lo que las
          suaviza. Aunque todas las medicinas producen efectos no deseados,
          estos son relativamente inocuos. Esos laxantes pueden usarse más a
          menudo y por mayores períodos de tiempo. Pregúntele a su médico cuáles
          le recomienda.
        </Paragraph>
        <Paragraph />
        <Subheading>ESTREÑIMIENTO Y EJERCICIOS DE KEGEL</Subheading>
        <Paragraph>
          ¿Qué son los ejercicios de Kegel? Son unos ejercicios que se realizan
          para fortalecer los músculos del llamado suelo pélvico, que
          intervienen en la defecación. Con el paso de los años, al igual que
          los músculos de los brazos y las piernas pierden fuerza, los músculos
          del suelo pélvico también.
        </Paragraph>
        <Paragraph>
          La pelvis es la región del cuerpo que está entre los huesos que forman
          las caderas. En su interior (cavidad pélvica) se encuentran la vejiga,
          el útero y parte del intestino. Por su parte inferior está cerrada por
          músculos y ligamentos que no permiten que estos órganos “se caigan”.
          Esos músculos son atravesados por diferentes conductos, como son la
          vagina (partos), la uretra (orinar) y el recto (defecar).
        </Paragraph>
        <Paragraph>
          Esos músculos se unen por ligamentos a los bordes de los huesos que
          forman las caderas. Esa musculatura, además de servir de apoyo a esos
          órganos, intervienen en el parto, en que no se nos salga la orina y en
          el acto de defecar, dejando pasar o deteniendo las heces.
        </Paragraph>
        <Paragraph>
          Con los años se debilitan, y también con los partos en las mujeres.
          Pero, al igual que otros músculos del cuerpo, se pueden ejercitar. Los
          ejercicios de Kegel (que reciben el nombre de su creador), van
          dirigidos a fortalecer los músculos del suelo pélvico.
        </Paragraph>
        <Paragraph>
          El fortalecimiento de los músculos sirve para muchos casos de
          incontinencia urinaria en las mujeres y para mejorar el acto de
          defecar. Desde este punto de vista es que se explicará esta temática.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO SE REALIZAN LOS EJERCICIOS DE KEGEL?</Subheading>
        <Paragraph>
          La contracción de los músculos del suelo pélvico sirven, entre otras
          cosas, para comenzar la defecación o contenerla si estamos en un lugar
          imposibilitados de ir al baño. Son los que se contraen cuando se está
          en un lugar público y se quiere evitar la salida de gases por el recto
          o flatulencia. Cuando usted “aprieta” esos músculos para lo anterior o
          para evitar orinar, está haciendo, ejercicios de Kegel. Claro, eso
          lleva una cadencia y frecuencia de repetición que es lo que produce el
          beneficio al realizarlos.
        </Paragraph>
        <Paragraph>
          Es muy importante que sepamos identificar cuáles son los músculos del
          suelo pélvico, para que después aprenda los ejercicios. Muchas veces
          al iniciar los ejercicios, se contraen también de forma errónea los
          músculos de las nalgas, y quizás no llegue a contraer correctamente
          los músculos del suelo pélvico. Con la práctica logrará
          identificarlos. Una buena forma de saber cuáles son es orinar y cortar
          el chorro de orina. Los músculos del suelo pélvico son los que se
          contraen cuando detiene el chorro de orina. Puede ser molesto al
          inicio, pero después de repetirlo varias veces, ya identificará
          perfectamente los músculos a ejercitar. Esa contracción es la base de
          los ejercicios de Kegel.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO COMIENZO A HACERLOS?</Subheading>
        <Paragraph>
          Como todo ejercicio que se comienza a realizar sin un adiestramiento
          previo, es mejor comenzar por variantes más sencillas. Un primer paso
          podría ser reconocer los músculos que vamos a ejercitar, haciendo como
          se explicó anteriormente.
        </Paragraph>
        <Paragraph>
          Una vez identificados los músculos, se puede comenzar por una versión
          fácil de los ejercicios, que consiste en varias repeticiones cortas y
          rápidas de los músculos. Los puede hacer en posición parada, acostada
          o sentada, preferiblemente con la vejiga vacía, es decir, después de
          haber orinado. Contraiga y relaje los músculos de la pelvis rápido y
          seguido, sin que llegue a cansarse. Cuente las veces que lo hace,
          llegue a 10 contracciones y relajaciones y descanse un tiempo similar
          al empleado en el ejercicio, y vuelva a repetirlo. De esta manera se
          irá adaptando a hacerlos.
        </Paragraph>
        <Paragraph>
          Debe llegar a realizar 10 series con una duración aproximada de 30
          segundos cada una. Esto quiere decir que estará 30 segundos haciendo
          contracción de los músculos, y otros 30 segundos descansando, hasta
          que haya hecho 10 repeticiones.
        </Paragraph>
        <Paragraph>
          Después de varios días, cuando haya adquirido destreza, puede pasar a
          la siguiente fase, que consiste en unos ejercicios más efectivos. En
          este caso, las contracciones deben ser más lentas, poco a poco. Cuente
          hasta cinco lentamente para realizar la contracción (al inicio se
          puede guiar por un reloj, después ya podrá hacerlo sin él), la idea es
          que demore cinco segundo en contraer lentamente el músculo. Espere un
          momento y después relájelo también en cinco segundos. Estas
          contracciones más lentas son{' '}
          <Bold>las más efectivas para el estreñimiento</Bold>. Debe repetirlas
          10 veces.
        </Paragraph>
        <Paragraph>
          Tanto los que son rápidos para adiestrarse, como los otros que son más
          lentos, comenzar realizándolos en tres tandas de ellos al día, es
          decir, diez repeticiones en tres momentos distintos o seguidos, si se
          siente en condiciones. Lo ideal es llegar a realizar ocho o diez veces
          en la mañana e igual cantidad en la tarde o noche.
        </Paragraph>
        <Paragraph>
          Cuando vaya tomando práctica, se dará cuenta que los puede hacer con
          facilidad, casi en cualquier lugar, mirando televisión, acostado,
          hablando por teléfono, en fin.
        </Paragraph>
        <Paragraph>
          Los ejercicios no le quitarán el estreñimiento en una semana ni en
          dos, pero si los realiza con perseverancia, antes del mes y medio
          comenzará a ver los efectos beneficiosos.
        </Paragraph>
        <Paragraph>
          Por supuesto, los ejercicios son parte del tratamiento del
          estreñimiento. Esto se debe acompañar de una alimentación rica en
          fibras (vegetales o frijoles) y esto lo ayudará a tener heces más
          voluminosas y menos duras, con un menor esfuerzo al defecar.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'8-1'}
          question={'1. El estreñimiento es:'}
          answers={[
            'Ir al baño cada 3 o 4 días.',
            'Pasar mucho trabajo para ir al baño aunque vaya casi todos los días.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'8-2'}
          question={'2. El estreñimiento de años casi siempre es causado por:'}
          answers={[
            'Tomar poca leche.',
            'Comer pocas frutas y vegetales.',
            'Tomar mucha agua.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'8-3'}
          question={'3. Para mejorar el estreñimiento podemos:'}
          answers={[
            'Comer bastante vegetales verdes y frutas.',
            'Tomar bastante agua.',
            'Las dos anteriores son respuestas correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'El estreñimiento no es solo ir al baño cada varios días, sino también hacerlo con dificultad y dolor.',
            'No es obligatorio ir al baño todos los días.',
            'Son ricos en fibra dietética los vegetales, las frutas, y el salvado de trigo.',
            'Los panes o galletas integrales tienen más fibra.',
            'Casi siempre el estreñimiento ocurre porque comemos pocos vegetales y frutas.',
            'Si aparece sangre en sus deposiciones, debe acudir a su médico.',
            'El análisis de sangre oculta en heces fecales ayuda a detectar tempranamente problemas en el colon.',
            'Tomar bastante agua es bueno para combatir el estreñimiento.',
            'Los ejercicios de Kegel son una buena forma de contrarrestar el estreñimiento.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('LosPies')}>
          <Text>{'Tengo dolor en los pies'}</Text>
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

export default IrAlBano;
