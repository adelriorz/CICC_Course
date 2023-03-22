import React, { useState, useEffect } from 'react'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

import { Button, Search, Table } from './components'

export default function Lab() {

    const [searchTerm, setSearchTerm] = useState('React')
    const [result, setResult] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const setSearchTopStories = resultNew => {
        const { hits, page } = result;

        if (page === 0) {
            setResult(result);
            return;
        }

        setResult(prevState => ({
            ...prevState,
            hits: [...prevState.hits, ...hits],
            page
        }));
    }

    const fetchSearchTopStories = (searchTerm, page = 0) => {
        setIsLoading(true)
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
            .then(response => response.json())
            .then(apiresult => setSearchTopStories(apiresult))
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        fetchSearchTopStories(searchTerm)
    }, [])


    const onSearchChange = event => {
        setSearchTerm(event.target.value)
    }

    const onSearchSubmit = event => {
        fetchSearchTopStories(searchTerm)
        event.preventDefault()
    }

    const onDismiss = id => {

        const updatedHits = result.hits.filter(item => item.objectID !== id)
        setResult(prevState => ({ ...prevState, hits: updatedHits }))
    }

    const page = (result && result.page) || 0

    return (
        <div className="page">
            {error && <h3>{error}</h3>}
            <div className="interactions">
                <Search
                    value={searchTerm}
                    onChange={onSearchChange}
                    onSubmit={onSearchSubmit}
                >
                    Search
                </Search>
            </div>
            <div className="articles">
                {result && result.hits.length > 0 && (
                    <Table
                        list={result.hits}
                        onDismiss={onDismiss}
                    />
                )}
            </div>
            {isLoading && <h3>Loading...</h3>}
            <footer>
                <Button onClick={() => fetchSearchTopStories(searchTerm, page + 1)}>
                    More
                </Button>
            </footer>
        </div>
    )
}
