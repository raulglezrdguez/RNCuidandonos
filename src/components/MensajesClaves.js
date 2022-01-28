/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

import Bold from './Bold';

const AutoEvaluation = ({messages}) => {
  const {colors} = useTheme();

  const msgs = messages.map((m, i) => {
    return (
      <View key={i} style={styles.line}>
        <Text style={{color: colors.text}}>
          <Bold>{i + 1}. </Bold>
          {m}
        </Text>
      </View>
    );
  });

  return (
    <View style={[styles.container, {borderColor: colors.accent}]}>
      <Bold>MENSAJES CLAVES</Bold>

      {msgs}
    </View>
  );
};

export default AutoEvaluation;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
    width: '100%',
  },
});
