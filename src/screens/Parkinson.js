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
import Fig28 from '../components/Fig28';

const Parkinson = ({navigation}) => {
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
      await AsyncStorage.setItem('@sParkinson', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sParkinson');
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
          onPress={() => navigate('Bronquitis')}>
          <Text>{'Viviendo con bronquitis crónica o enfisema'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>VIVIENDO CON PARKINSON</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a enfermedad de Parkinson ocurre más frecuentemente en
          las personas mayores, aunque puede comenzar antes de los 55 años. Sus
          rasgos más distintivos son el temblor y la rigidez del cuerpo, aunque
          tiene otros síntomas.
        </Paragraph>
        <Paragraph>
          Aparece cuando en el cerebro no se produce suficiente cantidad de una
          sustancia llamada dopamina, que se utiliza para trasmitir algunos
          impulsos por los nervios.
        </Paragraph>
        <Paragraph>
          Cuando la enfermedad comienza tardíamente, es decir después de los 75
          años, no produce mucha discapacidad, pero si su comienzo es más
          temprano, es decir, cerca de los 60 años, con el paso de los años
          puede llegar a producir invalidez importante.
        </Paragraph>
        <Paragraph>
          Casi ningún caso es hereditario y es más común en los hombres.
        </Paragraph>
        <Paragraph>
          La enfermedad no tiene cura, pero al igual que la presión alta o la
          diabetes, que tampoco tienen cura, hay diversos tratamientos que
          ayudan mucho y hacen la vida más llevadera.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CUÁLES SON LOS SÍNTOMAS DEL PARKINSON?</Subheading>
        <Paragraph>
          Los síntomas son leves al inicio. Comienzan casi siempre en un lado
          del cuerpo, y después afectan ambos lados. Las personas empiezan a
          notar un temblor en una de las manos o en una de las piernas cuando
          las tienen cruzadas, y después también en la mandíbula.
        </Paragraph>
        <Paragraph>
          Posteriormente aparece rigidez en piernas y brazos, con lentitud de
          los movimientos y comienzan problemas de equilibrio y de coordinación
          para hacer las tareas diarias.
        </Paragraph>
        <Paragraph>
          Muchas veces en la persona mayor aparece primero la rigidez y
          dificultad para caminar y caídas, antes de que aparezca el temblor.
        </Paragraph>
        <Paragraph>
          Cuando la enfermedad avanza, aparecen otros síntomas como molestias
          musculares, mareos al levantarse de la posición de sentado o acostado
          (porque disminuye la presión en ese momento durante unos cuantos
          segundos). La postura se encorva, se comienza a caminar con pasos
          cortos, arrastrando los pies, el habla es más lenta y la voz más baja.
          Puede aparecer babeo por la propia dificultad para deglutir y la cara
          se vuelve algo inexpresiva, siendo difícil expresar las emociones.
        </Paragraph>
        <Paragraph>
          Los problemas asociados al movimiento afectan mucho a las personas en
          sus tareas diarias. Se vuelve difícil iniciarlos, como comenzar a
          caminar, que puede ser lento y poco coordinado, lo que junto al
          temblor dificulta también comer.
        </Paragraph>
        <Paragraph>
          Los temblores ocurren principalmente cuando la persona está tranquila.
          Cuando comienza a moverse, el temblor disminuye o desaparece, al igual
          que durante el sueño. Aumenta cuando la persona está tensa por algo.
          El equilibrio se altera y son frecuentes las caídas.
        </Paragraph>
        <Paragraph>
          Puede aparecer depresión y cuando la enfermedad avanza durante años,
          se puede presentar pérdida de memoria y demencia.
        </Paragraph>
        <Paragraph />
        <Subheading>
          NO TODOS LOS TEMBLORES SON POR ENFERMEDAD DE PARKINSON
        </Subheading>
        <Paragraph>
          No siempre los temblores son causados por el Parkinson. Uno de los que
          más se le parece es el temblor esencial, también llamado familiar o
          benigno, evoluciona lento, generalmente afecta las manos, el
          tratamiento del Parkinson no lo mejora pero sí hay otros tratamientos
          que lo alivia.
        </Paragraph>
        <Paragraph>
          Existe el llamado parkinsonismo aterosclerótico, que es producido por
          algunos tipos de infartos o derrames cerebrales que causan isquemias
          en las zonas profundas del cerebro. Su comienzo es más súbito que la
          enfermedad de Parkinson, evoluciona más lentamente y responde poco a
          los medicamentos para esa enfermedad.
        </Paragraph>
        <Paragraph>
          Hay medicinas que se utilizan con frecuencia en los pacientes con
          demencia, que producen síntomas muy parecidos al Parkinson, y que
          desaparecen cuando se reduce la dosis de las mismas. Algunos ejemplos
          de estos medicamentos son: tioridazina, haloperidol y clorpromacina,
          entre otros.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ PUEDO HACER PARA MEJORAR MIS SÍNTOMAS?</Subheading>
        <Paragraph>
          Las personas con enfermedad de Parkinson por lo general viven casi los
          mismos años que una persona que no la padezca, pero los síntomas
          pueden avanzar con los años y producir discapacidad y dependencia. Hay
          algunos ajustes en los hábitos de vida de las personas con esta
          enfermedad que ayudan:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Trate de no fumar y evitar el estrés.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Manténgase activo todo el tiempo que pueda, pero tómese
          descansos periódicos durante el día si fuera necesario.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Hable con sus familiares de su enfermedad para que le
          apoyen.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Participe en programas de rehabilitación para personas
          con enfermedad de Parkinson, le ayudarán a vivir con menos dificultad.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ TRATAMIENTOS HAY PARA LA ENFERMEDAD?</Subheading>
        <Paragraph>
          El Parkinson <Bold>no tiene cura, pero sí tiene tratamiento</Bold>.
          Este mejora mucho los síntomas de la enfermedad.
        </Paragraph>
        <Paragraph>
          El medicamento que más se utiliza en la levodopa, que tiene diferentes
          nombres comerciales y generalmente vienen unida a otras sustancias
          para mejorar su acción en el cerebro utilizando dosis menores. Esta
          sustituye a la dopamina que falta en el cerebro en los pacientes con
          esta enfermedad.
        </Paragraph>
        <Paragraph>
          Las medicinas para el Parkinson pueden tener efectos adversos
          importantes que usted debe conocer:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Presentar confusión mental (alteración de la conducta).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mareos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Problemas digestivos (náuseas o diarreas).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Otros movimientos en el cuerpo, diferentes al temblor
          propio de la enfermedad.
        </Paragraph>
        <Fig28 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          No cambie dosis ni consuma otro medicamento sin consultarlo con su
          médico. Cuando aparezcan estos síntomas u otros que usted considere
          que pudieran ser por las medicinas que toma, consulte a su médico.
        </Paragraph>
        <Paragraph>
          La medida y el tiempo por el que las medicinas aliviarán los síntomas
          pueden ser muy diferentes en cada persona. Todas las personas no
          responden igual al tratamiento de la enfermedad. En general, se mejora
          mucho, pero con el paso del tiempo se deben aumentar la dosis de las
          medicinas o buscar otras estrategias de tratamiento.
        </Paragraph>
        <Paragraph />
        <Subheading>¿CÓMO TOMAR MIS MEDICINAS PARA EL PARKINSON?</Subheading>
        <Paragraph>
          Es muy importante que cumpla el horario exacto que le recomiende su
          médico para tomar los medicamentos para la enfermedad. Tomarlos media
          hora antes o después del momento indicado puede hacer que aparezcan
          síntomas durante el día. Si usted nota que en algunos momentos del día
          los síntomas de la enfermedad son mayores, dígaselo a su médico para
          que reajuste el horario del tratamiento, la dosis, o que valore otro
          medicamento.
        </Paragraph>
        <Paragraph>
          Las personas que padecen de Parkinson, casi siempre tienen otras
          enfermedades por lo que toman otras medicinas, las cuales pueden
          interactuar entre sí, disminuyendo sus efectos o creando reacciones
          potencialmente dañinas. No deje de decirle a su médico todas las
          medicinas que está tomando.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO CONTROLO LOS DEMÁS SÍNTOMAS DE LA ENFERMEDAD?
        </Subheading>
        <Paragraph>
          Además del temblor, la rigidez y la falta de coordinación y reflejos,
          hay otros síntomas que pueden aparecer cuando se tiene Parkinson
          durante varios años. Ellos se pueden tratar con medicinas y
          fisioterapia.
        </Paragraph>
        <Paragraph>
          La depresión y otros cambios emocionales son frecuente que ocurran,
          aun desde las etapas iniciales de la enfermedad, ante la pérdida de
          capacidades para realizar las cosas del diario y producto de la propia
          enfermedad. Se tratan de manera exitosa con medicamentos y algún tipo
          de psicoterapia si fuera necesario.
        </Paragraph>
        <Paragraph>
          Con el paso de los años, la enfermedad puede producir dificultad para
          tragar los alimentos, lo cual provoca tos por pasar parte de los
          alimentos a las vías respiratorias en el momento de deglutir, (se van
          por el “camino viejo”) principalmente los líquidos, y se puede llegar
          a producir neumonía por aspiración de alimentos.
        </Paragraph>
        <Paragraph>
          La dificultad para tragar puede provocar desnutrición si no es tratado
          correctamente. Probar con diferentes alimentos para saber con cuáles
          ocurre menos, puede ser útil. No se debe ingerir ningún tipo de
          alimento estando acostado.
        </Paragraph>
        <Paragraph>
          También con el paso de los años se puede presentar dificultades al
          hablar (se habla despacio y muy bajo). Los terapeutas del habla pueden
          mejorar esta condición con ejercicios.
        </Paragraph>
        <Paragraph />
        <Subheading>¿EL EJERCICIO AYUDA?</Subheading>
        <Paragraph>
          Los ejercicios pueden ayudar mucho a que la persona con Parkinson
          mejore su capacidad de movimiento y su equilibrio, de ahí la
          importancia y necesidad de fortalecer ciertos músculos y mejorar la
          marcha, razón por la cual, la práctica del Tai–Chi puede mejorar mucho
          el equilibrio y disminuir el riesgo de caerse y lastimarse.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'25-1'}
          question={'1. La enfermedad de Parkinson (puede marcar más de una):'}
          answers={[
            'Comienza con rigidez del cuerpo y marcha lenta.',
            'Habitualmente se caracteriza por temblores en las manos.',
            'Ocurre más en las mujeres.',
          ]}
          correct={[0, 1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'25-2'}
          question={'2. Sobre el tratamiento con pastillas para el Parkinson:'}
          answers={[
            'Si dejo de tomar una dosis en el día, no hay grandes consecuencias.',
            'Es muy importante tomarlas en el horario exacto que dice el médico.',
            'Las dos anteriores son correctas.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'25-3'}
          question={
            '3. El tipo de ejercicio que más ayuda a caminar mejor y evitar el riesgo de caídas es:'
          }
          answers={[
            'Tai–Chi.',
            'Dar caminatas todos los días o casi todos los días.',
            'Las dos respuestas anteriores son correctas.',
          ]}
          correct={[0]}
        />

        <MensajesClaves
          messages={[
            'La dopamina es una sustancia que se produce en el cerebro. Su disminución produce Parkinson.',
            'No todos los temblores son por Parkinson.',
            'Los ejercicios ayudan mucho.',
            'Si tiene Parkinson, manténgase activo.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Artrosis')}>
          <Text>{'Me duelen las articulaciones ¿Será por artrosis?'}</Text>
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

export default Parkinson;
