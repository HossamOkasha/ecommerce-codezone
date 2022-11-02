import { useEffect } from "react";

export default function Page({ children, title, ...rest }) {

  // Change page title to the current one
  useEffect(() => {
    document.title = "CodeZone-eC - " + title;
  }, [title]);

  return (
    <>
      {children}
    </>
  );
}