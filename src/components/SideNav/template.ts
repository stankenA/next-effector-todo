import { Icons } from "@/ui-kit/Icons";

type Item = {
  icon: React.FC;
  link: string;
  txt: string;
};

export const categoriesItems: Item[] = [
  {
    icon: Icons.Home,
    link: "/",
    txt: "Home",
  },
  {
    icon: Icons.Family,
    link: "/",
    txt: "Family",
  },
  {
    icon: Icons.Work,
    link: "/",
    txt: "Work",
  },
  {
    icon: Icons.Sport,
    link: "/",
    txt: "Sport",
  },
  {
    icon: Icons.PlusSquare,
    link: "/",
    txt: "Add",
  },
];

export const dataItems: Item[] = [
  {
    icon: Icons.Statistics,
    link: "/",
    txt: "Statistics",
  },
  {
    icon: Icons.Trending,
    link: "/",
    txt: "Compare",
  },
];
