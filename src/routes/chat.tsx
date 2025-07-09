import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createFileRoute("/chat")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-svh">
      <div className="container mx-auto py-4 h-svh flex flex-col justify-center-safe gap-6 px-4">
        <Header className="py-10" />

        <div className="border flex-grow min-h-[320px]">
          <iframe
            className="w-full h-full"
            src="https://hack.chat/?RONTARDIO"
            title="Chat Room"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
