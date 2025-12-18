import React from 'react'
import { teamMemberes } from '../../config'

export default function TeamMembers() {

	return (
		<div className='team-members'>
			<div className="team-members__container">
				<h2 className='section-title-2'>Our people</h2>
				<div className="team-members__list">
					{
						teamMemberes.map((item, i) => {
							return <div key={i} className="team-member">
								<div className="team-member__image">
									<img src={item.image} alt={item.name} />
								</div>
								<div className="team-member__name">{item.name}</div>
								<div className="team-member__position">{item.position}</div>
							</div>
						})
					}

				</div>
			</div>
		</div>
	)
}
