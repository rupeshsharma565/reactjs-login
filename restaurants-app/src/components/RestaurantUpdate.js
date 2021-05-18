import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            address: null,
            rating: null,
            id:null,
        }
    }

    update() {
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method:"Put",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
            alert('Restaurant Updated Successfully');
            })
        })
     }

    componentDidMount(){
        //show  data
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                //console.log(result);
                this.setState({
                    name:result.name,
                    address:result.address,
                    rating:result.rating,
                    email:result.email,
                    id:result.id
                 })
            })
        })
    }
    render() {
       // console.log(this.state);
        return (
            <div>
              <h1>Restaurant Update</h1> 
              <div>
                    <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="restaurant Name" 
                    value={this.state.name}/><br /> <br />
                    <input onChange={(event) => { this.setState({ address: event.target.value }) }} placeholder="restaurant Address" value={this.state.address} /><br /> <br />
                    <input onChange={(event) => { this.setState({ rating: event.target.value }) }} placeholder="restaurant Rating" value={this.state.rating} /><br /> <br />
                    <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="restaurant Email" value={this.state.email} /><br /> <br />
                    <button onClick={() => { this.update() }}>Update Restaurant</button>

                </div> 
            </div>
        );
    }
}

export default RestaurantUpdate;