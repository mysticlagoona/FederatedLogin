import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const CustomGoogleLogin: React.FC = () => {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log('Google Login Successful:', tokenResponse);
        },
        onError: () => {
            console.log('Google Login Failed');
        },
    });

    return (
    
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-md shadow-md">

            <button
                onClick={() => login()}
                className="w-full py-2 px-4 mt-4 flex items-center justify-center bg-gray-50 text-black font-semibold rounded-full border"
            >
                <svg
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                >
                    <path
                        fill="#4285F4"
                        d="M44.5 20H24v8.5h11.9C34.6 33.4 30.8 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.3 0 6.3 1.2 8.6 3.3l6.4-6.4C34.6 3.8 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.1-2.7-.5-4z"
                    />
                    <path
                        fill="#34A853"
                        d="M6.3 14.8l6.6 4.8C15 16.2 18.9 14 24 14c3.3 0 6.3 1.2 8.6 3.3l6.4-6.4C34.6 3.8 29.6 2 24 2 16.1 2 9.2 6.4 6.3 14.8z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M24 46c6 0 11.1-2 14.9-5.4l-6.6-5.5C29.3 37.5 26.7 38 24 38c-6.9 0-12.8-4.3-15-10.4l-6.6 5C9.3 41.6 16.2 46 24 46z"
                    />
                    <path
                        fill="#EA4335"
                        d="M44.5 20H24v8.5h11.9c-1.1 3-4.1 5.5-7.9 7l-7.9 6.2C22 46 24 46 24 46c11 0 21-8 21-22 0-1.3-.1-2.7-.5-4z"
                    />
                </svg>
                Sign in with Google
            </button>
        </div>
    );
};

export default CustomGoogleLogin;
