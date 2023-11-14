import './style.scss'

type typeButton = {
		modifier:string,
		text:string,
};
const Button:React.FC<typeButton> = ({ modifier, text }) => {
	return (
		<a href="#" className={`button ${modifier}`}>
			<span>{text}</span>
		</a>
	);
};
export default Button;
