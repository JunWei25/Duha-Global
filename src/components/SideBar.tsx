import UserItem from "./userItem/UserItem";
import { LayoutDashboard, Files, ShoppingCart, Settings, KeyRound } from "lucide-react";
export default function SideBar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <LayoutDashboard/>,
          text: "Home",
        },
        {
          link: "/",
          icon: <ShoppingCart/>,
          text: "Orders",
        },
        {
          link: "/",
          icon: <Files/>,
          text: "Reports",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings/>,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <KeyRound/>,
          text: "Change Password",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-80 border-r min-h-screen p-3">
      <div>
        <UserItem></UserItem>
      </div>
      <div className="grow">
        <div className="w-full mt-2">
          {menuList.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-5">
              <div className="pl-2 text-[0.8rem] text-gray-600 font-semibold mb-1">
                {group.group}
              </div>
              {group.items.map((item, itemIndex) => (
                <a
                  href={item.link}
                  className=" flex gap-2 block px-2 py-2 rounded hover:bg-gray-50 text-[0.9rem]"
                >
                  {item.icon}
                  {item.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>Settings</div>
    </div>
  );
}
