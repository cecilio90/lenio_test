import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchMembers } from '../../actions'

class MemberList extends PureComponent 
{
    componentDidMount() {
        this.props.fetchMembers();
    }

    render() {
        return (
            <div>
                MemberList
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        members: state.members
    }
}

export default connect(mapStateToProps, {
    fetchMembers
})(MemberList);