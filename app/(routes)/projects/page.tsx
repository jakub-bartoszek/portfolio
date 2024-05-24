"use client";

import useRepositories from "hooks/useRepositories";
import { RepositoryTile } from "components/repository-tile";
import { Loader2 } from "lucide-react";

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
   <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
    {repositories.map((repository) => (
     <RepositoryTile
      key={repository.id}
      repository={repository}
     />
    ))}
   </div>
  );
 };

 return (
  <div className="flex h-full items-center justify-center">
   {renderContent()}
  </div>
 );
}
