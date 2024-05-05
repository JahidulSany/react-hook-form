import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isError,
  } = useForm();

  const submitData = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(submitData)}
        className="bg-slate-200 p-2 m-4 border rounded-lg"
      >
        <FieldSet label="Enter Registration Details">
          <Field label="Fullname" error={errors.fullname}>
            <input
              {...register('fullname', {
                required: 'Fullname is required.',
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.fullname ? 'border-red-500' : 'border-gray-200'
              }`}
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter fullname"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register('age', {
                required: 'Age is required.',
                max: {
                  value: 100,
                  message: 'Age must be between 0 and 100',
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.age ? 'border-red-500' : 'border-gray-200'
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter age"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register('email', {
                required: 'Email is required.',
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                errors.password ? 'border-red-500' : 'border-gray-200'
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </Field>
        </FieldSet>
        <Field>
          <button
            className="m-2 p-2 border text-md text-white cursor-pointer rounded-lg bg-purple-500 w-[100px]"
            type="submit"
          >
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};
export default RegisterForm;
