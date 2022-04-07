import React from "react";
import Home from "@pages/Home";
import Birthdayselector from "@components/Birthdayselector";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: "capricorn",
    };

    this.setSign = this.setSign.bind(this);
  }

  setSign(sign) {
    this.setState({
      sign,
    });
  }

  render() {
    const { sign } = this.state;
    return (
      <div className="App">
        <Home />

        <Birthdayselector sign={sign} setSign={this.setSign} />
      </div>
    );
  }
}

export default App;
