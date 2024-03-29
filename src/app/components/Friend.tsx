import Link from "next/link";
import { fetchUser } from "@/app/data/users";
import { ProfileImage } from "./ProfileImage";

export interface FriendProps {
  username: string;
}

export const Friend = async ({ username }: FriendProps) => {
  const user = await fetchUser(username);

  if (!user) return null;

  return (
    <Link href={`/profile/${username}`}>
      <div className="flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-zinc-950 rounded py-1 px-2 -ml-2 hover:cursor-pointer select-none transition-colors">
        <div className="w-11 h-11">
          <ProfileImage src={user.image} width={60} height={60} size="small" />
        </div>
        <div className="text-sm">
          {user.firstName} {user.lastName}
        </div>
      </div>
    </Link>
  );
};
