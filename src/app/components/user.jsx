import React from 'react'
import Bookmark from './bookmark'
import Qualites from './qualites'

const User = ({
	_id,
	name,
	qualities,
	profession,
	completedMeetings,
	rate,
	bookmark,
	onDelete,
	onToggleBookmark,
}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{qualities.map((quality) => (
					<Qualites key={quality._id} {...quality} />
				))}
			</td>
			<td>{profession.name}</td>
			<td>{completedMeetings}</td>
			<td>{rate} / 5</td>
			<td>
				<Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
			</td>
			<td>
				<button className="btn btn-danger" onClick={() => onDelete(_id)}>
					Удалить
				</button>
			</td>
		</tr>
	)
}

export default User