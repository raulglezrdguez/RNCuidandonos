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
import Italic from '../components/Italic';
import Fig5 from '../components/Fig5';
import Fig6 from '../components/Fig6';

const DurmiendoMal = ({navigation}) => {
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
      await AsyncStorage.setItem('@sDurmiendoMal', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sDurmiendoMal');
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
          onPress={() => navigate('MeCaigo')}>
          <Text>{'Cuidado que si me caigo...'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>ESTOY DURMIENDO MAL...</Headline>
        <Headline />
        <Paragraph>
          <Bold>L</Bold>a mayoría de las personas hemos tenido algún trastorno
          del sueño, al menos en algún momento de la vida, y en la vida actual,
          con la rapidez con que se vive, a veces no le damos importancia a no
          dormir bien, cuando casi la tercera parte de nuestra vida la pasamos
          durmiendo para que el organismo se reponga.
        </Paragraph>
        <Paragraph>
          Hay distintos trastornos del sueño: dormir mucho (hipersomnia), las
          conocidas y temidas pesadillas (parasomnias) y dormir poco (insomnio),
          este último es el más frecuente de todos, del que más a menudo nos
          quejamos cuando avanzamos a la adultez mayor, y es el tema que
          trataremos en este capítulo.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ NECESITAMOS DORMIR?</Subheading>
        <Paragraph>
          El cuerpo se cansa durante el día por todas las cosas que hacemos, por
          lo que necesita recuperarse, principalmente el cerebro. En las
          diferentes edades se necesitan distintos tiempos de dormir para
          reponernos: los recién nacidos duermen casi 20 o 22 horas diarias, y a
          medida que vamos creciendo dormimos menos, y cuando llegamos a ser
          personas mayores, casi siempre nos reponemos con menos horas de sueño
          total en el día.
        </Paragraph>
        <Paragraph>
          Además de esto, hay mucha variación entre una persona y otra: hay
          personas dormilonas y otras que durmiendo seis horas al día les es
          suficiente. No siempre dormir más es mejor, a veces unas pocas horas
          de sueño son suficientes. Por eso, es mejor hablar del tiempo que
          necesitamos para estar descansados que de cuántas horas necesitamos
          para dormir.
        </Paragraph>
        <Paragraph>
          En las personas mayores, habitualmente dormir 6 horas y media a 7 son
          suficientes para amanecer descansados, porque el objetivo del sueño es
          ese, reparar nuestro cuerpo para que amanezcamos descansados,
          independientemente del tiempo que se duerma. Aunque repetimos, esto no
          es siempre así.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ ES EL INSOMNIO?</Subheading>
        <Paragraph>
          Habíamos explicado que el insomnio es el trastorno del sueño más común
          en las personas de mediana edad y en personas mayores. ¿Quién no ha
          estado dando vueltas y vueltas en la cama sin que pueda dormirse?
          Cuando hablamos de insomnio estamos hablando de una reducción en la
          cantidad o calidad del sueño,{' '}
          <Italic>en relación a cómo dormía antes esa persona</Italic>. Esto
          último es importante, ya que no debemos compararnos con otras personas
          para decir que tenemos insomnio, sino con nosotros mismos. Puede
          manifestarse con una sola o con una combinación de las siguientes
          características:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Dificultad para empezar a dormir.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Dificultad para permanecer dormido (despertarse a media
          noche).
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Despertar muy temprano.
        </Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ NO ESTOY DURMIENDO BIEN?</Subheading>
        <Paragraph>
          Una persona mayor sana puede despertarse varias veces en la noche sin
          que por esto esté enfermo. Pero los motivos más frecuentes son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Enfermedades que provoquen dolor, falta de aire u otros
          síntomas molestos asociados a la bronquitis o enfisema, están dentro
          de las más comunes, así como depresión, ansiedad o artrosis, solo por
          nombrar algunas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Escasa estimulación ambiental durante el día o
          disminución de las actividades físicas que hacemos diariamente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mala higiene del sueño, lo que se refiere a hábitos,
          costumbres y aspectos ambientales que se crean a lo largo de la vida y
          que ya en la adultez mayor es necesario modificar pues se convierten
          en agentes desfavorables para un buen sueño (vea en la siguiente
          página Medidas de Higiene del Sueño).
        </Paragraph>
        <Fig5 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          En los últimos años se le ha dado mucha importancia como causa de
          “dormir mal” a lo que se conoce como apnea del sueño, que no es más
          que dejar de respirar por unos cuantos segundos, y esto puede pasar
          varias veces en la noche. Quienes la padecen habitualmente roncan
          fuerte, pero esto no quiere decir que todos los que roncamos la
          padezcamos. Esto puede ser causa de insomnio. Si usted cree que lo
          padece, no deje de consultar a su médico.
        </Paragraph>
        <Paragraph>
          Las personas mayores tenemos el sueño más ligero que los jóvenes, y
          por ese motivo nos podemos despertar algunas veces por la noche.
        </Paragraph>
        <Paragraph>
          Otra causa relativamente frecuente son los deseos de orinar por la
          noche, conocidos como nicturia, lo que ocurre más en los hombres que
          en las mujeres, debido al agrandamiento de la próstata.
        </Paragraph>
        <Paragraph />
        <Subheading>¿PUEDO MEJORAR MI INSOMNIO?</Subheading>
        <Paragraph>
          El insomnio es un problema más molesto que grave. Tratar y tener
          compensadas y controladas las enfermedades que padezcamos, pueden
          contribuir a mejorarlo.
        </Paragraph>
        <Paragraph>
          Nunca debemos ir a la cama a dormir si no tenemos sueño, este no se
          busca en la cama, por lo que debemos ir a la cama cuando tengamos
          sueño, pues en caso contrario empezaremos a dar vueltas y vueltas, se
          nos llenará la cabeza de preocupaciones que nos parecerán muy grandes,
          y cuando nos levantemos al día siguiente nos daremos cuenta de que
          todo lo que pensamos antes de dormirnos, no son preocupaciones tan
          grandes.
        </Paragraph>
        <Paragraph>
          Si el insomnio que padecemos es del tipo del que nos dormimos y nos
          despertamos de madrugada y no podemos volver a dormirnos, podemos
          probar lo siguiente: si en quince o veinte minutos no nos hemos vuelto
          a dormir, lo mejor es levantarnos y ponernos a hacer alguna actividad
          pasiva, algo sencillo, leer, ver televisión, oír música y cuando nos
          comience a vencer el sueño, entonces regresamos a la cama.
        </Paragraph>
        <Paragraph />
        <Subheading>LO QUE PUEDO HACER PARA DORMIR MEJOR</Subheading>
        <Paragraph>Le sugerimos las Medidas de Higiene del Sueño:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>1. </Bold>Tratar por todo lo posible de no auto–administrarnos
          medicinas para dormir.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>2. </Bold>Realizar, hasta donde sea posible, actividad física y
          en general realizar más actividad por el día.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>3. </Bold>Modificar cuando sea posible las condiciones del
          ambiente, como luces fuertes y ruidos, televisión en la habitación de
          dormir.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>4. </Bold>No usar la habitación de dormir ni la cama para
          realizar actividades no relacionadas con el sueño.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>5. </Bold>No realizar actividades intelectuales ni físicas que
          generen tensión en horario nocturno, preferiblemente nunca después de
          las 6:00 p.m.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>6. </Bold>Hay sustancias que tienden a quitar el sueño, como el
          café, los refrescos de cola y el té. Debemos evitarlas preferiblemente
          después de las 6:00 p.m. o en las cuatro horas antes de acostarnos.
        </Paragraph>
        <Fig6 stroke={colors.text} width={min} height={min} />
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>7. </Bold>Podemos tomar tisanas de tilo, manzanilla, valeriana o
          pasiflora siempre consultando a nuestro médico, la cantidad y
          frecuencia adecuadas para nuestra edad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>8. </Bold>La comida de por la noche no debe ser muy abundante.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>9. </Bold>Evitemos dormir siestas o tómelas por menos de 30
          minutos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>10. </Bold>Podemos tomar un baño de agua tibia antes de ir a la
          cama.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>11. </Bold>Consultar al médico para saber si algunas de las
          medicinas que tomamos nos provocan falta de sueño y a veces
          reajustando el horario de las mismas ya es suficiente.
        </Paragraph>
        <Paragraph>
          Por otra parte, si tuviera apnea del sueño y tiene sobrepeso, bajar un
          poco sería útil. Si fuma, debería por este y otros motivos pensar en
          dejar de fumar.
        </Paragraph>
        <Paragraph>
          Hay medicamentos que ayudan a conciliar el sueño, pero a muchos de
          ellos el cuerpo se acostumbra con bastante rapidez y después, ya no
          son tan efectivos. Estos medicamentos deben ser recetados por su
          médico. Nunca tome lo que otra persona le recomienda porque a ella le
          fue bien.
        </Paragraph>
        <Paragraph>
          Debemos recordar que las diferentes personas reaccionamos a los
          medicamentos de distinta manera, y cualquiera de estos fármacos pueden
          causar al día siguiente somnolencia, letargo, algo de confusión y
          podemos llegar hasta sufrir una caida por este motivo. Debe tomarlas
          por el menor tiempo posible.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'5-1'}
          question={'1. El trastorno del sueño más frecuente es:'}
          answers={[
            'Las pesadillas.',
            'Estar muy somnoliento la mayor parte del día.',
            'El insomnio.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'5-2'}
          question={'2. La falta de sueño puede ser provocada por:'}
          answers={[
            'Preocupaciones.',
            'Dolores nocturnos.',
            'Las dos anteriores son respuestas correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'5-3'}
          question={'3. Para mejorar el insomnio podemos:'}
          answers={[
            'Dormir con música suave.',
            'Tratar de no dormir siesta.',
            'Tomar abundante agua en la comida.',
          ]}
          correct={[1]}
        />

        <MensajesClaves
          messages={[
            'Las personas mayores disminuyen sus horas de sueño.',
            'Debemos conocer nuestro cuerpo, su actividad física y lo que necesita descansar.',
            'Es más importante la calidad y no la cantidad de horas de sueño.',
            'Una buena higiene de sueño prepara para el descanso con calidad.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Alimentarnos')}>
          <Text>{'¿Qué es alimentarnos sanamente?'}</Text>
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

export default DurmiendoMal;
