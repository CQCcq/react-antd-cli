import React, { Component, Fragment } from 'react';

export default class MemberManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'this is my Member page'
        };
    }
    render() {
        return (
            <Fragment>
                {this.state.title}
            </Fragment>
        );
    }
}