import React from 'react';
import Burger from '../base/Burger';
import Button from '../base/Button';
import Search from '../Search';

const Header: React.FC = () => {
	
	return (
		<header className='header'>
			<div className='header__container'>
				<a href='/' className='header__logo '>
					<div className='logo-icon'>
						<img src='img/logo/logo-icon.svg' alt='Logo BitList' />
					</div>
					<div className='logo-text'>
						<img src='img/logo/logo-text.svg' alt='BitList' />
					</div>
					<div className='line'>
						<img src='img/icons/base/line.svg' alt='' />
					</div>
				</a>

				<div className='header__menu menu'>
					<Burger />
					<Search/>
					
					<nav className='menu__body'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Trade
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									P2P
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Partners
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Mining
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Academy
								</a>
							</li>
						</ul>
					</nav>
					<div className='line'>
						<img src='img/icons/base/line.svg' alt='' />
					</div>
					<div className='header__actions'>
						<Button modifier='gray' text='Register' />
						<Button modifier='blue' text='Log in' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
