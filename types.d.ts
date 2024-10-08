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

type Score = {
  winner: 'HOME_TEAM' | 'AWAY_TEAM' | 'DRAW';
  duration: 'REGULAR' | 'EXTRA_TIME' | 'PENALTIES';
  fullTime: {
    home: string;
    away: string;
  };
  halfTime: {
    home: string;
    away: string;
  };
};

type ResultSet = {
  count: number;
  first: string;
  last: string;
  played: number;
};

type Match = {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status:
    | 'SCHEDULED'
    | 'LIVE'
    | 'IN_PLAY'
    | 'PAUSED'
    | 'FINISHED'
    | 'POSTPONED'
    | 'SUSPENDED'
    | 'CANCELED';
  matchday: number;
  stage:
    | 'REGULAR_SEASON'
    | 'PLAY_OFF_ROUND'
    | 'GROUP_STAGE'
    | 'ROUND_OF_16'
    | 'QUARTER_FINALS'
    | 'SEMI_FINALS'
    | 'FINAL';
  group: string;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
};

type Coach = {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  contract: {
    start: string;
    until: string;
  };
};

type Squad = {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
};

type TeamDetails = {
  area: Area;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  coach: Coach;
  squad: Squad[];
};

export type CompetitionKey = 'PL' | 'PD' | 'BL1' | 'SA' | 'FL1' | 'DED' | 'ELC';
export const leagueCodeMappings: { [key in CompetitionKey]: string } = {
  PL: 'Premier League',
  PD: 'La Liga',
  BL1: 'Bundesliga',
  SA: 'Serie A',
  FL1: 'Ligue 1',
  DED: 'Eredivisie',
  ELC: 'English Championship',
};

type Scorers = {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    section: string;
    lastUpdated: string;
  };
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string;
  };
  playedMatches: number;
  goals: number;
};
