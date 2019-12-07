import members from '../api/membersApi';
import { 
    FETCH_MEMBERS,
    FETCH_MEMBER,
} from './type';

export const fetchMembers = () => async dispatch => {
    const response = await members.get('116/senate/members.json');

    dispatch({ type: FETCH_MEMBERS, payload: response.data })
}

export const fetchStream = id => async dispatch => {
    const response = await members.get(`members/${id}.json`);

    dispatch({ type: FETCH_MEMBER, payload: response.data })
}