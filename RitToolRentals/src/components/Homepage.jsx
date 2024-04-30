import React from 'react';
import NavBar from "./Navigation.jsx"
// import SearchBar from './SearchBar.jsx'
import {fetchInvetory} from '../api.js';
import ItemDisplay from './ItemDisplay.jsx';

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
            //store all Invetory Data
            Invetory: [],
            //will tell the display to not load until the data is gotten
            loaded: false,
        };
    }//constructor

    // handleFetchData = async () => {
    //     try {
    //         //make new const for each endpoint you want to hit,
    //         //then assign the var in state to the approporate response
    //         const invetorydataresponse = await fetchInvetory();
    //         this.setState({
    //             Invetory: invetorydataresponse,
    //         });
    //     } catch (error) {
    //         console.error('Failed to fetch data:', error);
    //     }
    // };

    async componentDidMount() {
        //getdata
        //get ToolTypes and send to SearchBar
        //get itemID,Name,ToolType,locationName,description,available,lendie,photo,Lender
        // this.handleFetchData();
        this.state.loaded = true;
    }//componentDidMount

    handleLocationChange = (location) => {
        this.setState({ selectedLocation: location });
    }//handleLocationChange

    handleToolTypeChange = (toolType) => {
        this.setState({ selectedToolType: toolType });
    }//handleToolTypeChange

    render() {
        const {selectedToolType, SearchBarToolTypes} = this.state;
        if(this.state.loaded){
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
                        <div>
                            {
                                this.state.Invetory.map((invetory, index) =>{
                                    <div key={index}>
                                        <ItemDisplay
                                            itemId={invetory.itemId}
                                            name={invetory.name}
                                            toolType={invetory.toolType}
                                            locationName={invetory.locationName}
                                            description={invetory.description}
                                            available={invetory.available}
                                            lendie={invetory.lendie}
                                            photo={invetory.photo}
                                            lender={invetory.lender}
                                            selectedLocation={this.state.selectedLocation}
                                            selectedToolType={this.state.selectedToolType}
                                        />
                                    </div>
                                })
                            }
                        </div>
                </>
            );
        }else{
            return(
                <>
                    <h2>Loading data . . . </h2>
                </>
            );
        }
        
    }//render
    
};//Homepage
