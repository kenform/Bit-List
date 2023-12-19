import { FC } from 'react';
import { typeCoinProps } from '../../zustand/types';

const Coin: FC<typeCoinProps> = ({
	img,
	name,
	symbol,
	price,
	change24h,
	change7d,
	change30d,
	change1year,
}) => {
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
					<p>$ {price.toFixed(5).toLocaleString()}</p>
				</div>
			</div>

			<div className='item-assets__column change assets-item'>
				{change24h < 0 ? (
					<div className='assets-item__change red'>
						<p>{change24h.toFixed(2)} %</p>
					</div>
				) : (
					<div className='assets-item__change green'>
						<p>{change24h.toFixed(2)} %</p>
					</div>
				)}
			</div>

			<div className='item-assets__column change assets-item'>
				<div className='assets-item__volume'>
					{change7d < 0 ? (
						<div className='assets-item__change red'>
							<p>{change7d.toFixed(2)} %</p>
						</div>
					) : (
						<div className='assets-item__change green'>
							<p>{change7d.toFixed(2)} %</p>
						</div>
					)}
				</div>
			</div>
			<div className='item-assets__column change assets-item'>
				<div className='assets-item__volume'>
					{change30d < 0 ? (
						<div className='assets-item__change red'>
							<p>{change30d.toFixed(2)} %</p>
						</div>	
					) : (
						<div className='assets-item__change green'>
							<p>{change30d.toFixed(2)} %</p>
						</div>
					)}
				</div>
			</div>
			<div className='item-assets__column change assets-item'>
				<div className='assets-item__volume'>
					{change1year < 0 ? (
						<div className='assets-item__change red'>
							<p>{change1year.toFixed(2)} %</p>
						</div>	
					) : (
						<div className='assets-item__change green'>
							<p>{change1year.toFixed(2)} %</p>
						</div>
					)}
				</div>
			</div>

		</div>
	);
};

export default Coin;
