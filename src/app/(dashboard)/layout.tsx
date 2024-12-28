import React from "react";


export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
        <header>dashboard layout</header>
        <main>{children}</main>
        <footer>footer</footer>
    </>
  );
}