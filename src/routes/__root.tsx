import { createRootRoute, Outlet } from "@tanstack/react-router";
import 'remixicon/fonts/remixicon.css'


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}
