import React from 'react';
import {connect} from 'react-redux';
import serviceActions from '../actions/serviceActions';

const serviceItem = [
    "Hay hauling",
    "Beef",
    "Hats"
]

class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allSelectedItems: new Set()
        }
    }

    fetchServiceList = () => {
        const serviceItems = serviceItem.map((value, key) => {
            return <label className="checkbox" key={key}><input onChange={ () => this.selectedService(value)} checked={this.state.allSelectedItems.has(value)} name="serviceItem" type="checkbox" value={value}/> {value} </label>
        })
        return serviceItems;
    }

    componentWillMount() {
        this.selectedItem = new Set();
    }

    selectedService = (serviceItem) => {
        if (this.selectedItem.has(serviceItem)){
            this.selectedItem.delete(serviceItem);
        } else {
            this.selectedItem.add(serviceItem);
        }

        this.setState({
            allSelectedItems: this.selectedItem
        });

        console.log(this.state.allSelectedItems);
    }

    addItem(e){
        e.preventDefault();
        
        // const newItem = this.newItem.value;
        // this.setState({
        //     selectedItems: [...this.state.serviceItems, newItem]
        // })
        const checkedItems = this.state.allSelectedItems;
        // for (const itemList of this.state.allSelectedItems){
        //     checkedItems += itemList + ", ";
        // }

        console.log(checkedItems);
        this.setState({
            checkedItems: this.itemList
        });

        // const newList = this.newList.addItem;
        // this.setState({
        //     selectedItem: [...this.state.allSelectedItems, newList]
        // })
        // console.log(newList);
    }

    render() {
        // let serviceName = this.props.services.map( (service, i) => {
        //     return <div key={i}>{service.name}</div>
        // })
        // const {serviceItems} = this.state.newList;
        return (
            <div>
                <header>
                    <h3>What services are you interested in?</h3>
                    <form onSubmit={(e) => {this.addItem(e)}}>
                        <label className="serviceList">
                        {/* {
                            serviceItems.map(item => {
                                return <p key={item}><input type="checkbox" ref={(input) => {this.newItem = input}} />{item}</p>
                            })
                        } */}
                        { this.fetchServiceList()}
                        </label>
                        <br />
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
                            {/* {serviceItem.map(item => {
                                return (
                                    <tr >
                                        <td>{item}</td>
                                        <td>Button</td>
                                    </tr>
                                )
                            })} */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        serviceItems: state.serviceItems.serviceItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onServiceSelect: (serviceItems) => {
            dispatch(serviceActions.serviceSelected(serviceItems))
        },
        onServiceDeselect: (serviceItems) => {
            dispatch(serviceActions.serviceDeselected(serviceItems))
        }
    }
}

export default connect(mapStateToProps, )(ServiceList);

// export default ServiceList;