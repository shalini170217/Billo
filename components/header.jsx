"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn,SignedOut,SignInButton,SignOutButton ,SignUpButton,UserButton} from '@clerk/nextjs'
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';
import { usePathname } from 'next/navigation';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {
  const {isLoading}=useStoreUser();
  const path=usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
        <Image 
        src={"/logos/logo-s-v2.png"}
        alt="Billo"
        width={600}
        height={200}
        className='h-18 w-auto object-contain'
        />
        </Link>
        {path==='/' && (
          <div className="hidden md:flex items-center gap-6">
            <Link 
            href="#features"
            className="text-sm font-medium hover:text-cyan-700 transition"
            >
              Features
            
            </Link>
            <Link 
            href="#how-it-works"
            className="text-sm font-medium hover:text-cyan-700 transition"
            >
              How It Works
            
            </Link>
          </div>
        )}
        <div className='flex items-center gap-4'>
          <Authenticated>
            <Link href="/dashboard">
           <Button
           variant="outline"
           className="hidden md:inline-flex items-center gap-2 hover:text-cyan-700  hover:border-cyan-700 transition"
           >
             <LayoutDashboard className="h-4 w-4"/>
            Dashboard
           </Button>
           <Button variant="ghost" className="md:hidden w-10 h-10 p-0">

            <LayoutDashboard className="h-4 w-4"/>
           </Button>
            </Link>
            <UserButton/>
          </Authenticated>


          <Unauthenticated>
            <SignInButton>
              <Button variant={"ghost"}>Sign In</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-cyan-900 hover:bg-cyan-700 border-none">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
            </nav>
            {isLoading && <BarLoader width={"100%"} color='#173054' />}
    </header>
  )
}

export default Header
