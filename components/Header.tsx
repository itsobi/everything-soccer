'use client';

import { ChevronDown, HomeIcon, Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

const allHeaderLinks = [
  { label: 'Premier League', leagueCode: 'PL' },
  { label: 'La Liga', leagueCode: 'PD' },
  { label: 'Bundesliga', leagueCode: 'BL1' },
  { label: 'Serie A', leagueCode: 'SA' },
  { label: 'Ligue 1', leagueCode: 'FL1' },
  { label: 'Eredivisie', leagueCode: 'DED' },
  { label: 'Championship (ENG)', leagueCode: 'ELC' },
];

const smallLinks = [
  { label: 'Premier League', leagueCode: 'PL' },
  { label: 'La Liga', leagueCode: 'PD' },
  { label: 'Bundesliga', leagueCode: 'BL1' },
];

const moreLinks = [
  { label: 'Serie A', leagueCode: 'SA' },
  { label: 'Ligue 1', leagueCode: 'FL1' },
  { label: 'Eredivisie', leagueCode: 'DED' },
  { label: 'Championship (ENG)', leagueCode: 'ELC' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="shadow py-4 sticky top-0 bg-white z-50 mb-10">
      <Breadcrumb className="flex justify-center items-center lg:hidden">
        <BreadcrumbList>
          {pathname !== '/' && (
            <>
              <Link href="/" className="hover:text-[#e52534]">
                <HomeIcon />
              </Link>
              <BreadcrumbSeparator>
                <Slash className="text-gray-300" />
              </BreadcrumbSeparator>
            </>
          )}
          {smallLinks.map((link) => (
            <Fragment key={link.leagueCode}>
              <BreadcrumbItem
                className={`${
                  pathname.includes(`/${link.leagueCode}`) && 'text-[#e52534]'
                } hover:text-[#e52534]`}
              >
                <Link href={`/${link.leagueCode}`} className="font-serif">
                  {link.label}
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-gray-300" />
              </BreadcrumbSeparator>
            </Fragment>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="flex items-center hover:text-[#e52534]">
                <p className="font-serif">More</p>
                <ChevronDown className="text-gray-300 hover:text-[#e52534]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white">
              {moreLinks.map((link) => (
                <DropdownMenuItem
                  asChild
                  className="hover:bg-[#e52534] hover:text-white text-sm"
                  key={link.leagueCode}
                >
                  <Link
                    href={`/${link.leagueCode}`}
                    className={`block p-1 hover:bg-[#e52534] hover:text-white rounded outline-none font-serif ${
                      pathname.includes(`/${link.leagueCode}`) &&
                      'text-[#e52534]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb className="hidden lg:flex justify-center items-center">
        <BreadcrumbList>
          {pathname !== '/' && (
            <>
              <Link href="/" className="hover:text-[#e52534]">
                <HomeIcon />
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
                <Link href={`/${link.leagueCode}`} className="font-serif">
                  {link.label}
                </Link>
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
