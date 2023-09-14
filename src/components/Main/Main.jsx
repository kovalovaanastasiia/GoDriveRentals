import {Outlet} from "react-router-dom";
import {Suspense} from "react";


export const Main = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
