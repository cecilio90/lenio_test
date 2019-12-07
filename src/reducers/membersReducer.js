import _ from 'lodash'

import {
    FETCH_MEMBERS,
    FETCH_MEMBER,
} from '../actions/type'

const initialState = {
    num_results: 0,
    offset: 0,
    members: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MEMBERS:
            return {
                ...state,
                num_results: action.payload[0].num_results,
                offset: action.payload[0].offset,
                members: { ...state.members, ..._.mapKeys(action.payload[0].members, 'id')}
            };

        case FETCH_MEMBER:
            return { ...state, response: action.payload };

        default:
            return state;
    }
}