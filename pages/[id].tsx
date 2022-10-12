import type { NextPage } from "next";
import { useRouter } from "next/router";

const Generate: NextPage<Response> = () => {
  const router = useRouter();

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://image.lgtmoon.dev/${router.query.id}`}
      alt="lgtm画像"
      id="target"
    ></img>
  );
};

export default Generate;
