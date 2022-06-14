import './../sign-up-form/sign-up-form.scss'
import {useState} from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import {signInUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInUserWithEmailAndPassword(email, password)
      .then(
        ({ user }) => {
          console.log(user)
          resetFormFields()
          navigate('home')
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
    <div className='form-container'>
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

        <Button button_type='inverted' type="submit">Login</Button>
      </form>
    </div>
  )
}

export default SignInForm