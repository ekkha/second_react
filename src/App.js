import React,{ Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name : "",
      departmaent : "",
      rating : "",
      data : []
    }
  }
  hadleChange =(e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick=()=>{
    const obj={
      name:this.state.name,
      departmaent:this.state.departmaent,
      rating: this.state.rating,
    }
    this.state.data.push(obj);

    this.setState({
      data:this.state.data,
      name:"",
      departmaent:"",
      rating:"",
    })

      console.log(this.state.data)
  }

  render() {
    return(
      <>
      <h1 className="card">EMPLOYEE FEEDBACK FORM</h1>
      
      <div className="card1">
        <ul type="none">

          <li><label>Name:</label>
          <input type="text" name="name" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange}/><br></br>
          </li>

          <li><label>Department:</label>
          <input type="text" name="department" placeholder="Enter Your Department" value={this.state.departmaent} onChange={this.handleChange}/><br></br>
          </li>

          <li><label>Rating:</label>
          <input type="text" name="rating" placeholder="Enter Your Rating" value={this.state.rating} onChange={this.handleChange}/><br></br>
          </li>

          <li>
          <button onClick={this.handleClick}>SUBMIT</button>
          </li>

        </ul>
      </div>

      <div className="card2">

        {this.state.data.map((item)=>{
          return(
            <div className="card3">
              <h5>Name:{item.name}|
                  Department:{item.departmaent}|
                  Rating:{item.rating}
              </h5>
            </div>
          )
        })}
      </div>
      </>
    )
  }
}
















































