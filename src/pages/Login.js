import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { logIn } from 'redux/auth/Operations';
import { toast } from 'react-toastify';

export const Login = () => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label htmlFor="email">Username</label>
      <input
        id="email "
        type="text"
        {...register('email', { required: 'This is required' })}
      />

      <p>{errors.name?.message}</p>

      <label htmlFor="password">Password</label>
      <input
        id="password "
        type="text"
        {...register('password', {
          required: 'This is required',
          minLength: 6,
        })}
      />

      <p>{errors.name?.message}</p>
      <button type="submit">Log In</button>
    </form>
  );

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     const form = e.currentTarget;
  //     dispatch(
  //       logIn({
  //         email: form.elements.email.value,
  //         password: form.elements.password.value,
  //       })
  //     );
  //     form.reset();
  //   };

  //   return (
  //     <form autoComplete="off" onSubmit={handleSubmit}>
  //       <label>
  //         Email
  //         <input type="email" name="email" />
  //       </label>
  //       <label>
  //         Password
  //         <input type="password" name="password" />
  //       </label>
  //       <button type="submit">Log In</button>
  //     </form>
  //   );
};
