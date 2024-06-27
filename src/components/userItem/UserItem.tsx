import React from "react";

interface UserItemProps {
  collapsed: boolean;
}

const UserItem: React.FC<UserItemProps> = ({ collapsed }) => {
  return (
    <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'} gap-2 border rounded-sm p-2 shadow-sm`}>
      <div
        className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700]
    flex items-center justify-center"
      >
        <p>JW</p>
      </div>
      {!collapsed && (
        <div className="grow">
          <p className="text-sm font-bold">Tan Jun Wei</p>
          <p className="text-xs text-neutral-500">junwei_2509@gmail.com</p>
        </div>
      )}
    </div>
  );
};

export default UserItem;
