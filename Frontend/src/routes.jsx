import {
  HomeIcon,
  UserCircleIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile,Notifications } from "@/pages/dashboard"; //Profile, Tables, Notifications 
import { SignIn, SignUp } from "@/pages/auth";
//import { TopPositive } from "@/pages/Status Page";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "/profile",
          element: <Profile />,
        },
        // {
        //   icon: <TableCellsIcon {...icon} />,
        //   name: "tables",
        //   path: "/tables",
        //   element: <Tables />,
        // },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "notifications",
          path: "/notifications",
          element: <Notifications />,
        },
      
    ],
  },
  {
    title: "Profile Setup",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  
  },
  // {
  //   layout: "Status Page",
  //   pages: [
  //     {
        
  //       name: "TopPositive",
  //       path: "/TopPositive",
  //       element: <TopPositive />,
  //     },
  //   ]
  // }
  

];

export default routes;
