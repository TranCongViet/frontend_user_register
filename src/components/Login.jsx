import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 lg:py-0 h-screen">
                <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    Login to your account
                </div>
                <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <div
                                    className={`p-4 mb-6 text-sm rounded-lg ${'text-red-700 bg-red-100'}`}
                                    role="alert"
                                >
                                    Not yet active!
                                </div>
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
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Login
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Not a member yet?{' '}
                                <Link to="/user/register" className="font-medium text-primary-600 hover:underline">
                                    Sign up here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
