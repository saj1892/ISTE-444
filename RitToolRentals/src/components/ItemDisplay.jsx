import React, { Component } from 'react';

class ItemDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Assigning props to state
            itemId: props.itemId,
            name: props.name,
            toolType: props.ToolType,
            locationName: props.locationName,
            description: props.description,
            available: props.available,
            lendie: props.lendie,
            photo: props.photo,
            lender: props.lender,
            selectedLocation: props.selectedLocation,
            selectedToolType: props.selectedToolType
        };
    }
    
    handleRentClick = () => {
        // Abstracted functionality for the "Rent" button
        // You can implement the logic for renting here
        console.log(`Renting item ${this.state.itemId}`);
    };

    render() {
        const { itemId, name, toolType, locationName, description, available, lendie, photo, lender, selectedLocation, selectedToolType } = this.state;
    
        // Render only if selectedLocation matches locationName and selectedToolType matches toolType
        // console.log(selectedLocation + " = " + locationName + " | " + selectedToolType + " = " + toolType);
        if (selectedLocation === locationName && selectedToolType === toolType) {
            console.log("item is currently being displayed" + description);
            // console.log("selectedToolType=" +selectedToolType);
            return (
                <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '400px' }}>
                    <img src={photo} alt={name} style={{ maxWidth: '100%' }} />
                    <h2>{name}</h2>
                    <p><strong>Item ID:</strong> {itemId}</p>
                    <p><strong>Tool Type:</strong> {toolType}</p>
                    <p><strong>Location:</strong> {locationName}</p>
                    <p><strong>Description:</strong> {description}</p>
                    {/* <p><strong>Status:</strong> {available ? 'Available' : 'Not Available'}</p> */}
                    <p><strong>Lender:</strong> {lender}</p>
                    <p><strong>Lendie:</strong> {lendie}</p>
                    <button onClick={this.handleRentClick}>Rent</button>
                </div>
            );
        } else {
            // If conditions are not met, render nothing
            return null;
        }
    }
}

export default ItemDisplay;
