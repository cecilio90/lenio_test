import React, { useState, PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchMembers } from '../../actions';
import Pagination from '../Pagination'

class MemberList extends PureComponent 
{
    state = {
        currentPage: 1,
        membersPerPage: 7 
    }

    componentDidMount() {
        this.props.fetchMembers();
    }

    getCurrentMembers = () => {
        const { currentPage, membersPerPage } = this.state;

        const indexOfLastMember = currentPage * membersPerPage;
        const indexOfFirstMember = indexOfLastMember - membersPerPage;
        return this.props.members.slice(indexOfFirstMember, indexOfLastMember);
    }

    renderMemberItems = () => {
        return this.getCurrentMembers().map(member => {
            return (
                <li className="members__list-item" key={member.id}>
                    {member.first_name}
                    <div>{member.title}</div>
                </li>
            )
        })
    }

    paginate = (page) => {
        this.setState({ currentPage: page})
    } 

    render() {
        return (
            <div className="members">
                <h2 className="members__title">MemberList</h2>
                <ul className="members__list">
                    {this.renderMemberItems()}
                </ul>
                <Pagination
                    membersPerPage={this.state.membersPerPage}
                    totalMembers={this.props.members.length}
                    paginate={this.paginate} 
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        members: Object.values(state.members)
    }
}

export default connect(mapStateToProps, {
    fetchMembers
})(MemberList);