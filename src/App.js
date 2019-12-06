import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

  class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField:''
    };

    //this.handleChange=this.handleChange.bind(this);
  }

  handleChange = e=>this.setState({searchField:e.target.value}); //Arrow function hence no need to binf this
    
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monster: users }));
  }
  render() {
    const {monster,searchField} = this.state;
    const filteredMonsters=monster.filter(m=>m.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox 
        placeholders='search monster'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
