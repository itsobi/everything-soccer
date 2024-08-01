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
  { href: '/premier-league', label: 'Premier League', id: 'PL' },
  { href: '/la-liga', label: 'LA LIGA', id: 'PD' },
  { href: '/bundesliga', label: 'Bundesliga', id: 'BL1' },
  { href: '/serie-a', label: 'Serie A', id: 'SA' },
  { href: '/ligue-1', label: 'Ligue 1', id: 'FL1' },
  { href: '/eredivisie', label: 'Eredivisie', id: 'DED' },
  { href: '/championship', label: 'Championship (ENG)', id: 'ELC' },
];

const smallLinks = [
  { href: '/premier-league', label: 'Premier League', id: 'PL' },
  { href: '/la-liga', label: 'LA LIGA', id: 'PD' },
  { href: '/bundesliga', label: 'Bundesliga', id: 'BL1' },
];

const moreLinks = [
  { href: '/serie-a', label: 'Serie A', id: 'SA' },
  { href: '/ligue-1', label: 'Ligue 1', id: 'FL1' },
  { href: '/eredivisie', label: 'Eredivisie', id: 'DED' },
  { href: '/championship', label: 'Championship (ENG)', id: 'ELC' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="shadow py-4 mb-10 sticky top-0 bg-white z-50">
      <Breadcrumb className="flex justify-center items-center lg:hidden">
        <BreadcrumbList>
          {pathname !== '/' && (
            <Link href="/" className="hover:text-[#e52534]">
              <HomeIcon />
            </Link>
          )}
          {smallLinks.map((link) => (
            <Fragment key={link.id}>
              <BreadcrumbItem
                className={`${
                  pathname === `/standings/${link.id}` && 'text-[#e52534]'
                } hover:text-[#e52534]`}
              >
                <Link href={`/standings/${link.id}`}>{link.label}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            </Fragment>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="flex items-center hover:text-[#e52534]">
                <p>More</p>
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-50 bg-white">
              {moreLinks.map((link) => (
                <DropdownMenuItem
                  asChild
                  className="hover:bg-[#e52534] hover:text-white"
                  key={link.id}
                >
                  <Link
                    href={`/standings/${link.id}`}
                    className={`block p-1 hover:bg-[#e52534] hover:text-white rounded outline-none ${
                      pathname === `/standings/${link.id}` && 'text-[#e52534]'
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
            <Link href="/" className="hover:text-[#e52534]">
              <HomeIcon />
            </Link>
          )}
          {allHeaderLinks.map((link, i) => (
            <Fragment key={link.id}>
              <BreadcrumbItem
                className={`${
                  pathname === `/standings/${link.id}` && 'text-[#e52534]'
                } hover:text-[#e52534]`}
              >
                <Link href={`/standings/${link.id}`}>{link.label}</Link>
              </BreadcrumbItem>
              {allHeaderLinks.length - 1 !== i && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
