import usersData from "./users.json";

export interface User {
  bio: string;
  firstName: string;
  friends: string[];
  image: string;
  lastName: string;
  username: string;
}

export const getUser = (requestedUsername: string) => {
  const requestedUser = usersData.users.find(
    (user) => user.username === requestedUsername
  );

  return requestedUser;
};

export const fetchUser = (requestedUsername: string): Promise<User> => {
  const requestedUser = getUser(requestedUsername);
  if (requestedUser) return Promise.resolve(requestedUser);

  return Promise.reject("User not found: " + requestedUser);
};
