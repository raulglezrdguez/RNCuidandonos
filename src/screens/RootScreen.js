import React, {useEffect, useRef} from 'react';
import {ScrollView, View, StyleSheet, useWindowDimensions} from 'react-native';
import {
  Headline,
  Subheading,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import {usePreferencesDispatch} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoCompartiendo from '../components/LogoCompartiendo';
import LogoPiesPlaza from '../components/LogoPiesPlaza';

const RootScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {height, width} = useWindowDimensions();
  const dispatch = usePreferencesDispatch();

  const scrollView = useRef(null);

  let min = width;
  if (height < min) {
    min = height;
  }
  min = min / 2;

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
      await AsyncStorage.setItem('@sInicio', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sInicio');
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
        <Headline style={styles.bold}>CUIDÁNDONOS</Headline>
        <Subheading style={styles.bold}>PARA CUIDAR MEJOR</Subheading>
        <Headline />
        <LogoCompartiendo stroke={colors.text} width={min} height={min} />
        <Text style={styles.bold}>COMPARTIENDO</Text>
        <Title style={styles.bold}>CAMINOS</Title>
        <Text>DE INSERCIÓN Y CUIDADO</Text>
        <Headline />
        <LogoPiesPlaza stroke={colors.text} width={min} height={min} />
        <Text style={[styles.bold, styles.italic]}>PIES-PLAZA</Text>
        <Text style={styles.italic}>PROGRAMA INTEGRAL de</Text>
        <Text style={styles.italic}>ENVEJECIMIENTO SALUDABLE</Text>
        <Headline />
        <TouchableRipple
          style={[styles.link, {borderColor: colors.text}]}
          onPress={() => navigate('Legal')}>
          <Text>{'Página legal'}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  link: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
});

export default RootScreen;
