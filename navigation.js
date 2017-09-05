/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighLight
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import MainScreen from "./screens/MainScreen";
import ProfilScreen from "./screens/ProfilScreen";

const App = StackNavigator({
  Main : {screen: MainScreen},
  Profile: {screen: ProfilScreen},
});

export default App;
