import React from 'react'

const PokemonImage = ({img}) => {
  return (
    <>
        <img
        className='w-[100px] h-[100px]'
            src={img}
            />
    </>
  )
}

export default PokemonImage