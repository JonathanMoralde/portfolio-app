"use server";
import Project from "@/model/project";
import supabase from "../../../supabase";
import Certificate from "@/model/certificate";

export type CertData = Array<Certificate> | null;

export async function fetchCert() {
  let { data: certification, error } = await supabase
    .from("certification")
    .select("*");

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    throw new Error(error.message);
  } else {
    // Use the 'data' variable to access the fetched data
    return certification;
  }
}
