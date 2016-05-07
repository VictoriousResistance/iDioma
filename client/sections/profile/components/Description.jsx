import React, { Component } from 'react';

class Description extends Component {
  render() {
    const { description, updateDescription } = this.props;
    return (
      <div className="profile-section">

        <div className="profile-title">About Me</div>

        <div
          contentEditable="true"
          className="description"
          ref="description"
          onKeyUp={() => {
            updateDescription(this.refs.description.innerText);
          }}
          onKeyDown={(e) => {
            if (e.which === 13) {
              e.preventDefault();
              this.refs.description.blur();
            }
            if (this.refs.description.innerText.length > 100 && e.which !== 8) {
              e.preventDefault();
            }
          }}
          onPaste={(e) => {
            if (this.refs.description.innerText.length > 100) {
              e.preventDefault();
            }
          }}
        >
          {description}
        </div>

      </div>
    );
  }
}


export default Description;
