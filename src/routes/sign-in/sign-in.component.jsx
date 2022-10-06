import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </div>
  );
};

export default SignIn;
