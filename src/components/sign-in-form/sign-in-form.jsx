import './sign-in-form.scss'
import {useState} from "react";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUserWithEmailAndPassword(email, password)
      .then(
        ({ user }) => {
          console.log(user)
        },
        (error) => {
          console.log("Error logging in")
          console.log(error)

          switch (error.code) {
            default:
              break;
          }
        }
      )
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='sign-up-container'>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <Button button_type='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignInForm