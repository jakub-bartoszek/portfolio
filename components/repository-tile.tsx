import { Repository } from "hooks/useRepositories";
import Link from "next/link";

export const RepositoryTile = ({
 repository
}: {
 repository: Repository;
}) => {
 return (
  <div className="p-6 bg-[#5136ed]/10 hover:bg-[#5136ed]/20 rounded-xl flex flex-col gap-4 transition">
   <h2 className=" font-bold text-2xl">{repository.name}</h2>
   <div className="flex flex-col justify-between h-full gap-4">
    <span>{repository.description}</span>
    <div>
     {repository.html_url && (
      <p>
       <b>Repository: </b>
       <Link
        className="text-[#9b9bed]"
        href={repository.html_url || ""}
       >
        {repository.html_url}
       </Link>
      </p>
     )}
     {repository.homepage && (
      <p>
       <b>Demo: </b>
       <Link
        className="text-[#9b9bed]"
        href={repository.homepage || ""}
       >
        {repository.homepage}
       </Link>
      </p>
     )}
    </div>
   </div>
  </div>
 );
};
