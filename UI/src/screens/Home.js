import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let {dispatch} = this.props;
        fetch('/home')
        .then(response => {
            return response.json()
        })
        .then(response => { 
            dispatch( {type: 'update_greeting', greeting : response })
        });
    };

    render() {
        let title = this.props.greeting.map((greet, i) => {
            return <h1 key={i}>{greet.title}</h1>
        })
        let description = this.props.greeting.map((intro, i) => {
            return <p key={i}>{intro.description}</p>
        })
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
