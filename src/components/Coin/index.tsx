import { FC } from 'react';
type typeCoinProps = {
	img: string;
	name: string;
	symbol: string;
	price: number;
	change: number;
	marketCap: number;
};
const Coin: FC<typeCoinProps> = ({ img, name, symbol, price, change, marketCap }) => {
	return (
		<div className='assets__items grid'>
			<div className='item-assets__column asset assets-item'>
				<div className='assets-item__description'>
					<div className='assets-item__icon'>
						<img src={img} alt='' />
					</div>
					<div className='assets-item__name'>
						<p>{name}</p>
					</div>
					<div className='assets-item__symbol gray-text'>
						<p>{symbol}</p>
					</div>
				</div>
			</div>

			<div className='item-assets__column price assets-item'>
				<div className='assets-item__price'>
					<p>$ {price.toFixed(5).toLocaleString('')}</p>
				</div>
			</div>

			<div className='item-assets__column change assets-item'>
				{change < 0 ? (
					<div className='assets-item__change red'>
						<p>{change.toFixed(2)} %</p>
					</div>
				) : (
					<div className='assets-item__change green'>
						<p>{change.toFixed(2)} %</p>
					</div>
				)}
			</div>

			<div className='item-assets__column volume assets-item'>
				<div className='assets-item__volume'>
					<p>{((marketCap/1000000).toFixed(2)).toLocaleString()} M</p>
				</div>
			</div>

			<div className='item-assets__button'>
				<a href='#'>Trade</a>
			</div>
		</div>
	);
};

export default Coin;
