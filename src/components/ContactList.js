import PropTypes from 'prop-types';
import ContactItem from "./ContactItem"

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            <ul>
                <ContactItem contacts={contacts} onDelete={onDelete} />
            </ul>
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    onDelete: PropTypes.func
}

export default ContactList