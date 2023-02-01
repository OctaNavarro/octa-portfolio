return (
  <div
    name='about'
    className='w-full h-screen bg-gradient-to-b from-dblue to-blue text-lbgray'
  >
    <div className='bg-orange w-full h-1' />
    <div className='max-w-screen-lg px-8 mx-auto flex flex-col justify-center mt-16'>
      <p className='text-4xl font-bold inline'>About me</p>
      <br />
      <p className='text-xl'>
        At this point yoy already know I'm a web developer, however that is
        just a tiny tiny piece of the whole puzzle, because I'm a firm
        believer that we are not just our knowledge, but also all our previous
        experiences that shape each one of us. With that in mind, here are
        some facts about me.
      </p>
    </div>
    <div className='flex justify-around mt-16 flex-wrap-reverse'>
      {cardsParams.map(e => (
        <AboutCard img={e.img} alt={e.alt} title={e.title} steps={e.steps} />
      ))}
    </div>
  </div>
)
}

const cardsParams=[
  {
    img: brain,
    alt: 'Image of a brain created with Midjourney',
    title: 'knowdlege',
    steps: ['fact1', 'fact2', 'fact3', 'fact4'],
    id=
  }
]


export default function About() {
  return (
    <div
      name='about'
      className='w-full h-screen bg-gradient-to-b from-dblue to-blue text-lbgray'
    >
      <div className='bg-orange w-full h-1' />
      <div className='max-w-screen-lg px-8 mx-auto flex flex-col justify-center mt-16'>
        <p className='text-4xl font-bold inline'>About me</p>
        <br />
        <p className='text-xl'>
          At this point yoy already know I'm a web developer, however that is
          just a tiny tiny piece of the whole puzzle, because I'm a firm
          believer that we are not just our knowledge, but also all our previous
          experiences that shape each one of us. With that in mind, here are
          some facts about me.
        </p>
      </div>
      <div className='flex justify-around mt-16 flex-wrap-reverse'>
        <div className='card w-1/4 min-w-[250px] bg-lbgray text-blue m-12'>
          <figure className='h-52'>
            <img
              src={brain}
              alt='Shoes'
              className=' object-cover'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Knowdledge</h2>
            <ul className='steps steps-vertical'>
              <li className='step'>Register</li>
              <li className='step step-primary'>Choose plan</li>
              <li className='step'>Purchase</li>
              <li className='step'>Receive Product</li>
            </ul>
          </div>
        </div>
        <div className='card w-1/4 min-w-[250px] bg-base-100 shadow-xl m-12'>
          <figure>
            <img
              src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card w-1/4 min-w-[250px] bg-base-100 shadow-xl m-12'>
          <figure>
            <img
              src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
