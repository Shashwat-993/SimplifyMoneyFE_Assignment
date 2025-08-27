// src/api/metalService.js

// Mock data for initial development
const mockMetals = {
	gold: { name: 'Gold', price: 65000, timestamp: Date.now() },
	silver: { name: 'Silver', price: 80, timestamp: Date.now() },
	platinum: { name: 'Platinum', price: 3000, timestamp: Date.now() },
	palladium: { name: 'Palladium', price: 2500, timestamp: Date.now() },
};

// You can swap this with a real API call later
export const fetchAllMetals = () => {
	console.log('Fetching all metal prices...');
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(Object.values(mockMetals));
		}, 1500); // Simulate network delay
	});
};

export const fetchMetalDetails = (metalName) => {
	console.log(`Fetching details for ${metalName}...`);
	return new Promise((resolve) => {
		setTimeout(() => {
			const metal = Object.values(mockMetals).find(
				(m) => m.name.toLowerCase() === metalName.toLowerCase(),
			);
			resolve({
				...metal,
				previousClose: metal.price * 0.99,
				open: metal.price * 0.98,
				dayHigh: metal.price * 1.02,
			});
		}, 1000);
	});
};
