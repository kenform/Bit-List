import React from 'react';
const Header: React.FC = () => {
	return (
		
		<header className='header'>
			<div className='header__container'>
				<div className='header__menu menu'>
					<button type='button' className='menu__icon icon-menu'>
						<span></span>
					</button>
					<nav className='menu__body'>
						<ul className='menu__list'>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Trade
								</a>
							</li>
							<li className='menu__item'>
								<a href='#' className='menu__link'>
									Trade
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
