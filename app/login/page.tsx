'use client';

import React from 'react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-red-800 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-amber-400 font-bold text-2xl">GU</span>
                    </div>
                    <h1 className="text-2xl font-bold text-black">Gauhati University</h1>
                    <p className="text-black text-sm">Login to Portal</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Email / Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-black mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
                            <span className="ml-2 text-sm text-black">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-red-800 hover:text-red-900">Forgot password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-red-950 text-white py-3 rounded-lg font-medium transition-all"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-black">Or continue with</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="mt-4 w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="font-medium text-black">Sign in with Google</span>
                    </button>
                </div>

                <div className="mt-6 text-center space-y-2">
                    <p className="text-sm text-black">
                        Don't have an account? <a href="/register" className="text-red-800 hover:text-red-900 font-medium">Sign up</a>
                    </p>
                    <a href="/" className="block text-sm text-red-800 hover:text-red-900">← Back to Home</a>
                </div>
            </div>
        </div>
    );
}
