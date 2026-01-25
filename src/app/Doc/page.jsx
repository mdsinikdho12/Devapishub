import DocsPage from "../Components/DocComponent";
import { cookies } from "next/headers";

export default async function page() {
  const cookieStore = await cookies();

  const langCookie = cookieStore.get("lang");
  const lang = langCookie ? langCookie.value : "en";

  return (
    <>
      <DocsPage language={lang} />
    </>
  );
}
