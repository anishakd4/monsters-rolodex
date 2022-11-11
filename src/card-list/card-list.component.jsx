import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = (props) => {
	const { monsters } = props;
	return (
		<div className='card-list'>
			{monsters.map((monster) => {
				const { id } = monster;
				return <Card monster={monster} key={id} />;
			})}
		</div>
	);
};
// class CardList extends Component {
// 	render() {
// 		const { monsters } = this.props;
// 		return (
// 			<div className='card-list'>
// 				{monsters.map((monster) => {
// 					const { id } = monster;
// 					return <Card monster={monster} key={id} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
