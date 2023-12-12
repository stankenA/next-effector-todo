import { Icons } from "@/ui-kit/Icons";

type Item = {
  Icon: React.FC;
  link: string;
  txt: string;
};

export const categoriesItems: Item[] = [
  {
    Icon: Icons.Home,
    link: "/",
    txt: "Home",
  },
  {
    Icon: Icons.Family,
    link: "/",
    txt: "Family",
  },
  {
    Icon: Icons.Work,
    link: "/",
    txt: "Work",
  },
  {
    Icon: Icons.Sport,
    link: "/",
    txt: "Sport",
  },
];

export const dataItems: Item[] = [
  {
    Icon: Icons.Statistics,
    link: "/",
    txt: "Statistics",
  },
  {
    Icon: Icons.Trending,
    link: "/",
    txt: "Compare",
  },
];
