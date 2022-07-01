import {useFormik} from 'formik';
import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import AppLogo from '../assests/images/app-logo.png';
import colors from '../constant/colors';
import {login} from '../store/auth/slice';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required('Please enter your username')
    .min(3, 'Username must contain alteast 3 characters')
    .max(50, 'Username must contain atmost 50 characters'),
  password: Yup.string()
    .trim()
    .required('Please enter your Password')
    .min(4, 'Password must contain alteast 4 characters')
    .max(50, 'Username must contain atmost 50 characters'),
});

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const focusPass = () => {
    passwordRef.current.focus();
  };

  const onSubmit = values => {
    dispatch(login(validationSchema.cast(values)));
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.marHor}>
        {/* App Logo */}
        <Image source={AppLogo} style={styles.appLogo} />

        {/* Login container */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginTxt}>Login</Text>

          <CustomInput
            ref={userNameRef}
            value={formik.values.username}
            error={formik.errors.username}
            touched={formik.touched.username}
            onChange={formik.handleChange('username')}
            onBlur={() => formik.handleBlur('username')}
            setFieldTouched={() => formik.setFieldTouched('username')}
            label="Username"
            returnKeyType="next"
            onSubmitEditing={focusPass}
          />

          <CustomInput
            ref={passwordRef}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            onChange={formik.handleChange('password')}
            onBlur={() => formik.handleBlur('password')}
            setFieldTouched={() => formik.setFieldTouched('password')}
            label="Password"
            secureTextEntry
            returnKeyType="done"
            onSubmitEditing={formik.handleSubmit}
          />
        </View>

        <CustomButton
          disabled={
            Object.keys(formik.errors).length !== 0 ||
            Object.keys(formik.touched).length === 0
          }
          onPress={formik.handleSubmit}
          label="Login"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  marHor: {
    paddingHorizontal: 16,
  },
  appLogo: {
    marginVertical: 90,
    alignSelf: 'center',
  },
  loginContainer: {
    marginBottom: 36,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 8,
  },
  loginTxt: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});

export default Login;
