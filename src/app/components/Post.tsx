import { format } from "date-fns";
import { Post as IPost, fetchPostAuthor } from "@/app/data/posts";
import { NestLink } from "./NestLink";
import { ProfileImage } from "./ProfileImage";

export interface PostProps extends IPost {}

export const Post = async ({
  id,
  content,
  date,
  likeCount,
  shareCount,
  user,
  parentId,
}: PostProps) => {
  if (!user) return null;

  const replyTo = parentId ? await fetchPostAuthor(parentId) : null;

  return (
    <NestLink href={`/post/${id}`}>
      <article className="w-full flex gap-8 p-4 rounded transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-950 hover:cursor-pointer">
        <div className="min-w-16 w-16">
          <NestLink href={`/profile/${user.username}`}>
            <ProfileImage
              size="small"
              src={user.image}
              width={200}
              height={200}
            />
          </NestLink>
        </div>
        <div className="pt-2">
          <div className="text-xl mb-2">
            <NestLink href={`/profile/${user.username}`}>
              <span className="hover:underline">
                {user.firstName} {user.lastName}
              </span>{" "}
              <span className="hover:underline text-zinc-400 text-sm">
                @{user.username}
              </span>
            </NestLink>
          </div>
          {replyTo && (
            <NestLink href={`/post/${parentId}`}>
              <div className="text-zinc-400 text-sm mb-2">
                Replying to @{replyTo}
              </div>
            </NestLink>
          )}
          <div>{content}</div>
          <footer className="flex gap-10 text-zinc-400 text-sm mt-3">
            <div>{format(date, "M/d/yyyy")}</div>
            <div>{likeCount} Likes</div>
            <div>{shareCount} Shares</div>
          </footer>
        </div>
      </article>
    </NestLink>
  );
};
