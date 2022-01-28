/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native-paper';

const Bold = ({children}) => {
  return <Text style={{fontWeight: 'bold'}}>{children}</Text>;
};

export default Bold;
