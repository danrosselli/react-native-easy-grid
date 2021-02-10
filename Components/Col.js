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
    let justifyContent = 'flex-start';

    if (this.props.nopad) {
      pad = 0;
    }

    if (this.props.inline)
      type = types.inline;

    if (this.props.right)
      justifyContent = 'flex-end';

    if (this.props.center)
      justifyContent = 'center';

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
        justifyContent: justifyContent,
        ...this.props.style,
      }}>
        {this.props.children}
      </View>
    );
  }
}
