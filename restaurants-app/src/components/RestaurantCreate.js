import React, { Component } from 'react';
import NavBarMenu from "./NavBarMenu";

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
        }
    }
    create() {
       fetch('http://localhost:3000/restaurant',{
           method:"Post",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(this.state)
       }).then((result)=>{
           result.json().then((resp)=>{
           alert('Restaurant Added Successfully');
           })
       })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="restaurant Name" /><br /> <br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="restaurant Address" /><br /> <br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="restaurant Rating" /><br /> <br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="restaurant Email" /><br /> <br />
                    <button onClick={() => { this.create() }}>Add Restaurant</button>

                </div>
            </div>
        );
    }
}

export default RestaurantCreate;