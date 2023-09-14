import {Link} from 'react-router-dom';


export const ErrorPage = () => {
  return (
    <div>
      <p>Oops...This page was not found</p>
      <Link to={'/'}>Return to main page</Link>
    </div>
  );
};
