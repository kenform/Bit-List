import React from 'react';
import Burger from '../base/Burger';
import Button from '../base/Button';
import Search from '../base/Search';
import Navbar from '../base/Navbar';

const Header: React.FC = ({ setSearch }) => {
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

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
					<Search onchange={handleChange} />
					<Navbar modifier='_header' />

					<div className='line'>
						<img src='img/icons/base/line.svg' alt='' />
					</div>
					<div className='header__actions'>
						<Button modifier='gray header__button_gray' text='Register' />
						<Button modifier='blue header__button_blue' text='Log in' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
