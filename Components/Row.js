import React, { Component } from 'react';
import {View} from 'react-native';

export default class Row extends Component {

  render() {
    return (
      <View style={{
        flexDirection: 'row',
        flex: 0,
        padding: 3,
        ...this.props.style
      }}>
        {this.props.children}
      </View>
    );
  }
}
