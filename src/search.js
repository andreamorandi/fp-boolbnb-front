// import axios from 'axios';
// import geolib from 'geolib';

// // Coordinate di ricerca
// const latitude = 45.4642;
// const longitude = 9.1900;
// const radius = 20000;  // in metri (20 km)

// // Esecuzione della query
// const response = await axios.get('/api/apartments');

// // Filtraggio dei risultati in base alla distanza
// const filteredResults = response.data.filter(result => {
//     const distance = geolib.getDistance(
//         { latitude, longitude },
//         { latitude: result.latitude, longitude: result.longitude }
//     );
//     return distance <= radius;
// });

// // Visualizzazione dei risultati in una lista
// filteredResults.forEach(result => {
//     console.log(result);
// });
