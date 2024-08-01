type Area = {
  code: string;
  flag: string;
  id: number;
  name: string;
};

type Competition = {
  code: string;
  emblem: string;
  id: number;
  name: string;
  type: string;
};

type Filters = {
  season: number;
};

type Season = {
  currentMatchday: number;
  endDate: Date;
  id: number;
  startDate: Date;
  /**
   * Field "winner" is defined as JSON since its value was always 'null'
   */
  winner: any;
};

type Standings = {
  area: Area;
  competition: Competition;
  filters: Filters;
  season: Season;
  standings: StandingsEntry[];
};

type StandingsEntry = {
  /**
   * Field "group" is defined as JSON since its value was always 'null'
   */
  group: any;
  stage: string;
  table: TableEntry[];
  type: string;
};

type TableEntry = {
  draw: number;
  form: string;
  goalDifference: number;
  goalsAgainst: number;
  goalsFor: number;
  lost: number;
  playedGames: number;
  points: number;
  position: number;
  team: Team;
  won: number;
};

type Team = {
  crest: string;
  id: number;
  name: string;
  shortName: string;
  tla: string;
};
