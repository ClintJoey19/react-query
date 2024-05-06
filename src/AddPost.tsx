import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const AddPost = ({ postLength }: { postLength: number }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      });

      const value = await res.json();

      return value;
    },
  });

  const addPost = async (e: FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: postLength + 1,
      userId: 2,
      title: title,
      body: body,
    };

    mutation.mutate();
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };
  return (
    <form onSubmit={addPost} className="flex">
      <input
        type="text"
        placeholder="Title"
        value={title}
        required
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Body"
        value={body}
        required
        onChange={handleBodyChange}
      ></textarea>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
