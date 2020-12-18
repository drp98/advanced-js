import React, { useState, useEffect } from 'react'
import api from '../../api'
import { Divider, Header, Table } from 'semantic-ui-react'

const FilmDetails = props => {
    const [film, setFilm] = useState({})
    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        api.films.fetchById(props.match.params._id).then(film => {
            setFilm(film)
            setIsLoaded(false)
        })
    }, [props.match.params._id])

    return (
        <>
            {isLoaded ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h1 className='ui center aligned dividing header'>
                        {film.title}
                    </h1>
                    <div className='ui grid'>
                        <div className='six wide column'>
                            <img
                                className='ui fluid image'
                                src={film.img}
                                alt={film.name}
                            />
                        </div>

                        <div className='ten wide column'>
                            <Divider horizontal>
                                <Header as='h4'>Description</Header>
                            </Divider>

                            <p>{film.description}</p>

                            <Divider horizontal>
                                <Header as='h4'>Details</Header>
                            </Divider>

                            <Table definition>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell width={2}>
                                            Director
                                        </Table.Cell>
                                        <Table.Cell>{film.director}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Duration</Table.Cell>
                                        <Table.Cell>
                                            {film.duration} min
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell>Price</Table.Cell>
                                        <Table.Cell>{film.price} $</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FilmDetails
