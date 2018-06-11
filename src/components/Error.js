import React from 'react';
import PropTypes from 'prop-types';
import ErrorContainer from './styled/ErrorContainer';

// A very basic error message Component. Accepts a message or
// displays a generic message if no message is passed in.
const Error = ({ message }) => (
  <ErrorContainer>
    <p className="title">Whoops!</p>
    <p>{message}</p>
  </ErrorContainer>
);

Error.defaultProps = {
  message: 'An Error as occurred. Please refresh the page',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
