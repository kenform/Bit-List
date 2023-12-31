import React, { useEffect, useRef } from 'react';
import "./style.scss"
const Search:React.FC = ({onchange}) => {
	const searchRef = useRef<HTMLDivElement>(null);
	const onClickIcon = () => {
		document.querySelector('.search-form')?.classList.toggle('_active');
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!event.composedPath().includes(searchRef.current!)) {
				document.querySelector('.search-form')?.classList.remove('_active');
			}
		};
		document.body.addEventListener('click', handleClickOutside);
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);
	return (
		<div ref={searchRef} className='header__search search-form'>
			<button  onClick={onClickIcon} className='search-form__icon '>
				<img src='img/icons/base/search.svg' alt='' />
			</button>
			<form action='#' className='search-form__item'>
				<button className='search-form__btn '>
					<img src='img/icons/base/search.svg' alt='' />
				</button>
				<input
					placeholder='Search'
					name='form[]'
					data-value='Search for minimalist chair'
					type='text'
					className='search-form__input'
					onChange={onchange}
				/>
			</form>
		</div>
	);
};

export default Search;
