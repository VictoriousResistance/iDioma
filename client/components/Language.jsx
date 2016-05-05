import React from 'react';

const Language = ({ name, level }) => (
  <div className="language">
    <span>{name + ' (' + level + ')'}</span>
  </div>
);

export default Language;