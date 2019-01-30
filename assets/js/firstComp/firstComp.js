import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js';
import Filter from './filter.js';
import Listings from './listings.js';
import listingsData from './data/listingsData.js';
class App extends Component {
  constructor () {
    super()
    this.state = {
      listingsData,
      theState: "All",
      neighbourhood: "All",
      homeType: "All",
      bed_rooms: 1,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 500,
      max_floor_space: 5000,
      elevators: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listingsData
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }
  change(event){
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () =>{
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData(){
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price
       && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
       && item.bedrooms >= this.state.bed_rooms
    })

    if(this.state.theState != "All") {
      newData = newData.filter((item) => {
        return item.state == this.state.theState
      })
    }

    if(this.state.neighbourhood != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.neighbourhood
      })
    }

    if(this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  render () {
    return (
      <div>
        < Header />

      <section id="content area">
        <Filter change={this.change} globalState={this.state} />
        <Listings dataForListing={this.state.filteredData}/>
      </section>

      </div>
    );
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
