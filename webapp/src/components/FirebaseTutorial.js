import React, { Component } from "react";
class FirebaseTutorial extends Component {
  render() {
    return (
      <div className="div-tutorial">
        <p className="tutorial-step">
          {this.props.content} <a className = "tutorial-link" href = {this.props.url}> {this.props.nameUrl}</a>
        </p>
        <img className = "img-tutorial" src = {this.props.path} alt = {this.props.imgName}/>
      </div>
    );
  }
}

export default FirebaseTutorial;
