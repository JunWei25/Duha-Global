import UserItem from "./userItem/UserItem";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../components/ui/command";

export default function SideBar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          text: "Home",
        },
        {
          link: "/",
          text: "Orders",
        },
        {
          link: "/",
          text: "Reports",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "General Settings",
        },
        {
          link: "/",
          text: "Change Password",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-80 border-r min-h-screen p-3">
      <div>
        <UserItem></UserItem>
      </div>
      <div className="grow">
        <Command className="w-full">
          <CommandList>
            {menuList.map((group, groupIndex) => (
              <div key={groupIndex}>
                <CommandGroup heading={group.group} className="pl-0 pb-2">
                  {group.items.map((item, itemIndex) => (
                    <a
                      href={item.link}
                      className="block px-2 py-2 rounded hover:bg-gray-100 text-sm"
                    >
                      {item.text}
                    </a>
                  ))}
                </CommandGroup>
              </div>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings</div>
    </div>
  );
}
