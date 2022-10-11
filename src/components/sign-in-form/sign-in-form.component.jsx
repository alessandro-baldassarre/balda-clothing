import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthFromEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthFromEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
        <FormInput
          label="password"
          inputOption={{
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />
        <ButtonsContainer>
          <Button type="submit" children="sign in" />
          <Button
            type="button"
            onClick={signInWithGoogle}
            children="google sign in"
            buttonType={BUTTON_TYPE_CLASSES.google}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
