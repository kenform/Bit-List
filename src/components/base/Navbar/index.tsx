type typeNavBar = {
	modifier: string;
};
const Navbar: React.FC<typeNavBar> = ({ modifier }) => {
	return (
		<nav className={`menu__body ${modifier}`}>
			<ul className={`menu__list ${modifier}`}>
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

			<ul className={`menu__list ${modifier}`}>
				<li className={`menu__item ${modifier} `}>
					<a href='#' className='menu__link'>
						Privacy policy
					</a>
				</li>
				<li className={`menu__item ${modifier} `}>
					<a href='#' className='menu__link'>
						Terms of rules
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
