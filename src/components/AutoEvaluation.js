/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableRipple, Switch, useTheme} from 'react-native-paper';

import Bold from './Bold';

const AutoEvaluation = ({questionID, question, answers, correct}) => {
  const [switchValues, setSwitchValues] = useState([false, false, false]);
  const {colors} = useTheme();

  const onToggleSwitch = index => {
    const sw = [...switchValues];
    sw[index] = !sw[index];
    setSwitchValues(sw);
  };

  let ok = 0; // nose
  switchValues.forEach((v, i) => {
    if (v) {
      if (!correct.includes(i)) {
        ok = 1; //error
      } else if (ok === 0) {
        ok = 2; //respuesta correcta
      }
    }
  });

  let textColor = colors.text;
  let respuesta = 'Pregunta sin responder';
  if (ok === 1) {
    textColor = colors.error;
    respuesta = 'Respuesta incorrecta';
  } else if (ok === 2) {
    textColor = colors.primary;
    respuesta = 'Respuesta correcta';
  }

  const ans = answers.map((a, i) => {
    // const k = (Math.random() + 1).toString(36).substring(7);
    return (
      <TouchableRipple
        key={i}
        style={styles.line}
        onPress={() => onToggleSwitch(i)}>
        <Text style={{color: textColor}}>
          <Switch
            value={switchValues[i]}
            onValueChange={() => onToggleSwitch(i)}
          />
          {a}
        </Text>
      </TouchableRipple>
    );
  });

  // const k = (Math.random() + 1).toString(36).substring(7);
  return (
    <View style={styles.container}>
      <Bold>{question}</Bold>
      <Text style={{color: textColor}}>{respuesta}</Text>
      {ans}
    </View>
  );
};

export default AutoEvaluation;

const styles = StyleSheet.create({
  container: {marginVertical: 15},
  line: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
