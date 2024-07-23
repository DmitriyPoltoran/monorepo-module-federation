import { Outlet } from 'react-router-dom';
import UserCard from '@packages/shared/src/components/UserCard'


export const App = () => {
  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <UserCard username={'admin'} password={'asiohgoasjdf'} />
      <Outlet />
    </div>
  );
};
