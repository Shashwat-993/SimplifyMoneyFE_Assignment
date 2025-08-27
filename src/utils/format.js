// src/utils/format.js

export const formatINR = (value) => {
	try {
		return new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR',
			maximumFractionDigits: 2,
			minimumFractionDigits: 2,
		}).format(Number(value || 0));
	} catch (e) {
		return `₹${Number(value || 0).toFixed(2)}`;
	}
};
