import Button from '../base/Button';
import Navbar from '../base/Navbar';

const Footer: React.FC = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__main main-footer'>
					<div className='main-footer__contacts'>
						<div className='main-footer__logo'>
							<img src='img/footer/logo/logo.svg' alt='footer logo' />
						</div>
						<div className='main-footer__socials'>
							<div className='social'>
								<a href='#' className='social__item'>
									<img src='img/footer/socials/telegram.svg' alt='Instagram' />
								</a>
								<a href='#' className='social__item'>
									<img src='img/footer/socials/facebook.svg' alt='Facebook' />
								</a>
								<a href='#' className='social__item'>
									<img src='img/footer/socials/twitter.svg' alt='Twitter' />
								</a>
							</div>
						</div>
						<div className='main-footer__actions'>
							<Button modifier='gray' text='Register' />
							<Button modifier='blue' text='Log in' />
						</div>
					</div>

					<div className='footer__menu menu-footer'>
						<Navbar modifier='_footer' />
					</div>
				</div>
				<div className='footer__bottom'>
					<div className='footer__copy'>© Bitlist© All Rights Reserved</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
