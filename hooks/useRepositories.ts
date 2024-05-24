import { useState, useEffect } from "react";
import axios from "axios";

export interface Repository {
 id: number;
 name: string;
 description: string;
 html_url: string;
 homepage: string
}

const API_URL = "https://api.github.com";
const username = "jakub-bartoszek";

const useRepositories = () => {
 const [repositories, setRepositories] = useState<Repository[]>([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState<any>(null);

 useEffect(() => {
  const getRepositories = async () => {
   setLoading(true);
   setError(null);
   try {
    const response = await axios.get(`${API_URL}/users/${username}/repos`);
    setRepositories(response.data);
   } catch (error) {
    setError(error);
   } finally {
    setLoading(false);
   }
  };

  getRepositories();
 }, []);

 return { repositories, loading, error };
};

export default useRepositories;
