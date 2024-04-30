import React, { useState } from 'react';
import { fetchInventory, fetchLocations, fetchRenters, getRenterItems } from './api';

function App() {

    //LOCATIONS:
    const [locations, setLocations] = useState([]);
    const handleFetchLocations = async () => {
        try {
            const data = await fetchLocations();
            setLocations(data); // Assuming data is an array of location objects
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    //Inventory:
    const [inventory, setInventory] = useState([]);
    const handleFetchInventory = async () => {
        try {
            const data = await fetchInventory();
            setInventory(data); // Assuming data is an array of inventory objects
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    //Renters:
    const [renters, setRenters] = useState([]);
    const handleFetchRenters = async () => {
        try {
            const data = await fetchRenters();
            setRenters(data); // Assuming data is an array of renter objects
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    //get item
    const handleFetchItem = async () => {
      try {
          const data = await getItem(itemID);
          setItemDetails(data);
          setError(''); // Clear any previous errors
      } catch (error) {
          console.error('Failed to fetch item:', error);
          setError('Failed to fetch item');
          setItemDetails(null); // Clear previous item details if present
      }
    };
    //get item
    const handleFetchRenterItems= async () => {
      try {
          const data = await getRenterItems(renterId);
          setItemDetails(data);
          setError(''); // Clear any previous errors
      } catch (error) {
          console.error('Failed to fetch items:', error);
          setError('Failed to fetch item');
          setItemDetails(null); // Clear previous item details if present
      }
    };
    return (
        <div>
            <h1>React and Node.js Integration Example</h1>
            <button onClick={handleFetchLocations}>Fetch Data</button>
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
