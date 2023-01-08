import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './Phonebook.css'

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  onSubmit = (states) => {
    const { contacts } = this.state
    for (let i = 0; i < contacts.length; i++) {
      if(contacts[i].name === states.name) {return alert(`${states.name} is already in contacts`)}
    }

    const newItem = {
      name: states.name,
      number: states.number,
      id: nanoid()
    }

    this.setState(state => ({
      contacts: state.contacts.concat(newItem)
    }))
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    const normFilter = filter.toLowerCase()
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normFilter)
      )
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount() {
    const contactsInLocaleStorage = JSON.parse(localStorage.getItem('contacts'))
    if (contactsInLocaleStorage) {
      this.setState({contacts: contactsInLocaleStorage})
    }
  }


  render() {
    const { contacts, filter } = this.state
    const {onSubmit, changeFilter, getVisibleContacts, deleteContact} = this

    return (
      <div className='container'>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={changeFilter} />
        {contacts.length > 0 && <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />}
      </div>
    )
  }
}

export default App;