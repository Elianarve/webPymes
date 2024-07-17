import React from 'react'

const CardNews = () => {
  return (
    <section className='card-news'>
        <div className='img-card-news'>
            <img src="https://via.placeholder.com/150" alt="news" />
        </div>
        <div className="user-card-news">
            <h3 className='user-card-news-name'>John Doe</h3>
            <date>12/12/2021</date>
            <img src="https://via.placeholder.com/50" alt="user" />

        </div>
        <article className="text-short-card-news">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id metus ac mi tincidunt ultricies nec nec nunc. Nullam id metus ac mi tincidunt ultricies nec nec nunc.</p>
        </article>
    </section>

    )
}

export default CardNews
