import { useForm } from 'react-hook-form';
import { Form, Title } from './Form.style';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contact/contactOperations';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'hooks/useAuth';
import { useContact } from 'hooks/useContacts';

export const ContactForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const { contacts } = useContact();
  const { authIsLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
    },
    mode: 'onChange',
  });

  const onSubmit = values => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return toast.error(`${name} is already in contacts.`);
    } else if (
      contacts.find(
        contact => contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      return toast.error(`${number} is already in contacts.`);
    } else {
      dispatch(addContact({ name, number }))
        .unwrap()
        .then(() => toast.success('Contact is add'))
        .catch(() =>
          toast.error(
            'Something went wrong...Try reloading the page and enter valid email, password'
          )
        );
    }

    toggleModal();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Phonebook</Title>
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
        Add Contacs
      </LoadingButton>
    </Form>
  );
};
