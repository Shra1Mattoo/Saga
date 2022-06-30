import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  incrementAction,
  decrementAction,
  changeByAmount,
} from '../redux/actions';
import {store} from '../redux/store';

const SimpleCounter = () => {
  const count = useSelector(state => state.myReducer.count);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    dispatch(changeByAmount(event.nativeEvent.text));
  };
  const state = store.getState();
  console.log('herman:::::', state);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Counter: {count}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => dispatch(incrementAction())}>
          <Text style={{fontSize: 30, color: '#454851'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{padding: 20}}
          onPress={() => dispatch(decrementAction())}>
          <Text style={{fontSize: 30, color: '#454851'}}>-</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          justifyContent: 'center',
          backgroundColor: '#95d7ae',
          padding: 20,
          borderRadius: 25,
          width: 160,
          fontSize: 16,
          textAlign: 'center',
        }}
        onSubmitEditing={event => handleInputChange(event)}
        keyboardType="numeric"
        placeholder="Change Amount"
        placeholderTextColor={'#454851'}
      />
    </View>
  );
};

export default SimpleCounter;
