import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import colors from '../constant/colors';
import {outletsSelector} from '../store/outlet/selector';
import {removeOutlet} from '../store/outlet/slice';

const OutletDetail = () => {
  const outlets = useSelector(outletsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(removeOutlet());
  }, [dispatch, outlets]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>OutletDetail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});

export default OutletDetail;
