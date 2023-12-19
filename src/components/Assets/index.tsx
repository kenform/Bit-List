import { FC } from 'react';
import Coin from '../Coin';
import { useState } from 'react';
import { typeCoinsData } from '../../zustand/types';
import { useCoinsStore } from '../../zustand/store';
import Skeleton from './Skeleton';
// img={coin.image}
// img={imgList[index]}

const Assets: FC<typeCoinsData> = ({ coins, search }) => {
	const isMountedState = useCoinsStore((state) => state.isMounted);
	console.log(isMountedState);

	const [visible, setVisible] = useState(6);
	const showMoreItems = () => {
		setVisible((prev) => prev + 4);
	};
	const filteredCoins = coins.filter(
		(coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase()) ||
			coin.symbol.toLowerCase().includes(search.toLowerCase()),
	);
	const assets = filteredCoins.slice(0, visible).map((coin) => {
		return (
			<Coin
				key={coin.id}
				img={coin.image}
				name={coin.name}
				symbol={coin.symbol}
				price={coin.current_price}
				change24h={coin.price_change_percentage_24h}
				change7d={coin.price_change_percentage_7d_in_currency}
				change30d={coin.price_change_percentage_30d_in_currency}
				change1year={coin.price_change_percentage_1y_in_currency}
		
			/>
		);
	});
	const skeletons = [...new Array(1)].map((_, index) => <Skeleton key={index} />);

	return (
		<section className='page__assets assets section'>
			<div className='assets__container'>
				<div className='main-block__icons icons-main-block'>
					<div className='icons-main-block__item icons-main-block__item_8'>
						<img src='img/lights/Assets/1.png' alt='' />
					</div>
				</div>
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
									<p>Change 7d%</p>
								</div>
							</div>
							<div className='item-assets__column volume assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Change 30d%</p>
								</div>
							</div>
														<div className='item-assets__column volume assets-item'>
								<div className='assets-item__label gray-text'>
									<p>Change 1 year%</p>
								</div>
							</div>
						</div>
					</div>
					<div className='assets__body'>{isMountedState ? assets : skeletons}</div>
				</div>

				<button onClick={showMoreItems} type='submit' className='button assets__all-assets'>
					All assets
				</button>
			</div>
		</section>
	);
};

export default Assets;
