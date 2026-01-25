import ConnectDB from "@/lib/config/db";
import apimodel from "@/lib/models/apimodel";
import { cacheLife, cacheTag } from "next/cache";

export async function getAllapi() {
  "use cache";
  cacheTag("getAllapi");
  cacheLife();
  try {
    const res = await fetch(process.env.MY_API_DATA);

    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data.entries;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return [];
  }
}
