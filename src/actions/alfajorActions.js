export const ejemploAction = (titulo) => {
	// console.log(titulo)
	return (dispatch) => {
		dispatch({
			type: 'NUEVO',
			titulo: titulo
		});
	};
};
