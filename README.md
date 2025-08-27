# Simplify Money - Metal Prices (Expo)

## Run locally

1. Install dependencies

```bash
npm install
```

2. Start the app

```bash
npx expo start
```

3. Open in Expo Go
- Scan the QR from the terminal/Expo DevTools with the Expo Go app

## Project structure
```
src/
  api/metalService.js
  components/
    Loader.js
    MetalTile.js
  screens/
    HomeScreen.js
    DetailsScreen.js
App.js
```

## Notes
- Uses React Navigation Stack for routing
- Mock API in `src/api/metalService.js` simulates network delay
- Switch to a real API by replacing the functions in `metalService.js`
