import { getUser, User } from "./users";
import postData from "./posts.json";

export interface Post {
  id: string;
  content: string;
  date: string;
  likeCount: number;
  shareCount: number;
  authorId: string;
  user?: User;
  replies?: Post[];
  parentId?: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  const posts: Post[] = postData.posts.map((post) => {
    addUserToPost(post);
    return post;
  });

  return Promise.resolve(posts);
};

export const fetchPostsForUser = (username: string): Promise<Post[]> => {
  const userPosts = postData.posts.filter((post) => post.authorId === username);
  return Promise.resolve(userPosts);
};

export const fetchPost = async (postId: string) => {
  const post = getPost(postId);
  addUserToPost(post!);
  const replies = getPostReplies(postId);
  replies.forEach(addUserToPost);

  return Promise.resolve({ ...post!, replies });
};

export const fetchPostAuthor = async (postId: string) => {
  const post = getPost(postId);
  return Promise.resolve(post?.authorId);
};

const addUserToPost = (post: Post) => {
  const user = getUser(post.authorId);
  post.user = user;
};

const getPost = (postId: string) => {
  return postData.posts.find((post) => post.id === postId);
};

const getPostReplies = (postId: string) => {
  return postData.posts.filter((post) => post.parentId === postId);
};
