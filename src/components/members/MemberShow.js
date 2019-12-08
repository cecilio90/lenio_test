import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMember } from '../../actions'
import Loading from '../Loading';

const renderMember = (member) => {
    if (member === undefined) {
        return <Loading />
    }

    return (
        <div className="member__info">
            <div>
                <p><strong>First Name: </strong>{member.first_name}</p>
                <p><strong>Last Name: </strong>{member.last_name}</p>
                <p><strong>Gender: </strong>{member.gender}</p>
                <p><strong>In office: </strong>{member.in_office ? 'Yes' : 'No'}</p>
            </div>
            <div>
                <p><strong>Twitter: </strong>{member.twitter_account}</p>
                <p><strong>Facebook: </strong>{member.facebook_account}</p>
                <p><strong>Youtube: </strong>{member.youtube_account}</p>
            </div>
        </div>
    )
}

const MemberShow = ({ match }) => 
{ 
    const memberId = match.params.id;
    const dispatch = useDispatch();
    const member = useSelector(state => state.members[memberId]);

    useEffect(() => {
        dispatch(fetchMember(memberId))
    }, []);

    return (
        <div className="member">
            <h2 className="member__title">Member Details</h2>
            {renderMember(member)}
            <Link to="/" className="button-back">Back</Link>
        </div>
    )
};

export default MemberShow;

