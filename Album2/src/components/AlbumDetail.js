import React from 'react';
import {
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  return (
    <Card >
      <CardSection>
      <View style={styles.thumbnailViewStyle}>
        <Image
        style={styles.thumbnailStyle}
        source={{ uri: props.album.thumbnail_image }}
        />
      </View>

      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}> {props.album.title} </Text>
        <Text> {props.album.artist} </Text>
      </View>

      </CardSection>

      <CardSection>
      <Image
        style={styles.imageStyle}
        source={{ uri: props.album.image }}
      />
      </CardSection>

      <CardSection>
      <Button onPress={() => Linking.openURL(props.album.url)}>
        <Text> Buy Now </Text>
      </Button>
      </CardSection>

</Card>
);
};

const styles = {
  headerContentStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },

thumbnailViewStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 10,
  marginRight: 10
},
headerTextStyle: {
  fontSize: 18.1
}
};

export default AlbumDetail;
