import UserList from "./UserList";

export default function App() {
  return (
    <div className="text-center">
      <h1 className="text-center text-7xl font-bold text-slate-600 mb-10">
        Leetcode Dashboard
      </h1>
      <UserList className="text-center text-4xl" />
    </div>
  )
}
