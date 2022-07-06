import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {

  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  return (
    <div className="h-screen text-black bg-white">
      <h1>Dashboard!</h1>
    </div>
  )
}