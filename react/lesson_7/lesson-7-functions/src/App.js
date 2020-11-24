import React, { useState, useEffect } from 'react'
import List from './List'
import Input from './Input'
import Error from './Error'
import Loader from './Loader'

const App = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    const URL = 'https://jsonplaceholder.typicode.com/'

    const update = event => setInputValue(event.target.value)

    const queryApi = endPoint => {
        return fetch(URL + endPoint)
            .then(response => response.ok ? response.json() : Promise.reject('unsuccesfull response'))
    }

    useEffect(() => {
        queryApi('users')
            .then(result => {
                    setIsLoaded(true)
                    setItems(result)
                },
                error => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    const trimInputValue = inputValue.trim()
    const regexp = new RegExp(`\\b${trimInputValue}`, 'gi')
    const filteredItems = items.filter(item => regexp.test(item.name))
    
    return (
        <div className="container">
            <h2>Users</h2>
            {error ? (
                <Error message={error} />
            ) : !isLoaded ? <Loader /> : (
                <>
                    <Input onChange={update} value={inputValue} />
                    {filteredItems.length ? <List items={filteredItems} /> : <Error message={'User does not exist'} />}
                </>
            )}
        </div>
    )
}

export default App;
