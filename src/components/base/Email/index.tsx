import Button from '../Button';

import "./style.scss";

type typeEmail ={
	modifier:string;
}
const Email:React.FC<typeEmail> = ({modifier}) => {
	return (
		<div className={`email ${modifier}`}>
			<form action='#' className='email__item'>
				<div className='email__icon '>
					<img src='img/icons/base/email.svg' alt='' />
				</div>
				<input placeholder='Example@gmail.com' type='email' className='email__input' />
				<div className='email__button'>
					<Button modifier='blue' text='Sign in' />
				</div>
			</form>
		</div>
	);
};

export default Email;
