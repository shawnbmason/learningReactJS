import React from 'react';
import ReactDOM from 'react-dom';

// This is the original function expression
export class NewFriend extends React.Component {
	render() {
		return (
      <div>
        <img src={this.props.src} />
      </div>
    );
	}
}

// Function Components and Props
export const NewFriend = (props) => {
  	return (
      <div>
        <img src={props.src} />
      </div>
    );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

