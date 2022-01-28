/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native-paper';

const Italic = ({children}) => {
  return <Text style={{fontStyle: 'italic'}}>{children}</Text>;
};

export default Italic;
