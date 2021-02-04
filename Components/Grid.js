import React, { Component } from 'react';
import { View } from 'react-native';

export default class Grid extends Component {

	render() {

		return (
			<View style={{
				flexDirection: 'column',
				flex: 0,
        padding: 6,
				height: '100%',
        ...this.props.style
      }}>
        {this.props.children}
			</View>
	  );
	}
}
