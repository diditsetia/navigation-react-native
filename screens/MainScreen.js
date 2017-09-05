import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighLight,
  Button,
} from 'react-native';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Raisa',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Mantan"
        onPress={() =>
          navigate('Profile', { name: 'Didit' })
        }
      />
    );
  }
}
