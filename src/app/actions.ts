"use server";
import Project from "@/model/project";
import supabase from "../../supabase";

export type Data = Array<Project> | null;

export async function fetchProjects(
  isLimit: boolean,
  currentProjects?: string,
  currentTech?: string
): Promise<Data> {
  // Start the query with basic selection and ordering
  let query = supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  // Filter based on currentProjects
  if (currentProjects && currentProjects !== "all") {
    query = query.eq("type", currentProjects);
  }

  // Filter based on currentTech
  if (currentTech && currentTech !== "all") {
    query = query.contains("stack", [currentTech.toLocaleUpperCase()]);
  }

  // Apply limit if isLimit is true
  if (isLimit) {
    query = query.limit(4);
  }

  const { data: projects, error } = await query;

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    throw new Error(error.message);
  } else {
    return projects;
  }
}
