import { LinkedInPosts } from "../LinkedInPosts/LinkedInPosts.tsx";
import "./BlogContent.css";

const posts = [
  {
    summary: "Cómo usar rg, fzf y jq para mejorar prompts.",
    url: "https://www.linkedin.com/posts/cli-ia",
    date: "30 mayo 2025",
    image: "herramientas-ai.png",
  },
  {
    summary: "placeholder",
    url: "https://www.linkedin.com/posts/cli-ia",
    date: "30 mayo 2025",
    image: "",
  },
  {
    summary: "placeholder",
    url: "https://www.linkedin.com/posts/cli-ia",
    date: "30 mayo 2025",
    image: "",
  },

];

export const BlogContent = () => {
  return (
    <div className="block BlogContent">
      <LinkedInPosts posts={posts} title="My posts" />
    </div>
  );
};

