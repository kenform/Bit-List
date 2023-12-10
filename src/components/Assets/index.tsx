import { FC } from 'react';
import Coin from '../Coin';
import {  useState } from 'react';
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

const Assets: FC<typeAssetsProps> = ({ coins, search }) => {
	const [visible, setVisible] = useState(6)

	const showMoreItems = () =>{
		 setVisible((prev)=>prev +4)
	}
	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())||
		coin.symbol.toLowerCase().includes(search.toLowerCase()),
	);
	return (
		<section className='page__assets assets section'>
			<div className='assets__container'>
				<div className='assets__content '>
					<div className='assets__header'>
						<div className='assets__items grid'>
							<div className='item-assets__column asset assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Asset</p>
								</div>
							</div>

							<div className='item-assets__column price assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Price</p>
								</div>
							</div>

							<div className='item-assets__column change assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Change 24h%</p>
								</div>
							</div>

							<div className='item-assets__column volume assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Volume</p>
								</div>
							</div>
						</div>
					</div>
					<div className='assets__body'>

						{filteredCoins.slice(0,visible).map((coin) => {
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
				</div>
					
					<button onClick={showMoreItems} type='submit' className='button assets__all-assets'>
						All assets
					</button>
			</div>
		</section>
	);
};

export default Assets;
