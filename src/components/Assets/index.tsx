import { FC } from 'react';
import Coin from '../Coin';

// img={coin.image}
// img={imgList[index]}
type typeAssetsProps = {
	coins: {
		id: string;
		image: string;
		name: string;
		symbol: string;
		current_price: number;
		price_change_percentage_24h: number;
		market_cap: number;
	}[];
	imgList: string[];
};

const Assets: FC<typeAssetsProps> = ({ coins,search}) => {
	

		const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase()),
	);
	return (
		<div className='assets__body'>

			{filteredCoins.map((coin) => {
				return (
					<Coin
						key={coin.id}
						img={coin.image}
						name={coin.name}
						symbol={coin.symbol}
						price={coin.current_price}
						change={coin.price_change_percentage_24h}
						marketCap={coin.market_cap}
					/>
				);
			})}
		</div>
	);
};


export default Assets;
