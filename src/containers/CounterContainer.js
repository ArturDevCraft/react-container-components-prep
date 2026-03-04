import React from 'react';
import Counter from '../components/Counter';
import withLoader from '../hoc/withLoader';

const CounterWithLoader = withLoader('Loading')(Counter);

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
			<CounterWithLoader
				isLoaded={this.state.isLoaded}
				onIncrement={this.increment}
				clicksNumber={this.state.clicksNumber}
			>
				{this.state.clicksNumber}
			</CounterWithLoader>
		);
	}
}

export default CounterContainer;
