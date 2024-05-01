import React, { Component } from 'react';
import { getItem, updateItem } from '../api.js';

const Rent = () => {
    // const history = useHistory();
    console.log(localStorage.getItem("itemID"));
    const [state, setState] = React.useState({
        itemID: localStorage.getItem("itemID"),
        name: "",
        toolType: "",
        locationName: "",
        description: "",
        available: "",
        lendie: "",
        photo: "",
        lender: "",
    });

    const handleRentClick = async () => {
        console.log(`Confirming Rent item ${state.itemID}`);
        const { itemID, name, toolType, locationName, description, available, photo } = state;
        try {
            const itemData = { name, toolType, locationName, description, available, photo };
            await updateItem(itemID, itemData);
            console.log("Item updated successfully.");
            // this.props.history.push('/Home');
            alert("sucessfully rented");
        } catch (error) {
            console.error('Failed to update item:', error);
        }
    };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("this.state.itemID: " + state.itemID);
                const itemResponse = await getItem(state.itemID);
                console.log("itemResponse");
                console.log(itemResponse);
                setState({
                    ...state,
                    name: itemResponse.Name,
                    toolType: itemResponse.ToolType,
                    locationName: itemResponse.locationName,
                    description: itemResponse.description,
                    available: itemResponse.available,
                    lendie: itemResponse.lendie,
                    photo: itemResponse.photo,
                    lender: itemResponse.lender,
                });
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);

    const { itemID, name, toolType, locationName, description, available, lendie, photo, lender } = state;

    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '400px' }}>
            <img src={photo} alt={name} style={{ maxWidth: '100%' }} />
            <h2>{name}</h2>
            <p><strong>Item ID:</strong> {itemID}</p>
            <p><strong>Tool Type:</strong> {toolType}</p>
            <p><strong>Location:</strong> {locationName}</p>
            <p><strong>Description:</strong> {description}</p>
            {/* <p><strong>Status:</strong> {available ? 'Available' : 'Not Available'}</p> */}
            <p><strong>Lender:</strong> {lender}</p>
            <p><strong>Lendie:</strong> {lendie}</p>
            <button onClick={handleRentClick}>Confirm</button>
        </div>
    );
}

export default Rent;
