import { ChangeEvent } from 'react';
import './search-box.style.css';

//const name: string = '123123123';
//const name: string = 1233;
// const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
// 	return true;
// };
//const func: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

// interface ISearchBoxProps extends IChangeHandler {
// 	className: string;
// 	placeholder?: string;
// }

// interface ISearchBoxProps {
// 	onSearchChange: () => void;
// }

// interface IChangeHandler {
// 	onSearchChange: () => void;
// }

// type CanadianAddress = {
// 	street: string;
// 	province: string;
// };

// type USAddress = {
// 	street: string;
// 	state: string;
// };

// type ItalianAddress = {
// 	street: string;
// 	region: string;
// };

// type Address = CanadianAddress | USAddress | ItalianAddress;

// const address: Address = {
// 	street: 'aasdasd',
// 	region: 'sdfsfd',
// };

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	//onSearchChange: ChangeEventHandler<HTMLInputElement>;
	onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = (props: SearchBoxProps) => {
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
