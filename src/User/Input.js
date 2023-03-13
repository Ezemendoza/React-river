
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { GrupoInput, IconoValidacion, Label, LeyendaError,Input } from './Elementos';

const ComponenteInput = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	
	const onChange = (e) => {
        
		cambiarEstado({...estado, campo: e.target.value});
	}
	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
              
				cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
                
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
	
			<GrupoInput>
			

				<Input className='effect-1'
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				  <span class="focus-border"></span>
					
				<IconoValidacion 
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GrupoInput>
	
		</div>
	);
}
 
export default ComponenteInput;