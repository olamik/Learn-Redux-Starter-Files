// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of the current state
// returns an updated copy of the store

function comments(state = [], action) {
	console.log(state, action);
	return state;
}

export default comments;