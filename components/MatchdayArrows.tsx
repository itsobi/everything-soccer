'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type Props = {
  matchdayNumber: number;
  maxMatchWeeks: number;
  leagueCode: string;
};

export default function MatchdayArrows({
  matchdayNumber,
  maxMatchWeeks,
  leagueCode,
}: Props) {
  const router = useRouter();

  const handleDecrease = () => {
    if (matchdayNumber > 1) {
      router.push(`/${leagueCode}/matchday/${matchdayNumber - 1}`);
    }
  };

  const handleIncrease = () => {
    if (matchdayNumber < maxMatchWeeks) {
      router.push(`/${leagueCode}/matchday/${matchdayNumber + 1}`);
    }
  };
  return (
    <div className="flex justify-center items-center py-4">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-[#e52534] hover:text-white border-none transition-all duration-200 ease-in-out"
        onClick={handleDecrease}
        disabled={matchdayNumber === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full hover:bg-[#e52534] hover:text-white border-none transition-all duration-200 ease-in-out"
        onClick={handleIncrease}
        disabled={matchdayNumber === maxMatchWeeks}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
