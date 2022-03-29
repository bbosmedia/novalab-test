
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import { loaddata, loadmore } from '../redux/actions/mainReducer'
import { RootState } from '../redux/reducers'

type Postt = {
	avatar: string
	email: string
	first_name: string
	id: number
	last_name: string
}

const Home = () => {
	const dispatch = useDispatch()
	const data = useSelector((state:RootState)=> state.mainData.data)
	const current = useSelector((state:RootState)=> state.mainData.current)
	const total = useSelector((state:RootState)=> state.mainData.total)
	const loading = useSelector((state: RootState)=> state.smallData.loading)
	const error = useSelector((state: RootState)=> state.smallData.error)

	

	useEffect(() => {
		dispatch(loaddata())
	}, [])
	return (
		<div className="home">
			<Container>
				<div className='cards'>
					{data.map((post: any) => (
						<div className='card' key={post.id}>
							<img src={post.avatar} alt="" />
							<h2>
								{post.first_name} {post.last_name}
							</h2>
							<p>{post.email}</p>
						</div>
					))}
				</div>
				{loading && <p className='text-center'>Loading...</p>}
				{error && <p className='text-center'>Something wrong...</p>}
				{loading === false && current !== total && <button onClick={()=>dispatch(loadmore(current+1))} className='load-btn'>Load More</button>}
			</Container>
		</div>
	)
}

export default Home
