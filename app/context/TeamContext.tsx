"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TeamMember } from "@/types/team";

interface TeamContextProps {
  teams: TeamMember[];
  fetchTeams: () => void;
}

const TeamContext = createContext<TeamContextProps | undefined>(undefined);

const useTeamContext = () => {
  const context = useContext(TeamContext);
  if (!context) {
    throw new Error("useTeamContext must be used within a TeamProvider");
  }
  return context;
};

const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<TeamMember[]>([]);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://db-owventures.vercel.app/teams");
      if (!response.ok) {
        throw new Error(`Failed to fetch team data`);
      }
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <TeamContext.Provider value={{ teams, fetchTeams }}>
      {children}
    </TeamContext.Provider>
  );
};

export { useTeamContext, TeamProvider };
