'use client';

import { useRouter } from 'next/navigation';

const leagueCodeMapping: { [key: string]: number } = {
  PL: 38,
  PD: 38,
  BL1: 34,
  SA: 38,
  FL1: 34,
  DED: 38,
  ELC: 46,
};

export default function MatchdaySelector({
  leagueCode,
}: {
  leagueCode: string;
}) {
  const router = useRouter();
  const maxMatchday = leagueCodeMapping[leagueCode];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const matchdayNumber = e.target.value;
    if (matchdayNumber) {
      router.push(`/${leagueCode}/matchday/${matchdayNumber}`);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <select
        onChange={handleChange}
        className="text-center border shadow-md outline-none text-sm p-2 font-serif rounded-full"
      >
        <option value="" defaultValue="">
          Matchday
        </option>
        {Array.from({ length: maxMatchday }).map((_, i) => (
          <option key={i + 1} value={(i + 1).toString()}>
            Matchday {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}
