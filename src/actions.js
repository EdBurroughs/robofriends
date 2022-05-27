export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD'

export const REQUEST_PENDING = 'REQUEST_PENDING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_FAILURE = 'REQUEST_FAILURE'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


// thunk middleware waits for actions which are functions
export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_PENDING})
        
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => dispatch({type : REQUEST_SUCCESS, payload : users}))
            .catch(error => dispatch({type: REQUEST_FAILURE, payload : error}))
    
}

