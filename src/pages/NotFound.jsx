import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-5 py-10">
      <section className="w-full max-w-lg rounded-4xl border border-black/5 bg-white p-8 text-center shadow-xl shadow-black/5 sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d97757]">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-black/55 sm:text-base">
          Sorry, the page you are looking for does not exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#171717] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#333]"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
