/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {
  Drawer,
  Paragraph,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import Animated from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TapButton from './TapButton';

import {
  usePreferencesState,
  usePreferencesDispatch,
} from '../context/preferences';

import AsyncStorage from '@react-native-async-storage/async-storage';

const DrawerContent = props => {
  //   const {progress, navigation, state} = props;
  const progress = useDrawerProgress();
  const {navigation} = props;

  const [errors] = useState({});

  const {colors} = useTheme();
  const {theme, chapter} = usePreferencesState();
  const dispatch = usePreferencesDispatch();

  useEffect(() => {
    if (chapter && chapter !== 'undefined') {
      navigation.navigate(chapter);
    }
  }, [chapter]);

  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const storagePreferences = async () => {
    try {
      await AsyncStorage.setItem('@theme', theme);
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = async c => {
    try {
      await AsyncStorage.setItem('@chapter', c);
      dispatch({type: 'SET_CHAPTER', payload: c});
      // navigation.navigate(c);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View
        style={[
          styles.drawerContent,
          {
            backgroundColor: colors.surface,
            opacity,
          },
        ]}>
        <Drawer.Section title={'Preferencias'}>
          <TouchableRipple onPress={() => dispatch({type: 'TOGGLE_THEME'})}>
            <View style={styles.preferenceTheme}>
              <Text>{'Tema'}</Text>
              <MaterialCommunityIcons
                name={
                  theme === 'dark' ? 'moon-waning-crescent' : 'weather-sunny'
                }
                color={colors.accent}
                size={24}
              />
              <View pointerEvents="none">
                <Switch value={theme === 'dark'} />
              </View>
            </View>
          </TouchableRipple>

          {errors.general ? (
            <Paragraph
              style={{
                borderRadius: 5,
                borderColor: colors.error,
                borderWidth: 1,
                color: colors.error,
                marginVertical: 10,
                padding: 10,
              }}>
              {errors.general}
            </Paragraph>
          ) : null}

          <View style={styles.button}>
            <TapButton onPress={storagePreferences} icon="content-save" />
          </View>
        </Drawer.Section>

        <Drawer.Section title={'Contenido'}>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Inicio')}>
            <Text>{'Inicio'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Prologo')}>
            <Text>{'Prólogo'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('TerceraEdad')}>
            <Text>{'La tercera edad...sus retos'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('ComoEnvejece')}>
            <Text>{'¿Cómo envejece el mundo?...Y nosotros'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('EnvejecimientoSentidos')}>
            <Text>{'El envejecimiento de los sentidos'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('MeCaigo')}>
            <Text>{'Cuidado que si me caigo...'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('DurmiendoMal')}>
            <Text>{'Estoy durmiendo mal...'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Alimentarnos')}>
            <Text>{'¿Qué es alimentarnos sanamente?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Triste')}>
            <Text>{'Estoy triste, pero... ¿Estoy deprimido?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('IrAlBano')}>
            <Text>{'Me cuesta trabajo ir al baño'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('LosPies')}>
            <Text>{'Tengo dolor en los pies'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Corazon')}>
            <Text>{'¿Estoy enfermo del corazón?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Diabetes')}>
            <Text>{'¿Qué es la diabetes y cómo manejarla?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('PresionAlta')}>
            <Text>{'¿Qué debo saber de la presión alta?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Cancer')}>
            <Text>{'¿Qué debemos saber sobre el cáncer?'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Isquemia')}>
            <Text>{'La isquemia cerebral'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Osteoporosis')}>
            <Text>{'¿Cómo andan mis huesos? La osteoporosis'}</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Prostata')}>
            <Text>
              {
                'Me estoy levantando a orinar por la noche. ¿Tendré problemas en la próstata?'
              }
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.link, {borderColor: colors.text}]}
            onPress={() => navigate('Ejercicios')}>
            <Text>{'¿Yo puedo hacer ejercicios físicos?'}</Text>
          </TouchableRipple>
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  preferenceTheme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
  },
  link: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 2,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
