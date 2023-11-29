import './scss/index.scss';

import Header from './components/Header';
import Email from './components/base/Email';
import Footer from './components/Foooter';

function App() {
	return (
		<div className='wrapper'>
			<Header />
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
