import { UserCircleIcon, UserGroupIcon, UserMinusIcon } from "@heroicons/react/24/outline";


export const statisticsCardsData = [
  {
    color: "gray",
    icon: UserGroupIcon,
    title: "Top Positive",
    // value: "$53k",
    footer: {
      color: "text-green-500",
      // value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UserMinusIcon,
    title: "Top Negative",
    // value: "2,300",
    footer: {
      color: "text-green-500",
      // value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserCircleIcon,
    title: "Top Performing",
    // value: "3,462",
    footer: {
      color: "text-red-500",
      // value: "-2%",
      label: "than yesterday",
    },
  },
  // {
  //   color: "gray",
  //   icon: ChartBarIcon,
  //   title: "Sales",
  //   value: "$103,430",
  //   footer: {
  //     color: "text-green-500",
  //     value: "+5%",
  //     label: "than yesterday",
  //   },
  // },
];

export default statisticsCardsData;
