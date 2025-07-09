import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-svh">
      <div className="container mx-auto py-4 h-svh flex flex-col justify-center-safe gap-6 px-4">
        <Header className="py-10" />

        <footer className="flex flex-col gap-4 items-center">
          <Link
            to="/chat"
            className="border-2 p-4 mx-auto cursor-pointer hover:bg-white hover:text-black"
          >
            Enter chat
          </Link>
        </footer>
      </div>
    </main>
  );
}
