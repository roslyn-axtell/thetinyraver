import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
var listOfImages = [];

class Header extends React.Component {
  importAll(i) {
    return i.keys().map(i);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("./productImages", false, /\.(png|jpe?g|svg)$/)
    );
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">
                thetinyraver
              </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">HOME</a>
                </li>
              </ul>
              <p class="navbar-text">Welcome to The Tiny Raver!</p>
              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-search"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-shopping-cart"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="jumbotron">
          <div class="container text-center">
            <div id="logo-image">
              <img
                src="logo/thetinyraverlogotransparent.png"
                class="img-responsive"
                style={{ width: "25%", margin: "auto" }}
                alt="Image"
              ></img>
            </div>
          </div>
        </div>
        <div id="home-filters">
          <span id="shop-categories">
            SHOP <span class="caret"></span>
          </span>
          <span id="themed-categories">
            THEMED <span class="caret"></span>
          </span>
          <span id="features-categories">
            FEATURES <span class="caret"></span>
          </span>

          <div id="shop">
            <button type="button" class="btn btn-link">
              ALL
            </button>
            <button type="button" class="btn btn-link">
              WALL ART
            </button>
            <button type="button" class="btn btn-link">
              JEWELRY
            </button>
            <button type="button" class="btn btn-link">
              SHOES
            </button>
            <button type="button" class="btn btn-link">
              EARRINGS
            </button>
            <button type="button" class="btn btn-link">
              NECKLACES
            </button>
          </div>

          <div id="themed">
            <button type="button" class="btn btn-link">
              ILLENIUM
            </button>
            <button type="button" class="btn btn-link">
              SLANDER
            </button>
            <button type="button" class="btn btn-link">
              EXCISION
            </button>
          </div>

          <div id="features">
            <button type="button" class="btn btn-link">
              CUTE
            </button>
            <button type="button" class="btn btn-link">
              SPOOKY
            </button>
            <button type="button" class="btn btn-link">
              BOLD
            </button>
          </div>
        </div>

        <div class="container">
          <div class="row">
            {listOfImages.map((image, index) => (
              <div class="col">
                <div class="product-image">
                  <div class="panel-body">
                    <img
                      key={index}
                      src={image.default}
                      alt={image.default}
                    ></img>
                  </div>
                  <div class="card-footer">{image.default}</div>
                  <div class="card-footer price">$15</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <footer class="container-fluid text-center">
          <form class="form-inline">
            Subscribe:
            <input
              type="email"
              class="form-control"
              size="50"
              placeholder="Email Address"
            ></input>
            <button type="button" class="btn btn-danger">
              Sign Up
            </button>
          </form>
        </footer>
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Home />, document.getElementById("root"));
