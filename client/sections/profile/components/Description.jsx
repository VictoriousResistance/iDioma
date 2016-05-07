import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCount: false,
    };
  }
  render() {
    const { description, updateDescription } = this.props;
    const charLimit = 100;
    var charCount = this.state.showCount ? (<div>{ 'Characters left: ' + (charLimit - this.refs.description.innerText.length) }</div>) : null;
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
            if (this.refs.description.innerText.length >= charLimit && e.which !== 8) {
              e.preventDefault();
            }
          }}
          onPaste={(e) => {
            e.preventDefault();
          }}
          onFocus={() => {
            this.setState({
              showCount: true,
            });
          }}
          onBlur={() => {
            this.setState({
              showCount: false,
            });
          }}
        >
          {description}
        </div>
        
        {charCount}

      </div>
    );
  }
}


export default Description;
