import { useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';
import { updateContact } from 'redux/contact/contactOperations';
import { toast } from 'react-toastify';
import { Form, Title } from './UpdateContact.styled';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/AutoStoriesSharp';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'hooks/useAuth';

export const UpdateModal = ({ id, toggleModal, name, number }) => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: name,
      number: number,
    },
    mode: 'onChange',
  });

  const onSubmit = values => {
    if (
      name.trim().toLowerCase() === values.name.trim().toLowerCase() &&
      number === values.number
    ) {
      toast.error('The same values');
      return;
    }

    dispatch(updateContact({ id, values }))
      .unwrap()
      .then(() => toast.success('Contact is update'))
      .catch(() =>
        toast.error(
          'Something went wrong...Try reloading the page and enter valid email, password'
        )
      );
    reset();
    toggleModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Update Contact</Title>
      <TextField
        fullWidth
        id="outlined-basic"
        label="name"
        variant="outlined"
        type="text"
        sx={{ mb: '15px' }}
        {...register('name', { required: 'Name is required' })}
      />

      <p
        className="errorContainer"
        style={{ marginBottom: '15px', color: 'red' }}
      >
        {errors.name?.message}
      </p>
      <TextField
        fullWidth
        id="outlined-basic"
        label="number"
        variant="outlined"
        type="text"
        sx={{ mb: '15px' }}
        {...register('number', {
          required: 'This is required',
          minLength: 6,
        })}
      />
      <p
        className="errorContainer"
        style={{ marginBottom: '15px', color: 'red' }}
      >
        {errors.number?.message}
      </p>
      <LoadingButton
        loading={authIsLoading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, height: 60 }}
        disabled={!isValid}
      >
        Update Contact
      </LoadingButton>
    </Form>
  );
};
