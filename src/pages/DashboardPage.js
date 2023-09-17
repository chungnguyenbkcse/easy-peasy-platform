import userLogOut from "../auth/userLogOut";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  const navigate = useNavigate();
  const { error, logOut } = userLogOut();

  const handleLogOut = async () => {
    await logOut();

    if (!error) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="basis-[12%]">
        <Sidebar />
      </div>
      <div className="basis-[88%] h-full border">
        <h1 className="font-extrabold text-6xl text-center">
          Welcome to Dashboard
        </h1>
        <Button onClick={handleLogOut}>Log out</Button>
      </div>
    </div>
  );
}

export default DashboardPage;
