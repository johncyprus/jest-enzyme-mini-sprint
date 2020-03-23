import React from 'react';
import unsplash from '../api/unsplash';

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.onSearchSubmit('random');
    }

    onSearchSubmit = (term) => {
        unsplash.get('/search/photos', {
            params: {query: term}
        })
        .then(response => {
            let searchResults = response.data.results;
            this.setState({
                images: searchResults
            });
        })
        .catch(error => {
            console.log('ERROR:', error)
        });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}} data-test="component-app">
                <h1 className="ui header">S E A R C H S P L A S H</h1>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;