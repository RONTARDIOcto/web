import { Link } from "@tanstack/react-router";

export default function Header({ className }: { className: string }) {
  return (
    <header className={className}>
      <Link to="/" className="container mx-auto flex flex-col gap-2">
        <img
          src="/images/hero.png"
          alt="Rontardio Logo"
          className="mx-auto w-32 sm:w-48"
        />
        <h1 className="text-xl sm:text-4xl rainbow-text w-fit mx-auto whitespace-nowrap">
          $rontardio
        </h1>
      </Link>
    </header>
  );
}
