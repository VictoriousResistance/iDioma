import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { description, updateDescription } = this.props;
    return (
      <div className="profile-section">
      
        <div className="profile-title">About Me</div>

        <div
          contentEditable="true"
          ref="words"
          onKeyUp={() => {
            updateDescription(this.refs.words.innerText);
          }}
        >
          {description}
        </div>

      </div>
    );
  }
}


export default Description;
