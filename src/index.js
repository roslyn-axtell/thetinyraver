import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Header extends React.Component {
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
                  <a href="#">Home</a>
                </li>
              </ul>
              <p class="navbar-text">Welcome to thetinyraver!</p>
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
            <h1>Online Store</h1>
            <p>Mission, Vission & Values}</p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="panel panel-primary">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="panel panel-danger">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="panel panel-success">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="panel panel-primary">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="panel panel-primary">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="panel panel-primary">
                <div class="panel-heading">BLACK FRIDAY DEAL</div>
                <div class="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    class="img-responsive"
                    style={{ width: "100%" }}
                    alt="Image"
                  ></img>
                </div>
                <div class="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <footer class="container-fluid text-center">
          <p>Online Store Copyright</p>
          <form class="form-inline">
            Get deals:
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
  // renderSquare(i) {
  //   return <Square />;
  // }

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
