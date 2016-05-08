import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCount: false,
    };
  }
  render() {
    const { description, updateDescription, updateCanNotSubmit } = this.props;

    const charLimit = 255;

    const charCount = this.state.showCount
      ? (<div>{'Characters left: ' + (charLimit - this.refs.description.innerText.length)}</div>)
      : null;

    return (
      <div className="profile-section">

        <div className="profile-title">About Me</div>

        <div
          contentEditable="true"
          className="description"
          ref="description"
          onKeyUp={() => {
            updateDescription(this.refs.description.innerText);
            updateCanNotSubmit(charLimit - this.refs.description.innerText.length < 0);
          }}
          onKeyDown={(e) => {
            if (e.which === 13) {
              e.preventDefault();
              this.refs.description.blur();
            }
          }}
          onFocus={() => {
            this.setState({
              showCount: true,
            });
          }}
          onBlur={() => {
            if (charLimit - this.refs.description.innerText.length >= 0) {
              this.setState({
                showCount: false,
              });
            }
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
