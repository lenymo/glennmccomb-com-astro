export interface NavItem {
  identifier: string;
  name: string;
  url: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    identifier: "articles",
    name: "Articles",
    url: "/articles/",
    children: [
      { identifier: "design", name: "Design", url: "/categories/design/" },
      {
        identifier: "development",
        name: "Development",
        url: "/categories/development/",
      },
      { identifier: "gaming", name: "Gaming", url: "/categories/gaming/" },
      { identifier: "nba", name: "NBA", url: "/categories/nba/" },
    ],
  },
  { identifier: "photography", name: "Photography", url: "/photography/" },
  { identifier: "work", name: "Work", url: "/work/" },
  { identifier: "about", name: "About", url: "/about/" },
  { identifier: "contact", name: "Contact", url: "/contact/" },
];
