/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableRipple, Switch, useTheme} from 'react-native-paper';

const QuestionLine = ({questionID, question}) => {
  const [switchValue, setSwitchValue] = useState(false);
  const {colors} = useTheme();

  const onToggleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  let textColor = colors.text;
  if (switchValue) {
    textColor = colors.primary;
  }

  return (
    <TouchableRipple onPress={() => onToggleSwitch()}>
      <Text style={{color: textColor}}>
        <Switch value={switchValue} onValueChange={() => onToggleSwitch()} />
        {question}
      </Text>
    </TouchableRipple>
  );
};

export default QuestionLine;

const styles = StyleSheet.create({});
