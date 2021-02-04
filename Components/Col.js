import React, { Component } from 'react';
import {View} from 'react-native';

export default class Col extends Component {

  render() {

    const types = {
      'default' : { flexDirection: 'column', alignItems: 'stretch'},
      'inline' : { flexDirection: 'row', alignItems: 'center'},
    };

    let type = types.default;
    let flex = this.props.size || 1;
    let width = '100%';
    let pad = 3;

    if (this.props.nopad) {
      pad = 0;
    }

    if (this.props.inline)
      type = types.inline;

    if (this.props.width) {
      flex = 0;
      width = this.props.width;
    }

    return (
      <View style={{
        flexDirection: type.flexDirection,
        alignItems: type.alignItems,
        flex: flex,
        width: width,
        padding: pad,
        ...this.props.style,
      }}>
        {this.props.children}
      </View>
    );
  }
}
