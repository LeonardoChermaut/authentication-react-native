import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };
  const onSignInApple = () => {
    console.warn("onSignInApple");
  };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7FAF4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#E3E3E3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
