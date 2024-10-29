

export const CustomConnection = async (setArticles, category) => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        // Handle non-2xx HTTP status codes (errors)
        throw new Error(`Error fetching news: ${response.status}`);
      }
  
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      // Optionally: Display an error message to the user
      // set an error state variable to update the UI
    }
  };