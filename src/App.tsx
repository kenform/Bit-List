import './scss/index.scss';
import { useEffect } from 'react';

import { useCoinsStore } from '../src/zustand/store';

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
	const coins = useCoinsStore((state) => state.coins);
	const search = useCoinsStore((state) => state.search);
	const fetchData = useCoinsStore((state) => state.fetchData);

	useEffect(() => {
		const intervalId = setInterval(fetchData, 5000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<Assets search={search} coins={coins} />
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
