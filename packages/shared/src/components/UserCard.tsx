const UserCard = ({ username, password }: { username?: string, password: string }) => {
  return (
    <div style={{border: '1px solid green', padding: 20}}>
      <div>Username: {username}</div>
      <div>Password: {password}</div>
    </div>
  );
};

export default UserCard;
