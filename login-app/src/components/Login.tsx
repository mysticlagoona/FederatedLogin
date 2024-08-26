import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import CustomGoogleLogin from './CustomGoogleLogin';

const Login: React.FC = () => {
    const handleSuccess = (credentialResponse: any) => {
        console.log('Google Login Successful', credentialResponse);
    };

    const handleError = () => {
        console.log('Google Login Failed');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
                <GoogleOAuthProvider clientId="<your_client_id>">
                        <div>
                            <GoogleLogin
                                onSuccess={handleSuccess}
                                onError={handleError}
                                useOneTap
                            />
                        </div>

                    <div className="flex items-center justify-center space-x-4">
                        <hr className="flex-1 border-gray-300" />
                        <span className="text-gray-500">Or with custom style</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>
                    <CustomGoogleLogin />
                </GoogleOAuthProvider>

            </div>
        </div>
    );
};

export default Login;
