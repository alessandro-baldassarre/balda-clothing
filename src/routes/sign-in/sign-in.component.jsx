import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
