import React, { useState, useEffect } from 'react'
import api from '../api'
import FilmsList from './films'
import { AppContext } from './App'
import FilmForm from './forms/FilmForm'
import { orderBy, find } from 'lodash'
import AdminRoute from './AdminRoute'

const FilmsPage = ({ user, location }) => {
    const numCol = location.pathname === '/films' ? 'sixteen' : 'ten'

    const [films, setFilms] = useState([])
    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        api.films.fetchAll().then(films => {
            setFilms(sortFilms(films))
            setIsLoaded(false)
        })
    }, [])

    const sortFilms = films =>
        orderBy(films, ['featured', 'title'], ['desc', 'asc'])

    const toggleFeatured = id => {
        const film = find(films, { _id: id })

        return updateFilm({ ...film, featured: !film.featured })
    }

    const saveFilm = film => (film._id ? updateFilm(film) : addFilm(film))

    const addFilm = filmData =>
        api.films
            .create(filmData)
            .then(film => setFilms(sortFilms([...films, { ...film }])))

    const updateFilm = filmData =>
        api.films
            .update(filmData)
            .then(film =>
                setFilms(
                    sortFilms(
                        films.map(item =>
                            item._id === film._id ? film : item,
                        ),
                    ),
                ),
            )

    const deleteFilm = film =>
        api.films
            .delete(film)
            .then(() =>
                setFilms(
                    sortFilms(films.filter(item => item._id !== film._id)),
                ),
            )

    return (
        <AppContext.Provider
            value={{
                toggleFeatured,
                deleteFilm,
                user,
            }}
        >
            <div className='ui stackable grid'>
                <AdminRoute
                    path='/films/new'
                    user={user}
                    render={() => (
                        <div className='six wide column'>
                            <FilmForm submit={saveFilm} film={{}} />
                        </div>
                    )}
                />

                <AdminRoute
                    path='/films/edit/:_id'
                    user={user}
                    render={({ match }) => (
                        <div className='six wide column'>
                            <FilmForm
                                submit={this.saveFilm}
                                film={
                                    find(films, {
                                        _id: match.params._id,
                                    }) || {}
                                }
                            />
                        </div>
                    )}
                />

                <div className={`${numCol} wide column`}>
                    {isLoaded ? (
                        <div className='ui icon message'>
                            <i className='notched circle loading icon' />
                            <div className='content'>
                                <div className='header'>films loading</div>
                            </div>
                        </div>
                    ) : (
                        <FilmsList films={films} deleteFilm={deleteFilm} />
                    )}
                </div>
            </div>
        </AppContext.Provider>
    )
}

export default FilmsPage
