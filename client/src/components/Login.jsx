import React, { useState } from 'react'

const Login = ({ setShowLogin }) => {

    const [state, setState] = useState('Login'); // 'Login' ya 'Sign Up'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

    }

    return (
        <div onClick={() => setShowLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center text-sm text-gray-600 bg-black/50'>
         
            <div onClick={(e) => e.stopPropagation()} className="bg-white text-gray-500 w-full max-w-96 mx-4 md:p-8 p-6 text-left text-sm rounded-xl shadow-lg">
                
                <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
                    {state === 'Login' ? 'Welcome back' : 'Create Account'}
                </h2>
                <p className='text-center mb-6 text-gray-500'>
                    {state === 'Login' ? 'Please login to continue' : 'Join us to start booking'}
                </p>

                <form onSubmit={onSubmitHandler}>
                    {state === 'Sign Up' && (
                        <input 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:border-indigo-500" 
                            type="text" 
                            placeholder="Full Name" 
                            required 
                        />
                    )}

                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        className="w-full bg-transparent border mb-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:border-indigo-500" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                    />

                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        className="w-full bg-transparent border border-gray-500/30 outline-none rounded-full py-2.5 px-4 focus:border-indigo-500" 
                        type="password" 
                        placeholder="Enter your password" 
                        required 
                    />

                    {state === 'Login' && (
                        <div className="text-right py-3">
                            <a className="text-primary hover:text-primary-dull text-xs" href="#">Forgot Password?</a>
                        </div>
                    )}

                    <button type="submit" className="w-full mt-4 cursor-pointer mb-3 bg-indigo-600 py-2.5 rounded-full text-white font-medium hover:bg-indigo-700 transition-all">
                        {state === 'Login' ? 'Log in' : 'Create Account'}
                    </button>
                </form>

                {/* State Toggle Logic */}
                {state === 'Login' ? (
                    <p className="text-center mt-2">
                        Don’t have an account? <span onClick={() => setState('Sign Up')} className="text-indigo-600 cursor-pointer hover:underline font-medium">Sign up</span>
                    </p>
                ) : (
                    <p className="text-center mt-2">
                        Already have an account? <span onClick={() => setState('Login')} className="text-indigo-600 cursor-pointer hover:underline font-medium">Login</span>
                    </p>
                )}

                <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300'>
                    <p className='mx-4 text-gray-400'>or</p>
                </div>

                <button type="button" className="w-full cursor-pointer flex items-center gap-2 justify-center bg-white border border-gray-300 py-2.5 rounded-full text-gray-700 hover:bg-gray-50 transition-all">
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="google" />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}

export default Login