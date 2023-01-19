// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/Operations';

// export const Register = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerUse } from 'redux/auth/Operations';

export const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <label htmlFor="name">Username</label>
      <input
        id="name "
        type="text"
        {...register('name', { required: 'This is required' })}
      />

      <p>{errors.name?.message}</p>

      <label htmlFor="email">Username</label>
      <input
        id="email "
        type="text"
        {...register('email', { required: 'This is required' })}
      />

      <p>{errors.name?.message}</p>
      <label htmlFor="password">Username</label>
      <input
        id="password "
        type="text"
        {...register('password', {
          required: 'This is required',
        })}
      />

      <p>{errors.name?.message}</p>
      <button type="submit">Register</button>
    </form>
  );
};
