'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Container from "./container";
import Image from "next/image";
import Menu from "./menu";
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // tema
import 'primereact/resources/primereact.min.css'; // componentes
import 'primeicons/primeicons.css'; // ícones

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark';
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };


  return (
    <header className="w-full flex items-center h-16 bg-black/50">
      <Container className="flex-1 flex justify-center sm:justify-between items-center">
        <div className="flex items-center gap-10">
          <Link href="/" className="hidden sm:block">
            <Image src="/my-logo.png" alt="logo" width={80} height={0} />
          </Link>
          <Menu />
        </div>
        <div className="hidden sm:flex items-center">
          <Button className='absolute top-0 right-8' icon={`${theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'}`} severity="contrast" rounded aria-label='Thema dark or light' onClick={toggleTheme} />

          <Link href="https://www.linkedin.com/in/oseias-freitas/"
            target="_blank"
            className=""
          >

            {/* linkedin.png */}
            <Image src="/linkedin.png" alt="linkedin" width={55} height={0} />
          </Link>

          {/* <Link href="https://www.linkedin.com/in/oseias-freitas/"
             target="_blank"
             className="bg-[#ddad29] rounded-full px-7 py-1 text-sm font-bold"
             >
                    
                  Meu perfil
            </Link> */}
        </div>

      </Container>
    </header>
  )
}