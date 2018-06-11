import React from 'react';
import { Link } from 'react-router-dom';
import ErrorContainer from './styled/ErrorContainer';

// NoMatch has the same styles as the Error component
// so I just resused the ErrorContainer styles.
// I think the naming still works, 404 is an error.
const NoMatch = () => (
  <ErrorContainer>
    <p className="title">Whoops!</p>
    <p>The page you are looking for does not exist.</p>
    <Link to="/">Return Home</Link>
  </ErrorContainer>
);

export default NoMatch;
