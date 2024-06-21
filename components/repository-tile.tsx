import { Repository } from "hooks/useRepositories";
import Link from "next/link";

export const RepositoryTile = ({
 repository
}: {
 repository: Repository;
}) => {
 return (
  <div className="p-6 bg-[#5136ed]/10 hover:bg-[#5136ed]/20 rounded-xl flex flex-col gap-4 transition">
    <h2 className="font-bold text-2xl">{repository.name}</h2>
   <section className="flex flex-col justify-between h-full gap-4">
    <p>{repository.description}</p>
    <div className="flex flex-col gap-2">
     {repository.html_url && (
      <Link
       className="text-[#9b9bed] block w-full truncate hover:text-[#b7b7f8] transition"
       href={repository.html_url || ""}
      >
       <strong className="text-white">Repository: </strong>
       {repository.html_url}
      </Link>
     )}
     {repository.homepage && (
      <Link
       className="text-[#9b9bed] block w-full truncate hover:text-[#b7b7f8] transition"
       href={repository.homepage || ""}
      >
       <strong className="text-white">Demo: </strong>
       {repository.homepage}
      </Link>
     )}
    </div>
   </section>
  </div>
 );
};
