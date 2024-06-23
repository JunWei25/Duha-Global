import UserItem from './userItem/UserItem'

export default function SideBar(){
  return (
    <div className="flex flex-col gap-4 w-80 border-r min-h-screen p-4">
        <div><UserItem></UserItem></div>
        <div className="grow">Menu</div>
        <div>Settings</div>
    </div>
  )
}
