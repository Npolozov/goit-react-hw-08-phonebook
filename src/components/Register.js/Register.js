import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUse } from 'redux/auth/Operations';
import { Container, Form } from './Register.styled';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'hooks/useAuth';

export const Register = () => {
  const { authIsLoading } = useAuth();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = values => {
    console.log(values);
    // const { name, email, password } = values;
    dispatch(registerUse(values));
  };

  return (
    <Container>
      {' '}
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
          label="email"
          variant="outlined"
          type="text"
          sx={{ mb: '15px' }}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter valid email',
            },
          })}
        />
        <p
          className="errorContainer"
          style={{ marginBottom: '15px', color: 'red' }}
        >
          {errors.email?.message}
        </p>
        <TextField
          fullWidth
          id="outlined-basic"
          label="password"
          variant="outlined"
          type="text"
          sx={{ mb: '15px' }}
          {...register('password', {
            required: 'This is required',
          })}
        />

        <p
          className="errorContainer"
          style={{ marginBottom: '15px', color: 'red' }}
        >
          {errors.password?.message}
        </p>
        <LoadingButton
          loading={authIsLoading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!isValid}
        >
          Register
        </LoadingButton>
      </Form>
    </Container>
  );
};
