webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Catering = function (_Component) {
  _inherits(Catering, _Component);

  function Catering() {
    _classCallCheck(this, Catering);

    var _this = _possibleConstructorReturn(this, (Catering.__proto__ || Object.getPrototypeOf(Catering)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Catering, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "catering" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "catering__box" },
            _react2.default.createElement(
              "div",
              { className: "discover-images" },
              _react2.default.createElement("img", {
                src: "/img/pizza.jpg",
                className: "pizza",
                alt: "pizza"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "catering-info" },
              _react2.default.createElement(
                "h3",
                null,
                "For Your Special Day"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "Exceptional Catering Services"
              ),
              _react2.default.createElement(
                "p",
                null,
                "We love food, lots of different food, just like you. We promise an intimate and relaxed dining experience that offers different to local and foreign patrons ."
              ),
              _react2.default.createElement(
                "div",
                { className: "btn" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn-red" },
                  "View Menu"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Catering;
}(_react.Component);

exports.default = Catering;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discover = function (_Component) {
  _inherits(Discover, _Component);

  function Discover() {
    _classCallCheck(this, Discover);

    var _this = _possibleConstructorReturn(this, (Discover.__proto__ || Object.getPrototypeOf(Discover)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Discover, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "discover" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "discover__box" },
            _react2.default.createElement(
              "div",
              { className: "discover-info" },
              _react2.default.createElement(
                "h3",
                null,
                "Discover"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "The Restaurant"
              ),
              _react2.default.createElement("img", {
                src: "/img/d-line.png",
                className: "stylish-line",
                alt: "stylish-line"
              }),
              _react2.default.createElement(
                "p",
                null,
                "We love food, lots of different food, just like you. We promise an intimate and relaxed dining experience that offers different to local and foreign patrons ."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Pick up at the restaurant at your convenience, 7 days a week. Available for orders of $100 or more, Monday - Friday until 4P.M. Delivery and Set-Up Fee of $25.."
              ),
              _react2.default.createElement("img", {
                src: "/img/d-signature.png",
                className: "signature",
                alt: "signature"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "discover-images" },
              _react2.default.createElement("img", {
                src: "/img/d-foodie-basket.png",
                className: "foodie-basket",
                alt: "foodie-basket"
              })
            )
          )
        )
      );
    }
  }]);

  return Discover;
}(_react.Component);

exports.default = Discover;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Experts = function (_Component) {
  _inherits(Experts, _Component);

  function Experts() {
    _classCallCheck(this, Experts);

    var _this = _possibleConstructorReturn(this, (Experts.__proto__ || Object.getPrototypeOf(Experts)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Experts, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "expert" },
        _react2.default.createElement(
          "div",
          { className: "info" },
          _react2.default.createElement(
            "h3",
            null,
            "Amaging"
          ),
          _react2.default.createElement(
            "h2",
            null,
            "Kitchen Experts"
          ),
          _react2.default.createElement("img", {
            src: "/img/d-line.png",
            className: "stylish-line",
            alt: "stylish-line"
          })
        ),
        _react2.default.createElement(
          "div",
          { className: "expert-box" },
          _react2.default.createElement(
            "div",
            { className: "expert-details" },
            _react2.default.createElement(
              "div",
              { className: "image-box" },
              _react2.default.createElement("img", {
                src: "/img/expert-chef-01.png",
                className: "expert-image",
                alt: "expert-image"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-info" },
              _react2.default.createElement(
                "h3",
                { className: "expert-name" },
                "Stephen Roberts"
              ),
              _react2.default.createElement(
                "h5",
                { className: "expert-position" },
                "main chef"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-social-media" },
              _react2.default.createElement("i", { className: "fab fa-facebook-f" }),
              _react2.default.createElement("i", { className: "fab fa-twitter" }),
              _react2.default.createElement("i", { className: "fab fa-linkedin-in" }),
              _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "expert-details" },
            _react2.default.createElement(
              "div",
              { className: "image-box" },
              _react2.default.createElement("img", {
                src: "/img/expert-chef-04.png",
                className: "expert-image",
                alt: "expert-image"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-info" },
              _react2.default.createElement(
                "h3",
                { className: "expert-name" },
                "Stephen Roberts"
              ),
              _react2.default.createElement(
                "h5",
                { className: "expert-position" },
                "main chef"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-social-media" },
              _react2.default.createElement("i", { className: "fab fa-facebook-f" }),
              _react2.default.createElement("i", { className: "fab fa-twitter" }),
              _react2.default.createElement("i", { className: "fab fa-linkedin-in" }),
              _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "expert-details" },
            _react2.default.createElement(
              "div",
              { className: "image-box" },
              _react2.default.createElement("img", {
                src: "/img/expert-chef-01.png",
                className: "expert-image",
                alt: "expert-image"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-info" },
              _react2.default.createElement(
                "h3",
                { className: "expert-name" },
                "Stephen Roberts"
              ),
              _react2.default.createElement(
                "h5",
                { className: "expert-position" },
                "main chef"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-social-media" },
              _react2.default.createElement("i", { className: "fab fa-facebook-f" }),
              _react2.default.createElement("i", { className: "fab fa-twitter" }),
              _react2.default.createElement("i", { className: "fab fa-linkedin-in" }),
              _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "expert-details" },
            _react2.default.createElement(
              "div",
              { className: "image-box" },
              _react2.default.createElement("img", {
                src: "/img/expert-chef-04.png",
                className: "expert-image",
                alt: "expert-image"
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-info" },
              _react2.default.createElement(
                "h3",
                { className: "expert-name" },
                "Stephen Roberts"
              ),
              _react2.default.createElement(
                "h5",
                { className: "expert-position" },
                "main chef"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "expert-social-media" },
              _react2.default.createElement("i", { className: "fab fa-facebook-f" }),
              _react2.default.createElement("i", { className: "fab fa-twitter" }),
              _react2.default.createElement("i", { className: "fab fa-linkedin-in" }),
              _react2.default.createElement("i", { className: "fab fa-google-plus-g" })
            )
          )
        )
      );
    }
  }]);

  return Experts;
}(_react.Component);

exports.default = Experts;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      // const style = {
      //   width: "100%",
      //   height: "100%"
      // };
      return _react2.default.createElement(
        "section",
        { className: "footer" },
        _react2.default.createElement(
          "div",
          { className: "footer__mapbox" },
          _react2.default.createElement("div", { className: "footer__mapbox--map" }),
          _react2.default.createElement(
            "div",
            { className: "footer__mapbox--info" },
            _react2.default.createElement("img", {
              src: "/img/logo.png",
              className: "footer-logo",
              alt: "footer-logo"

            }),
            _react2.default.createElement(
              "h3",
              null,
              "Location"
            ),
            _react2.default.createElement("img", {
              src: "/img/d-line.png",
              className: "stylish-line",
              alt: "stylish-line"
            }),
            _react2.default.createElement(
              "p",
              null,
              "45-47 Babangida Avenue Lekki Lagos Nigeria"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "footer__box" },
            _react2.default.createElement(
              "div",
              { className: "box footer__box--about" },
              _react2.default.createElement(
                "h3",
                null,
                "About Us"
              ),
              _react2.default.createElement("img", {
                src: "/img/d-line.png",
                className: "stylish-line",
                alt: "stylish-line"
              }),
              _react2.default.createElement(
                "p",
                null,
                "Far far away, behind the word mountains, far from the countries Vokalia and Conso Nantia there live the blind texts"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "box footer__box--hours" },
              _react2.default.createElement(
                "h3",
                null,
                "Opening Hours"
              ),
              _react2.default.createElement("img", {
                src: "/img/d-line.png",
                className: "stylish-line",
                alt: "stylish-line"
              }),
              _react2.default.createElement(
                "p",
                null,
                " ",
                _react2.default.createElement(
                  "span",
                  null,
                  "Mon-Thu:"
                ),
                " 7:00am-8:00pm",
                " "
              ),
              _react2.default.createElement(
                "p",
                null,
                " ",
                _react2.default.createElement(
                  "span",
                  null,
                  "Fri-Sun:"
                ),
                " 7:00am-10:00pm"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "box footer__box--contact" },
              _react2.default.createElement(
                "h3",
                null,
                "Contact Info"
              ),
              _react2.default.createElement("img", {
                src: "/img/d-line.png",
                className: "stylish-line",
                alt: "stylish-line"
              }),
              _react2.default.createElement(
                "p",
                null,
                " ",
                _react2.default.createElement(
                  "span",
                  null,
                  "Call us:"
                ),
                " 091 552 6580"
              ),
              _react2.default.createElement(
                "p",
                null,
                " ",
                _react2.default.createElement(
                  "span",
                  null,
                  "Mail us:"
                ),
                " contact@foodie.com"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "footer__copyright" },
          _react2.default.createElement(
            "div",
            { className: "footer__copyright--info" },
            _react2.default.createElement(
              "span",
              null,
              "\xA9 Copyright Foodie Nigeria, Design By :-",
              " ",
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Sanusi"
              ),
              " "
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "nav" },
            _react2.default.createElement(
              "a",
              { href: "#" },
              "About Us"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Our Chef"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "News"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Delivery"
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAy1t5OdFdoiM-MhH52x71Dw6fExbobJGE"
// })(Footer);

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

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
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "header__menu" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              "FOODIE"
            ),
            _react2.default.createElement(
              "nav",
              null,
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Home"
              ),
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Menu"
              ),
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Reservation"
              ),
              _react2.default.createElement(
                "a",
                { href: "#" },
                "News"
              ),
              _react2.default.createElement(
                "a",
                { href: "#" },
                "Contact Us"
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OurMenu = function (_Component) {
  _inherits(OurMenu, _Component);

  function OurMenu() {
    _classCallCheck(this, OurMenu);

    var _this = _possibleConstructorReturn(this, (OurMenu.__proto__ || Object.getPrototypeOf(OurMenu)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(OurMenu, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "our-menu" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "info" },
            _react2.default.createElement(
              "h3",
              null,
              "Our Menu"
            ),
            _react2.default.createElement(
              "h2",
              null,
              "Choose Your Dish"
            ),
            _react2.default.createElement("img", {
              src: "/img/d-line.png",
              className: "stylish-line",
              alt: "stylish-line"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "menu--items" },
            _react2.default.createElement(
              "div",
              { className: "menu--item" },
              _react2.default.createElement("img", {
                src: "/img/menu-image-2.jpg",
                className: "menu-image",
                alt: "cooking"
              }),
              _react2.default.createElement(
                "div",
                { className: "price-box" },
                _react2.default.createElement(
                  "h2",
                  { className: "item__price" },
                  "$30"
                ),
                _react2.default.createElement("i", { className: "fas fa-cart-plus" })
              ),
              _react2.default.createElement(
                "p",
                { className: "item--details" },
                "Various seafood can be used to prepare the dish, such as fish"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "menu--item" },
              _react2.default.createElement("img", {
                src: "/img/menu-image-2.jpg",
                className: "menu-image",
                alt: "cooking"
              }),
              _react2.default.createElement(
                "div",
                { className: "price-box" },
                _react2.default.createElement(
                  "h2",
                  { className: "item__price" },
                  "$30"
                ),
                _react2.default.createElement("i", { className: "fas fa-cart-plus" })
              ),
              _react2.default.createElement(
                "p",
                { className: "item--details" },
                "Various seafood can be used to prepare the dish, such as fish"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "menu--item" },
              _react2.default.createElement("img", {
                src: "/img/menu-image-2.jpg",
                className: "menu-image",
                alt: "cooking"
              }),
              _react2.default.createElement(
                "div",
                { className: "price-box" },
                _react2.default.createElement(
                  "h2",
                  { className: "item__price" },
                  "$30"
                ),
                _react2.default.createElement("i", { className: "fas fa-cart-plus" })
              ),
              _react2.default.createElement(
                "p",
                { className: "item--details" },
                "Various seafood can be used to prepare the dish, such as fish"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "btn" },
            _react2.default.createElement(
              "a",
              { href: "#", className: "btn-red" },
              "View Menu"
            )
          )
        )
      );
    }
  }]);

  return OurMenu;
}(_react.Component);

exports.default = OurMenu;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recommend = function (_Component) {
  _inherits(Recommend, _Component);

  function Recommend() {
    _classCallCheck(this, Recommend);

    var _this = _possibleConstructorReturn(this, (Recommend.__proto__ || Object.getPrototypeOf(Recommend)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Recommend, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "recommend" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "div",
            { className: "recommend__box" },
            _react2.default.createElement(
              "div",
              { className: "recommend-images" },
              _react2.default.createElement(
                "div",
                { className: "salad-image" },
                _react2.default.createElement("img", {
                  src: "/img/pizaa-2.jpg",
                  className: "pizza-2",
                  alt: "pizza-2"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "tea-image" },
                _react2.default.createElement("img", {
                  src: "/img/pizza-3.jpg",
                  className: "pizza-3",
                  alt: "pizza-3"
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "recommend-info" },
              _react2.default.createElement(
                "h3",
                null,
                "Should to try"
              ),
              _react2.default.createElement(
                "h2",
                null,
                "Chef Recommend"
              ),
              _react2.default.createElement("img", {
                src: "/img/d-line.png",
                className: "stylish-line",
                alt: "stylish-line"
              }),
              _react2.default.createElement(
                "p",
                null,
                "We love food, lots of different food, just like you. We promise an intimate and relaxed dining experience that offers different to local and foreign patrons ."
              ),
              _react2.default.createElement(
                "p",
                null,
                "Pick up at the restaurant at your convenience, 7 days a week. Available for orders of $100 or more, Monday - Friday until 4P.M. Delivery and Set-Up Fee of $25.."
              ),
              _react2.default.createElement(
                "div",
                { className: "btn-box" },
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn-red" },
                  "Get the Food"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "#", className: "btn-red" },
                  "Others Item"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " dot-box" },
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" })
          )
        )
      );
    }
  }]);

  return Recommend;
}(_react.Component);

exports.default = Recommend;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reservation = function (_Component) {
  _inherits(Reservation, _Component);

  function Reservation() {
    _classCallCheck(this, Reservation);

    var _this = _possibleConstructorReturn(this, (Reservation.__proto__ || Object.getPrototypeOf(Reservation)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Reservation, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "reservation" },
        _react2.default.createElement(
          "div",
          { className: "info" },
          _react2.default.createElement(
            "h3",
            { className: "info__title" },
            "Book a Table"
          ),
          _react2.default.createElement(
            "h2",
            { className: "info__heading" },
            "Make a Reservation"
          ),
          _react2.default.createElement("img", {
            src: "/img/d-line.png",
            className: "info__stylish-line",
            alt: "stylish-line"
          })
        )
      );
    }
  }]);

  return Reservation;
}(_react.Component);

exports.default = Reservation;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Review = function (_Component) {
  _inherits(Review, _Component);

  function Review() {
    _classCallCheck(this, Review);

    var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this));

    _this.state = {
      name: "Sanusi"
    };
    return _this;
  }

  _createClass(Review, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "review" },
        _react2.default.createElement(
          "div",
          { className: "review-star" },
          _react2.default.createElement("i", { className: "fas fa-star" }),
          _react2.default.createElement("i", { className: "fas fa-star" }),
          _react2.default.createElement("i", { className: "fas fa-star" }),
          _react2.default.createElement("i", { className: "fas fa-star" }),
          _react2.default.createElement("i", { className: "fas fa-star" })
        ),
        _react2.default.createElement(
          "div",
          { className: "details-box" },
          _react2.default.createElement(
            "p",
            { className: "text" },
            "Cattle. And was. Fourth be appear. Thing lesser replenish evening called void a, sea, blessed meat fourth called moveth place behold night own night third in they're abundantly"
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", {
              src: "/img/d-line.png",
              className: "stylish-line",
              alt: "stylish-line"
            })
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement("img", {
              src: "/img/review-photo.jpg",
              className: "review-photo",
              alt: "review-photo"
            }),
            _react2.default.createElement(
              "h3",
              null,
              "Joe Ma"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: " dot-box" },
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" }),
            _react2.default.createElement("div", { className: "dot" })
          )
        )
      );
    }
  }]);

  return Review;
}(_react.Component);

