import React from 'react';
import List from './List'
import Input from './Input'
import Error from './Error'
import Loader from './Loader'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            inputValue: ''
        }
    }

    update = event => this.setState({inputValue: event.target.value})

    queryApi = endPoint => {
        return fetch('https://jsonplaceholder.typicode.com/' + endPoint)
            .then(response => response.ok ? response.json() : Promise.reject('unsuccesfull response'))
    }

    componentDidMount() {
        this.queryApi('users')
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { inputValue, error, isLoaded, items } = this.state;
        const trimInputValue = inputValue.trim()
        const regexp = new RegExp(`\\b${trimInputValue}`, 'gi');
        const filteredItems = items.filter(item => regexp.test(item.name));

        return (
            <div className="container">
                <h2>Users</h2>
                {error ? (
                    <Error message={error} />
                ) : !isLoaded ? <Loader /> : (
                    <>
                        <Input onChange={this.update} value={inputValue} />
                        {filteredItems.length ? <List items={filteredItems} /> : <Error message={'User does not exist'} />}
                    </>
                )}
            </div>
        )
    }
}

export default App;