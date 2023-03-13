import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
	borde: "#0075FF",
	error: "#bb2929",
	exito: "#1ed12d"
}

const Formulario = styled.form`
	display:flex;
	flex-direction:column;
	align-items:center;
	@media (max-width: 800px){
		grid-template-columns: 1fr;
	}
`;

const Label = styled.label`
	display: block;
	font-weight: 700;
	padding: 10px;
	min-height: 40px;
	cursor: pointer;
	${props => props.valido === 'false' && css`
		color: ${colores.error};
	`}
`;

const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
font: 15px/24px 'Muli',
 sans-serif; 
 color: #333;
  width: 300px; 
  margin-top:15px;
  box-sizing: 
  border-box; 
  letter-spacing: 1px;
	&:focus {
		outline: none;
	}

	
`;

const LeyendaError = styled.p`
	font-size: 12px;
	margin-bottom: 0;
	color: ${colores.error};
	display: none;
	${props => props.valido === 'true' && css`
		display: none;
	`}
	${props => props.valido === 'false' && css`
		display: block;
	`}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: -40px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
	opacity: 0;
	${props => props.valido === 'false' && css`
		opacity: 1;
		color: ${colores.error};
	`}
	${props => props.valido === 'true' && css`
		opacity: 1;
		color: ${colores.exito};
	`}
`;

const ContenedorTerminos = styled.div`
	grid-column: span 2;
	input {
		margin-right: 10px;
	}
	@media (max-width: 800px){
		grid-column: span 1;
	}
`;



const Boton = styled.button`
	height: 45px;
	margin-left:50px;
	width: 25%;
	background: #000;
	color: #fff;
	font-weight: bold;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	transition: .1s ease all;
	&:hover {
		box-shadow: 3px 0px 30px rgba(163,163,163, 1);
	}
	@media (max-width: 800px){
		width: 40%;
	}
`;

const MensajeExito = styled.p`
	font-size: 14px;
	color: ${colores.exito};
`;

const MensajeError = styled.div`

	height: 45px;
	line-height: 45px;
	background: #F66060;
	padding: 0px 15px;
	border-radius: 3px;
	grid-column: span 2;
	p {
		margin: 0;
	} 
	b {
		margin-left: 10px;
	}
`;
const Enlace = styled.div`
	display:flex;
	margin-left:50px;
	width:30%;
	flex-direction:row;
	justify-content:space-around;
	@media (max-width: 800px){
		display:flex;
		justify-content:center;
		flex-direction:column;
		width:40%;
		margin-left:85px;
		gap:10px;
	}
`
const BotonCounter = styled.button
`	height: 35px;
width: 40px;
background: #white;
margin-left:0%;
color: #000;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition: .1s ease all;
&:hover {
	box-shadow: 3px 0px 20px red;
}
@media (max-width: 800px){
	width: 40%;
}
`
const ContadorCounter= styled.div`
width:48%
`

const BotonCounterPrincipal=styled.button`
margin-left:30%;
height: 40px;
width: 80%;
background: red;
color: #fff;
font-weight: bold;
border: none;
border-radius: 3px;
cursor: pointer;
transition: .1s ease all;
&:hover {
	box-shadow: 3px 0px 30px white;
}
@media (max-width: 800px){
	width: 30%;
}`

export {
	Formulario,
	Label,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	ContenedorTerminos,
	Boton,
	MensajeExito,
	MensajeError,
	Enlace,
	BotonCounter,
	ContadorCounter,
	BotonCounterPrincipal
};
