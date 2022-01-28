/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const Hr = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        borderBottomColor: colors.text,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 5,
        alignSelf: 'stretch',
      }}
    />
  );
};

export default Hr;
