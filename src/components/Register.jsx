import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
export function Register() {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage('Your passwords do not match. Please try again!');
            setIsError(true);
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${serverUrl}user/register`, formData);
            setMessage(response.data.message);
            setIsError(false);
            setTimeout(() => {
                navigate('/user/login');
            }, 2000);
        } catch (error) {
            if (!error.response) {
                setMessage('Server is not responding. Please try again later.');
            }
            else {
                setMessage(error.response.data.message);
            }
            setIsError(true);
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-gray-50 relative">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
                    <FadeLoader />
                </div>
            )}
            <div className={`flex flex-col items-center justify-center px-6 py-8 lg:py-0 h-screen ${loading ? 'opacity-50' : ''}`}>
                <div className="flex items-center mt-6 mb-6 text-2xl font-semibold text-gray-900">
                    Sign Up
                </div>
                <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        {message && (
                            <div
                                className={`p-4 text-sm rounded-lg ${isError
                                    ? 'text-red-700 bg-red-100'
                                    : 'text-green-700 bg-green-100'
                                    }`}
                                role="alert"
                            >
                                {message}
                            </div>
                        )}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{' '}
                                <Link to="/user/login" className="font-medium text-primary-600 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
