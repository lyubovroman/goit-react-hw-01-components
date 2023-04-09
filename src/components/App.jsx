import user from 'data/user.json';
import Profile from './Profile/Profile';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import friends from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from "data/transactions.json";
import TransactionHistory from './TransactionHistory/TransactionHistory';




export const App = () => {
  return (
    <div>
     <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;


    </div>
  );
};
