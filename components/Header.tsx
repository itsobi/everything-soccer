import { ChevronDown, Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

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
            <>
              <BreadcrumbItem key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            </>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="flex items-center">
                <p>More</p>
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {moreLinks.map((link) => (
                <DropdownMenuItem key={link.id}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb className="hidden lg:flex justify-center items-center p-8">
        <BreadcrumbList>
          {allHeaderLinks.map((link, i) => (
            <>
              <BreadcrumbItem key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </BreadcrumbItem>
              {allHeaderLinks.length - 1 !== i && (
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              )}
            </>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
