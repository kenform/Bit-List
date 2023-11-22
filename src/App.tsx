import './scss/index.scss';

import Header from './components/Header';
import Email from './components/Email';

function App() {
	return (
		<>
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
				<div className='intro __container'>
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
					<Email />

					{/* <div className='intro__light_1'>
							<img src='img/lights/Intro/1.svg' alt='' />
						</div>
						<div className='intro__light_2'>
							<img src='img/lights/Intro/2.svg' alt='' />
						</div> */}
				</div>
			</section>
		</>
	);
}

export default App;
