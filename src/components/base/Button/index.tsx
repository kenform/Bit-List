import './style.scss'

type typeButton = {
		modifier:string,
		text:string,
};
const Button:React.FC<typeButton> = ({ modifier, text }) => {
	return (
		<button type="submit" className={`button ${modifier}`}>
			<span>{text}</span>
		</button>
	);
};
export default Button;
