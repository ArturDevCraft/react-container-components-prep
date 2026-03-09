import React from 'react';

const withOpacity = function (step, frames) {
	return function (WrappedComponent) {
		return class Animation extends React.Component {
			state = { opacity: 0 };
			componentDidMount() {
				this.id = setInterval(() => {
					this.setState(({ opacity }) => {
						const nextOpacity = opacity + step;
						if (nextOpacity < 1) {
							return { opacity: nextOpacity };
						} else {
							clearInterval = this.id;
							return { opacity: 1 };
						}
					});
				}, 1000 / frames);
			}

			componentWillUnmount() {
				clearInterval(this.id);
			}
			render() {
				const { opacity } = this.state;
				return (
					<div style={{ opacity: opacity }}>
						<WrappedComponent {...this.props} />
					</div>
				);
			}
		};
	};
};

export default withOpacity;
