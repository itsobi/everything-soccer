import { ChevronDown, Slash } from 'lucide-react';

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
  return (
    <header>
      <Breadcrumb className="flex justify-center items-center p-8 lg:hidden">
        <BreadcrumbList>
          {smallLinks.map((link, i) => (
            <Fragment key={link.id}>
              <BreadcrumbItem className="hover:text-[#e52534]">
                <Link href={link.href}>{link.label}</Link>
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
            <DropdownMenuContent className="z-50">
              {moreLinks.map((link) => (
                <div
                  key={link.id}
                  className="hover:bg-[#e52534] hover:text-white p-2 rounded text-sm"
                >
                  <Link href={link.href}>{link.label}</Link>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb className="hidden lg:flex justify-center items-center p-8">
        <BreadcrumbList>
          {allHeaderLinks.map((link, i) => (
            <Fragment key={link.id}>
              <BreadcrumbItem className="hover:text-[#e52534]">
                <Link href={link.href}>{link.label}</Link>
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
