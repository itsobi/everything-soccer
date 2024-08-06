export default function TeamPage({
  params,
}: {
  params: { leagueCode: string; teamId: string };
}) {
  return (
    <div>
      <p>League Code: {params.leagueCode}</p>
      <p>Team Id: {params.teamId}</p>
    </div>
  );
}
