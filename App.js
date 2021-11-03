
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';   
import FaceBook from './screens/fb';
import Instagram from './screens/ig';

export default class App extends React.Component() {
  render(){
  return (
    <AppContainer/>

  );
}}

const tabNavigator = createBottomTabNavigator({
  FaceBook_Page:{screens:FaceBook},
  Instagram_Page:{screens:Instagram},
  
});

const AppContainer = createAppContainer(tabNavigator);
