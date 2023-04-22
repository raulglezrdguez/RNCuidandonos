/* eslint-disable prettier/prettier */
import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {
  Headline,
  Text,
  TouchableRipple,
  useTheme,
  Paragraph,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bold from '../components/Bold';

const Prologo = ({navigation}) => {
  const {colors} = useTheme();

  const dispatch = usePreferencesDispatch();

  const scrollView = useRef(null);

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
      await AsyncStorage.setItem('@sPrologo', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sPrologo');
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
          onPress={() => navigate('Legal')}>
          <Text>{'Página legal'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>PRÓLOGO</Headline>
        <Headline />
        <Paragraph>
          <Bold>C</Bold>ada vez está más presente en nuestras vidas el cuidar a
          otra persona. Año tras año, más personas alcanzan altas edades, y
          aunque la mayoría de ellas son autónomas y válidas, con los años
          aumenta la posibilidad de ser dependiente.
        </Paragraph>
        <Paragraph>
          El perfil del/ la cuidador/a en Cuba y en muchos otros países es:
          mujer, de más de 50 años, familiar de la persona que recibe el cuidado
          (casi siempre hija o esposa). Estas personas (cuidadoras en lo
          adelante) reciben una sobrecarga física y emocional al ofrecer los
          cuidados. Al mismo tiempo están tan expuestas como las que no cuidan
          (o quizás más por preocuparse más de la salud de la persona que cuidan
          que por la de ellos mismos) a sufrir hipertensión, padecer del
          corazón, de artrosis, diabetes, colesterol alto, etc.
        </Paragraph>
        <Paragraph>
          Muchas veces las cuidadoras vuelcan todo su empeño en cuidar a la
          persona dependiente, pero se olvidan un poco de cuidar su salud. Estar
          en forma no solo es bueno para la cuidadora, sino también permite
          cuidar mejor.
        </Paragraph>
        <Paragraph>
          Existen múltiples libros, folletos, videos, páginas en internet,
          cursos, que explican cómo manejar la sobrecarga del cuidador y cómo
          cuidar mejor, pero existe menos información de cómo deben cuidarse las
          personas que cuidan.
        </Paragraph>
        <Paragraph>
          Con lo escrito a continuación tratamos de que las cuidadoras adquieran
          conocimientos de autocuidado, es decir, que se cuiden mejor a sí
          mismas. Escrito con un lenguaje sencillo, incluye preguntas al final
          de cada capítulo, que le permitirá al lector autoevaluarse.
        </Paragraph>
        <Paragraph>
          Los proyectos <Bold>Compartiendo Caminos de Inserción y Cuidado</Bold>{' '}
          y el{' '}
          <Bold>
            Programa Integral de Envejecimiento Saludable en Plaza de la
            Revolución
          </Bold>{' '}
          (PIES Plaza), ambos co-financiados por la Unión Europea y la
          diputación Gipuzkoako Foru Aldundia con la participación de las ONGs
          We World GVC, Mundubat, la Sociedad Cubana de Gerontología y Geriatría
          y la Oficina del Historiador de La Habana, aunaron sus esfuerzos para
          contribuir con esta publicación a mejorar la salud de las personas que
          cuidan a otras personas.
        </Paragraph>
        <Paragraph>Esperamos les sea de utilidad.</Paragraph>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('TerceraEdad')}>
          <Text>{'La tercera edad...sus retos'}</Text>
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

export default Prologo;
