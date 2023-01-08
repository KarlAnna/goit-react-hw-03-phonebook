import PropTypes from 'prop-types';
import { Component } from 'react';
import './Phonebook.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    formSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onSubmit({...this.state})
        this.reset()
    }

    handleNameChange = (e) => {
        const { name } = e.target
        this.setState({ [name]: e.target.value })
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }
    

    render() {
        const { name, number } = this.state
        const { formSubmitHandler, handleNameChange } = this
        
        return (
            <form className='form' onSubmit={formSubmitHandler}>
                <label htmlFor='name'>Name</label>
                <input
                    onChange={handleNameChange}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor='number'>Number</label>
                <input
                    onChange={handleNameChange}
                    value={number}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
}

export default ContactForm