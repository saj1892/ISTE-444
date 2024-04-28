import React from 'react';
import NavBar from "./Navigation.jsx"
import SearchBar from './SearchBar.jsx'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //to populate the dropDown menu in the searchBar
            SearchBarToolTypes: ["Hammer","Screwdriver","3D printer","PPE","Firearms"],
            //hardcoded lavid pickup locations
            SearchBarlocations: ["A","B","C"],
            //to store the currently selected location from the SearchBar
            selectedLocation: "A",
            //to store the currently selected ToolType from the searchBar
            selectedToolType: null,
        };
    }//constructor

    componentDidMount() {
        //getdata
        //get ToolTypes and send to SearchBar
        //get itemID,Name,ToolType,locationName,description,available,lendie,photo,Lender
    }//componentDidMount

    handleLocationChange = (location) => {
        this.setState({ selectedLocation: location });
    }//handleLocationChange

    handleToolTypeChange = (toolType) => {
        this.setState({ selectedToolType: toolType });
    }//handleToolTypeChange

    render() {
        const {selectedToolType, SearchBarToolTypes} = this.state;
        return (
            <>
                <NavBar />
                
                    <div>
                        <div>
                        <label htmlFor="location">Location:</label>
                        <button onClick={() => this.handleLocationChange('A')}>A</button>
                        <button onClick={() => this.handleLocationChange('B')}>B</button>
                        <button onClick={() => this.handleLocationChange('C')}>C</button>
                        </div>
                        <div>
                        <label htmlFor="ToolType">Tool Type:</label>
                        <select
                            id="location"
                            value={selectedToolType}
                            onChange={(e) => this.handleLocationChange(e.target.value)}
                        >
                            {SearchBarToolTypes.map((toolType, index) => (
                                <option key={index} value={toolType}>{toolType}</option>
                            ))}
                        </select>
                        </div>
                    </div>
                
                {/* This is where the results for the search should go */}
                {/* This will be a map() of the data retreved from the database */}
                {/* the current search paramaters will be passed into child components as props */}
                {/* in the child components they will either display nothing or their info based on props */}
            </>
        );
    }//render
    
};//Homepage
