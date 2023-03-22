//3rd party libraries
import React, { useState, useEffect, useReducer } from 'react'

// styles
import './App.css'

// local imports
import { Button, Search, Table } from './components'
import { reducer, initialState, SET_RESULT, SET_IS_LOADING, SET_SEARCH_TERM, SET_DISMISS, SET_ERROR } from './reducer'
// import Lab from './Lab4-Solution/Lab'

const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setSearchTopstories = result => {
    const { hits, page } = result;

    if (page === 0) {
      dispatch({ type: SET_RESULT, payload: { hits, page }})
      return;
    }

    dispatch({ type: SET_RESULT, payload: { hits: [...state.hits, ...hits], page }})
  }

  async function fetchSearchTopstories(searchTerm, page = 0) {
    dispatch({ type: SET_IS_LOADING, payload: true })
    try {
      const response = await fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      const result = await response.json()
      setSearchTopstories(result)
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error })
    } finally {
      dispatch({ type: SET_IS_LOADING, payload: false })
    }
  }

  React.useEffect(() => {
    fetchSearchTopstories(state.searchTerm)
  }, [])

  function onSearchChange(event) {
    dispatch({ type: SET_SEARCH_TERM, payload: event.target.value })
  }

  function onSearchSubmit(event) {
    event.preventDefault();
    fetchSearchTopstories(state.searchTerm)
  }

  function onDismiss(id) {
    dispatch({ type: SET_DISMISS, payload: id})
  }

  const page = (state.hits && state.page) || 0;

  return (
    <div className="page">
      <div className="interactions">
        <Search
          value={state.searchTerm}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        >
          Search
        </Search>
      </div>
      {state.hits && state.hits.length > 0 &&
        <Table
          list={state.hits}
          onDismiss={onDismiss}
        />
      }
      {state.isLoading && <h3>Loading...</h3>}
      <div className="interactions">
        <Button onClick={() => fetchSearchTopstories(state.searchTerm, page + 1)}>
          More
        </Button>
      </div>
    </div>
  );
}

export default App
