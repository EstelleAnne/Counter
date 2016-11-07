import React,{Component,PropTypes }  from 'react'
class Counter extends Component{
	static PropTypes = {
		value:PropTypes.number.isRequires,
		addNum:PropTypes.func.isRequires,
		delNum:PropTypes.func.isRequires,
		add2:PropTypes.func.isRequires

	}

render(){
	const {value, addNum, delNum, add2}=this.props
	return(
		<div>
			clicked:{value}times
			{' '}
			<button onClick={addNum}>+</button>
			{' '}
			<button onClick={delNum}>-</button>
			{' '}
			<button onClick={add2}>+2</button>
		</div>

		)
}

}
export default Counter