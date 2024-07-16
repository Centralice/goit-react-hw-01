import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from ".components/userData.json";

const App = () => {
  return (
    <div>
      <Profile />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;

