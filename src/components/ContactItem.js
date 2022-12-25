const ContactItem = ({ contacts, onDelete }) => {
    return (
        <>
            {contacts.map((contact) => 
              <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
                <button type="button" onClick={()=> onDelete(contact.id)}>Delete</button>
              </li>
            )}
        </>
    )
}

export default ContactItem