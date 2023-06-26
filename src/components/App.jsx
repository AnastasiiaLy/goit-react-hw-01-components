import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

import { ProfilePage } from '../Components/ProfilePage/Profile';
import { Statistics } from '../Components/Statistics/Statistics';
import { FriendList } from '../Components/FriendList/FriendList';
import { TransactionHistory } from '../Components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <ProfilePage
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <h1>Transaction History</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};
