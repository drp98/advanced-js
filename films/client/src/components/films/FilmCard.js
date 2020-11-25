import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Featured from './Featured'

const FilmCard = ({ film }) => {
    const [toggleDescription, setToggleDescription] = useState(false)

    const toggle = () => {
        setToggleDescription(() => !toggleDescription)
    }

    return (
        <div className='ui card'>
            {!toggleDescription ? (
                <>
                    <span className='ui right corner label'>
                        <i className='empty star icon' />
                    </span>
                    <div className='image'>
                        <span className='ui green label ribbon'>
                            $ {film?.price}{' '}
                        </span>
                        <Featured featured={film.featured} id={film._id} />
                        <img src={film?.img} alt={film?.title} />
                    </div>
                </>
            ) : (
                <p>{film.description}</p>
            )}

            <div className='content'>
                <span href='#' className='header'>
                    {film?.title}
                </span>
                <div className='meta'>
                    <i className='icon users' /> {film?.director}
                    <span className='right floated'>
                        <i className='icon wait right' />
                        {film?.duration} min
                    </span>
                </div>
                <i
                    className={
                        toggleDescription
                            ? 'icon link eye slash'
                            : 'icon link eye'
                    }
                    onClick={() => toggle()}
                />
            </div>
        </div>
    )
}

FilmCard.propTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
    }),
}

export default React.memo(FilmCard)
