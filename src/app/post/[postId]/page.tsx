import Link from "next/link";
import { Post } from "@/app/components/Post";
import { ProfileImage } from "@/app/components/ProfileImage";
import { Post as IPost, fetchPost } from "@/app/data/posts";

export default async function Page({ params }: { params: { postId: string } }) {
  const post: IPost = await fetchPost(params.postId);
  const { user } = post;
  if (!post || !user) return null;

  return (
    <div>
      <div className="">
        <h1 className="text-xl mb-4">Post</h1>
        <article className="border border-zinc-200 p-6 border-b-0">
          <div className="flex items-center gap-8 mb-8">
            <Link href={`/profile/${user.username}`}>
              <ProfileImage
                size="small"
                src={user.image}
                width={100}
                height={100}
              />
            </Link>
            <div>
              <Link href={`/profile/${user.username}`}>
                <div className="text-2xl hover:underline">
                  {user.firstName} {user.lastName}
                </div>

                <div className="text-lg text-zinc-400">@{user.username}</div>
              </Link>
            </div>
          </div>
          <div className="text-lg">{post.content}</div>
        </article>
        <footer className="flex">
          <div className="flex-1 text-center p-2 border border-zinc-200">
            {post.likeCount} Likes
          </div>
          <div className="flex-1 text-center p-2 border border-zinc-200 border-l-0">
            {post.shareCount} Shares
          </div>
        </footer>

        {post.replies?.map((reply, i) => {
          return (
            <div key={i} className="border border-zinc-200 border-t-0">
              <Post {...reply} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
