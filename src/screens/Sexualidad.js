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
import Fig23 from '../components/Fig23';

const Sexualidad = ({navigation}) => {
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
      await AsyncStorage.setItem('@sSexualidad', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSexualidad');
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
          onPress={() => navigate('Hormonas')}>
          <Text>
            {
              'El envejecimiento y los tratamientos con hormonas. ¿Cuándo y cómo?'
            }
          </Text>
        </TouchableRipple>
        <Headline style={styles.bold}>
          LA SEXUALIDAD EN LA “EDAD PLATEADA”
        </Headline>
        <Headline />
        <Paragraph>
          <Bold>D</Bold>urante mucho tiempo se consideró que las personas
          mayores eran asexuadas. De su sexualidad no se debía hablar pasada
          cierta edad; el sexo era un tema tabú.
        </Paragraph>
        <Paragraph>
          Esta conducta estaba (y está aún en algunas personas) condicionada por
          patrones sociales. Incluso, en el caso de las mujeres, ya desde el
          periodo climatérico, cuando comienzan los cambios en su ciclo
          menstrual con frecuencia existe una tendencia a pensar que ya no hay
          sexualidad; en muchos casos esta falsa creencia llega a convertirse en
          una franca verdad cuando no lo es. Incluso muchas personas lo aceptan
          como normal, reprimiendo y ocultando emociones sexuales con el paso de
          los años.
        </Paragraph>
        <Paragraph>
          Lo que sí es cierto es que al igual que el vigor cambia de una persona
          de 20 años comparado con una de 45, la sexualidad también se
          transforma y evoluciona hacia otras manifestaciones placenteras, donde
          las vivencias, experiencias y aprendizajes individuales y de pareja
          permiten que se viva de forma más plena que en la juventud. Es bueno
          diferenciar amor de pareja, relaciones sexuales y coito como tal.
        </Paragraph>
        <Paragraph>
          El amor de pareja es un sentimiento que en muchas ocasiones no
          desaparece incluso después del fallecimiento de uno de los cónyuges.
        </Paragraph>
        <Fig23 stroke={colors.text} width={min} height={min} />
        <Paragraph>
          El amor en la pareja mayor puede incluir el deseo sexual y el coito,
          pero no siempre es así; con cierta frecuencia, la prioridad de estas
          en el amor cambia, pasando a un segundo lugar, aunque el amor puede
          ser el mismo o más profundo. Por tanto, hablamos de salud sexual en
          las personas mayores cuando existe expresión psicológica de emociones
          y compromisos que requiere la mayor cantidad y calidad de comunicación
          entre compañeros, es una relación de confianza, amor, cooperación y
          placer, con o sin coito.
        </Paragraph>
        <Paragraph>Aquí estaremos hablando de relaciones sexuales.</Paragraph>
        <Paragraph />
        <Subheading>¿POR QUÉ NO ESTOY IGUAL QUE ANTES?</Subheading>
        <Paragraph>
          En el organismo ocurren un grupo de cambios con el paso del tiempo, y
          en este caso tiene que ver con las llamadas hormonas sexuales, en
          específico los estrógenos en la mujer y la testosterona en el hombre.
        </Paragraph>
        <Paragraph>
          En la mujer, a partir de la menopausia hay una caída de la producción
          de estrógenos por los ovarios, y alcanza sus niveles inferiores en 2–3
          años. Esto provoca un grupo de cambios en la mujer, y dentro de ellos
          en el aparato reproductor, con cierta involución del útero, menor
          lubricación de la vagina e incluso el orgasmo puede demorarse más en
          alcanzarse así como se hace un poco más prolongada la estimulación
          necesaria para la realización del coito.
        </Paragraph>
        <Paragraph>
          La disminución del deseo sexual puede también estar influido por la
          creencia de cómo deben ser las personas mayores en el imaginario
          popular, y quizás también por el cambio de la imagen de la mujer ante
          el espejo y cambios de su autoestima, pues los estrógenos están muy
          relacionados con el envejecimiento de la piel.
        </Paragraph>
        <Paragraph>
          En el caso de los hombres, la disminución de la cantidad de
          testosterona ocurre a lo largo de diez o quince años, más lentamente
          que en la mujer, por lo cual sus cambios se notan más tardíamente que
          en ellas. Es la llamada andropausia. Al igual que la mujer, el hombre
          mayor necesita más tiempo de estimulación para prepararse para el
          coito, la erección se demora más en conseguirse, y después de realizar
          el coito, pasa más días en que vuelvan los deseos sexuales.
        </Paragraph>
        <Paragraph>
          Tanto en la mujer como en el hombre, la disminución del deseo sexual
          puede relacionarse con la falta de intimidad y de un espacio privado,
          ya sea por convivencia con familia o por vivir en residencias
          destinadas a personas mayores o por el referido desplazamiento de esta
          esfera por la falsa creencia de que los mayores no tenemos sexualidad.
        </Paragraph>
        <Paragraph />
        <Subheading>LA SALUD FÍSICA CUENTA...</Subheading>
        <Paragraph>
          La buena salud favorece relaciones sexuales satisfactorias. Ahora
          bien, a medida que aumenta la edad pueden aparecer enfermedades que
          pudieran limitar la sexualidad.
        </Paragraph>
        <Paragraph>
          Por ejemplo, personas con enfermedades del corazón, pulmonares o
          presión alta no tienen que restringir sus actividades sexuales, pero
          sí adaptarlas a que no le provoquen síntomas desagradables.
        </Paragraph>
        <Paragraph>
          En la artrosis o en las enfermedades neurológicas, si existe alguna
          limitación física que también se debe adaptar la realización de las
          relaciones sexuales al dolor o a la limitación física.
        </Paragraph>
        <Paragraph>
          La diabetes ocasiona con frecuencia trastornos sexuales, mientras más
          controlada esté el azúcar en la sangre, menos disfunción sexual habrá.
          En todos estos ejemplos, con frecuencia se ve la afectación
          psicológica como factor que agrava la respuesta sexual deseada.
        </Paragraph>
        <Paragraph>
          Existen operaciones que pueden influir en el deseo sexual, por
          ejemplo: la extirpación de una parte o de todo un seno en la mujer es
          una de ellas, pero lo es principalmente por actitudes psicológicas de
          imagen o depresión. Biológicamente, esta operación no se relaciona con
          la disminución de los deseos sexuales. En el caso de los hombres, la
          extirpación de la próstata puede disminuir la capacidad sexual, pero
          generalmente el cirujano puede realizar algunos tipos de operaciones
          que preservan bastante la capacidad de erección.
        </Paragraph>
        <Paragraph>
          Los fármacos pueden interferir en el funcionamiento sexual. Si siente
          cambios en sus deseos sexuales por estas razones referidas
          anteriormente. No dude en consultar al respecto a su médico o
          psicólogo.
        </Paragraph>
        <Paragraph />
        <Subheading>¿QUÉ NO DEBO HACER?</Subheading>
        <Paragraph>
          No debemos automedicarnos con estrógenos las mujeres ni con
          testosterona los hombres. Los estrógenos se han asociado a aumento de
          algunos tipos de cáncer en la mujer, lo que no quiere decir que no se
          puedan utilizar, pero debe ser bajo supervisión médica.
        </Paragraph>
        <Paragraph>
          Para los hombres, el uso de testosterona se ha asociado a aumento del
          PSA y del cáncer de próstata. El PSA es un marcador de seguimiento del
          cáncer prostático. La testosterona la indica el médico cuando su
          concentración en sangre esté baja, si no hay otros riesgos.
        </Paragraph>
        <Paragraph>
          Nunca debemos quedarnos con dudas o inquietudes de lo que está
          sucediendo en nuestra vida sexual, los cambios o nuevas
          manifestaciones siempre es bueno consultarlas al especialista.
        </Paragraph>
        <Paragraph>
          No debemos sentir pena, bochorno o susto ante nuestros deseos y
          necesidades de tipo sexuales incluso cuando no tengamos pareja formal
          o matrimonio establecido, o cuando seamos viudos o viudas.
        </Paragraph>
        <Paragraph />
        <Subheading>
          ¿Y QUÉ PUEDO HACER PARA MANTENER MIS RELACIONES SEXUALES?
        </Subheading>
        <Paragraph>
          El coito está muy relacionado con las relaciones sexuales, pero no es
          lo mismo. Son múltiples las variantes para mantener las relaciones
          sexuales en las personas mayores. Primero es necesario conocer que el
          coito no es imprescindible en las entregas sexuales, existen varias
          manifestaciones como juegos eróticos, caricias sexuales,
          masturbaciones, baños juntos, masajes... pero también se han descrito
          variadas posiciones para el coito, que se pueden ensayar acorde a
          limitaciones físicas por enfermedades. Seamos creativos. Lo nuevo
          puede traer emociones nuevas. Los horarios pueden cambiar, si no nos
          sentimos preparados, no busquemos el coito o la relación sexual, puede
          ser frustrante en ese momento. Es muy probable que necesitemos más
          tiempo para la excitación, no tengamos apuro. Debemos buscar lugares
          con intimidad, sin muchas molestias externas, pues la concentración la
          podemos perder más fácilmente. Debemos hablar con nuestra pareja,
          conversar sobre los cambios que sentimos y de cómo podemos modificar
          algunas prácticas para seguir logrando satisfacción mutua.
        </Paragraph>
        <Paragraph>
          Mientras más saludables seamos, mejores relaciones sexuales podremos
          tener. Si tenemos enfermedades crónicas, mientras mejor controladas
          estén, será mejor.
        </Paragraph>
        <Paragraph>
          Finalmente, recuerde que el coito forma parte de la relación sexual
          pero no es imprescindible y que la relación sexual es un complemento
          del amor de pareja que se tiñe de un nuevo color en la pareja mayor
          que vive a plenitud su sexualidad, con nuevas manifestaciones, quizás
          más sosegadas, pero igual de importantes. Si es lo que queremos,
          podemos mantener esta parte en nuestra vida hasta muy avanzada edad.
        </Paragraph>

        <Paragraph />

        <Subheading>AUTOEVALUACIÓN</Subheading>
        <Paragraph>Seleccione la respuesta correcta</Paragraph>

        <Paragraph />

        <AutoEvaluation
          questionID={'19-1'}
          question={'1. La sexualidad:'}
          answers={[
            'Desaparece en las personas mayores.',
            'Se enriquece en la adultez mayor.',
            'Es señal de una desviación de la conducta.',
          ]}
          correct={[1]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'19-2'}
          question={'2. Los cambios en la actividad sexual:'}
          answers={[
            'Son propios de las mujeres mayores.',
            'Son propios de los hombres mayores.',
            'Se ven en ambos sexos con algunas diferencias.',
          ]}
          correct={[2]}
        />

        <Paragraph />

        <AutoEvaluation
          questionID={'19-3'}
          question={'3. La sexualidad en la adultez mayor:'}
          answers={[
            'Lleva coito incluido siempre.',
            'Lleva masajes corporales siempre.',
            'Se puede ver afectada por medicaciones o enfermedades crónicas.',
          ]}
          correct={[2]}
        />

        <MensajesClaves
          messages={[
            'La sexualidad en las personas mayores incluye nuevas manifestaciones.',
            'La respuesta sexual de mujeres y hombres en la adultez mayor no desaparece, cambia.',
            'Las falsas creencias sobre el tema de la sexualidad en la adultez mayor mutilan esta área de sus vidas.',
            'Los cambios en la salud física y mental de las personas mayores inciden en su salud sexual.',
            'Busque ayuda profesional una vez tenga inquietudes sobre su sexualidad.',
          ]}
        />

        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Medicinas')}>
          <Text>{'¡Ojo con las medicinas!'}</Text>
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

export default Sexualidad;
