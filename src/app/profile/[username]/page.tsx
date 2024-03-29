import { fetchPostsForUser } from "@/app/data/posts";
import { Friend } from "@/app/components/Friend";
import { ProfileImage } from "@/app/components/ProfileImage";
import { User, fetchUser } from "@/app/data/users";

import { Post } from "@/app/components/Post";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const user: User = await fetchUser(params.username);
  const posts = await fetchPostsForUser(params.username);

  return (
    <div className="w-full">
      {/* Top Row */}
      <div className="w-full flex flex-col items-center md:flex-row gap-8">
        {/* Left */}
        <div className="w-[200px]">
          <ProfileImage src={user.image} width={200} height={200} />
        </div>

        {/* Right */}
        <div className="flex-[3] flex flex-col text-center md:text-left">
          <h1 className="text-3xl md:text-5xl mb-2 font-thin">
            {user.firstName} {user.lastName}
          </h1>
          <h2 className="text-lg md:text-xl mb-2 text-zinc-400">
            @{user.username}
          </h2>
          <p className="md:text-lg">{user.bio}</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row gap-8 mt-14">
        <div className="min-w-[200px]">
          <h2 className="text-xl font-light mb-4">Friends</h2>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 pt-2">
            {user.friends
              .sort((a, b) => (a > b ? 1 : -1))
              .map((friend, i) => (
                <li key={i}>
                  <Friend username={friend} />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-light mb-4">Posts</h2>
          <div className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <Post key={i} {...post} user={user} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
