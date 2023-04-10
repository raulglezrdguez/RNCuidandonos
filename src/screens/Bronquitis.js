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
import Fig27 from '../components/Fig27';

const Bronquitis = ({navigation}) => {
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
      await AsyncStorage.setItem('@sBronquitis', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sBronquitis');
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
          onPress={() => navigate('Colesterol')}>
          <Text>{'Tengo el colesterol alto... ¿Y ahora qué hago?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          VIVIENDO CON BRONQUITIS CRÓNICA O ENFISEMA
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a bronquitis crónica y el enfisema son dos enfermedades
          de los pulmones, que muchas veces ocurren juntas y con mayor
          frecuencia, las cuales pertenecen a un grupo de enfermedades
          pulmonares llamadas Enfermedad Pulmonar Obstructiva Crónica (EPOC por
          sus siglas), dentro de las cuales se incluyen también el asma y otros
          problemas pulmonares.
        </Paragraph>
        <Paragraph>
          La mayoría de las personas mayores que tienen EPOC tienen bronquitis
          crónica y enfisema al mismo tiempo.
        </Paragraph>
        <Paragraph>
          A través de los pulmones las personas tomamos el oxígeno del aire que
          necesitamos para vivir. El oxígeno pasa a la sangre y a través de ella
          a los tejidos. Los tejidos le pasan a la sangre el dióxido de carbono
          sobrante de la producción de energía en ellos y esta lo lleva a los
          pulmones que lo sacan al exterior.
        </Paragraph>
        <Paragraph>
          Los pulmones tienen dos partes: las vías aéreas (bronquios de
          diferentes calibres y tamaños) y los alveolos (son cavidades
          microscópicas muy parecidas a un panal de abejas). Cuando los
          bronquios se inflaman y se llenan de secreciones por años, estamos en
          presencia de bronquitis crónica. Cuando las paredes de los alveolos se
          rompen, estamos en presencia de enfisema. Aunque son enfermedades
          distintas, dan síntomas parecidos y se tratarán simultáneamente en
          este artículo.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CUÁLES SON LOS SÍNTOMAS DE LA BRONQUITIS CRÓNICA Y EL ENFISEMA?
        </Subheading>
        <Paragraph>
          Al inicio los síntomas son muy ligeros. Cuando va avanzando la
          enfermedad, los síntomas que aparecen son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Tos, acompañada casi siempre de mucosidades o flemas,
          de color blanquecino.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Falta de aire.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Debilidad y agotamiento, aún ante actividades ligeras.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Puede haber insomnio por la tos o la falta de aire.
        </Paragraph>

        <Paragraph>
          La tos y la falta de aire son los síntomas principales.
        </Paragraph>
        <Paragraph>Cuando avanza más:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La falta de aire aparece al realizar cualquier
          actividad por ligera que sea.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>La tos se vuelve muy persistente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Pérdida de peso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Aumentan las infecciones respiratorias (gripe y
          neumonías).
        </Paragraph>
        <Paragraph>En grados más avanzados de la enfermedad:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Puede acumularse líquido en los pies y piernas (edema).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Puede aparecer un color azulado – violáceo en los dedos
          de manos y pies por la falta de oxígeno.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ PROVOCA LA BRONQUITIS CRÓNICA Y EL ENFISEMA?
        </Subheading>
        <Paragraph>
          La bronquitis crónica y el enfisema se producen casi siempre por
          inhalar sustancias que dañan los pulmones. La principal causa de ellas
          es el humo del cigarro. Otras causas son la contaminación del ambiente
          y el polvo.
        </Paragraph>
        <Paragraph>
          El humo de cigarro que se respira cuando otra persona está fumando,
          daña casi tanto como si fuéramos fumadores. Estar cerca de personas
          que fuman delante de nosotros nos convierte en fumadores pasivos.
          Existe una opinión extendida que fumar tabacos no daña,{' '}
          <Bold>también dañan</Bold>.
        </Paragraph>
        <Paragraph>
          Más del 80% de los casos de bronquitis crónica y de enfisema son
          causados por el hábito de fumar. Las personas que fuman, que viven
          junto a personas que lo hacen o han estado expuestas a otras
          sustancias dañinas para los pulmones, tienen más riesgo de padecerlas.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO SÉ SI TENGO BRONQUITIS CRÓNICA O ENFISEMA?
        </Subheading>
        <Paragraph>
          Si presenta algunos de los síntomas descritos anteriormente, consulte
          a su médico. Le harán un grupo de preguntas y algunas pruebas, como
          una radiografía de los pulmones, electrocardiograma y algunos análisis
          de sangre y la más importante de todas, una espirometría.
        </Paragraph>
        <Paragraph>
          Esta prueba permite saber cómo están funcionando sus pulmones, y la
          capacidad que tiene en los mismos. Habitualmente con estas pruebas es
          suficiente para hacer el diagnóstico.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO PUEDO PREVENIR LA BRONQUITIS CRÓNICA O ENFISEMA?
        </Subheading>
        <Paragraph>
          Lo principal que se debe hacer para no padecer de EPOC es no fumar o
          dejar de hacerlo. Dado que la principal causa de estas enfermedades es
          el hábito de fumar, parece lógico que si no se fuma, la probabilidad
          de padecer la enfermedad en el futuro disminuye notablemente.
        </Paragraph>
        <Paragraph>
          Las personas que fuman y aún no padecen la enfermedad o es muy
          incipiente, si logran dejar el hábito, pueden detener la bronquitis y
          el enfisema y en ocasiones se logra revertir la enfermedad y mejorar
          notablemente.
        </Paragraph>
        <Paragraph>
          Si fuma, puede ser difícil abandonar el hábito. Varias instituciones
          de salud tienen programas para ello. Dígales a su familia y a sus
          amigos que está intentando dejar el hábito, para que le apoyen.
        </Paragraph>
        <Paragraph>
          En lo posible, evite las sustancias que irriten los pulmones. Trate de
          no estar cerca de personas que fuman cuando lo hagan, el humo que
          espiran esas personas también puede provocarle la enfermedad.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿QUÉ PUEDO HACER PARA MEJORAR MI BRONQUITIS CRÓNICA O ENFISEMA?
        </Subheading>
        <Paragraph>
          Se pueden hacer varias cosas que pueden detener la enfermedad si no
          está muy avanzada y en cualquier caso la pueden mejorar. Los pilares
          del tratamiento son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Enlentecer o detener la enfermedad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Alivio de los síntomas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Prevenir las complicaciones.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Hacer que las personas con EPOC se sientan mejor en
          general.
        </Paragraph>
        <Paragraph>
          Al igual que en la prevención, el factor más importante es dejar de
          fumar, pues la persona con bronquitis crónica o enfisema, al hacerlo
          podrá detener o disminuir el impacto negativo de estas enfermedades.
          De lo contrario, los síntomas irán empeorando aceleradamente. Otros
          hábitos de vida que ayudan a combatir la enfermedad son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Eludir los lugares con mucha contaminación del aire o
          atmosférica.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Instrúyase en técnicas para mejorar su respiración. Un
          fisiatra puede ayudarle.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de no estar sobrepeso. Los pulmones tienen que
          trabajar más en las personas con demasiado peso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Permanezca activo hasta donde pueda. Consulte con su
          médico o un entrenador lo que puede o no hacer.
        </Paragraph>
        <Paragraph>
          Hay medicinas que permiten mejorar los síntomas de la bronquitis
          crónica y el enfisema. Las medicinas que más a menudo se recetan son
          los broncodilatadores (permiten que las vías respiratorias se dilaten
          y mejoran así la respiración); los esteroides que disminuyen la
          inflamación de los bronquios. Ambos se pueden administrar en tabletas
          o por medio de inhaladores. Los antibióticos se administran solo para
          mejorar las infecciones que se producen con frecuencia en estos
          pacientes. Todos ellos deben ser recetados por su médico.
        </Paragraph>
        <Paragraph>
          El oxígeno se utiliza cuando la enfermedad ha avanzado más para
          mejorar el oxígeno en la sangre. Se puede utilizar en las casas de los
          pacientes. Se administra por medio de una máscara que cubre la nariz y
          la boca o por unos tubos finos que se presentan a la entrada de la
          nariz.
        </Paragraph>
        <Paragraph>
          Muy rara vez está indicada la cirugía, cuando la enfermedad es muy
          grave y existe lo que se conoce como “bulas” en los pulmones. Esto
          ocurre con más frecuencia en el enfisema pulmonar.
        </Paragraph>
        <Paragraph>
          Existen programas de rehabilitación pulmonar que mejoran mucho el
          estado de las personas con estas enfermedades.
        </Paragraph>
        <Paragraph>
          Por último, toda persona que padezca de bronquitis crónica o enfisema
          debe estar vacunada anualmente contra la gripe o influenza, ya que la
          misma puede ocasionar graves problemas a personas con bronquitis
          crónica o enfisema.
        </Paragraph>
        <Fig27 stroke={colors.text} width={min} height={min} />
        <Paragraph />
        <Subheading>
          ¿QUÉ ES LA REHABILITACIÓN PULMONAR Y CUANDO LA NECESITARÍA?
        </Subheading>
        <Paragraph>
          La rehabilitación pulmonar mejora el estado de las personas con la
          enfermedad y comprende ejercicios respiratorios y entrenamiento
          psicológico. Se realiza con el objetivo de ayudar a las personas a
          realizar sus actividades diarias con el menor esfuerzo posible. Su
          médico le indicará la mejor forma de hacerla, y si es necesario, lo
          remitirá al fisiatra.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'24-1'}
          question={'1. La bronquitis crónica y el enfisema:'}
          answers={[
            'La padecen mucho los buzos y nadadores.',
            'Son muy frecuentes en personas no fumadoras.',
            'Ocurren casi siempre en personas que fuman.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'24-2'}
          question={'2. Los fumadores pasivos:'}
          answers={[
            'Tienen poco riesgo de padecer bronquitis crónica o enfisema.',
            'Tienen un riesgo elevado de padecer bronquitis crónica o enfisema.',
            'Ninguna de las dos son correctas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'24-3'}
          question={'3. Si nos diagnostican bronquitis crónica o enfisema:'}
          answers={[
            'Debemos dejar de fumar si lo hacemos.',
            'Si somos muy mayores, dejar de fumar no nos mejora.',
            'Las dos son incorrectas.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'Dejar de fumar es lo mejor que podemos hacer si padecemos de bronquitis crónica o enfisema.',
            'Dejar de fumar a cualquier edad mejora la salud.',
            'Si estamos sobrepeso, bajar nos mejora la respiración.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Parkinson')}>
          <Text>{'Viviendo con parkinson'}</Text>
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

export default Bronquitis;
