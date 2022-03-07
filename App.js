/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PropsChild from './propsChild';

class App extends Component{
  //state는 함수에서 호출할수없음, render() 밖에서 사용가능, 쉽게 변경되는 안되는 값임 
  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1
  }

  inputText = () => (
    this.state.sampleBoolean? 
    <Text>sampleBoolean is true</Text> 
    :
    <Text>sampleBoolean is false</Text> 
  )
  changeState = () => {
    if(!this.state.sampleBoolean){
      this.setState({
        sampleText: 'Text Changed!',
        sampleBoolean: true
      })

    }else{
      this.setState({
        sampleText: 'Hello world!',
        sampleBoolean: false
        
      })

    }

  }

  onAdd=()=>{
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1
      }
    })
      // sampleNum: sampleNum+1
      // sampleNum: 100
    
  }
  render(){
    return(
      <View style={styles.background}>
         <PropsChild sText={this.state.sampleText} cState={this.changeState}/>
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
