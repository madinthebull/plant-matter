import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => <div className="mx-auto">{title}</div>;

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
