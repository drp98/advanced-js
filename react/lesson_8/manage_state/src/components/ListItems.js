import React, { useState } from 'react'
import Filter from './Filter'
import List from './List'

const ListItems = props => {
    const [searchTerm, setSearchTerm] = useState('')

    const updateSearchTerm = event => setSearchTerm(event.target.value)

    const { title } = props

    return (
        <section>
            <h3 className='mb-3'>{title}</h3>
            <Filter searchTerm={searchTerm} onChange={updateSearchTerm} />
            <List {...props} searchTerm={searchTerm} />
        </section>
    )
}

export default ListItems
