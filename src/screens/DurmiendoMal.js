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
          <Bold>L</Bold>a mayor??a de las personas hemos tenido alg??n trastorno
          del sue??o, al menos en alg??n momento de la vida, y en la vida actual,
          con la rapidez con que se vive, a veces no le damos importancia a no
          dormir bien, cuando casi la tercera parte de nuestra vida la pasamos
          durmiendo para que el organismo se reponga.
        </Paragraph>
        <Paragraph>
          Hay distintos trastornos del sue??o: dormir mucho (hipersomnia), las
          conocidas y temidas pesadillas (parasomnias) y dormir poco (insomnio),
          este ??ltimo es el m??s frecuente de todos, del que m??s a menudo nos
          quejamos cuando avanzamos a la adultez mayor, y es el tema que
          trataremos en este cap??tulo.
        </Paragraph>
        <Paragraph />
        <Subheading>??POR QU?? NECESITAMOS DORMIR?</Subheading>
        <Paragraph>
          El cuerpo se cansa durante el d??a por todas las cosas que hacemos, por
          lo que necesita recuperarse, principalmente el cerebro. En las
          diferentes edades se necesitan distintos tiempos de dormir para
          reponernos: los reci??n nacidos duermen casi 20 o 22 horas diarias, y a
          medida que vamos creciendo dormimos menos, y cuando llegamos a ser
          personas mayores, casi siempre nos reponemos con menos horas de sue??o
          total en el d??a.
        </Paragraph>
        <Paragraph>
          Adem??s de esto, hay mucha variaci??n entre una persona y otra: hay
          personas dormilonas y otras que durmiendo seis horas al d??a les es
          suficiente. No siempre dormir m??s es mejor, a veces unas pocas horas
          de sue??o son suficientes. Por eso, es mejor hablar del tiempo que
          necesitamos para estar descansados que de cu??ntas horas necesitamos
          para dormir.
        </Paragraph>
        <Paragraph>
          En las personas mayores, habitualmente dormir 6 horas y media a 7 son
          suficientes para amanecer descansados, porque el objetivo del sue??o es
          ese, reparar nuestro cuerpo para que amanezcamos descansados,
          independientemente del tiempo que se duerma. Aunque repetimos, esto no
          es siempre as??.
        </Paragraph>
        <Paragraph />
        <Subheading>??QU?? ES EL INSOMNIO?</Subheading>
        <Paragraph>
          Hab??amos explicado que el insomnio es el trastorno del sue??o m??s com??n
          en las personas de mediana edad y en personas mayores. ??Qui??n no ha
          estado dando vueltas y vueltas en la cama sin que pueda dormirse?
          Cuando hablamos de insomnio estamos hablando de una reducci??n en la
          cantidad o calidad del sue??o,{' '}
          <Italic>en relaci??n a c??mo dorm??a antes esa persona</Italic>. Esto
          ??ltimo es importante, ya que no debemos compararnos con otras personas
          para decir que tenemos insomnio, sino con nosotros mismos. Puede
          manifestarse con una sola o con una combinaci??n de las siguientes
          caracter??sticas:
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
        <Subheading>??POR QU?? NO ESTOY DURMIENDO BIEN?</Subheading>
        <Paragraph>
          Una persona mayor sana puede despertarse varias veces en la noche sin
          que por esto est?? enfermo. Pero los motivos m??s frecuentes son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Enfermedades que provoquen dolor, falta de aire u otros
          s??ntomas molestos asociados a la bronquitis o enfisema, est??n dentro
          de las m??s comunes, as?? como depresi??n, ansiedad o artrosis, solo por
          nombrar algunas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Escasa estimulaci??n ambiental durante el d??a o
          disminuci??n de las actividades f??sicas que hacemos diariamente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Mala higiene del sue??o, lo que se refiere a h??bitos,
          costumbres y aspectos ambientales que se crean a lo largo de la vida y
          que ya en la adultez mayor es necesario modificar pues se convierten
          en agentes desfavorables para un buen sue??o (vea en la siguiente
          p??gina Medidas de Higiene del Sue??o).
        </Paragraph>
        <Fig5 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          En los ??ltimos a??os se le ha dado mucha importancia como causa de
          ???dormir mal??? a lo que se conoce como apnea del sue??o, que no es m??s
          que dejar de respirar por unos cuantos segundos, y esto puede pasar
          varias veces en la noche. Quienes la padecen habitualmente roncan
          fuerte, pero esto no quiere decir que todos los que roncamos la
          padezcamos. Esto puede ser causa de insomnio. Si usted cree que lo
          padece, no deje de consultar a su m??dico.
        </Paragraph>
        <Paragraph>
          Las personas mayores tenemos el sue??o m??s ligero que los j??venes, y
          por ese motivo nos podemos despertar algunas veces por la noche.
        </Paragraph>
        <Paragraph>
          Otra causa relativamente frecuente son los deseos de orinar por la
          noche, conocidos como nicturia, lo que ocurre m??s en los hombres que
          en las mujeres, debido al agrandamiento de la pr??stata.
        </Paragraph>
        <Paragraph />
        <Subheading>??PUEDO MEJORAR MI INSOMNIO?</Subheading>
        <Paragraph>
          El insomnio es un problema m??s molesto que grave. Tratar y tener
          compensadas y controladas las enfermedades que padezcamos, pueden
          contribuir a mejorarlo.
        </Paragraph>
        <Paragraph>
          Nunca debemos ir a la cama a dormir si no tenemos sue??o, este no se
          busca en la cama, por lo que debemos ir a la cama cuando tengamos
          sue??o, pues en caso contrario empezaremos a dar vueltas y vueltas, se
          nos llenar?? la cabeza de preocupaciones que nos parecer??n muy grandes,
          y cuando nos levantemos al d??a siguiente nos daremos cuenta de que
          todo lo que pensamos antes de dormirnos, no son preocupaciones tan
          grandes.
        </Paragraph>
        <Paragraph>
          Si el insomnio que padecemos es del tipo del que nos dormimos y nos
          despertamos de madrugada y no podemos volver a dormirnos, podemos
          probar lo siguiente: si en quince o veinte minutos no nos hemos vuelto
          a dormir, lo mejor es levantarnos y ponernos a hacer alguna actividad
          pasiva, algo sencillo, leer, ver televisi??n, o??r m??sica y cuando nos
          comience a vencer el sue??o, entonces regresamos a la cama.
        </Paragraph>
        <Paragraph />
        <Subheading>LO QUE PUEDO HACER PARA DORMIR MEJOR</Subheading>
        <Paragraph>Le sugerimos las Medidas de Higiene del Sue??o:</Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>1. </Bold>Tratar por todo lo posible de no auto???administrarnos
          medicinas para dormir.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>2. </Bold>Realizar, hasta donde sea posible, actividad f??sica y
          en general realizar m??s actividad por el d??a.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>3. </Bold>Modificar cuando sea posible las condiciones del
          ambiente, como luces fuertes y ruidos, televisi??n en la habitaci??n de
          dormir.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>4. </Bold>No usar la habitaci??n de dormir ni la cama para
          realizar actividades no relacionadas con el sue??o.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>5. </Bold>No realizar actividades intelectuales ni f??sicas que
          generen tensi??n en horario nocturno, preferiblemente nunca despu??s de
          las 6:00 p.m.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>6. </Bold>Hay sustancias que tienden a quitar el sue??o, como el
          caf??, los refrescos de cola y el t??. Debemos evitarlas preferiblemente
          despu??s de las 6:00 p.m. o en las cuatro horas antes de acostarnos.
        </Paragraph>
        <Fig6 stroke={colors.text} width={min} height={min} />
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>7. </Bold>Podemos tomar tisanas de tilo, manzanilla, valeriana o
          pasiflora siempre consultando a nuestro m??dico, la cantidad y
          frecuencia adecuadas para nuestra edad.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>8. </Bold>La comida de por la noche no debe ser muy abundante.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>9. </Bold>Evitemos dormir siestas o t??melas por menos de 30
          minutos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>10. </Bold>Podemos tomar un ba??o de agua tibia antes de ir a la
          cama.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>11. </Bold>Consultar al m??dico para saber si algunas de las
          medicinas que tomamos nos provocan falta de sue??o y a veces
          reajustando el horario de las mismas ya es suficiente.
        </Paragraph>
        <Paragraph>
          Por otra parte, si tuviera apnea del sue??o y tiene sobrepeso, bajar un
          poco ser??a ??til. Si fuma, deber??a por este y otros motivos pensar en
          dejar de fumar.
        </Paragraph>
        <Paragraph>
          Hay medicamentos que ayudan a conciliar el sue??o, pero a muchos de
          ellos el cuerpo se acostumbra con bastante rapidez y despu??s, ya no
          son tan efectivos. Estos medicamentos deben ser recetados por su
          m??dico. Nunca tome lo que otra persona le recomienda porque a ella le
          fue bien.
        </Paragraph>
        <Paragraph>
          Debemos recordar que las diferentes personas reaccionamos a los
          medicamentos de distinta manera, y cualquiera de estos f??rmacos pueden
          causar al d??a siguiente somnolencia, letargo, algo de confusi??n y
          podemos llegar hasta sufrir una caida por este motivo. Debe tomarlas
          por el menor tiempo posible.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACI??N</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'5-1'}
          question={'1. El trastorno del sue??o m??s frecuente es:'}
          answers={[
            'Las pesadillas.',
            'Estar muy somnoliento la mayor parte del d??a.',
            'El insomnio.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'5-2'}
          question={'2. La falta de sue??o puede ser provocada por:'}
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
            'Dormir con m??sica suave.',
            'Tratar de no dormir siesta.',
            'Tomar abundante agua en la comida.',
          ]}
          correct={[1]}
        />

        <MensajesClaves
          messages={[
            'Las personas mayores disminuyen sus horas de sue??o.',
            'Debemos conocer nuestro cuerpo, su actividad f??sica y lo que necesita descansar.',
            'Es m??s importante la calidad y no la cantidad de horas de sue??o.',
            'Una buena higiene de sue??o prepara para el descanso con calidad.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Alimentarnos')}>
          <Text>{'??Qu?? es alimentarnos sanamente?'}</Text>
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
