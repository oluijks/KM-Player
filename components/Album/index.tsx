import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { Album } from '../../types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type AlbumProps = {
  album: Album;
}

const AlbumComponent = (props: AlbumProps) => {

  const onPress = () => {

  }

  return(
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text} >{props.album.artistsHeadline}</Text>
      </View>
      </TouchableWithoutFeedback>
  )
}

export default AlbumComponent;