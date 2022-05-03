import React from 'react';
import './SingleComponents.css';

export const Button = (props) => {
	return (
		<button
			className={`${props.className} btn-component`}
			onClick={props.onClick}>
			{props.name}
		</button>
	);
};

export const OneLineText = (props) => {
	return (
		<p className={`${props.className} oneLineText-component`}>{props.text}</p>
	);
};
