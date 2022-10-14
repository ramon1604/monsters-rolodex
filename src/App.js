import React, { useState, useEffect } from "react"; // Functional component 
//import React, { Component } from "react"; // Class component 
import './App.css';
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

// Functional component
const App = () => {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setMonsters(data)
        setFilteredMonsters(data)
      })
  }, [])

  const onSearchInput = async (e) => {
    await setSearchInput(e.target.value)
    await setFilteredMonsters(monsters.filter(monster => monster.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
    if (searchInput){}
  }

  return (
    <div className="App">
      <h1 className={` app-title `}>Monsters Rolodex</h1>
      <SearchBox
        placeholder={` Search Monsters `}
        onChange={onSearchInput}
      />
      <CardList
        monsters={filteredMonsters}
      />
    </div>
  )
}

/*
// Class component
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchInput: ''
    }
  }

  componentDidMount = async () => {
    const monsters = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    await this.setState({ monsters })
    await this.setState({ filteredMonsters: monsters })
  }

  searchMonsters = async () => {
    if (this.state.searchInput.length > 0) {
      await this.setState({ filteredMonsters: this.state.monsters.filter(monster => monster.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase())) })
    } else {
      await this.setState({ filteredMonsters: this.state.monsters })
    }
  }

  onSearchInput = async (e) => {
    await this.setState({searchInput: e.target.value})
    this.searchMonsters()
  }

  render() {
    return (
      <div className="App">
        <h1 className={` app-title `}>Monsters Rolodex</h1>
        <SearchBox
          placeholder={` Search Monsters `}
          onChange={this.onSearchInput}
        />
        <CardList
          monsters={this.state.filteredMonsters}
        />
      </div>
    );
  }
}
*/
export default App

