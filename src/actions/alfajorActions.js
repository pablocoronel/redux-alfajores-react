import * as actionTypes from '../actions/actionTypes';
import { URL_API } from '../store/config';
import axios from 'axios';

export const agregarAction = (nuevoAlfajor) => {
	// console.log(nuevoAlfajor)
	return (dispatch) => {
		axios
			.post('http://127.0.0.1:8000/alfajor', {
				nombre: nuevoAlfajor.nombre,
				sabor: nuevoAlfajor.sabor,
				precio: nuevoAlfajor.precio
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		// fetch('http://127.0.0.1:8000/alfajor/', {
		// 	method: 'post',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		nombre: nuevoAlfajor.nombre,
		// 		sabor: nuevoAlfajor.sabor,
		// 		precio: nuevoAlfajor.precio
		// 	})
		// })
		// 	.then((response) => {
		// 		dispatch({
		// 			type: actionTypes.ADD_ALFAJOR,
		// 			alfajor: nuevoAlfajor
		// 		});
		// 	})
		// 	.catch((error) => console.log(error));

		// dispatch({
		// 	type: actionTypes.ADD_ALFAJOR,
		// 	alfajor: nuevoAlfajor
		// });
	};
};

export const editarAlfajor = (alfajor) => ({
	type: actionTypes.EDIT_ALFAJOR,
	alfajor
});

export const borrarAlfajor = (alfajor) => ({
	type: actionTypes.DELETE_ALFAJOR,
	alfajor
});
