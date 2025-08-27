// src/screens/DetailsScreen.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchMetalDetails } from '../api/metalService';
import Loader from '../components/Loader';
import { formatINR } from '../utils/format';

const DetailsScreen = ({ route, navigation }) => {
	const { metalName } = route.params;
	const [details, setDetails] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		navigation.setOptions({ title: `${metalName} Details` }); // Set screen title
		const loadDetails = async () => {
			setLoading(true);
			const data = await fetchMetalDetails(metalName);
			setDetails(data);
			setLoading(false);
		};
		loadDetails();
	}, [metalName]);

	if (loading) {
		return <Loader />;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.header}>{details.name}</Text>
			<Text style={styles.detailItem}>Current Price: {formatINR(details.price)}</Text>
			<Text style={styles.detailItem}>Previous Close: {formatINR(details.previousClose)}</Text>
			<Text style={styles.detailItem}>Open Price: {formatINR(details.open)}</Text>
			<Text style={styles.detailItem}>Day High: {formatINR(details.dayHigh)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 20 },
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
	detailItem: { fontSize: 18, marginBottom: 10 },
});

export default DetailsScreen;
