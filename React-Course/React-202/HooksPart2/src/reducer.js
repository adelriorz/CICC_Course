export const SET_RESULT = 'SET_RESULT'
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_DISMISS = 'SET_DISMISS'

export const initialState = {
    hits: [],
    page: 0,
    isLoading: false,
    error: null,
    searchTerm: 'React'
}

export function reducer(state, action) {

    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                hits: action.payload.hits,
                page: action.payload.page
            }

        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case SET_DISMISS:
            return {
                ...state,
                hits: state.hits.filter(item => item.objectID !== action.payload)
            }

        default:
            return state;
    }
}