import Button from '../Button';

import "./style.scss";
const Email:React.FC = () => {
	return (
		<div className='intro__email email-intro'>
			<form action='#' className='email-intro__item'>
				<div className='email-intro__icon '>
					<img src='img/icons/base/email.svg' alt='' />
				</div>
				<input placeholder='Example@gmail.com' type='email' className='email-intro__input' />
				<div className='email-intro__button'>
					<Button modifier='blue' text='Sign in' />
				</div>
			</form>
		</div>
	);
};

export default Email;
