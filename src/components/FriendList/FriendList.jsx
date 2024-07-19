import s from "./FriendList.module.css";

const FriendList = (props) => {
  return (
    <ul className={s.list}>
      {props.friends.map((friend) => (
        <li className={s.profile} key={friend.id}>
          <div>
            <img className={s.img} src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            <p className={friend.isOnline ? s.online : s.offline}>{friend.isOnline ? `Online` : `Offline`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
