import { User, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This is another notification",
      date: "02-01-2015",
      read: false,
    },
  ]);

  return (
    <div className="flex gap-4 p-3 border-b">
      <div className="flex justify-end w-full gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" className="relative">
              <div
                className={`absolute top-0.5 right-1.5 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <Bell className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                key={key}
                className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p>{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
