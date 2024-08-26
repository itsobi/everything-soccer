'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { Slash } from 'lucide-react';

type CompetitionKey = 'PL' | 'PD' | 'BL1' | 'SA' | 'FL1' | 'DED' | 'ELC';
const leagueCodeMappings: { [key in CompetitionKey]: string } = {
  PL: 'Premier League',
  PD: 'La Liga',
  BL1: 'Bundesliga',
  SA: 'Serie A',
  FL1: 'Ligue 1',
  DED: 'Eredivisie',
  ELC: 'Championship',
};

export default function LeagueBreadcrumbMenu({
  leagueCode,
}: {
  leagueCode: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center py-4 border-b mb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              href={`/${leagueCode}`}
              prefetch={false}
              className={`${
                pathname === `/${leagueCode}` &&
                'text-[#e52534] underline underline-offset-4 decoration-4'
              } hover:text-[#e52534]`}
            >
              {leagueCodeMappings[leagueCode as CompetitionKey]}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-gray-300" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Link
              href={`/${leagueCode}/matches-today`}
              prefetch={false}
              className={`${
                pathname === `/${leagueCode}/matches-today` &&
                'text-[#e52534] underline underline-offset-4 decoration-4'
              } hover:text-[#e52534]`}
            >
              See Today&apos;s Matches
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-gray-300" />
          </BreadcrumbSeparator>

          <BreadcrumbItem>
            <Link
              href={`/${leagueCode}/top-scorers`}
              prefetch={false}
              className={`${
                pathname === `/${leagueCode}/top-scorers` &&
                'text-[#e52534] underline underline-offset-4 decoration-4'
              } hover:text-[#e52534]`}
            >
              Top Scorers
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
