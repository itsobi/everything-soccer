'use client';

import { Slash } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  leagueCode: string;
  teamId: string;
};

export default function TeamBreadcrumbMenu({ leagueCode, teamId }: Props) {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              href={`/${leagueCode}/team/${teamId}`}
              className={`${
                pathname === `/${leagueCode}/team/${teamId}` && 'text-[#e52534]'
              } font-serif hover:text-[#e52534]`}
              prefetch={false}
            >
              Squad
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="text-gray-300" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Link
              href={`/${leagueCode}/team/${teamId}/location/${teamId}`}
              className={`${
                pathname ===
                  `/${leagueCode}/team/${teamId}/location/${teamId}` &&
                'text-[#e52534]'
              } font-serif hover:text-[#e52534]`}
              prefetch={false}
            >
              Location
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
