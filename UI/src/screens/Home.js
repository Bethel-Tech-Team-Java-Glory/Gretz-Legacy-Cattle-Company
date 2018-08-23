import React from 'react';
import {connect} from 'react-redux';
import { addGreeting } from './actions/index';

class Home extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let {dispatch} = this.props;
        fetch('/website')
        .then(response => {
            return response.json()
        })
        .then(response => { 
            dispatch(addGreeting(greeting))
        });
    };

    render() {
        let title = this.props.greeting.title;
        let description = this.props.greeting.description;
        return (
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.greeting
    }
}


export default connect(mapStateToProps)(Home);