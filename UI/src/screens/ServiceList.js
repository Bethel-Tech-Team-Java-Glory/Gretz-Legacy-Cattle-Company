import React from 'react';
import { Button } from 'react-bootstrap';

class ServiceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceItems: [],
            newItem: {
                servicename: ""
            },
            message: ""
        }

        this.addItem = this.addItem.bind(this);
    }

    // fetchData() {
    //     fetch('/service-list')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then((serviceItems) => this.setState({serviceItems}))
    // }

    // componentDidMount() {
    //     this.fetchData();
    // }

    addItem(e){
        e.preventDefault();

        const {serviceItems} = this.state;
        const newItem = this.state.newItem;

        this.setState({
            serviceItems: [...this.state.serviceItems, newItem.servicename]
        })   

        

        console.log(newItem);

        fetch('/service-list/add', {
            credentials: 'include',
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(console.log)
    }

    removeItem(item){
        const newServiceItems = this.state.serviceItems.filter(serviceItems => {
            return serviceItems !== item;
        })

        this.setState({
            serviceItems: [...newServiceItems]
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
                                   <tr key={item}>
                                       <td>{item}</td>
                                       <td className="text-left">
                                            <Button bsSize="small" >Update</Button>
                                            <Button onClick = {(e) => this.removeItem(item)} bsSize="small" >Remove</Button>
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

//     constructor(props) {
//         super(props);
//         this.state = { 
//             serviceItems: [
//                 "Hay hauling",
//                 "Beef",
//                 "Hats"
//             ]
//         }

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     // fetchServiceList = () => {
//     //     const serviceItems = serviceItem.map((value, key) => {
//     //         return <label className="checkbox" key={key}><input onChange={ () => this.selectedService(value)} checked={this.state.allSelectedItems.has(value)} name="serviceItem" type="checkbox" value={value}/> {value} </label>
//     //     })
//     //     return serviceItems;
//     // }

//     // componentWillMount() {
//     //     this.selectedItem = new Set();
//     // }

//     // selectedService = (serviceItem) => {
//     //     if (this.selectedItem.has(serviceItem)){
//     //         this.selectedItem.delete(serviceItem);
//     //     } else {
//     //         this.selectedItem.add(serviceItem);
//     //     }

//     //     this.setState({
//     //         allSelectedItems: this.selectedItem
//     //     });

//     //     console.log(this.state.allSelectedItems);
//     // }

//     // addItem(e){
//     //     e.preventDefault();
        
//     //     // const newItem = this.newItem.value;
//     //     // this.setState({
//     //     //     selectedItems: [...this.state.serviceItems, newItem]
//     //     // })
//     //     const checkedItems = this.state.allSelectedItems;
//     //     // for (const itemList of this.state.allSelectedItems){
//     //     //     checkedItems += itemList + ", ";
//     //     // }

//     //     console.log(checkedItems);
//     //     this.setState({
//     //         checkedItems: this.itemList
//     //     });
//     // }

//     handleInputChange(e) {
//         // const target = e.target;
//         // const value = target.type === 'checkbox' ? target.checked : target.item;

//         // this.setState({[value] : e.target.value})
//         let item = this.state.item
//         this.setState(
//             {item: item}
//         )
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         function selectedService (serviceItem) {
//             if (this.selectedItem.has(serviceItem)){
//                 this.selectedItem.delete(serviceItem);
//             } else {
//                 this.selectedItem.add(serviceItem);
//             }
        
//         this.setState({
//             allSelectedItems: this.selectedService
//         });
//     }
// }

//     render() {
//         return (
//             <div>
//                 <header>
//                     <h3>What services are you interested in?</h3>
//                     <form onSubmit={(e) => {this.handleSubmit(e)}}>
//                         <label className="serviceList">
//                         {
//                             this.state.serviceItems.map(item => {
//                                 return <p key={item}><input type="checkbox" ref={(selectedService) => {this.newItem = selectedService}} onChange={ () => this.selectedService(item)} checked={this.state.allSelectedItems.has(item)}/>{item}</p>
//                             })
//                         }
//                         </label>
//                         <br />
//                         <button className="btn btn-default" type="submit">Select</button>
//                     </form>
//                 </header>

//                 <div>
//                     <table className="table">
//                         <caption>Service List</caption>
//                         <thead>
//                             <tr>
//                                 <th>Item</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.serviceItems.map(item => {
//                                 return (
//                                     <tr >
//                                         <td>{item}</td>
//                                         <td>Button</td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ServiceList;