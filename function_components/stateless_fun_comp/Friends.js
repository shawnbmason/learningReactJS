import React from 'react';
import ReactDOM from 'react-dom';

// original way
export class Friend extends React.Component {
  render() {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
  }
};

// stateless functional way
export const Friend = () => {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
};

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);