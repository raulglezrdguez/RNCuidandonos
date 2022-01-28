import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from 'react-native-reanimated';
import {Text, TouchableRipple, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextButton = ({
  onPress = () => {},
  disabled = false,
  text = 'Ok',
  iconStart = '',
  iconEnd = '',
}) => {
  const {colors} = useTheme();
  const scale = useSharedValue(1);
  const color = useSharedValue(colors.primary);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: color.value,
      transform: [{scale: scale.value}],
    };
  });

  let iconStartContent = null;
  let iconEndContent = null;
  if (iconStart) {
    iconStartContent = (
      <MaterialCommunityIcons
        name={iconStart}
        color={colors.accent}
        size={24}
      />
    );
  }
  if (iconEnd) {
    iconEndContent = (
      <MaterialCommunityIcons name={iconEnd} color={colors.accent} size={24} />
    );
  }

  return (
    <Animated.View
      style={[
        styles.containerStyle,
        {backgroundColor: colors.primary},
        animatedStyle,
      ]}>
      <TouchableRipple
        style={styles.buttonStyle}
        onPress={() => {
          scale.value = withSequence(withSpring(1.2), withSpring(1));
          color.value = withSequence(
            withSpring(colors.accent),
            withSpring(colors.primary),
          );
          onPress();
        }}
        disabled={disabled}>
        <View style={styles.contentStyle}>
          {iconStartContent}
          <Text style={{color: colors.text}}>{text}</Text>
          {iconEndContent}
        </View>
      </TouchableRipple>
    </Animated.View>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  containerStyle: {
    // width: '50%',
    height: 60,
    borderRadius: 5,
    marginVertical: 12,
  },
  buttonStyle: {
    // width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  contentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
