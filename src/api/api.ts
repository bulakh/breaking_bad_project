import axios from "axios";

export async function fetchData<T>(url: string):Promise<T | null> {
    try {
      const response = await axios.get<T>(url);
      return response.data;
    } catch (e) {
      alert(`Error: ${e}`);
      return null;
    }
}