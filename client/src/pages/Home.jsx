import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
        id: 1,
        title: '1abc',
        desc: '1abcabcabc123',
        img: 'https://mykaleidoscope.ru/uploads/posts/2022-08/1659950017_3-mykaleidoscope-ru-p-finskie-doma-khonka-dizain-krasivo-foto-3.jpg'
    },
    {
        id: 2,
        title: '2abc',
        desc: '2abcabcabc123',
        img: 'https://mykaleidoscope.ru/uploads/posts/2020-02/1582380687_46-p-dizain-zagordnikh-domov-i-kottedzhei-78.jpg'
    },
    {
        id: 3,
        title: '3abc',
        desc: '3abcabcabc123',
        img: 'https://domsmam.com/wp-content/uploads/2020/04/dom-s-ploskoj-krishej-27.jpeg'
    }
  ]
  return (
    <div className='home'>
        <div className='posts'>
          {posts.map((post) => (
            <div className='post' key={post.id}>
                <div className='img'>
                    <img src={post.img} alt='' />
                </div>
                <div className='content'>
                    <Link className='link' to={`/post/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>
                    <p>{post.desc}</p>
                    <button>Read More</button>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Home