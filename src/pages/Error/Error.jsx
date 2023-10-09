import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center items-center mt-14 text-5xl font-extrabold" id="error-page">
      <h1 className="mb-8">Oops!</h1>
      <p className="mb-8">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
