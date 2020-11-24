import React from 'react'
import Item from './Item'

const List = ({ items, removeItem, toggleItem, searchTerm }) => {
    const regexp = new RegExp(`\\b${searchTerm}`, 'gi')

    return (
        <ul className='list-group mb-3'>
            {items
                .filter(item => regexp.test(item.value))
                .map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                        toggleItem={toggleItem}
                    />
                ))}
        </ul>
    )
}

export default List
