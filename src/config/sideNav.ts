export type SideNavType = {
  id: number;
  url: string;
  name: string;
};

export const sideNav: SideNavType[] = [
  {
    id: 1,
    url: "profile",
    name: "Profile",
  },
  {
    id: 2,
    url: "posts",
    name: "Posts",
  },
  {
    id: 3,
    url: "gallery",
    name: "Gallery",
  },
  {
    id: 4,
    url: "todo",
    name: "ToDo",
  },
];
