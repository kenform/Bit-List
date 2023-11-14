
import './style.scss';

const Burger = () => {
	const onClickIcon = () => {
	document.body.classList.toggle('menu-open');
		document.body.classList.toggle('_lock');
	};

	return (
		<button onClick={onClickIcon} type='button' className='menu__icon icon-menu'>
			<span></span>
		</button>
	);
};

export default Burger;
