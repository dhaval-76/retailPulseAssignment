import React, {useCallback, useEffect} from 'react';
import {
  BackHandler,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CustomButton from '../components/CustomButton';
import OutletInfoListItem from '../components/OutletInfoListItem';

import RNSvgIcon from '../assests/rnsvg/RNSvgIcon';
import colors from '../constant/colors';
import {outletsSelector} from '../store/outlet/selector';
import {removeOutlet} from '../store/outlet/slice';

const OutletDetail = ({navigation}) => {
  const outlets = useSelector(outletsSelector);

  const dispatch = useDispatch();

  const onBackPress = useCallback(() => {
    dispatch(removeOutlet());
    navigation.goBack();

    return true;
  }, [navigation, dispatch]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );

    return () => backHandler.remove();
  }, [onBackPress]);

  const onVisitPress = useCallback(
    item => {
      navigation.navigate('VisitOutlet', {outlet: item});
    },
    [navigation],
  );

  const renderOutletList = useCallback(
    ({item}) => (
      <View style={styles.marVer}>
        <View style={styles.outletList}>
          <OutletInfoListItem title="OL Name" value={item.outlet_name} />
          <OutletInfoListItem title="Town Code" value={item.town_code} />
          <OutletInfoListItem title="Route Code" value={item.route_code} />
          <OutletInfoListItem title="OL Code" value={item.outlet_code} />
        </View>

        <View style={styles.marHor}>
          <CustomButton
            label="Start Visit"
            onPress={() => onVisitPress(item)}
          />
        </View>
      </View>
    ),
    [onVisitPress],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <RNSvgIcon name="left-arrow" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={outlets}
        keyExtractor={item => item.outlet_id}
        renderItem={renderOutletList}
        ListFooterComponent={() => <View style={styles.marVer} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    backgroundColor: colors.wihte,
    padding: 15,
  },
  marVer: {
    marginVertical: 15,
  },
  outletList: {
    borderBottomWidth: 1,
    borderColor: colors.disabled,
  },
  marHor: {
    marginHorizontal: 16,
  },
});

export default OutletDetail;
