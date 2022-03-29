import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SmallContainer from '../components/SmallContainer'
import { loaddata } from '../redux/actions/mainReducer'
import { RootState } from '../redux/reducers'

const Profile = () => {
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.user)
	const data = useSelector((state: RootState) => state.mainData)
	const dispatch = useDispatch()

	useEffect(() => {
		if (user.data === null) {
			navigate('/sign-in')
		}
		dispatch(loaddata())
	}, [user.data])
  const post = data.data
	return (
		<div className="profile">
			<SmallContainer>
        <h2 className='text-center'>Profile</h2>
				{data.data.length > 0 && <div className='card' key={post[0].id}>
							<img src={post[0].avatar} alt="" />
							<h2>
								{post[0].first_name} {post[0].last_name}
							</h2>
							<p>{post[0].email}</p>
						</div>}
			</SmallContainer>
		</div>
	)
}

export default Profile
