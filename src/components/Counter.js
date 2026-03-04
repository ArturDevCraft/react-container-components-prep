import React from 'react';

export class Counter extends React.Component {
	render() {
		const { clicksNumber, onIncrement } = this.props;
		return <button onClick={onIncrement}>{clicksNumber}</button>;
	}
}

export default Counter;
