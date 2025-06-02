import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2
          id="modalTitle"
          className="text-center text-xl font-bold text-gray-900 sm:text-2xl"
        >
          404
        </h2>

        <div className="mt-4">
          <p className="text-pretty text-gray-700">PAGE NOT FOUND</p>
        </div>
        <Link
          to="/"
          className="border-orange bg-primary hover:bg-primary/80 focus:ring-primary/30 mt-4 inline-block rounded-lg border-2 px-5 py-2.5 text-center text-sm font-medium text-black focus:ring-4 focus:outline-none"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
