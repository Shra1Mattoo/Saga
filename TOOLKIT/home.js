import React from 'react';
import {View, Text, SafeAreaView, Button,StyleSheet,TouchableOpacity,} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './slices';

const Home = ({navigation}) => {
  const c = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
    <View style={styles.ReduxText}>
      <Text style={styles.ReduxText1}>Redux</Text>
      <Text style={styles.ReduxText2}>THUNK </Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.CountText}>{c}</Text>
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          style={styles.BtnStyle}
          onPress={() => dispatch(increment())}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnStyle}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
      </View>
      
      <Button
        title="Data"
        onPress={() => {
          navigation.push('ImagesPage');
        }}
      />
    </View>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  CountText: {
    textAlign: 'center',
    marginTop: 230,
    fontSize: 60,
  },
  plus: {
    marginTop: 10,
    fontSize: 60,
    color: 'black',
    width: 250,
    textAlign: 'center',
    backgroundColor: 'green',
  },
  minus: {
    marginTop: 5,
    fontSize: 60,
    color: 'black',
    width: 250,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  ReduxText: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},
  ReduxText1: {
    fontSize: 45,
},
ReduxText2: {
    fontSize: 16,
    color: '#3a86ff',
},
});
export default Home;
