import { useForm } from 'react-hook-form';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitData = (formData) => {
    const user = {
      email: 'user@gmail.com',
      password: 12345678,
    };

    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError('root.random', {
        message: `User with email ${formData.email} is not found.`,
        type: 'random',
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form className="bg-slate-200 p-2 m-4 border rounded-lg">
        <FieldSet label="Enter Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <input
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 8,
                  message: 'Your password must be at least 8 characters.',
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Passsword"
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button
            onSubmit={() => handleSubmit(submitData)}
            className="m-2 p-2 border text-md text-white cursor-pointer rounded-lg bg-purple-500 w-[100px]"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};
export default LoginForm;
