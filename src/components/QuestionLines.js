/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Hr from './Hr';

import QuestionLine from './QuestionLine';

const QuestionLines = ({firstQuestionID, questions}) => {
  let qID = firstQuestionID - 1;
  const quests = questions.map((q, i) => {
    qID++;
    return (
      <View key={i}>
        <QuestionLine key={qID} questionID={qID} question={q} />
        <Hr />
      </View>
    );
  });

  return <>{quests}</>;
};

export default QuestionLines;

const styles = StyleSheet.create({});
