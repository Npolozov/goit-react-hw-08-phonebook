import { useState } from 'react';
import { ContactForm } from 'components/Form/Form';
import { List } from 'components/List/List';
import { Filter } from 'components/Filter/Filter';
import {
  Container,
  Wrapper,
  WrapperContact,
  Title,
  Button,
} from './Contacts.styled';
import { OpenModal } from 'components/Modal/Modal';

import 'react-toastify/dist/ReactToastify.css';
import { useContact } from 'hooks/useContacts';

export const Contacts = () => {
  const [showModal, setShowModal] = useState(false);
  const { contacts } = useContact();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(contacts);

  return (
    <>
      <Container>
        <Wrapper>
          <Button type="button" onClick={toggleModal}>
            Add Contact
          </Button>
          {showModal && (
            <OpenModal onClose={toggleModal}>
              <ContactForm toggleModal={toggleModal} />
            </OpenModal>
          )}
        </Wrapper>
        <WrapperContact>
          <Title>Contacts</Title>
          {contacts.length >= 1 && <Filter />}
          <List />
        </WrapperContact>
      </Container>
    </>
  );
};
