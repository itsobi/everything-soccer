'use client';

import { Menu, Newspaper, Slash, X } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import soccerBall from '../app/favicon.ico';
import Image from 'next/image';

const allHeaderLinks = [
  {
    label: 'Premier League',
    leagueCode: 'PL',
  },
  {
    label: 'La Liga',
    leagueCode: 'PD',
  },
  {
    label: 'Bundesliga',
    leagueCode: 'BL1',
  },
  {
    label: 'Serie A',
    leagueCode: 'SA',
  },
  {
    label: 'Ligue 1',
    leagueCode: 'FL1',
  },
  {
    label: 'Eredivisie',
    leagueCode: 'DED',
  },
  {
    label: 'Championship (ENG)',
    leagueCode: 'ELC',
  },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow py-4 sticky top-0 bg-[#2b2c2d] text-white z-50 mb-10">
      <div className="lg:hidden flex justify-between items-center px-4">
        <Drawer direction="left" open={open} onClose={() => setOpen(false)}>
          <DrawerTrigger>
            <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
          </DrawerTrigger>
          <DrawerContent className="bg-white h-screen pt-4 sm:pt-0">
            <div className="pl-4">
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            </div>

            <div>
              <div className="flex flex-col">
                <button
                  onClick={() => {
                    router.push(`/`);
                    setOpen(false);
                  }}
                  className={`font-semibold hover:text-[#e52534] border-b p-2 ${
                    pathname === '/' && 'text-[#e52534]'
                  }`}
                >
                  Home
                </button>
                {allHeaderLinks.map((link) => (
                  <button
                    key={link.leagueCode}
                    onClick={() => {
                      router.push(`/${link.leagueCode}`);
                      setOpen(false);
                    }}
                    className={`font-semibold hover:text-[#e52534] border-b p-2 ${
                      pathname === `/${link.leagueCode}` && 'text-[#e52534]'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            <DrawerFooter>
              <p className="text-xs text-gray-400">
                brought to you by:{' '}
                <a
                  href="https://justobii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  justobii.com
                </a>
              </p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Image src={soccerBall} alt="soccer ball" />
      </div>
      <Breadcrumb className="hidden lg:flex justify-center items-center">
        <BreadcrumbList>
          {pathname !== '/' && (
            <>
              <Link href="/" className="hover:text-[#e52534]">
                <Newspaper />
              </Link>
              <BreadcrumbSeparator>
                <Slash className="text-gray-300" />
              </BreadcrumbSeparator>
            </>
          )}
          {allHeaderLinks.map((link, i) => (
            <Fragment key={link.leagueCode}>
              <BreadcrumbItem
                className={`${
                  pathname.includes(`/${link.leagueCode}`) && 'text-[#e52534]'
                } hover:text-[#e52534]`}
              >
                <Link href={`/${link.leagueCode}`}>{link.label}</Link>
              </BreadcrumbItem>
              {allHeaderLinks.length - 1 !== i && (
                <BreadcrumbSeparator>
                  <Slash className="text-gray-300" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
