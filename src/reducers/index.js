export default (state=0, action)=>{
	switch(action.type){
		case 'ADDNUM':
			return state + 1
		case 'DELNUM':
			return state - 1
		case 'ADD2':
			return state +2
		default:
			return state

	}


}