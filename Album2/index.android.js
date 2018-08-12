/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { /*Component*/ } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  //Text,
  View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
    <View style={{ flex: 1 }} >
<Header getHeader="Album" />
<AlbumList />

</View>
  );
};
AppRegistry.registerComponent('Album2', () => App);
