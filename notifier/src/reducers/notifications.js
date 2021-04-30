import * as types from '../types';

export const initialState = {
	count: 0,
	notifications: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SET_COUNT:
			return {
				...state,
				count: state.notifications.length,
			};
		case types.SET_NOTIFICATION:
			return {
				...state,
				notifications: [...state.notifications, ...action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
