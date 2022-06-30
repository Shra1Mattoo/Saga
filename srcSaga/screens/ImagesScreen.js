import React, {useEffect, useState} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Image} from 'react-native';
import {getImagesFetch} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const {width} = Dimensions.get('screen');
const imgStyleOneWidth = (width / 2) * 0.99;
const imgStyleTwoWidth = (width / 3) * 0.99;
const ImagesScreen = () => {
  const images = useSelector(state => state.myReducer.images);
  const dispatch = useDispatch();

  let count = 0;

  useEffect(() => {
    dispatch(getImagesFetch());
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {images.map(img => {
          if (count == 0 || count == 1) {
            count = count + 1;
            return (
              <Image
                key={uuidv4()}
                style={styles.imgViewOne}
                source={{uri: img.download_url}}
              />
            );
          } else {
            count = count + 1;
            if (count == 5) {
              count = 0;
            }

            return (
              <Image
                key={uuidv4()}
                style={styles.imgViewTwo}
                source={{uri: img.download_url}}
              />
            );
          }
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgViewOne: {
    height: 250,
    width: imgStyleOneWidth,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  imgViewTwo: {
    height: 110,
    width: imgStyleTwoWidth,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default ImagesScreen;
