import React, {useEffect, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import InputWithButton from '../components/InputWithButton';

import AppLogo from '../assests/images/app-logo.png';
import colors from '../constant/colors';
import RNSvgIcon from '../assests/rnsvg/RNSvgIcon';
import {outletRemoveError, searchOutlet} from '../store/outlet/slice';
import {
  outletErrorSelector,
  outletIsLoadingSelector,
  outletsSelector,
} from '../store/outlet/selector';
import LoaderLottie from '../assests/lottie/LoaderLottie';

const validationSchema = Yup.object().shape({
  outletCode: Yup.string()
    .trim()
    .required('Please enter your outletCode')
    .min(2, 'outletCode must contain alteast 2 characters')
    .max(50, 'outletCode must contain atmost 50 characters'),
});

const SearchOutlet = ({navigation}) => {
  const outletRef = useRef();

  const outlets = useSelector(outletsSelector);
  const isLoading = useSelector(outletIsLoadingSelector);
  const error = useSelector(outletErrorSelector);

  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(searchOutlet(validationSchema.cast(values)));
  };

  useEffect(() => {
    outletRef.current.focus();

    return () => dispatch(outletRemoveError());
  }, [dispatch]);

  useEffect(() => {
    if (outlets.length !== 0) {
      navigation.navigate('OutletDetail');
    }
  }, [outlets, navigation]);

  const formik = useFormik({
    initialValues: {
      outletCode: '',
    },
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    dispatch(outletRemoveError());
  }, [formik.values.outletCode, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />

      {/* App Logo */}
      <Image source={AppLogo} style={styles.appLogo} />

      {/* Title */}
      <Text style={styles.titleTxt}>Search Outlet(OL) code</Text>

      {/* search outlet input and button */}
      <InputWithButton
        ref={outletRef}
        leftIconName="search"
        rightIconName="right-arrow"
        placeholder="Search OL Code"
        value={formik.values.outletCode}
        error={formik.errors.outletCode}
        touched={formik.touched.outletCode}
        onChange={formik.handleChange('outletCode')}
        onBlur={() => formik.handleBlur('outletCode')}
        setFieldTouched={() => formik.setFieldTouched('outletCode')}
        onPress={formik.handleSubmit}
      />

      {/* error message if no outlet found */}
      {!isLoading && error ? (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundTitleTxt}>No Outlets results found</Text>
          <Text style={styles.notFoundTxt}>
            Try searching with another OL Code
          </Text>
          <RNSvgIcon name="not-found" />
        </View>
      ) : null}

      {/* displaying loader till api call is going on  */}
      {isLoading && (
        <View style={styles.loaderContainer}>
          <LoaderLottie />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  appLogo: {
    marginTop: 90,
    marginBottom: 70,
    alignSelf: 'center',
  },
  titleTxt: {
    textAlign: 'center',
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  notFoundContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
  },
  notFoundTitleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  notFoundTxt: {
    fontSize: 16,
    color: colors.textSecondary,
    marginVertical: 18,
  },
  loaderContainer: {
    alignItems: 'center',
  },
});

export default SearchOutlet;
