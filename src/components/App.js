import React, { Component } from 'react'
import { View, Text, StatusBar, Navigator } from 'react-native'
import Authentication from './Authentication/Authentication'
import ChangeInfo from './ChangeInfo/ChangeInfo'
import Main from './Main/Main'
import OrderHistory from './OrderHistory/OrderHistory'

StatusBar.setHidden(true);

export default class App extends Component { 
      render() {
            return (
                  <View style={{ flex: 1, backgroundColor: 'gray'}}>
                        <Text>React Shopping Application</Text> 
                  </View>
            );
      }
}