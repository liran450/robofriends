import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardArray = robots.map((user, i) => {
		return (<Card key= {user.id} id={robots[i].id} email={robots[i].email} name={robots[i].name}/>
	)});
	return (
		<div>
			{cardArray}
		</div>
	)
};

export default CardList;