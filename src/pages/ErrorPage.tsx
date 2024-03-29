import "#/styles/styles.scss";
import Navbar from "#/components/Navbar";
import { ErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse & Error;
  console.error(error);
  
  return (<div id="error-page">
      <Navbar />
      <div className="main">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;