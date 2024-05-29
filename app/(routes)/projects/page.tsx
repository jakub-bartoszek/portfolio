"use client";

import useRepositories from "hooks/useRepositories";
import { Loader2 } from "lucide-react";
import { RepositoryTile } from "components/repository-tile";
import GithubIcon from "components/icons/github-icon";

export default function Projects() {
 const { repositories, loading, error } = useRepositories();

 const renderContent = () => {
  if (loading) {
   return <Loader2 className="h-16 w-16 animate-spin text-[#9B9BED]" />;
  }

  if (error) {
   return <>Error</>;
  }

  return (
   <>
    <h1 className="font-bold text-5xl md:text-7xl text-[#9b9bed]">
     My projects
    </h1>
    <div className="w-24 h-24 text-[#5136ed]/50">
     <GithubIcon />
    </div>
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
     {repositories.map((repository) => (
      <RepositoryTile
       key={repository.id}
       repository={repository}
      />
     ))}
    </div>
   </>
  );
 };

 return (
  <div className="flex flex-col h-full items-center justify-center gap-8">
   {renderContent()}
  </div>
 );
}
