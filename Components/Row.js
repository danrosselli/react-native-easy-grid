import React, { Component } from 'react';
import {View} from 'react-native';

export default class Row extends Component {

  render() {
    let pad = 3;
    if (this.props.nopad) {
      pad = 0;
    }

    let flex = this.props.size || 0;
    let alignItems = 'flex-start';

    if (this.props.verticalCenter)
      alignItems = 'center';

    if (this.props.verticalBottom)
      alignItems = 'flex-end';

    return (
      <View style={{
        flexDirection: 'row',
        flex: flex,
        alignItems: alignItems,
        padding: pad,
        ...this.props.style
      }}>
        {this.props.children}
      </View>
    );
  }
}
