import React from 'react';

const Profile = ({ profile }) => (
  <div>
    <div>{profile.firstName + ' ' + profile.lastName}</div>
    <div>{profile.canTeach}</div>
    <div>{profile.willLearn}</div>
    <div>{profile.description}</div>
  </div>
);

export default Profile;
