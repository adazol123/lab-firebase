import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Link to='/'>Back</Link>
      Profile here
      <aside>
        <Link to=""> Profile</Link>
        <Link to="auction"> Auction </Link>
        <Link to="portfolio"> Porfolio </Link>
        <Link to="settings"> Settings</Link>
      </aside>
      <Outlet />
    </div>
  );
};

export default Profile;
