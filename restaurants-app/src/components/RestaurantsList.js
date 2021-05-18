import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
class RestaurantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                //console.log(result);
                this.setState({ list: result })
            })
        })
    }

    delete(id){
       fetch('http://localhost:3000/restaurant/'+id,{
        method:"DELETE",
        // headers:{
        //     'Content-Type':'application/json'
        // },
       // body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
        alert('Restaurant Deleted Successfully');
        this.getData();
        })
    })
    }
    render() {
        //console.log(this.state);
        return (

            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    this.state.list.map((item, i) =>
                                        // <div>
                                        //     <span> {item.name}</span>
                                        //     <span>{item.email}</span>
                                        // </div>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.rating}</td>
                                            <td>{item.address}</td>
                                            <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange"/></Link>
                                            <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span>
                                            </td>
                                        </tr> 

                                    )
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait.....</p>
                }
            </div>
        );
    }
}

export default RestaurantsList;