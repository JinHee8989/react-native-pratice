/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.background}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;
