import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
    <section className="mt-10 mb-5">
        <p className='lg:w-1/2 text-justify'>{notes}</p>
      </section>
    </>
  )
}

export default Notes
