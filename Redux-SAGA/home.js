import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incrementAction, decrementAction, changeByAmont} from './actions';

const SimpleCounter = ({navigation}) => {
  const count = useSelector(state => state.myReducer.count);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    dispatch(changeByAmont(event.nativeEvent.text));
  };

  return (
    <SafeAreaView>
      <View style={styles.ReduxText}>
        <Text style={styles.ReduxText1}>Redux</Text>
        <Text style={styles.ReduxText2}>SAGA </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.CountText}>{count}</Text>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.BtnStyle}
            onPress={() => dispatch(incrementAction())}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.BtnStyle}
            onPress={() => dispatch(decrementAction())}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.Textinp}
          onSubmitEditing={event => handleInputChange(event)}
        />
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

export default SimpleCounter;
