webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' logo '
        ),
        _react2.default.createElement(
          'nav',
          { className: 'theNav' },
          _react2.default.createElement(
            'a',
            { className: 'btn', href: '#' },
            'Create ads'
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn', href: '#' },
            'About us'
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn', href: '#' },
            'Login'
          ),
          _react2.default.createElement(
            'a',
            { className: 'btn', id: 'register-btn', href: '#' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  name: 'Bob',
  date: '12/14/2017',
  address: '20-34 grand ave',
  city: 'Rockledge',
  state: 'Florida',
  bedrooms: 3,
  price: 60000,
  floorSpace: 2000,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'Apartment',
  image: 'https://freshome.com/wp-content/uploads/2018/02/studio-intro.jpg'
}, {
  name: 'Chris',
  date: '03/09/2018',
  address: '876 crystal st',
  city: 'Melbourne',
  state: 'Florida',
  bedrooms: 4,
  price: 320000,
  floorSpace: 3000,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'TownHouse',
  image: 'https://www.husson.edu/student-life/assets/townhouse-exterior-2017.jpg'
}, {
  name: 'Alex',
  date: '07/13/2017',
  address: '4573 brooklyn blvd',
  city: 'Orlando',
  state: 'Florida',
  bedrooms: 4,
  price: 200000,
  floorSpace: 3000,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'Ranch',
  image: 'https://odis.homeaway.com/odis/listing/4b6ac37a-4ea5-4fba-a138-2d4104712c2b.c10.jpg'
}, {
  name: 'Dave',
  date: '02/29/2018',
  address: '7392 oscar rd',
  city: 'Burton',
  state: 'Michigan',
  bedrooms: 2,
  price: 150000,
  floorSpace: 2500,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'TownHouse',
  image: 'https://s.hdnux.com/photos/76/47/22/16413842/3/920x920.jpg'
}, {
  name: 'Jessica',
  date: '06/09/2018',
  address: '483 hollywood blvd',
  city: 'Rockledge',
  state: 'Florida',
  bedrooms: 2,
  price: 80000,
  floorSpace: 800,
  elevator: true,
  pool: true,
  gym: true,
  Basement: true,
  homeType: 'Apartment',
  image: 'https://images1.apartments.com/i2/xK1fTqYgboEiGFIsME-ScfOhwuxbbwpjriBmpzAMsrM/117/grand-reserve-katy-katy-tx-aura-grand.jpg'
}, {
  name: 'Sara',
  date: '09/09/2016',
  address: '9634 belsay rd',
  city: 'GrandBlanc',
  state: 'Michigan',
  bedrooms: 3,
  price: 220000,
  floorSpace: 2000,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'TownHouse',
  image: 'https://www.brianporter.com/userfiles/image/New%207th.jpg'
}, {
  name: 'Steve',
  date: '10/19/2018',
  address: '963 trout st',
  city: 'TimeSquare',
  state: 'NewYork',
  bedrooms: 1,
  price: 350000,
  floorSpace: 1500,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'Apartment',
  image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/1b/85/07/biz-apartment-hammarby.jpg'
}, {
  name: 'Kyle',
  date: '07/15/2018',
  address: '457 maple wood rd',
  city: 'NewYork',
  state: 'NewYork',
  bedrooms: 2,
  price: 400000,
  floorSpace: 1700,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'Studio',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzHjR0QB8m1hFy5bLIhG6wIdl4XTqxvKmiF5NPVZr-6Y6R-9Pww'
}, {
  name: 'Blake',
  date: '10/20/2018',
  address: '993 duke cir',
  city: 'LA',
  state: 'Californa',
  bedrooms: 3,
  price: 500000,
  floorSpace: 3200,
  extras: ['elevator', 'pool', 'gym', 'Basement'],
  homeType: 'Ranch',
  image: 'https://s.hdnux.com/photos/61/17/31/12908103/3/600x600.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'state' },
            'State'
          ),
          _react2.default.createElement(
            'select',
            { name: 'theState', className: 'filter-state', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All States'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Florida' },
              'Florida'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Michigan' },
              'Michigan'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NewYork' },
              'New York'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Californa' },
              'Californa'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'neighbourhood', className: 'filter-neighbourhood', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Cities'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Orlando' },
              'Orlando'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Melbourne' },
              'Melbourne'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Rockledge' },
              'Rockledge'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NewYork' },
              'New York'
            ),
            _react2.default.createElement(
              'option',
              { value: 'TimeSquare' },
              'TimeSquare'
            ),
            _react2.default.createElement(
              'option',
              { value: 'GrandBlanc' },
              'Grand Blanc'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Burton' },
              'Burton'
            ),
            _react2.default.createElement(
              'option',
              { value: 'LA' },
              'LA'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'hometype' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filter-homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Home Types'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              'Ranch'
            ),
            _react2.default.createElement(
              'option',
              { value: 'TownHouse' },
              'Town House'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              'Apartment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Studio' },
              'Studio'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Bed Rooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bed_rooms', className: 'filter-bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              '5+ BR'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters-price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', value: this.props.globalState.min_price, onChange: this.props.change }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', value: this.props.globalState.max_price, onChange: this.props.change })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters-floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', value: this.props.globalState.min_floor_space, onChange: this.props.change }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', value: this.props.globalState.max_floor_space, onChange: this.props.change })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters-extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' Elevators'
              ),
              ' ',
              _react2.default.createElement('input', { name: 'elevators', value: this.props.globalState.elevators, type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' Swimming Pool'
              ),
              ' ',
              _react2.default.createElement('input', { name: 'swimming_pool', value: this.props.globalState.swimming_pool, type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' Finished Basements'
              ),
              ' ',
              _react2.default.createElement('input', { name: 'finished_basement', value: this.props.globalState.finished_basement, type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                ' Gym'
              ),
              ' ',
              _react2.default.createElement('input', { name: 'gym', value: this.props.globalState.gym, type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var theData = this.props.dataForListing;

      return theData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'listing', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
            _react2.default.createElement(
              'span',
              { className: 'address' },
              listing.address
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-img' },
                  ' '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-9' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    listing.name
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'post-date' },
                    listing.date
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'floor-space' },
                    _react2.default.createElement('i', { className: 'fa fa-square-o' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.floorSpace,
                      'ft\xB2'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'bedrooms' },
                    _react2.default.createElement('i', { className: 'fa fa-bed' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.bedrooms
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'view-btn' },
                  'View listing'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom-info' },
            _react2.default.createElement(
              'span',
              { className: 'price' },
              '$',
              listing.price,
              ' '
            ),
            _react2.default.createElement(
              'span',
              { className: 'location' },
              _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
              listing.city,
              ', ',
              listing.state,
              ' '
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.dataForListing.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                ' Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                ' Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list' }),
              _react2.default.createElement('i', { className: 'fa fa-th' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(230);

var _Header2 = _interopRequireDefault(_Header);

var _filter = __webpack_require__(232);

var _filter2 = _interopRequireDefault(_filter);

var _listings = __webpack_require__(233);

var _listings2 = _interopRequireDefault(_listings);

var _listingsData = __webpack_require__(231);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bed_rooms;
      });

      if (this.state.theState != "All") {
        newData = newData.filter(function (item) {
          return item.state == _this3.state.theState;
        });
      }

      if (this.state.neighbourhood != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.neighbourhood;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content area' },
          _react2.default.createElement(_filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_listings2.default, { dataForListing: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);