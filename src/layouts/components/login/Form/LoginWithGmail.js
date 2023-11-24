import { GoogleLogin } from "@leecheuk/react-google-login";

const clientId =
    "761795137140-md3pvtt78k2o34ei30cft59gafnno3l7.apps.googleusercontent.com";

function LoginWithGmail() {
    const handleSuccess = (response) => {};

    const handleFailure = (error) => {};

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Sign up with Gmail"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
        />
    );
}

export default LoginWithGmail;
