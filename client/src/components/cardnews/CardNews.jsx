import React from 'react'

const CardNews = () => {
  return (
    <section className='card-news'>
        <div className='img-card-news'>
            <img src={news.image} alt="news" />
        </div>
        <div className="user-card-news">
            <h3 className='user-card-news-name'>{user.title}</h3>
            <date className='date-news'>{news.date}</date>
            <img src={user.image} alt="user" />

        </div>
        <article className="text-short-card-news">
            <h1>{news.title}</h1>
            <p>{news.description}</p>
        </article>
    </section>

    )
}

export default CardNews
