import * as actionsType from '../actions/actionTypes';
import textos from '../store/idiomaTextos';

export const cambiarIdioma = (idioma) => {
	let texto;
	// console.log(idioma)
	switch (idioma) {
		case 'es':
			texto = textos.es;
			break;

		case 'en':
			texto = textos.en;
			break;

		default:
			texto = {};
			break;
	}

	return {
		type: actionsType.IDIOMA_EDIT,
		idioma: texto
	};
};
