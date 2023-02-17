import { ConteinerButton } from './ListContact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contact/contactOperations';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { UpdateModal } from 'components/UpdateContact/UpdateContact';
import { OpenModal } from 'components/Modal/Modal';
import { useContact } from 'hooks/useContacts';
import LoadingButton from '@mui/lab/LoadingButton';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

export function ListContact({ item, id }) {
  const dispatch = useDispatch();
  const { isLoading } = useContact(false);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState();

  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(max-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  console.log(showModal);

  const handleDelete = () => {
    setCurrentId(id);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('You are successfully add contact'))
      .catch(() =>
        toast.error('Try reloading the page and enter valid email, password')
      );
  };

  return (
    <>
      <div>
        <p>
          {item.name}: <span>{item.number}</span>
        </p>
      </div>

      <ConteinerButton>
        <LoadingButton
          sx={{ minWidth: 50 }}
          loading={isLoading && currentId === id}
          variant="contained"
          color="primary"
          onClick={handleDelete}
        >
          {matches ? <DeleteRoundedIcon /> : 'Delete'}
        </LoadingButton>
        <LoadingButton
          sx={{ minWidth: 50 }}
          variant="contained"
          color="primary"
          onClick={toggleModal}
        >
          {matches ? <SystemUpdateAltIcon /> : 'Update'}
        </LoadingButton>
        {showModal && (
          <OpenModal onClose={toggleModal}>
            <UpdateModal
              id={id}
              name={item.name}
              number={item.number}
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