exports.default = Review;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TopSection = function (_Component) {
  _inherits(TopSection, _Component);

  function TopSection() {
    _classCallCheck(this, TopSection);

    var _this = _possibleConstructorReturn(this, (TopSection.__proto__ || Object.getPrototypeOf(TopSection)).call(this));

    _this.state = {
      name: 'Sanusi'
    };
    return _this;
  }

  _createClass(TopSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'top-section' },
        _react2.default.createElement(
          'div',
          { className: 'info-box' },
          _react2.default.createElement(
            'h3',
            { className: 'main-heading' },
            ' Welcome to'
          ),
          _react2.default.createElement(
            'h1',
            { className: 'sub-heading' },
            'Risotaere Italian Cuisine'
          ),
          _react2.default.createElement('span', { className: 'line-left' }),
          _react2.default.createElement(
            'p',
            { className: 'title' },
            'HOME OF THE BEST ITALIAN FOOD'
          ),
          _react2.default.createElement(
            'span',
            { className: 'line-right' },
            '---'
          ),
          _react2.default.createElement(
            'div',
            { className: 'btn-topSection' },
            _react2.default.createElement(
              'a',
              { href: '#', className: 'btn-red' },
              'Reserve A Table'
            )
          )
        )
      );
    }
  }]);

  return TopSection;
}(_react.Component);

