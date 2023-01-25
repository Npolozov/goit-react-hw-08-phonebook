import { Button, ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/contactOperations';
import { toast } from 'react-toastify';
import { getIsLoading } from 'redux/contact/selectors';
import { useState } from 'react';
import { UpdateModal } from 'components/UpdateContact/UpdateContact';
import { OpenModal } from 'components/Modal/Modal';

export function ListContact({ name, number, id }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(showModal);

  const handleDelete = () =>
    dispatch(deleteContact(id), toast.success(`${name} is already in delete.`));

  return (
    <>
      <p>
        {name}: <span>{number}</span>
      </p>
      <ConteinerButton>
        <Button onClick={handleDelete}>
          {isLoading ? 'Deleting...' : 'Delete'}
        </Button>
      </ConteinerButton>
      <ConteinerButton>
        <Button type="button" onClick={toggleModal}>
          Update
        </Button>
        {showModal && (
          <OpenModal onClose={toggleModal}>
            <UpdateModal
              id={id}
              name={name}
              number={number}
              toggleModal={toggleModal}
            />
          </OpenModal>
        )}
      </ConteinerButton>
    </>
  );
}

ListContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
