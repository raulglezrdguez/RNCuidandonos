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
          <Text>{'Estoy triste, pero... ??Estoy deprimido?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>ME CUESTA TRABAJO IR AL BA??O</Headline>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>asi todos hemos tenido algo de estre??imiento en alg??n
          momento de nuestra vida. El estre??imiento no es una enfermedad, y en
          general, no es grave, pero es molesto. La defecaci??n puede convertirse
          en algo doloroso.
        </Paragraph>
        <Paragraph>
          Por lo general, el estre??imiento de muchos a??os es debido a la dieta
          que tenemos. Pero si el estre??imiento es de poco tiempo, y a pesar de
          una dieta abundante en fibras diet??ticas no mejora, debemos acudir al
          m??dico.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES EL ESTRE??IMIENTO?</Subheading>
        <Paragraph>
          Ser estre??ido se puede manifestar de diferentes formas. Una de ellas
          es defecar cada tres, cuatro d??as o a veces hasta una semana o m??s.
        </Paragraph>
        <Paragraph>
          Pero tambi??n se puede ser estre??ido defecando casi todos los d??as,
          pero las heces son tan duras y resecas que cuesta mucho trabajo
          expulsarlas, tenemos que pujar y puede llegar a ser doloroso.
        </Paragraph>
        <Paragraph>
          Cuando las heces son muy duras pueden producir una fisura anal, que
          provoca sangramiento y mucho dolor. Quedarse con deseos de defecar
          despu??s de haber terminado no es normal tampoco.
        </Paragraph>
        <Paragraph>
          Todas las personas no tenemos el mismo patr??n de defecaci??n. Hay
          quienes defecamos diariamente, y hay quienes no lo hacemos
          diariamente, pero lo hacemos de una manera que no es dolorosa ni
          molesta.
        </Paragraph>
        <Paragraph>
          Hay personas quienes desde siempre defecan moldeado, y hay quien
          defeca m??s suave, y ese es su patr??n defecatorio. Es decir, no es
          obligatorio tener deposiciones diarias.
        </Paragraph>
        <Paragraph>
          Las heces fecales contienen agua, y el contenido de agua es el que va
          a definir si somos estre??idos o no.
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
        <Subheading>??QU?? CAUSA EL ESTRE??IMIENTO?</Subheading>
        <Paragraph>
          En general, como comentamos, si las heces tienen poca agua, puede
          haber estre??imiento. ??Cu??les son las causas de que haya poca agua en
          las heces? La mayor??a de las veces se debe a la poca ingesti??n de
          fibra diet??tica. Esta fibra diet??tica, que es una forma de hidratos de
          carbono, habitualmente no se absorbe en el intestino, es decir, no
          pasa a la sangre, y esto provoca que entre al intestino mayor cantidad
          de agua desde la sangre y el tejido que rodea al mismo, lo que al
          final hace que las heces sean m??s blandas.
        </Paragraph>
        <Chip icon="information" onPress={() => navigate('Alimentarnos')}>
          Revisar ??Qu?? es alimentarnos sanamente?
        </Chip>
        <Paragraph>
          Pero tambi??n hay enfermedades que pueden producir estre??imiento, como
          la enfermedad de Parkinson, el c??ncer de colon y enfermedades del
          tiroides.
        </Paragraph>
        <Paragraph>
          Los medicamentos son causa frecuente de estre??imiento. Los
          medicamentos para los dolores que contienen opi??ceos, los que tienen
          efectos atrop??nicos, pueden causar estre??imiento, pues disminuye la
          movilidad del mismo. Por otro lado, el abuso de los laxantes por el
          propio estre??imiento durante a??os lo puede empeorar, pues esto
          ???acostumbra al intestino, y si la persona no se toma el laxante,
          tendr?? gran dificultad para defecar.
        </Paragraph>
        <Paragraph>
          El h??bito de defecar, como su nombre lo dice, es un h??bito, valga la
          redundancia. Si cuando tenemos la sensaci??n de defecar, frecuentemente
          no lo hacemos, terminaremos inhibiendo este h??bito y nos podemos
          convertir en estre??idos.
        </Paragraph>
        <Paragraph />
        <Subheading>??CU??NDO IR AL M??DICO?</Subheading>
        <Paragraph>
          Hay personas que son estre??idas por muchos a??os. Pero lo m??s
          preocupante puede ser que una persona que no lo sea, se vuelva
          estre??ida en pocos meses o que ese estre??imiento se acompa??e de una
          p??rdida de peso importante de forma involuntaria en los ??ltimos dos o
          tres meses. Otro signo de alarma es que aparezca sangre en las
          deposiciones, o que comience a presentar dolor abdominal,
          principalmente del tipo de c??licos.
        </Paragraph>
        <Paragraph>
          La forma de las heces puede cambiar, se pueden hacer m??s delgadas y
          finas, a pesar de mantener la misma consistencia. Tambi??n hay
          ocasiones en que el estre??imiento comienza a alternar con per??odos de
          diarreas. En cualquiera de los casos descritos debe acudir al m??dico.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO CONFIRMAR SI TENGO O NO ESTRE??IMIENTO?</Subheading>
        <Paragraph>
          Realmente, saber si se tiene estre??imiento o no es f??cil, pero lo
          importante es conocer la causa. El m??dico le har?? varias preguntas
          para tratar de definir su patr??n de defecaci??n y la duraci??n del
          estre??imiento. Posteriormente le puede hacer un tacto rectal y una
          exploraci??n anal.
        </Paragraph>
        <Paragraph>
          Con frecuencia le podr??n indicar un an??lisis llamado sangre oculta en
          heces fecales, que como su nombre lo indica busca la presencia
          microsc??pica de sangre en las heces. Normalmente las heces no deben
          contener sangre.
        </Paragraph>
        <Paragraph>
          En determinados casos, principalmente cuando la prueba de sangre
          oculta en heces fecales da positiva, le pueden indicar una radiograf??a
          del colon por enema o una colonoscop??a. La mayor??a de las veces con un
          grupo de preguntas que nos realiza el m??dico se identifica la causa.
          No deje nunca de mencionarle los medicamentos que consume.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? DEBO HACER PARA NO SER ESTRE??IDO?</Subheading>
        <Paragraph>
          Aqu?? hablaremos del estre??imiento que no tiene ninguna enfermedad o
          medicamento como causa, que es el m??s frecuente. En primer lugar
          tendremos que introducir algunos cambios en nuestro d??a a d??a. Estos
          cambios se concentran, para la mayor??a de las personas en agregar
          fibra a la dieta, tomar abundantes l??quidos y realizar actividades
          f??sicas en la medida de sus posibilidades.
        </Paragraph>
        <Fig8 stroke={colors.text} width={min} height={min} />

        <Subheading>Agregando fibra a la dieta</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Hay muchos alimentos ricos en fibra diet??tica. Los principales son los
          vegetales, los frijoles y las frutas. Dentro de los vegetales, los de
          hoja verde son los que m??s tienen. Otros ejemplos de alimentos ricos
          en fibra son el pan integral y el arroz integral. El salvado de trigo
          se comercializa como tal, pruebe a agregar una o dos cucharadas en la
          sopa o en el yogurt.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          La fibra tiene otros beneficios, porque ayuda a evitar el c??ncer de
          colon y a bajar el colesterol.
        </Paragraph>
        <Subheading>Tomando abundante l??quido</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          Debemos tomar al menos seis vasos de agua al d??a, m??s a??n en verano.
          Hay preparaciones de alimentos que contienen bastante l??quido, como
          los jugos de fruta y las sopas. No tome refrescos como sustitutos del
          agua.
        </Paragraph>
        <Fig9 stroke={colors.text} width={min} height={min} />
        <Subheading>Realizando actividad f??sica</Subheading>
        <Paragraph style={{marginHorizontal: 16}}>
          La realizaci??n de actividad f??sica ayuda a ???mover los intestinos???.
          Caminar, regar el jard??n, salir con amigos, tratemos de unir la
          actividad f??sica con cosas que nos den placer, ser?? mucho m??s
          agradable. Lo ideal es hacer ejercicios f??sicos, pero cuando no se
          puede por alguna condici??n m??dica, las caminatas ayudan. Lo importante
          es evitar ser sedentario.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          Hay algunos ejercicios espec??ficos para fortalecer algunos de los
          m??sculos que intervienen en la defecaci??n, son los llamados ejercicios
          de Kegel. Indague con su m??dico.
        </Paragraph>
        <Paragraph />
        <Subheading>Y... ??PUEDO TOMAR LAXANTES?</Subheading>
        <Paragraph>
          Siempre que podamos, debemos evitarlos. Su uso por largos per??odos de
          tiempo puede traer efectos contrarios a los deseados. Existen un grupo
          de laxantes que lo que hacen es parecido a la fibra de la dieta:
          atraer agua hacia las heces dentro de los intestinos, lo que las
          suaviza. Aunque todas las medicinas producen efectos no deseados,
          estos son relativamente inocuos. Esos laxantes pueden usarse m??s a
          menudo y por mayores per??odos de tiempo. Preg??ntele a su m??dico cu??les
          le recomienda.
        </Paragraph>
        <Paragraph />
        <Subheading>ESTRE??IMIENTO Y EJERCICIOS DE KEGEL</Subheading>
        <Paragraph>
          ??Qu?? son los ejercicios de Kegel? Son unos ejercicios que se realizan
          para fortalecer los m??sculos del llamado suelo p??lvico, que
          intervienen en la defecaci??n. Con el paso de los a??os, al igual que
          los m??sculos de los brazos y las piernas pierden fuerza, los m??sculos
          del suelo p??lvico tambi??n.
        </Paragraph>
        <Paragraph>
          La pelvis es la regi??n del cuerpo que est?? entre los huesos que forman
          las caderas. En su interior (cavidad p??lvica) se encuentran la vejiga,
          el ??tero y parte del intestino. Por su parte inferior est?? cerrada por
          m??sculos y ligamentos que no permiten que estos ??rganos ???se caigan???.
          Esos m??sculos son atravesados por diferentes conductos, como son la
          vagina (partos), la uretra (orinar) y el recto (defecar).
        </Paragraph>
        <Paragraph>
          Esos m??sculos se unen por ligamentos a los bordes de los huesos que
          forman las caderas. Esa musculatura, adem??s de servir de apoyo a esos
          ??rganos, intervienen en el parto, en que no se nos salga la orina y en
          el acto de defecar, dejando pasar o deteniendo las heces.
        </Paragraph>
        <Paragraph>
          Con los a??os se debilitan, y tambi??n con los partos en las mujeres.
          Pero, al igual que otros m??sculos del cuerpo, se pueden ejercitar. Los
          ejercicios de Kegel (que reciben el nombre de su creador), van
          dirigidos a fortalecer los m??sculos del suelo p??lvico.
        </Paragraph>
        <Paragraph>
          El fortalecimiento de los m??sculos sirve para muchos casos de
          incontinencia urinaria en las mujeres y para mejorar el acto de
          defecar. Desde este punto de vista es que se explicar?? esta tem??tica.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO SE REALIZAN LOS EJERCICIOS DE KEGEL?</Subheading>
        <Paragraph>
          La contracci??n de los m??sculos del suelo p??lvico sirven, entre otras
          cosas, para comenzar la defecaci??n o contenerla si estamos en un lugar
          imposibilitados de ir al ba??o. Son los que se contraen cuando se est??
          en un lugar p??blico y se quiere evitar la salida de gases por el recto
          o flatulencia. Cuando usted ???aprieta??? esos m??sculos para lo anterior o
          para evitar orinar, est?? haciendo, ejercicios de Kegel. Claro, eso
          lleva una cadencia y frecuencia de repetici??n que es lo que produce el
          beneficio al realizarlos.
        </Paragraph>
        <Paragraph>
          Es muy importante que sepamos identificar cu??les son los m??sculos del
          suelo p??lvico, para que despu??s aprenda los ejercicios. Muchas veces
          al iniciar los ejercicios, se contraen tambi??n de forma err??nea los
          m??sculos de las nalgas, y quiz??s no llegue a contraer correctamente
          los m??sculos del suelo p??lvico. Con la pr??ctica lograr??
          identificarlos. Una buena forma de saber cu??les son es orinar y cortar
          el chorro de orina. Los m??sculos del suelo p??lvico son los que se
          contraen cuando detiene el chorro de orina. Puede ser molesto al
          inicio, pero despu??s de repetirlo varias veces, ya identificar??
          perfectamente los m??sculos a ejercitar. Esa contracci??n es la base de
          los ejercicios de Kegel.
        </Paragraph>
        <Paragraph />
        <Subheading>??C??MO COMIENZO A HACERLOS?</Subheading>
        <Paragraph>
          Como todo ejercicio que se comienza a realizar sin un adiestramiento
          previo, es mejor comenzar por variantes m??s sencillas. Un primer paso
          podr??a ser reconocer los m??sculos que vamos a ejercitar, haciendo como
          se explic?? anteriormente.
        </Paragraph>
        <Paragraph>
          Una vez identificados los m??sculos, se puede comenzar por una versi??n
          f??cil de los ejercicios, que consiste en varias repeticiones cortas y
          r??pidas de los m??sculos. Los puede hacer en posici??n parada, acostada
          o sentada, preferiblemente con la vejiga vac??a, es decir, despu??s de
          haber orinado. Contraiga y relaje los m??sculos de la pelvis r??pido y
          seguido, sin que llegue a cansarse. Cuente las veces que lo hace,
          llegue a 10 contracciones y relajaciones y descanse un tiempo similar
          al empleado en el ejercicio, y vuelva a repetirlo. De esta manera se
          ir?? adaptando a hacerlos.
        </Paragraph>
        <Paragraph>
          Debe llegar a realizar 10 series con una duraci??n aproximada de 30
          segundos cada una. Esto quiere decir que estar?? 30 segundos haciendo
          contracci??n de los m??sculos, y otros 30 segundos descansando, hasta
          que haya hecho 10 repeticiones.
        </Paragraph>
        <Paragraph>
          Despu??s de varios d??as, cuando haya adquirido destreza, puede pasar a
          la siguiente fase, que consiste en unos ejercicios m??s efectivos. En
          este caso, las contracciones deben ser m??s lentas, poco a poco. Cuente
          hasta cinco lentamente para realizar la contracci??n (al inicio se
          puede guiar por un reloj, despu??s ya podr?? hacerlo sin ??l), la idea es
          que demore cinco segundo en contraer lentamente el m??sculo. Espere un
          momento y despu??s rel??jelo tambi??n en cinco segundos. Estas
          contracciones m??s lentas son{' '}
          <Bold>las m??s efectivas para el estre??imiento</Bold>. Debe repetirlas
          10 veces.
        </Paragraph>
        <Paragraph>
          Tanto los que son r??pidos para adiestrarse, como los otros que son m??s
          lentos, comenzar realiz??ndolos en tres tandas de ellos al d??a, es
          decir, diez repeticiones en tres momentos distintos o seguidos, si se
          siente en condiciones. Lo ideal es llegar a realizar ocho o diez veces
          en la ma??ana e igual cantidad en la tarde o noche.
        </Paragraph>
        <Paragraph>
          Cuando vaya tomando pr??ctica, se dar?? cuenta que los puede hacer con
          facilidad, casi en cualquier lugar, mirando televisi??n, acostado,
          hablando por tel??fono, en fin.
        </Paragraph>
        <Paragraph>
          Los ejercicios no le quitar??n el estre??imiento en una semana ni en
          dos, pero si los realiza con perseverancia, antes del mes y medio
          comenzar?? a ver los efectos beneficiosos.
        </Paragraph>
        <Paragraph>
          Por supuesto, los ejercicios son parte del tratamiento del
          estre??imiento. Esto se debe acompa??ar de una alimentaci??n rica en
          fibras (vegetales o frijoles) y esto lo ayudar?? a tener heces m??s
          voluminosas y menos duras, con un menor esfuerzo al defecar.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'8-1'}
          question={'1. El estre??imiento es:'}
          answers={[
            'Ir al ba??o cada 3 o 4 d??as.',
            'Pasar mucho trabajo para ir al ba??o aunque vaya casi todos los d??as.',
            'Las dos respuestas son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'8-2'}
          question={'2. El estre??imiento de a??os casi siempre es causado por:'}
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
          question={'3. Para mejorar el estre??imiento podemos:'}
          answers={[
            'Comer bastante vegetales verdes y frutas.',
            'Tomar bastante agua.',
            'Las dos anteriores son respuestas correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'El estre??imiento no es solo ir al ba??o cada varios d??as, sino tambi??n hacerlo con dificultad y dolor.',
            'No es obligatorio ir al ba??o todos los d??as.',
            'Son ricos en fibra diet??tica los vegetales, las frutas, y el salvado de trigo.',
            'Los panes o galletas integrales tienen m??s fibra.',
            'Casi siempre el estre??imiento ocurre porque comemos pocos vegetales y frutas.',
            'Si aparece sangre en sus deposiciones, debe acudir a su m??dico.',
            'El an??lisis de sangre oculta en heces fecales ayuda a detectar tempranamente problemas en el colon.',
            'Tomar bastante agua es bueno para combatir el estre??imiento.',
            'Los ejercicios de Kegel son una buena forma de contrarrestar el estre??imiento.',
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
