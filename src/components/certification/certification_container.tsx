import React from "react";
import CertificationCard from "./certification_card";
import { CertData, fetchCert } from "@/app/experience/actions";

const CertificationContainer = async () => {
  const data: CertData = await fetchCert();

  return (
    <>
      {data?.reverse().map((certData) => {
        return <CertificationCard data={certData} key={certData.id} />;
      })}
    </>
  );
};

export default CertificationContainer;
