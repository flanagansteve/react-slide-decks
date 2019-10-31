import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Slides from './Slides';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slidenum : parseInt(this.props.location.pathname.substring(1)) || 0
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    document.addEventListener("click", this.handleClick);
    document.onkeydown = this.handleKey
  }

  handleKey(e) {
    // Using a switch in case we want to add space bar, enter key, etc...
    switch (e.keyCode) {
      case 37:
        if (this.state.slidenum > 0)
          this.prevSlide()
        break;
      case 39:
        if (this.state.slidenum < 6)
          this.nextSlide()
        break;
      case 13:
        this.submit();
    }
  }

  handleClick(e) {
    if (!(this.state.slidenum == 6 && e.clientY > window.innerHeight * .6)) {
      if (e.clientX > (window.innerWidth / 2)) {
        if (this.state.slidenum < 6) {
          this.nextSlide()
        }
      } else if (e.clientX < (window.innerWidth / 2)) {
        if (this.state.slidenum > 0) {
          this.prevSlide()
        }
      }
    }
  }

  nextSlide() {
    this.props.history.push("" + (this.state.slidenum + 1))
    this.setState({slidenum : this.state.slidenum + 1})
  }

  prevSlide() {
    this.props.history.push("" + (this.state.slidenum - 1))
    this.setState({slidenum : this.state.slidenum - 1})
  }

  submit() {
    console.log(document.getElementById("email-input").value)
    document.getElementById("email-signup").innerHTML = "<h3>Thank you! You'll hear from us soon</h3>"
  }

  render() {
    return (
      <div>
        <Router>
          <Slides submit = {this.submit} slidenum = {this.state.slidenum}/>
        </Router>
      </div>
    );
  }
}

export default withRouter(App)
