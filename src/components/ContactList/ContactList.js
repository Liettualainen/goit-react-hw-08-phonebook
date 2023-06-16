import { useSelector } from "react-redux";
import { ContactsListForm} from '../ContactsListForm/ContactsListForm';
import { selectFilteredContacts} from "redux/contacts/selectors";
import { FormLabel,} from '@chakra-ui/react'

export const ContactList = () => {

    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <>               
                <FormLabel fontSize='30px' marginTop='10px'>Contacts:
                        {filteredContacts.map(({ id, name, number }) => (
                <div key={id}>
                <ContactsListForm id={id} name={name} number={number} />                    
                    </div>
                        ))}
                 </FormLabel>    
        </>
    );
};