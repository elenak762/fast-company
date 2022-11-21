import React from 'react'

const Qualites = ({ color, name }) => {
	return <span className={'badge m-1 bg-' + color}>{name}</span>
}

export default Qualites