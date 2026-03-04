import React from 'react';

const withLoader = function (message) {
	return function (WrappedComponent) {
		return class extends React.Component {
			render() {
				const { isLoaded } = this.props;
				if (isLoaded) {
					return <WrappedComponent {...this.props} />;
				}
				return <div>{message}</div>;
			}
		};
	};
};
export default withLoader;
