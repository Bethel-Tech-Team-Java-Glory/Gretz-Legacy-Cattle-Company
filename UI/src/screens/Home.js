import React from 'react';
import { connect } from 'react-redux';
// import {addGreeting} from '../actions/actions';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            greeting: []
        }
    }

    fetchData() {
        fetch('/website')
        .then(response => {
            return response.json()
        })
        .then((greeting) => this.setState({greeting}))
    }

    componentDidMount() {
        this.fetchData();
    }

    // fetchData = () => {
    //     let { dispatch } = this.props;
    //     fetch('/website')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(response => { 
    //         // dispatch({type: 'UPDATE_GREETING', payload: response})
    //         dispatch(addGreeting(response))
    //     });
    // };

    render() {
        let title = this.state.greeting.map((greeting) => {
            return <h1 key={greeting.id}>{greeting.title}</h1>
        })
        let description = this.state.greeting.map((greeting) => {
            return <h4 key={greeting.id}>{greeting.description}</h4>
        })
        return (
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         greeting: state.homeReducer
//     }
// }

// export default connect(mapStateToProps)(Home);

export default Home;