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
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: ' ',
      password: '',
    },
    mode: 'onChange',
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
          type="text"
          id="outlined-basic"
          label="password"
          variant="outlined"
          sx={{ mb: '15px' }}
          {...register('password', {
            required: 'Password is required',
            minLength: 6,
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
          startIcon={<AutoStoriesSharpIcon />}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!isValid}
        >
          Log In
        </LoadingButton>
      </Form>
    </Container>
  );
};