exports.default = TopSection;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(234);

var _Header2 = _interopRequireDefault(_Header);

var _TopSection = __webpack_require__(239);

var _TopSection2 = _interopRequireDefault(_TopSection);

var _Discover = __webpack_require__(231);

var _Discover2 = _interopRequireDefault(_Discover);

var _Catering = __webpack_require__(230);

var _Catering2 = _interopRequireDefault(_Catering);

var _OurMenu = __webpack_require__(235);

var _OurMenu2 = _interopRequireDefault(_OurMenu);

var _Recommend = __webpack_require__(236);

var _Recommend2 = _interopRequireDefault(_Recommend);

var _Review = __webpack_require__(238);

var _Review2 = _interopRequireDefault(_Review);

var _Experts = __webpack_require__(232);

var _Experts2 = _interopRequireDefault(_Experts);

var _Reservation = __webpack_require__(237);

var _Reservation2 = _interopRequireDefault(_Reservation);

var _Footer = __webpack_require__(233);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {
      name: 'Sanusi'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_TopSection2.default, null),
        _react2.default.createElement(_Discover2.default, null),
        _react2.default.createElement(_Catering2.default, null),
        _react2.default.createElement(_OurMenu2.default, null),
        _react2.default.createElement(_Recommend2.default, null),
        _react2.default.createElement(_Review2.default, null),
        _react2.default.createElement(_Experts2.default, null),
        _react2.default.createElement(_Reservation2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[243]);