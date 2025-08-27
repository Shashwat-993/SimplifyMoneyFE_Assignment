// src/components/MetalTile.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { formatINR } from '../utils/format';

const MetalTile = ({ metal, onPress }) => {
	return (
		<TouchableOpacity style={styles.tile} onPress={onPress}>
			<Text style={styles.name}>{metal.name}</Text>
			<Text style={styles.price}>{formatINR(metal.price)} / gram</Text>
			<Text style={styles.timestamp}>
				{new Date(metal.timestamp).toLocaleTimeString()}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	tile: {
		backgroundColor: 'white',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 10,
		elevation: 3,
	},
	name: { fontSize: 20, fontWeight: 'bold' },
	price: { fontSize: 16, color: 'green', marginTop: 5 },
	timestamp: { fontSize: 12, color: 'gray', marginTop: 10 },
});

export default MetalTile;
