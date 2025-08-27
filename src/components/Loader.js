// src/components/Loader.js
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = () => {
	return (
		<View style={styles.center}>
			<ActivityIndicator size="large" />
		</View>
	);
};

const styles = StyleSheet.create({
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default Loader;
