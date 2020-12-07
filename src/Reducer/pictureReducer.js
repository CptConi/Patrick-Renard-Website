const initialState = {
    pictureList:''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_ALL':
        return { ...state, ...payload }

    default:
        return state
    }
}
