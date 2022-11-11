import { Component } from 'react';
import './search-box.style.css';

const SearchBox = (props) => {
	return (
		<input
			className={props.className}
			type='search'
			placeholder={props.placeholder}
			onChange={props.onSearchChange}
		/>
	);
};
// class SearchBox extends Component {
// 	render() {
// 		return (
// 			<input
// 				className={this.props.className}
// 				type='search'
// 				placeholder={this.props.placeholder}
// 				onChange={this.props.onSearchChange}
// 			/>
// 		);
// 	}
// }

export default SearchBox;
