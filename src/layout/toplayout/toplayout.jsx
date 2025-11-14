import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import App from '../../App'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react'
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import './toplayout.css'

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}
const queryClient = new QueryClient()
const toplayout = () => {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <QueryClientProvider client={queryClient}>
                <App />
                <div className='toplayout'>
                    <header>
                        <Link to="/" className='logo'>
                            <img id='logo' src="/logo.png" alt="" />
                            <span>NeuroBot</span>
                        </Link>
                        <div className="user">
                            <SignedIn>
                                <UserButton />
                            </SignedIn></div>
                    </header>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </QueryClientProvider>
        </ClerkProvider>
    )
}

export default toplayout
