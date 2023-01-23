import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth/Operations';
import { toast } from 'react-toastify';
import { Container, Form } from './Login.styled';
import TextField from '@mui/material/TextField';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'hooks/useAuth';

export const Login = () => {
  const dispatch = useDispatch();
  const { authIsLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: ' ',
      password: '',
    },
  });

  const onSubmit = values => {
    console.log(values);
    // const { name, email, password } = values;
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success('You are successfully logged in'))
      .catch(() =>
        toast.error(
          'Something went wrong...Try reloading the page and enter valid email, password'
        )
      );
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="email"
          variant="outlined"
          sx={{ mb: '15px' }}
          {...register('email', { required: 'This is required' })}
        />

        <p>{errors.email?.message}</p>

        <TextField
          fullWidth
          type="text"
          id="outlined-basic"
          label="password"
          variant="outlined"
          sx={{ mb: '15px' }}
          {...register('password', {
            required: 'This is required',
            minLength: 6,
          })}
        />

        <p>{errors.password?.message}</p>
        <LoadingButton
          loading={authIsLoading}
          loadingPosition="start"
          startIcon={<AutoStoriesSharpIcon />}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </LoadingButton>
      </Form>
    </Container>
  );
};
