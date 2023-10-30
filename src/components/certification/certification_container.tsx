"use client";

import React, { useEffect, useState } from "react";
import CertificationCard from "./certification_card";
import supabase from "../../../supabase";
import Certificate from "@/model/certificate";
import ProjectSkeleton from "../projects/project_skeleton";

type CertData = Array<Certificate> | null;

const CertificationContainer = () => {
  const [data, setData] = useState<CertData>(null);
  useEffect(() => {
    const fetchCert = async () => {
      try {
        let { data: certification, error } = await supabase
          .from("certification")
          .select("*");

        if (error) {
          console.error("Error fetching data from Supabase:", error);
        } else {
          // Use the 'data' variable to access the fetched data
          setData(certification);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCert();
  }, []);

  console.log(data);

  return (
    <>
      {data?.map((certData) => {
        return <CertificationCard data={certData} key={certData.id} />;
      })}
    </>
  );
};

export default CertificationContainer;
