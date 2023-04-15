/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
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

const Legal = ({navigation}) => {
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
      await AsyncStorage.setItem('@sLegal', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sLegal');
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
          onPress={() => navigate('Saludable')}>
          <Text>{'Envejecimiento saludable'}</Text>
        </TouchableRipple>
        <Headline style={styles.bold}>Página Legal</Headline>
        <Headline />
        <Paragraph>
          Este material se ha reproducido con fondos de los proyectos
          Compartiendo Caminos de Inserción y Cuidado y el Programa Integral de
          Envejecimiento Saludable en Plaza de la Revolución (PIES Plaza), ambos
          co-financiados por la Unión Europea y la diputación Gipuzkoako Foru
          Aldundia.
        </Paragraph>
        <Paragraph>
          <Bold>Autor</Bold>
        </Paragraph>
        <Paragraph>
          Jesús Esteban Menéndez Jiménez Médico geriatra CITED
        </Paragraph>
        <Paragraph>
          <Bold>Coautores</Bold>
        </Paragraph>
        <Paragraph>
          • Roxana Mato Díaz Licenciada en Psicología de la Salud CITED
        </Paragraph>
        <Paragraph>
          • Roxana Celia Riscart Menéndez Licenciada en Psicología CITED
        </Paragraph>
        <Paragraph>
          • Mintzú Sotomayor Álvarez Licenciada en Rehabilitación Psicosocial
          CITED
        </Paragraph>
        <Paragraph>
          • Esther Ruiz Bofill Directora de Asuntos Humanitarios OHcH
        </Paragraph>
        <Paragraph>
          • Lourdes de la C. Menéndez Dueñas Responsable de las Residencias
          Internas OHcH
        </Paragraph>
        <Paragraph>
          • Lourdes Baldoquín de la Peña Especialista Subdirección de Asuntos
          Humanitarios OHcH
        </Paragraph>
        <Paragraph>
          <Bold>Revisión técnica</Bold>
        </Paragraph>
        <Paragraph>
          Jesús Esteban Menéndez Jiménez Médico geriatra CITED
        </Paragraph>
        <Paragraph>
          <Bold>Fotografías</Bold>
        </Paragraph>
        <Paragraph>
          Autores y archivos de las instituciones participantes
        </Paragraph>
        <Paragraph>
          <Bold>Ilustraciones</Bold>
        </Paragraph>
        <Paragraph>Eduardo Martínez Ríos</Paragraph>
        <Paragraph>
          <Bold>Edición, diseño editorial, diagramación y arte final:</Bold>
        </Paragraph>
        <Paragraph>Eduardo Martínez Oliva</Paragraph>
        <Paragraph> </Paragraph>
        <Paragraph>
          La presente publicación ha sido elaborada con el apoyo financiero de
          la Unión Europea. Su contenido es responsabilidad exclusiva de las y
          los autores y no necesariamente refleja los puntos de vista de la
          Unión Europea.
        </Paragraph>
        <Paragraph>© Sociedad Cubana de Gerontología y Geriatría</Paragraph>
        <Paragraph>© OHcH</Paragraph>
        <Paragraph>CUIDÁNDONOS para cuidar mejor</Paragraph>
        <Paragraph>Primera edición: 2020</Paragraph>
        <Paragraph>ISBN: 978–959–7226–65–9</Paragraph>
        <Paragraph> </Paragraph>
        <Paragraph>
          <Bold>Equipo de desarrollo para dispositivos móviles Android.</Bold>
        </Paragraph>
        <Paragraph>
          • Raúl González Rodríguez. Ingeniero Físico Nuclear. Master en
          informática aplicada.
        </Paragraph>
        <Paragraph>
          • Eduardo Alfredo Triana Alvarez MSc. Licenciado en psicología. Master
          en nuevas tecnologías para la educación y longevidad satisfactoria.
        </Paragraph>
        <Paragraph>
          • Teresa Reyes Camejo. Médico especialista en Medicina General
          Integral. Master en nuevas tecnologías para la educación y longevidad
          satisfactoria.
        </Paragraph>
        <Paragraph>CUIDÁNDONOS para cuidar mejor</Paragraph>
        <Paragraph>Primera edición: 2022</Paragraph>
        <Paragraph>ISBN: 978–959–72269–32–8</Paragraph>
        <Paragraph> </Paragraph>
        <Image
          source={require('../../assets/acuario.png')}
          resizeMode="contain"
          style={{width: min / 2, height: min / 2}}
        />

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

export default Legal;
