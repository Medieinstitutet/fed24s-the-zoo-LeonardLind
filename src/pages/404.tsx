import { Link } from "react-router";

const ErrorPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404🦴</h1>
      <p>Sidan kunde inte hittas.</p>
      <Link to="/" className="inline-block mt-4 text-blue-600 text-2xl">
       🌊 Surfa tillbaka till zoot🏄‍♂️
      </Link>
    </div>
  );
};

export default ErrorPage;
