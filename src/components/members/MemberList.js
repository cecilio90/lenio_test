import React from 'react'

import Loading from '../Loading';

const MemberList = ({ renderMemberItems, members }) => {
    return (
        <>
            {!members.length && <Loading />}
            <ul className="members__list">
                {renderMemberItems()}
            </ul>
        </>
    )
};

export default MemberList;