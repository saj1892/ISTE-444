import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navigation';
import { addInventory, fetchLocations } from '../api.js';

export default class Mylistings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            toolType: '',
            description: '',
            lender: '',
            imageURL: '',
            available: 1,
            locationName: [],
            selectedLocation: "A",
        };
    }
    
    async componentDidMount(){
        try {
            const locations = await fetchLocations();
            this.setState({
                locationName: locations,
                selectedLocation: locations[2].locationName,
            });
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("form submitted");
        try {
            const itemData = { 
                name: this.state.name,
                toolType:this.state.toolType, 
                locationName:this.state.selectedLocation, 
                description:this.state.description, 
                available:this.state.available, 
                photo:this.state.imageURL 
            }; 
            console.log("adding:");
            console.log(itemData);
            await addInventory(itemData);
            console.log('Item added successfully!');

            alert("Item added successfully!");
            // You can perform additional actions after item addition if needed
        } catch (error) {
            console.error('Failed to add item:', error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleLocationChange = (event) => {
        this.setState({
            selectedLocation: event.target.value,
        });
    };

    render() {
        const { name, toolType, description, itemID, lender, imageURL, selectedLocation } = this.state;

        return (
            <>
                <NavBar />
                <div style={{ padding: '20px' }}>
                    <h2>Add New Listing</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="toolType">Tool Type:</label>
                            <input type="text" id="toolType" name="toolType" value={toolType} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" value={description} onChange={this.handleChange}></textarea>
                        </div>
                        <div>
                            <label htmlFor="lender">Lender:</label>
                            <input type="text" id="lender" name="lender" value={lender} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="imageURL">Image URL:</label>
                            <input type="text" id="imageURL" name="imageURL" value={imageURL} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="selectedLocation">Location:</label>
{/* 
                            <select id="selectedLocation" name="selectedLocation" value={selectedLocation} onChange={this.handleLocationChange}>
                                {this.state.locationName.map((location, index) => (
                                    <option key={index} value={location}>{location}</option>
                                ))}
                            </select> */}

                            <select
                                id="selectedLocation"
                                value={selectedLocation}
                                onChange={(e) => this.handleLocationChange(e)}
                            >
                                {this.state.locationName.map((location, index) => (
                                    <option key={index} value={location.locationName}>{location.locationName}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </>
        );
    }
}
