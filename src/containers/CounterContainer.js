import React from 'react';
import Counter from '../components/Counter';
import withLoader from '../hoc/withLoader';
import withOpacity from '../hoc/withOpacity';

const CounterWithLoader = withLoader('Loading')(Counter);
const CounterWithOpacity = withOpacity(0.1, 5)(Counter);
export class CounterContainer extends React.Component {
	state = { clicksNumber: 0, isLoaded: false };
	increment = () => {
		const { clicksNumber } = this.state;
		this.setState({
			clicksNumber: clicksNumber + 1,
		});
	};

	componentDidMount() {
		this.id = setTimeout(() => this.setState({ isLoaded: true }), 3000);
	}
	componentWillUnmount() {
		clearTimeout(this.id);
	}
	render() {
		return (
			// <CounterWithLoader
			// 	isLoaded={this.state.isLoaded}
			// 	onIncrement={this.increment}
			// 	clicksNumber={this.state.clicksNumber}
			// >
			// 	{this.state.clicksNumber}
			// </CounterWithLoader>
			<CounterWithOpacity
				onIncrement={this.increment}
				clicksNumber={this.state.clicksNumber}
			>
				{this.state.clicksNumber}
			</CounterWithOpacity>
		);
	}
}

export default CounterContainer;
