import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighLight,
  Button,
} from 'react-native';

export default class ProfilScreen extends Component {
static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
});

render() {
   const { goBack } = this.props.navigation;
   return (
     <Button
       title="Mantan Terindah"
       onPress={() => goBack()}
     />
   );
 }
}
