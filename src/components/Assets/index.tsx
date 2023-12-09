import { FC } from 'react';
import Asset from '../Asset';

const Assets: FC = ({ coins }) => {
	return (
		<div className='assets__body'>
			{coins.map((coin) => {
				return (
					<Asset
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
