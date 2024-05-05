import Field from '../components/Field';
import FieldSet from '../components/FieldSet';

const LoginForm = () => {
  return (
    <div>
      <form>
        <FieldSet label="Enter Login Details">
          <Field label="Email">
            <input
              className="p-2 border box-border w-[300px] border-gray-200 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password">
            <input
              className="p-2 border box-border w-[300px] border-gray-200 rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Passsword"
            />
          </Field>
          <Field>
            <button className='p-2 border text-md text-white cursor-pointer rounded-lg bg-purple-500 w-[100px]' type="submit">Login</button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};
export default LoginForm;
