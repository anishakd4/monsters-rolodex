import { Monster } from '../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
	monsters: Monster[];
};

const CardList = (props: CardListProps) => {
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
