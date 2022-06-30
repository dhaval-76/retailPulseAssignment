import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import colors from '../constant/colors';

const CustomInput = React.forwardRef((props, ref) => {
  const {
    value,
    error,
    touched,
    onChange,
    onBlur,
    setFieldTouched,
    label,
    secureTextEntry,
    ...inputProps
  } = props;

  const hasError = error && touched;

  return (
    <View style={styles.container}>
      <Text style={styles.labelTxt}>{label}</Text>
      <TextInput
        ref={ref}
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={text => onChange(text)}
        onBlur={() => {
          setFieldTouched();
          onBlur();
        }}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorTxt}>{error}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  labelTxt: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  textInput: {
    marginTop: 12,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.disabled,
    fontSize: 16,
    color: colors.textPrimary,
  },
  errorInput: {
    borderColor: colors.error,
  },
  errorTxt: {
    marginTop: 6,
    color: colors.error,
    fontSize: 12,
  },
});

export default CustomInput;
