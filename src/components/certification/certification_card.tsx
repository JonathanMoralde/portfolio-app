import React from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import Certificate from "@/model/certificate";

type CertificationCardProps = {
  data: Certificate;
};

const CertificationCard = ({ data }: CertificationCardProps, key: number) => {
  return (
    <div
      key={`${key}`}
      className="container shadow bg-white text-black py-4 px-3 rounded-lg"
    >
      <h3 className="mb-1">{data.cert_name}</h3>
      <p className={"text-sm mb-1 font-light"}>{data.cert_from}</p>
      <div className="flex">
        <Link
          href={`${data.cert_link}`}
          className="flex group "
          target="_blank"
        >
          View Certificate
          <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform ms-1 self-center text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default CertificationCard;
