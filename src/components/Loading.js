import React from 'react';
import Loader from './styled/Loader';

const Loading = () => (
  <Loader>
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  </Loader>
);

export default Loading;
