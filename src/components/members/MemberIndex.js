import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchMembers} from '../../actions';
import Pagination from '../Pagination';
import Search from '../Search';
import MemberList from './MemberList';

class MemberIndex extends PureComponent 
{
    state = {
        currentPage: 1,
        membersPerPage: 7,
        filter: ''
    }

    componentDidMount() {
        this.props.fetchMembers();
    }

    getCurrentMembers = () => {
        const { currentPage, membersPerPage } = this.state;

        const indexOfLastMember = currentPage * membersPerPage;
        const indexOfFirstMember = indexOfLastMember - membersPerPage;

        return this.filterMembers().slice(indexOfFirstMember, indexOfLastMember);
    }

    filterMembers = () => {
        const lowercasedFilter = this.state.filter.toLowerCase();

        return this.props.members.filter(item => {
            return Object.keys(item).some(key =>
                typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
            );
        })
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

    searchMember = (value) => {
        this.setState({ filter: value })
    }

    totalFilterMembers = () => {
        return this.state.filter.length > 0 ? this.filterMembers().length : this.props.members.length;
    }

    render() {
        return (
            <div className="members">
                <h2 className="members__title">MemberList</h2>
                <Search searchMember={this.searchMember} />
                <MemberList 
                    renderMemberItems={this.renderMemberItems}
                    members={this.props.members}
                />
                <Pagination
                    membersPerPage={this.state.membersPerPage}
                    totalMembers={this.totalFilterMembers()}
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
    fetchMembers,
})(MemberIndex);