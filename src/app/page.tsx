import { getHumeAccessToken } from "@/app/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/app/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error();
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} />
    </div>
  );
}
