// src/screens/HomeScreen.js
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { fetchAllMetals } from '../api/metalService';
import Loader from '../components/Loader';
import MetalTile from '../components/MetalTile';

const HomeScreen = ({ navigation }) => {
	const [metals, setMetals] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);
	const [error, setError] = useState(null);

	const loadData = useCallback(async () => {
		try {
			setLoading(true);
			const data = await fetchAllMetals();
			setMetals(data);
			setError(null);
		} catch (err) {
			setError('Failed to fetch data.');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadData();
	}, [loadData]);

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		try {
			const data = await fetchAllMetals();
			setMetals(data);
			setError(null);
		} catch (err) {
			setError('Failed to refresh data.');
		} finally {
			setRefreshing(false);
		}
	}, []);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return (
			<View style={styles.center}>
				<Text>{error}</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={metals}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<MetalTile
						metal={item}
						onPress={() => navigation.navigate('Details', { metalName: item.name })}
					/>
				)}
				refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
				ListEmptyComponent={
					<View style={styles.center}>
						<Text>No metals available.</Text>
					</View>
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#f0f0f0' },
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
