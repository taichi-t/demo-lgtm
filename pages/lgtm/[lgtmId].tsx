/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { SEO } from "../../components/SEO";

const LGTM = () => {
  const lgtmId = useRouter().query.lgtmId;
  return (
    <>
      <SEO
        ogImage={`${process.env.NEXT_PUBLIC_BASE_URL}/api/lgtm/${lgtmId}`}
        url={`${process.env.NEXT_PUBLIC_BASE_URL}/lgtm/${lgtmId}`}
      ></SEO>
      <div
        id="target"
        style={{ width: "100%", height: "100%", position: "relative" }}
      >
        <img
          src={`https://image.lgtmoon.dev/${lgtmId}`}
          width="100%"
          height="100%"
          alt="lgtm"
        ></img>
        <p
          style={{
            fontSize: "24px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontWeight: "800",
            background: "pink",
            opacity: "0.8",
          }}
        >
          {`
            
            ウェーーーーーーーーーイ（悟先輩の鳴き声）
          `}
        </p>
      </div>
    </>
  );
};

export default LGTM;
