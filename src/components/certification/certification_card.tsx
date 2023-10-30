import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Certificate from "@/model/certificate";

type CertificationCardProps = {
  key: any;
  data: Certificate;
};

const CertificationCard = ({ key, data }: CertificationCardProps) => {
  return (
    <div
      key={key}
      className="container shadow flex flex-col justify-between bg-white text-black py-4 px-3 rounded-lg"
    >
      <h3 className="mb-1">{data.cert_name}</h3>
      <div>
        <p className={"text-sm mb-1 font-light"}>{data.cert_from}</p>
        <div className="flex">
          <Link
            href={`${data.cert_link}`}
            className="flex group "
            target="_blank"
          >
            View Certificate
            <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition-transform ms-1 self-center text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
