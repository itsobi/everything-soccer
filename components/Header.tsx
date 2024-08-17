'use client';

import { Menu, Newspaper, Slash, X } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';

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
    <header className="shadow py-4 sticky top-0 bg-[#2b2c2d] text-white z-50">
      <div className="lg:hidden flex items-center justify-between px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="w-full bg-white z-50" side="left">
            <SheetClose onClick={() => setOpen(false)}>
              <X />
              <span className="sr-only">Close</span>
            </SheetClose>
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
                    pathname.includes(`/${link.leagueCode}`) && 'text-[#e52534]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <Image src={soccerBall} alt="Soccer ball" />
      </div>

      <Breadcrumb className="hidden lg:flex justify-center items-center">
        <BreadcrumbList>
          {pathname !== '/' && (
            <>
              <Link href="/" className="hover:text-[#e52534]">
                <Newspaper size={18} />
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
