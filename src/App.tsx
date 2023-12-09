import './scss/index.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Email from './components/base/Email';
import Footer from './components/Foooter';
import Assets from './components/Assets';

// busd crypto coin icons were not displayed on coingecko api
// const imgList: string[] = [
// 	'img/icons/crypto-coins/1.svg',
// 	'img/icons/crypto-coins/2.svg',
// 	'img/icons/crypto-coins/3.svg',
// 	'img/icons/crypto-coins/4.svg',
// 	'img/icons/crypto-coins/5.svg',
// 	'img/icons/crypto-coins/6.svg',
// ];

function App() {


	const [search, setSearch] = useState('');
	const [coins, setCoins] = useState<
		{
			id: string;
			name: string;
			symbol: string;
			current_price: number;
			price_change_percentage_24h: number;
			market_cap: number;
		}[]
	>([]);



	async function fetchData() {
		try {
			const assets = [
				'1inch',
				'bitcoin',
				'ethereum',
				'binancecoin',
				'binance-usd',
				'matic-network',
			];
			const promises = assets.map((asset) =>
				axios.get(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${asset}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-X7spoMHCQMFNK4Wd63SWD5bR&precision=2`,
				),
			);
			const responses = await Promise.all(promises);

			//! fix type coinsData
			const coinsData = responses.map((response) => {
				return response.data[0];
			});
			setCoins(coinsData);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		const intervalId = setInterval(fetchData, 1000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='wrapper'>
			<Header setSearch={setSearch} />
			<section className='page__intro intro section'>
				<div className='main-block__icons icons-main-block'>
					<div className='icons-main-block__item icons-main-block__item_1'>
						<img src='img/lights/Intro/1.svg' alt='' />
					</div>
					<div className='icons-main-block__item icons-main-block__item_2'>
						<img src='img/lights/Intro/2.svg' alt='' />
					</div>
				</div>
				<div className='intro__container'>
					<div className='intro__content '>
						<div className='intro__body '>
							<div className='intro__button'>
								<a href='#'>
									<img
										className='button dezentralized'
										src='img/icons/dezentralized-button.svg'
										alt=''
									/>
								</a>
							</div>
							<div className='intro__title title --72'>
								<h1>Buy, trade and store cryptocurrencies</h1>
							</div>
						</div>
						<div className='intro__image'>
							<img src='img/graph.svg' alt='graph crypto transactions' />
						</div>
					</div>
					<Email modifier='intro' />
				</div>
			</section>

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
										<p>Change</p>
									</div>
								</div>

								<div className='item-assets__column volume assets-item'>
									<div className='assets-item__label gray-text'>
										<p>Volume</p>
									</div>
								</div>
							</div>
						</div>

						<Assets search={search} coins={coins} />
					</div>
					<div className='assets__all-assets'>
						<button type='submit' className='button'>
							All assets
						</button>
					</div>
				</div>
			</section>

			<section className='page__brand brand section'>
				<div className='brand__container'>
					<div className='main-block__icons icons-main-block'>
						<div className='icons-main-block__item icons-main-block__item_6'>
							<img src='img/lights/Brand/1.png' alt='' />
						</div>

						<div className='icons-main-block__item icons-main-block__item_7'>
							<img src='img/lights/Brand/2.svg' alt='' />
						</div>
					</div>
					<div className='brand__content'>
						<div className='brand__body'>
							<div className='brand__title title --48'>
								<h4>Bitles is your reliable guide in the world of digital assets</h4>
							</div>
							<div className='brand__text text'>
								<p>
									The Bitles app is a comprehensive solution for trading digital assets. Buy and
									sell cryptocurrencies quickly and openly, comfortably and safely from anywhere in
									the world.
								</p>
							</div>
						</div>
						<div className='brand__logo-images'>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/1.svg' alt='' />
							</div>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/2.svg' alt='' />
							</div>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/3.svg' alt='' />
							</div>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/4.svg' alt='' />
							</div>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/5.svg' alt='' />
							</div>
							<div className='brand__logo-item'>
								<img src='img/exchange-logos/6.svg' alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='page__about about section'>
				<div className='about__container'>
					<div className='about__body'>
						<div className='about__content-cards about-cards'>
							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/credit-card-lock.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>User Safe Asset Fund (SAFU)world.</h4>
								</div>
								<div className='item-cards__text text'>
									<p>
										Bitlist holds 10% of all trading fees in a protected asset fund to protect a
										portion of user funds.
									</p>
								</div>
							</div>
							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/eye.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>User Access Control</h4>
								</div>
								<div className='item-cards__text text'>
									<p>
										Personalized access control allows you to limit the devices and addresses that
										can access your account.
									</p>
								</div>
							</div>
							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/lock.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>Improved data encryption</h4>
								</div>
								<div className='item-cards__text text'>
									<p>
										Your transaction data is encrypted - only you can access your personal data.
									</p>
								</div>
							</div>

							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/message.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>Support 24/7</h4>
								</div>
								<div className='item-cards__text text'>
									<p>24/7 real-time support is always ready to help you.</p>
								</div>
							</div>
							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/rocket.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>Fast replineshments and withdraws</h4>
								</div>
								<div className='item-cards__text text'>
									<p>Transfer funds to and from your accounts quickly and easily.</p>
								</div>
							</div>
							<div className='about-cards__item item-cards'>
								<div className='item-cards__icon'>
									<img src='img/icons/about/coins-swap.svg' alt='' />
								</div>
								<div className='item-cards__title'>
									<h4>Comfortable P2P platform</h4>
								</div>
								<div className='item-cards__text text'>
									<p>
										Top up your account in any convenient way on the P2P platform at favorable
										rates.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='page__register section register'>
				<div className='main-block__icons icons-main-block'>
					<div className='icons-main-block__item icons-main-block__item_3'>
						<img src='img/lights/Email/1.png' alt='' />
					</div>
					<div className='icons-main-block__item icons-main-block__item_4'>
						<img src='img/lights/Email/2.png' alt='' />
					</div>
					<div className='icons-main-block__item icons-main-block__item_5'>
						<img src='img/lights/Email/3.png' alt='' />
					</div>
				</div>
				<div className='register__container'>
					<div className='register__content'>
						<div className='register__body'>
							<div className='register__text title --48'>
								<p>Register your account now and start to trade</p>
							</div>
							<Email modifier='' />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default App;

// A1758144-0948-40AB-B513-953637492FBC

// const [portfolio, setPortfolio] = useState([]);

// useEffect(() => {
// 	async function fetchExchangeRates() {
// 		const assets = ['BTC', 'ETH', 'XRP'];
// 		const promises = assets.map((asset) =>
// 			axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=A1758144-0948-40AB-B513-953637492FBC`),
// 		);
// 		const responses = await Promise.all(promises);
// 		const exchangeRates = responses.reduce((acc, response, index) => {
// 			acc[assets[index]] = response.data.rate;
// 			return acc;
// 		}, {});
// 		setPortfolio(exchangeRates);
// 	}
// 	fetchExchangeRates();

// 	// Fetch exchange rates every 5 seconds
// 	const intervalId = setInterval(fetchExchangeRates, 5000);

// 	// Clean up the interval when the component unmounts to avoid memory leaks
// 	return () => clearInterval(intervalId);
// }, []);

// axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=1&x_cg_demo_api_key=CG-X7spoMHCQMFNK4Wd63SWD5bR')
