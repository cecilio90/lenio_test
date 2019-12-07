import {
    FETCH_MEMBERS,
    FETCH_MEMBER,
} from '../actions/type'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MEMBERS:
            return { ...state, members: action.payload };

        case FETCH_MEMBER:
            return { ...state, members: action.payload };

        default:
            return state;
    }
}