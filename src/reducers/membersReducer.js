import _ from 'lodash'

import {
    FETCH_MEMBERS,
    FETCH_MEMBER,
} from '../actions/type'

export default (state = {} , action) => {
    switch(action.type) {
        case FETCH_MEMBERS:
            return {
                ...state,
                ..._.mapKeys(action.payload[0].members, 'id')
            };

        case FETCH_MEMBER:
            return { ...state, response: action.payload };

        default:
            return state;
    }
}