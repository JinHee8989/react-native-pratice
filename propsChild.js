/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View,Text} from 'react-native';
 
 const propsChild = (props) =>{
     return (
         <View>
             <Text onPress={props.cState}>
                {props.sText}
             </Text>
         </View>
     )
 }
 
 export default propsChild;
 