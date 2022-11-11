import './App.css';
import { Component } from 'react';
import CardList from './card-list/card-list.component';
import SearchBox from './search-box/search-box.component';

class App extends Component {
	constructor() {
		console.log('constructor');
		super();
		// this.state = {
		// 	monsters: [
		// 		{
		// 			name: 'Linda',
		// 			id: '1',
		// 		},
		// 		{
		// 			name: 'Frank',
		// 			id: '2',
		// 		},
		// 		{
		// 			name: 'Jacky',
		// 			id: '3',
		// 		},
		// 	],
		// };
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}

	onSearchChange = (event) => {
		console.log(event);

		this.setState(() => {
			return { searchField: event.target.value.toLocaleLowerCase() };
		});
	};

	render() {
		console.log('render');
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});
		return (
			<div className='App'>
				<h1 className='app-title'>Monsters Rolodex</h1>
				<SearchBox
					className='search-box'
					onSearchChange={onSearchChange}
					placeholder='search monsters'
				/>
				{/* {filteredMonsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})} */}
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

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
