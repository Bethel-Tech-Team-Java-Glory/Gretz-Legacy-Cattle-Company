import React from 'react';
import { Button } from 'react-bootstrap';

class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceItems: [],
            newItem: {
                service_id: "",
                servicename: ""
            },
            message: ""
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('/service-list')
        .then(response => {
            return response.json()
        })
        .then((serviceItems) => this.setState({serviceItems}))
    }

    addItem(e){
        e.preventDefault();

        const newItem = this.state.newItem;

        fetch('/service-list/add', {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(this.setState({
            serviceItems: [...this.state.serviceItems, newItem]
        }))
        .then(console.log(newItem))
    }

    async removeItem(service_id) {
        await fetch(`/service-list/${service_id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }).then(() => {
            let updatedItems = [...this.state.serviceItems].filter(i => i.service_id !== service_id);
            this.setState({serviceItems: updatedItems})
        })
    }

    render() {
        const {serviceItems, message} = this.state
        return (
            <div>
                <header>
                <h3>Tell us what services you're interested in:</h3>
                </header>
                <form method="post" className="form-inline" onSubmit={(e) => this.addItem(e)}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                        <input onChange={(e) => this.setState({ newItem: { servicename: e.target.value } })} type="text" className="form-control" id="newItemInput" />
                    </div>
                    <Button className="btn btn-secondary" type="submit">Add</Button>
                </form>
                <div>
                    {
                        message !== '' && <p className="message text-danger">{message}</p>
                    }
                   <table className="table">
                        <caption>Service List</caption>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceItems.map(item => {
                                return (
                                   <tr key={item.service_id}>
                                       <td>{item.servicename}</td>
                                       <td className="text-left">
                                            <Button onClick = {() => this.removeItem(item.service_id)} bsSize="small" >Remove</Button>
                                       </td>
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

export default ServiceList;