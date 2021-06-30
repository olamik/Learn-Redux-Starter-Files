// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of the current state
// returns an updated copy of the store

function comments(state = [], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post with a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

function postComments(state = [], action) {
	switch (action.type) {
		case 'ADD_COMMENT':
			// return new state with new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
	return state;
}

export default comments;