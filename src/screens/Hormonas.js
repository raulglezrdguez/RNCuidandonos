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
import Italic from '../components/Italic';
import AutoEvaluation from '../components/AutoEvaluation';
import MensajesClaves from '../components/MensajesClaves';

const Hormonas = ({navigation}) => {
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
      await AsyncStorage.setItem('@sHormonas', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sHormonas');
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
          onPress={() => navigate('Ejercicios')}>
          <Text>{'¿Yo puedo hacer ejercicios físicos?'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          EL ENVEJECIMIENTO Y LOS TRATAMIENTOS CON HORMONAS. ¿CUÁNDO Y CÓMO?
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>P</Bold>ensemos en el hecho que a pesar de nacer pequeñitos,
          vayamos creciendo, los huesos, músculos y órganos internos aumenten de
          tamaño poco a poco hasta llegar a la pubertad con su famoso estirón,
          nos salgan vellos, las mujeres comiencen a tomar lo que se conoce como
          “forma femenina del cuerpo” y digamos{' '}
          <Italic>¡pero si ya se está convirtiendo en mujer!</Italic>, y los
          varones la forma característica de ellos y también expresemos{' '}
          <Italic>¡pero si ya es un hombre!</Italic>, y después de pasar unas
          décadas, a unos más tarde que a otros, la piel comience a perder su
          elasticidad e hidratación, se vuelve más fina, los huesos se vuelven
          más frágiles e incluso llegamos a encorvarnos un poco; y en todo esto
          influyen las hormonas.
        </Paragraph>
        <Paragraph>
          Hay muchas enfermedades que se producen por alteraciones del sistema
          endocrino, pero aquí nos vamos a referir a los cambios que se producen
          en las principales hormonas femeninas y masculinas (estrógenos y
          testosterona) durante el envejecimiento.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ SON LAS HORMONAS?</Subheading>
        <Paragraph>
          Las hormonas son sustancias que se producen en el llamado sistema
          endocrino, en especial en las llamadas glándulas de secreción
          internas. Son sustancias muy poderosas, pequeñas cantidades pueden
          producir grandes cambios. Las hormonas intervienen en muchas funciones
          y órganos de nuestro cuerpo, uniéndose a los llamados receptores, y
          realizando su efecto, como son por ejemplo:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Controlar los niveles de azúcar en sangre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Regular el crecimiento y el desarrollo de la persona a
          lo largo de la vida, fundamentalmente en la niñez, adolescencia y a
          partir de la década de los 40 en la mujer y un poco más tarde en el
          hombre.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Controlar el metabolismo.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Permitir que el hombre pueda fertilizar a la mujer y
          que esta pueda salir embarazada, así como que tenga leche en sus senos
          para amamantar al bebé.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>. </Bold>Fortalecimiento de los huesos.
        </Paragraph>
        <Paragraph>
          Tanto las mujeres como los hombres producen sus hormonas en los
          órganos reproductores, con dos excepciones: las mujeres producen
          principalmente los estrógenos en los ovarios y los hombres, la
          testosterona en los testículos.
        </Paragraph>
        <Paragraph>
          Las hormonas que se producen en las glándulas, con el tiempo son
          destruidas, habitualmente en el hígado, porque se ponen “viejas” y
          sustituidas por “hormonas nuevas”, o porque ya no hacen falta en las
          cantidades que existían antes.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿CÓMO CAMBIAN MIS HORMONAS CON EL ENVEJECIMIENTO?
        </Subheading>
        <Paragraph>
          Cada hormona tiene una función, en un órgano específico (como la
          calcitonina en los huesos) y a veces en varios órganos (como las
          hormonas tiroideas).
        </Paragraph>
        <Paragraph>
          Con el envejecimiento, ocurren cambios en la cantidad de hormonas que
          se producen, en los receptores de estas hormonas y en otros casos no
          ocurre casi nada. Algunos de estos cambios son más visibles o
          preocupantes que otros. Por ejemplo: la disminución de los niveles de
          insulina en sangre puede ocasionar la diabetes. Por otro lado, la
          disminución de los estrógenos después de la menopausia, es normal
          aunque produzca determinados cambios en la mujer.
        </Paragraph>
        <Paragraph />
        <Subheading>
          MENOPAUSIA Y ESTRÓGENOS, ¿CUÁNDO PUEDO USAR LA TERAPIA HORMONAL
          SUSTITUTIVA?
        </Subheading>
        <Paragraph>
          La menopausia se produce cuando la mujer deja de producir estrógenos
          en los ovarios, y es un proceso normal del envejecimiento. Su lado más
          visible es que las mujeres dejan de menstruar, aparecen por un tiempo
          “sofocos”, y unos años después comienzan a hacerse ostensible los
          cambios en la piel (fina, laxa, con la aparición de las llamadas
          “manchas del envejecimiento”), principalmente en las manos y otras
          zonas expuestas al sol.
        </Paragraph>
        <Paragraph>
          Pero todos estos cambios tienen un lado menos visible: los huesos se
          vuelven más frágiles y aparece la osteoporosis, cuya principal
          consecuencia es el aumento del riesgo de fractura.
        </Paragraph>
        <Paragraph>
          Cuando ocurre la menopausia, es que surge la pregunta: ¿debo utilizar
          estrógenos para sustituir los que faltan?
        </Paragraph>
        <Paragraph>
          El dilema ocurre porque este tratamiento entraña riesgos. Y estos
          riesgos pueden ser muy serios: el suplemento con hormonas ováricas se
          ha asociado con algunos tipos de cáncer, en especial el cáncer de
          mama, de útero, y con enfermedades del corazón y los vasos sanguíneos
          principalmente. Estos riesgos no son iguales para todas las mujeres,
          dependen de sus antecedentes, de problemas de salud previo y hasta de
          su genética.
        </Paragraph>
        <Paragraph>
          ¿Cuándo no se debe utilizar la Terapia Hormonal Sustitutiva? Las
          siguientes situaciones desaconsejan su uso: haber padecido de cáncer
          del seno o del colon, padecer del corazón, haber tenido trombosis o
          coágulos en las piernas y las que padecen de alguna enfermedad
          hepática. En caso de que usted se encuentre en algunos de estos
          grupos, e insiste en usar este tratamiento, debe acudir a su médico
          para valorar riesgos y beneficios.
        </Paragraph>
        <Paragraph />
        <Subheading>LOS HOMBRES Y LA TESTOSTERONA</Subheading>
        <Paragraph>
          La testosterona es una hormona que se secreta en los testículos, y
          ella es la que produce en la pubertad los llamados caracteres
          masculinos del cuerpo, los espermatozoides necesarios para la
          reproducción y también ayuda a que los huesos no se descalcifiquen. Su
          disminución con el envejecimiento es la llamada andropausia, que
          ocurre más tardíamente y más lentamente que la menopausia en la mujer.
        </Paragraph>
        <Paragraph>
          Cuando disminuye la testosterona en sangre por el envejecimiento,
          puede aparecer falta de vigor físico, disminución de los deseos
          sexuales, y cierto grado de descalcificación de los huesos. No todos
          los hombres presentan la misma intensidad de estos síntomas.
        </Paragraph>
        <Paragraph>
          Existen diferentes formas de tratamiento sustitutivo de la
          testosterona. Estos solamente están indicados cuando los niveles de
          testosterona se encuentren bajos en sangre y que se determina por un
          análisis que le puede indicar su médico. Si esta es la situación, su
          sustitución es lo más recomendado, pero solamente{' '}
          <Bold>si su testosterona está baja en sangre</Bold>.
        </Paragraph>
        <Paragraph>
          Su uso se ha asociado a riesgos, principalmente el cáncer de próstata
          y esto ocurre más en los hombres con niveles normales de testosterona.
          Si decide iniciar este tratamiento, debe realizarse periódicamente un
          PSA, que es un análisis para monitorear el cáncer de próstata.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'18-1'}
          question={'1. Las hormonas pueden servir para:'}
          answers={[
            'Controlar los niveles de azúcar en sangre.',
            'Fortalecer los huesos.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'18-2'}
          question={'2. Sobre las hormonas diga:'}
          answers={[
            'La principal hormona sexual de las mujeres es la testosterona.',
            'La principal hormona sexual de los hombres son los estrógenos.',
            'Los hombres producen testosterona y las mujeres estrógenos.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'18-3'}
          question={'3. Con el paso de los años:'}
          answers={[
            'Cambia la cantidad de hormonas en nuestro cuerpo.',
            'Cambian los receptores de las hormonas.',
            'Las dos son correctas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'Si soy mujer y quiero usar estrógenos, debo consultar al médico.',
            'Si soy hombre y quiero usar testosterona, debo consultar al médico.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Sexualidad')}>
          <Text>{'La sexualidad en la "Edad plateada"'}</Text>
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

export default Hormonas;
