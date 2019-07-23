const actions = {
	REQUEST: 'REQUEST',
	request: params => ({
		...params, oldType: params.type, type: actions.REQUEST
	})
};

export default actions
