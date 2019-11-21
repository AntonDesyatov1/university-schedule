import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commandValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      command: this.state.commandValue
    };
    fetch("http://localhost:9000/testAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify(payload)
    });
    //.then(res => res.text())
  }

  handleInputChange(e) {
    this.setState({
      commandValue: e.target.value
    });
  }

  render() {
    return (
      <article>
        <h3>Test your command</h3>
        <form onSubmit={this.handleSubmit}>
          Type in your command:{" "}
          <input type="text" onChange={this.handleInputChange} />
          <input type="Submit" />
        </form>
      </article>
    );
  }
}

export default Input;
