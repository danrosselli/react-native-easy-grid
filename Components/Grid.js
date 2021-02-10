import React, { Component } from 'react';
import { View } from 'react-native';

export default class Grid extends Component {

	render() {
		let pad = 8;
    if (this.props.nopad) {
      pad = 0;
    }

		return (
			<View style={{
				flexDirection: 'column',
				flex: 0,
        padding: pad,
				height: '100%',
        ...this.props.style
      }}>
        {this.props.children}
			</View>
	  );
	}
}
