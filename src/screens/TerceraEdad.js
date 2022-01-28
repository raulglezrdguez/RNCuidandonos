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
import Fig1 from '../components/Fig1';

const TerceraEdad = ({navigation}) => {
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
      await AsyncStorage.setItem('@sTerceraEdad', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sTerceraEdad');
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
          onPress={() => navigate('Prologo')}>
          <Text>{'Prólogo'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>LA TERCERA EDAD...SUS RETOS</Headline>
        <Paragraph>Lourdes Baldoquín de la Peña</Paragraph>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>uba es un país con un 20% de ancianidad y una
          expectativa de vida cercana a los 79 años, la natalidad sigue siendo
          baja y como promedio a cada joven cubano le corresponde atender y
          velar por dos ancianos de su propia familia.
        </Paragraph>
        <Paragraph>
          Ese contexto va acompañado de los retos y proyectos de vida que se
          forjan en la edad, en que la familia joven, está trazando su propio
          destino, y la menos joven, a veces rayando los inicios de la tercera
          edad, le corresponde entonces atender a personas más envejecidas.
        </Paragraph>
        <Paragraph>
          No puede convertirse en un conflicto que nuestros padres, tíos o
          abuelos, envejezcan, es todo un reto, que se debe convertir en una
          victoria el poder tener a una familia numerosa y contar con la
          experiencia, el amor y los cuidados que generalmente los ancianos le
          proporcionan a la familia menuda, pero ¿qué podemos hacer cuando día a
          día ellos se encaminan a otros rumbos y ese anciano se queda la mayor
          parte del día solo?, ¿qué podemos hacer cuándo ese anciano lleva un
          cuidador por su estado de salud?, ¿estamos preparados para atender a
          la tercera edad?, ¿solo me debo preocupar de sus enfermedades físicas,
          que tomen sus pastillas, que visiten al médico?
        </Paragraph>
        <Paragraph>
          Hay muchas más interrogantes, la mayor parte de sus cuidadores asumen
          un reto para el cual no están preparados y se agotan, no propiciamos
          el apoyo que puede dar el propio anciano, si descuidamos que es un ser
          social y que el cuidado de mantener activa su estado cognitivo es tan
          importante como la de su salud física.
        </Paragraph>
        <Paragraph />
        <Subheading>SEGÚN PARÁMETROS DE SALUD, ELLOS NOS DICEN QUE:</Subheading>
        <Paragraph>
          Si se cuida la funcionalidad del anciano se evita uno de los
          principales riesgos: la inactividad y para eso hay que cuidar el
          bienestar: físico, psicológico y social.
        </Paragraph>
        <Paragraph>
          Llegar a la tercera edad lleva implícita la pérdida paulatina de
          capacidades tanto físicas como motoras, los estilos de vida, la
          alimentación adecuada, las actividades sociales, el ambiente familiar,
          entre otros, ayuda a que ese tránsito, que es inevitable y progresivo,
          sea de forma más severa o no y que lleve la presencia de un cuidador,
          permanente o parcial.
        </Paragraph>
        <Paragraph>
          Por lo que es importante cuidar los tres elementos que anteriormente
          nombramos, cuidar y proyectarnos para que tengan bienestar:{' '}
          <Bold>físico, psicológico y social</Bold>.
        </Paragraph>
        <Paragraph>
          En nuestra entidad trabajamos con la tercera edad fundamentalmente en
          ancianos como:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>1.</Bold> Persona anciana, pero con autonomía en la mayoría de
          sus actividades diarias.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>2.</Bold> Persona anciana que ya no tiene autonomía en la
          mayoría de sus actividades diarias y necesita un cuidador permanente.
        </Paragraph>
        <Paragraph>
          En el caso de las personas ancianas con autonomía, no lo podemos
          descuidar, pues el anciano necesita tanto cuidar sus enfermedades
          físicas como tener un proyecto de vida que incluya el bienestar social
          y afectivo y para eso existen los Centros de Días de la Tercera Edad o
          Círculos de Abuelos.
        </Paragraph>
        <Paragraph>
          Los ancianos que acuden a este programa, generalmente se distinguen en
          ellos, dos actitudes muy distintivas, que son:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Generalmente tienen una familia que los reconoce, pero
          sin pareja afectiva por viudez o divorcio.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Que siente necesidad de atención social porque:
          trabajó, creó una familia que ya creció y no requiere tanto de su
          esfuerzo personal y se siente “desocupado”.
        </Paragraph>
        <Paragraph>
          De perder el estímulo social y cognitivo, puede convertirse en un
          anciano dependiente y la depresión sea un componente de deterioro.
        </Paragraph>
        <Paragraph>
          Nuestro trabajo sociocultural parte de estrategias y programas que se
          elaboran partiendo de estos objetivos, los cuales deben ser dinámicos,
          estimulantes y variados.
        </Paragraph>
        <Paragraph>
          Par ello, se cuenta con un grupo de colaboradores profesionales que
          ofrecen este servicio gratuito y que evalúan anualmente sus
          resultados.
        </Paragraph>
        <Paragraph>
          En el caso del anciano dependiente, la característica del que
          atendemos institucionalmente es:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> La familia está ausente o casi ausente.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Tiene dependencia casi siempre motora.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Tiene poco estimulo cognitivo, viven con “las alas
          caídas”.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> No sienten la necesidad de socializar, pueden
          permanecer callados mucho tiempo.
        </Paragraph>
        <Fig1 stroke={colors.text} width={min} height={min} />
        <Paragraph>Es un reto muy fuerte para sus cuidadoras.</Paragraph>
        <Paragraph>
          La presencia de un cuidador se hace necesaria y tanto para el cuidador
          familiar o el cuidador institucional, es una labor muy desgastante en
          el plano físico y mental.
        </Paragraph>
        <Paragraph>
          En el caso de ser familiar el cuidador, el vínculo afectivo no se
          puede romper y esto puede hacer más doloroso el cuidado.
        </Paragraph>
        <Paragraph>
          Pero tienen que ser capaces, en ambos casos, de lograr este bienestar
          afectivo y sobre todo hacer acciones que los mantengan activos.
        </Paragraph>
        <Paragraph>
          <Bold>Recomendamos</Bold>: promover actividades acordes a su estado
          físico mental, de más ligeras a más activas:
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> La charla diaria de cosas cotidianas o de pasajes de su
          vida; <Bold>oirlos es importante</Bold>.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Oír música.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Leer pasajes pequeños de libros o poesías.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Promover los juegos de mesas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Incentivar la participación de la familia.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Limitar el uso de la televisión a horarios específicos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Incentivarlos de que participen en talleres.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Conocer su vida laboral y “utilizarlo” en bien de los
          demás.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Realizar excursiones cortas.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Visitas a museos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Participación en actividades culturales.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> La gimnasia sistemática.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Hablarles siempre con voz suave, pero autoritaria,
          cuando sea el caso.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Promover la risa.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Tratar de que bailen con la cuidadora o entre ellos.
        </Paragraph>
        <Paragraph style={{marginHorizontal: 16}}>
          <Bold>.</Bold> Tener en cuenta sus pequeñas diferencias.
        </Paragraph>
        <Paragraph>
          <Bold>
            El verdadero mal de la vejez no es el debilitamiento del cuerpo,
            sino la indiferencia del alma
          </Bold>
          .
        </Paragraph>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('ComoEnvejece')}>
          <Text>{'¿Cómo envejece el mundo? Y nosotros'}</Text>
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

export default TerceraEdad;
