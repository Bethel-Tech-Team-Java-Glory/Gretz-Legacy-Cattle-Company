import React from 'react';
import {connect} from 'react-redux';

class ServiceList extends React.Component {

    // componentDidMount() {
    //     this.fetchData();
    // }

    // fetchData = () => {
    //     let {dispatch} = this.props;
    //     fetch('/servicelist')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(response => { 
    //         dispatch( {type: 'UPDATE_SERVICE', payload : response })
    //     });
    // };

    constructor(props) {
        super(props);
        this.state = {
            serviceItems: [' Hay hauling', ' Calf', ' Hats']
        }
    }

    checkedService = () => {
        
    }

    addItem(e){
        e.preventDefault();
    }

    render() {
        // let serviceName = this.props.services.map( (service, i) => {
        //     return <div key={i}>{service.name}</div>
        // })
        const {serviceItems} = this.state;
        return (
            <div>
                <header>
                    <h3>What services are you interested in?</h3>
                    <form onSubmit={(e) => {this.addItem(e)}}>
                        <label>{
                            serviceItems.map(item => {
                                return <p key={item}><input type="checkbox" />{item}</p>
                            })
                        }</label><br />
                        <button className="btn btn-default" type="submit">Select</button>
                    </form>
                </header>

                <div>
                    <table className="table">
                        <caption>Service List</caption>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceItems.map(item => {
                                return (
                                    <tr key={item}>
                                        <td>{item}</td>
                                        <td>Button</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         service: state.service
//     }
// }


// export default connect(mapStateToProps)(ServiceList);
export default ServiceList;