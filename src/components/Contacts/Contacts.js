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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/contact/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContact);
  const [showModal, setShowModal] = useState(false);

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
        <ToastContainer autoClose={2000} position="top-right" />
      </Container>
    </>
  );
};
