import { useState } from "react";
import {
  createAuthFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import ".//sign-up.styles.scss";

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthFromEmailAndPassword(email, password);
      const userAuth = { ...user, displayName: displayName };
      await createUserDocumentFromAuth(userAuth);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.error("error creating the user", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <Button type="submit" children="sign up" />
      </form>
    </div>
  );
};

export default SignUpForm;
