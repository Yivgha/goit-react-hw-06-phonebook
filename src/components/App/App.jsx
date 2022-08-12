import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { Container, MainTitle, Title } from './App.styled';

export function App() {

  const contacts = useSelector(getContacts);

    return (
      <Container>
        <MainTitle>Phone book</MainTitle>
        <Form />
        {contacts.length !== 0 && <Title>Contacts</Title>}
        {contacts.length !== 0 && <Filter />}
        <Contacts />
      </Container>
    );
};