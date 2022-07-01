import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import RNSvgIcon from '../assests/rnsvg/RNSvgIcon';
import colors from '../constant/colors';

const InputWithButton = React.forwardRef((props, ref) => {
  const {
    leftIconName,
    rightIconName,
    placeholder,
    value,
    error,
    touched,
    onChange,
    onBlur,
    setFieldTouched,
    onPress,
  } = props;
  console.log({error, value});

  const hasError = value === '' || error;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          touched && styles.touchedInputContainer,
        ]}>
        <View style={styles.searchIcon}>
          <RNSvgIcon name={leftIconName} />
        </View>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={colors.disabled}
          style={styles.textInput}
          value={value}
          onChangeText={text => onChange(text)}
          onBlur={() => {
            setFieldTouched();
            onBlur();
          }}
          onSubmitEditing={onPress}
        />
      </View>

      {hasError ? (
        <View style={[styles.button, styles.disabled]}>
          <RNSvgIcon name={rightIconName} />
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <RNSvgIcon name={rightIconName} />
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 8,
  },
  touchedInputContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  searchIcon: {
    padding: 18,
    paddingRight: 10,
  },
  textInput: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  button: {
    marginLeft: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
});

export default InputWithButton;
