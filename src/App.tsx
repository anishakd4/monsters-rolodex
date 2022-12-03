import { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	console.log('render');
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchField(event.target.value.toLocaleLowerCase());
	};

	useEffect(() => {
		console.log('useEffect fetch');
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => {
		// 		return response.json();
		// 	})
		// 	.then((users) => {
		// 		setMonsters(users);
		// 	});

		const fetchUsers = async () => {
			// const users = await getData<Array<Monster>>(
			// 	'https://jsonplaceholder.typicode.com/users'
			// );
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};
		fetchUsers();
	}, []);

	useEffect(() => {
		console.log('useEffect setFilteredMonsters');
		setFilteredMonsters(
			monsters.filter((monster) => {
				return monster.name.toLocaleLowerCase().includes(searchField);
			})
		);
	}, [monsters, searchField]);

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className='search-box'
				onSearchChange={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		console.log('constructor');
// 		super();
// 		// this.state = {
// 		// 	monsters: [
// 		// 		{
// 		// 			name: 'Linda',
// 		// 			id: '1',
// 		// 		},
// 		// 		{
// 		// 			name: 'Frank',
// 		// 			id: '2',
// 		// 		},
// 		// 		{
// 		// 			name: 'Jacky',
// 		// 			id: '3',
// 		// 		},
// 		// 	],
// 		// };
// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		console.log('componentDidMount');
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((users) => {
// 				this.setState(
// 					() => {
// 						return { monsters: users };
// 					},
// 					() => {
// 						console.log(this.state);
// 					}
// 				);
// 			});
// 	}

// 	onSearchChange = (event) => {
// 		console.log(event);

// 		this.setState(() => {
// 			return { searchField: event.target.value.toLocaleLowerCase() };
// 		});
// 	};

// 	render() {
// 		console.log('render');
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});
// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox
// 					className='search-box'
// 					onSearchChange={onSearchChange}
// 					placeholder='search monsters'
// 				/>
// 				{/* {filteredMonsters.map((monster) => {
// 					return <h1 key={monster.id}>{monster.name}</h1>;
// 				})} */}
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

// function App() {
// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<img src={logo} className='App-logo' alt='logo' />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className='App-link'
// 					href='https://reactjs.org'
// 					target='_blank'
// 					rel='noopener noreferrer'>
// 					Learn React
// 				</a>
// 			</header>
// 		</div>
// 	);
// }

export default App;
