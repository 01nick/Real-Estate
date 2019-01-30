import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }

    render () {
    return (
      <section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <label htmlFor="state">State</label>
        <select name="theState" className="filter-state" onChange={this.props.change}>
        <option value="All">All States</option>
        <option value="Florida">Florida</option>
        <option value="Michigan">Michigan</option>
        <option value="NewYork">New York</option>
        <option value="Californa">Californa</option>
        </select>

        <label htmlFor="city">City</label>
        <select name="neighbourhood" className="filter-neighbourhood" onChange={this.props.change}>
          <option value="All">All Cities</option>
          <option value="Orlando">Orlando</option>
          <option value="Melbourne">Melbourne</option>
          <option value="Rockledge">Rockledge</option>
          <option value="NewYork">New York</option>
          <option value="TimeSquare">TimeSquare</option>
          <option value="GrandBlanc">Grand Blanc</option>
          <option value="Burton">Burton</option>
          <option value="LA">LA</option>
        </select>

        <label htmlFor="hometype">Home Type</label>
        <select name="homeType" className="filter-homeType" onChange={this.props.change}>
        <option value="All">All Home Types</option>
        <option value="Ranch">Ranch</option>
        <option value="TownHouse">Town House</option>
        <option value="Apartment">Apartment</option>
        <option value="Studio">Studio</option>
        </select>

        <label htmlFor="bedrooms">Bed Rooms</label>
        <select name="bed_rooms" className="filter-bedrooms" onChange={this.props.change}>
          <option value="1">1+ BR</option>
          <option value="2">2+ BR</option>
          <option value="3">3+ BR</option>
          <option value="4">4+ BR</option>
          <option value="5">5+ BR</option>
        </select>

        <div className="filters-price">
          <span className="title">Price</span>
          <input type="text" name="min_price" className="min-price" value={this.props.globalState.min_price} onChange={this.props.change}/>
          <input type="text" name="max_price" className="max-price" value={this.props.globalState.max_price} onChange={this.props.change}/>
        </div>

        <div className="filters-floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min_floor_space" className="min-floor-space" value={this.props.globalState.min_floor_space} onChange={this.props.change}/>
          <input type="text" name="max_floor_space" className="max-floor-space" value={this.props.globalState.max_floor_space} onChange={this.props.change}/>
        </div>
        <div className="filters-extras">
          <span className="title">Extras</span>
          <label htmlFor="extras"> <span> Elevators</span> <input name="elevators" value={this.props.globalState.elevators} type="checkbox" onChange={this.props.change}/></label>
          <label htmlFor="extras"> <span> Swimming Pool</span> <input name="swimming_pool" value={this.props.globalState.swimming_pool} type="checkbox" onChange={this.props.change}/></label>
          <label htmlFor="extras"> <span> Finished Basements</span> <input name="finished_basement" value= {this.props.globalState.finished_basement} type="checkbox" onChange={this.props.change}/></label>
          <label htmlFor="extras"> <span> Gym</span> <input name="gym" value={this.props.globalState.gym} type="checkbox" onChange={this.props.change}/></label>
        </div>
        </div>
      </section>
    );
  }
}
