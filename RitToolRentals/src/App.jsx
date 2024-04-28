import React, { useState } from 'react';
import { fetchData } from './api';

function App() {
    const [locations, setLocations] = useState([]);

    const handleFetchData = async () => {
        try {
            const data = await fetchData();
            setLocations(data); // Assuming data is an array of location objects
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    return (
        <div>
            <h1>React and Node.js Integration Example</h1>
            <button onClick={handleFetchData}>Fetch Data</button>
            <div>
                {locations.length > 0 ? (
                    locations.map((location, index) => (
                        <div key={index}>
                            <h2>{location.locationName}</h2>
                            <p>Address: {location.Address}</p>
                            <p>Operating Hours: {location.OperationHours}</p>
                            <p>Latitude: {location.latitude}</p>
                            <p>Longitude: {location.longitude}</p>
                        </div>
                    ))
                ) : (
                    <p>No data found. Click "Fetch Data" to load locations.</p>
                )}
            </div>
        </div>
    );
}

export default App;
