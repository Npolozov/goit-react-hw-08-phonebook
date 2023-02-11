import { ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/contactOperations';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { UpdateModal } from 'components/UpdateContact/UpdateContact';
import { OpenModal } from 'components/Modal/Modal';
import { useContact } from 'hooks/useContacts';
import LoadingButton from '@mui/lab/LoadingButton';

export function ListContact({ name, number, id }) {
  const dispatch = useDispatch();
  const { isLoading } = useContact();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(showModal);

  const handleDelete = () =>
    dispatch(deleteContact(id), toast.success(`${name} is already in delete.`));

  return (
    <>
      <div>
        <p>
          {name}: <span>{number}</span>
        </p>
      </div>

      <ConteinerButton>
        <LoadingButton
          size="small"
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={handleDelete}
        >
          Delete
        </LoadingButton>
        <LoadingButton
          size="small"
          loading={isLoading}
          variant="contained"
          color="primary"
          onClick={toggleModal}
        >
          Update
        </LoadingButton>
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
