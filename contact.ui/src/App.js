import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

   /*
 * Components
 */

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired
  },
  
  onNameChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
  },
  
  onPhoneNumberChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {phoneNumber: e.target.value}));
  },
  
/* Comment Box */

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit();
  },

  render: function() {
    var errors = this.props.value.errors || {};

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
        React.createElement('input', {
          type: 'text',
          className: errors.name && 'ContactForm-error',
          placeholder: 'Name (required)',
          value: this.props.value.name,
          onChange: this.onNameChange,
        }),
        React.createElement('input', {
          type: 'number',
          className: errors.phoneNumber && 'ContactForm-error',
          placeholder: 'Phone Number (required)',
          value: this.props.value.phoneNumber,
          onChange: this.onPhoneNumberChange,
        }),
       /* Comment */

        React.createElement('button', {type: 'submit', className: "btn btn-info"}, "Submit")
      )
    );
  },
});


var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string.isRequired,
   /* Comment */
  },

  render: function() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('h5', {className: 'ContactItem-phoneNumber'}, this.props.phoneNumber),
     /* Comment */
    )
    );
  },
});


var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
    onNewContactChange: React.PropTypes.func.isRequired,
    onNewContactSubmit: React.PropTypes.func.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.phoneNumber; })
      .map(function(contact) { return React.createElement(ContactItem, contact); });

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        React.createElement(ContactForm, {
          value: this.props.newContact,
          onChange: this.props.onNewContactChange,
          onSubmit: this.props.onNewContactSubmit,
        })
      )
    );
  },
});


/*
 * Constants
 */

/* Add Comment */
var CONTACT_TEMPLATE = {name: "", phoneNumber: "", errors: null};



/*
 * Actions
 */


function updateNewContact(contact) {
  setState({ newContact: contact });
}


function submitNewContact() {
  var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1, errors: {}});
  
  if (!contact.name) {
    contact.errors.name = ["Please enter your new contact's name"];
  }
  if (!contact.phoneNumber) {
    contact.errors.phoneNumber = ["Please enter your new contact's phone number"];
  }

  setState(
    Object.keys(contact.errors).length === 0 ? {
        newContact: Object.assign({}, CONTACT_TEMPLATE),
        contacts: state.contacts.slice(0).concat(contact),
      }
    : { newContact: contact }
  );
}


/*
 * Model
 */


// The app's complete current state
var state = {};

// Make the given changes to the state and perform any required housekeeping
function setState(changes) {
  Object.assign(state, changes);
  
  ReactDOM.render(
    React.createElement(ContactView, Object.assign({}, state, {
      onNewContactChange: updateNewContact,
      onNewContactSubmit: submitNewContact,
    })),
    document.getElementById('react-app')
  );
}

// Set initial data
setState({
  contacts: [
    {key: 1, name: "James K Nelson", phoneNumber: "756-739-9876", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", phoneNumber: "987-123-7365"},
  ],
  newContact: Object.assign({}, CONTACT_TEMPLATE),
});