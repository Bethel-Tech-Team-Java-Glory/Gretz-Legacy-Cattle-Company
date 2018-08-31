import React from 'react';
import {connect} from 'react-redux';

class ServiceList extends React.Component {

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let {dispatch} = this.props;
        fetch('/servicelist')
        .then(response => {
            return response.json()
        })
        .then(response => { 
            dispatch( {type: 'UPDATE_SERVICE', payload : response })
        });
    };

    render() {
        let serviceName = this.props.services.map( (service, i) => {
            return <div key={i}>{service.name}</div>
        })
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="checkbox" /><label>{serviceName}</label><br />
                    <button className="btn btn-default" type="submit">Select</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        service: state.service
    }
}


export default connect(mapStateToProps)(ServiceList);