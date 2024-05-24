import { Repository } from "hooks/useRepositories";
import Link from "next/link";

export const RepositoryTile = ({ repository }: { repository: Repository }) => {
 return (
  <div className="p-6 border-2 border-[#5136ed] rounded-xl flex flex-col gap-4">
   <h2 className=" font-bold text-2xl">{repository.name}</h2>
   <span>{repository.description}</span>
   <div>
    <p>
     <b>Repository: </b>
     <Link
      className="text-[#9b9bed]"
      href={repository.html_url}
     >
      {repository.html_url}
     </Link>
    </p>
    <p>
     <b>Demo: </b>
     <Link
      className="text-[#9b9bed]"
      href={repository.homepage}
     >
      {repository.homepage}
     </Link>
    </p>
   </div>
  </div>
 );
};
