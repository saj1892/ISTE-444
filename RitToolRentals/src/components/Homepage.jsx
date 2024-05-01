import React from 'react';
import NavBar from "./Navigation.jsx";
import { fetchInventory, fetchToolTypes, fetchLocations, deleteItem } from '../api.js';
import { Link } from "react-router-dom";
import './Homepage.css';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SearchBarToolTypes: [],
            SearchBarlocations: [],
            selectedLocation: "A",
            selectedToolType: "Hand Tools",
            Inventory: [],
            loaded: false,
            itemDisplayShown: false, // Added variable to track if ItemDisplay has been displayed
            selectedItemID: null, // Store the selected item ID in state
        };
    }
 
    async componentDidMount() {
        console.log("component did mount hit");
        try {
            const inventoryDataResponse = await fetchInventory();
            const toolTypes = await fetchToolTypes();
            const locations = await fetchLocations();
            this.setState({
                Inventory: inventoryDataResponse,
                SearchBarToolTypes: toolTypes,
                SearchBarlocations: locations,
                selectedLocation: locations[2].locationName,
                loaded: true,
            });
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    handleLocationChange = (location) => {
        this.setState({ selectedLocation: location });
    }

    handleToolTypeChange = (toolType) => {
        this.setState({ selectedToolType: toolType });
    }

    handleRentClick = (itemID) => {
        // Set the item ID in localStorage and navigate to "/Rent"
        localStorage.setItem("itemID", itemID);
        // Navigate to "/Rent"
        this.props.history.push("/Rent");
    }

    handleDelete = async (itemID,name) => {
        const deleteResponse = await deleteItem(itemID);
        alert("deleted item " + name + " with response of " + deleteResponse);
    }

    handleSearch = async () => {
        try {
            const inventoryDataResponse = await fetchInventory();
            this.setState({
                Inventory: inventoryDataResponse,
                itemDisplayShown: true, // Setting itemDisplayShown to true when search is clicked
            });
            // console.log(this.state.Inventory);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    render() {
        const { selectedToolType, SearchBarToolTypes, SearchBarlocations, Inventory, loaded, itemDisplayShown, selectedLocation } = this.state;
        if (loaded) {
            return (
                <>
                    <NavBar />
                    <div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            {
                                SearchBarlocations.map((location, index) => (
                                    <button key={index} onClick={() => this.handleLocationChange(location.locationName)}>{location.locationName}</button>
                                ))
                            } 
                        </div>
                        <div>
                            <label htmlFor="toolType">Tool Type:</label>
                            <select
                                id="toolType"
                                value={selectedToolType}
                                onChange={(e) => this.handleToolTypeChange(e.target.value)}
                            >
                                {SearchBarToolTypes.map((toolType, index) => (
                                    <option key={index} value={toolType.ToolType}>{toolType.ToolType}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                    <div>
                        {itemDisplayShown && Inventory.map((item, index) => {
                            if (item.locationName === selectedLocation && item.ToolType === selectedToolType) {
                                return (
                                    <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px', maxWidth: '400px' }}>
                                        <img src={item.photo} alt={item.Name} style={{ maxWidth: '100%' }} />
                                        <h2>{item.name}</h2>
                                        <p><strong>Item ID:</strong> {item.itemID}</p>
                                        <p><strong>Tool Type:</strong> {item.ToolType}</p>
                                        <p><strong>Location:</strong> {item.locationName}</p>
                                        <p><strong>Description:</strong> {item.description}</p>
                                        <p><strong>Lender:</strong> {item.lender}</p>
                                        <p><strong>Lendie:</strong> {item.lendie}</p>
                                        <Link class = "orange link" to="/Rent" onClick={() => this.handleRentClick(item.itemID)}>Rent</Link>
                                        <button class = "delete-button" onClick={() => this.handleDelete(item.itemID, item.Name)}>Delete</button>
                                    </div>
                                );
                            } else {
                                return null; // Don't render if conditions are not met
                            }
                        })}
                    </div>
                </>
            );
        } else {
            return <><h2>Loading. . . .</h2></>;
        }
    }    
}
