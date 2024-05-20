export interface TeamMember {
  id: number;
  image: string;
  name: string;
  profession: string;
  about1: string;
  about2: string;
  about3: string;
  collaborations: string;
  achievements: string[];
  contact: string;
  funFact: string;
}

export interface TeamData {
  teams: TeamMember[];
}
