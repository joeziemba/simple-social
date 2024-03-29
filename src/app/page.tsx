import { Post } from "./components/Post";
import { fetchPosts } from "./data/posts";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="flex flex-col items-center">
      {posts.map((post, i) => {
        return <Post key={i} {...post} />;
      })}
    </main>
  );
}
