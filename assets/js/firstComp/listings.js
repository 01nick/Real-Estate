import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings=this.loopListings.bind(this)
  }
  loopListings () {
    let theData = this.props.dataForListing


    return theData.map((listing,index)=>{
        return (
          <div className="listing" key={index}>
            <div className="listing-img" style={{background:`url("${listing.image}") no-repeat center center`}}>
              <span className="address">{listing.address}</span>
              <div className="details">
              <div className="col-md-3">
                <div className="user-img"> </div>
                </div>
                <div className="col-md-9">
                <div className="user-details">
                  <span className="user-name">{listing.name}</span>
                  <span className="post-date">{listing.date}</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="fa fa-square-o"></i>
                    <span>{listing.floorSpace}ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed"></i>
                    <span>{listing.bedrooms}</span>
                    </div>
                  </div>
                  <div className="view-btn">
                    View listing
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price} </span>
              <span className="location"><i className="fa fa-map-marker"></i>{listing.city}, {listing.state} </span>
            </div>
          </div>
        )
    })
  }

  render () {
    return (
      <section id="listings">

      <section className="search-area">
        <input type="text" name="search" />
      </section>

      <section className="sortby-area">
        <div className="results">{this.props.dataForListing.length} results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc"> Highest Price</option>
            <option value="price-dsc"> Lowest Price</option>
          </select>
          <div className="view">
          <i className="fa fa-th-list"></i>
          <i className="fa fa-th"></i>
          </div>
        </div>
      </section>

      <section className="listings-results">
      <div className="row">
        {this.loopListings()}
        </div>
      </section>

      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
      </section>

      </section>
    );
  }
}
