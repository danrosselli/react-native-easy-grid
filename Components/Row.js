import React, { Component } from 'react';
import {View} from 'react-native';

export default class Row extends Component {

  render() {
    let pad = 3;
    if (this.props.nopad) {
      pad = 0;
    }

    return (
      <View style={{
        flexDirection: 'row',
        flex: 0,
        padding: pad,
        ...this.props.style
      }}>
        {this.props.children}
      </View>
    );
  }
}
