import {useState} from "react";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import Button from "../button/button"

import './sign-up-form.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      createAuthUserWithEmailAndPassword(email, password)
        .then(
          ({ user }) => {
            console.log("Success")
            console.log(user)
            createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
          },
          (error) => {
            console.log("Error creating user auth")

            // Handle various auth errors
            switch (error.code) {
              case 'auth/email-already-in-use':
                alert("Email already in use!");
                break;
              default:
                break;
            }
          }
        )
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button button_type='inverted' type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm