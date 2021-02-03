import React, { Component } from 'react';
import {View} from 'react-native';

export default class Col extends Component {

  render() {

    const types = {
      'default' : { flexDirection: 'column', alignItems: 'stretch'},
      'inline' : { flexDirection: 'row', alignItems: 'center'},
    };

    let type = types.default;

    if (this.props.inline)
      type = types.inline;

    return (
      <View style={{
        flexDirection: type.flexDirection,
        alignItems: type.alignItems,
        flex: this.props.size || 1,
        padding: 3,
        ...this.props.style,
      }}>
        {this.props.children}
      </View>
    );
  }
}
