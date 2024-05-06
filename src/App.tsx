import { useQuery } from "@tanstack/react-query";
import Posts from "./Posts";
import AddPost from "./AddPost";

function App() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const values = await res.json();

      return values;
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>React Query</h1>
      <AddPost postLength={data.length} />
      <Posts posts={data} />
    </div>
  );
}

export default App;
