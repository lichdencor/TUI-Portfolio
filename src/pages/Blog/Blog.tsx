import { Background, BlogContent, Layout, Tweets } from "../../components";
import "./Blog.css"

export const Blog = () => {
  return (
    <Layout>
      <Background />
      <div className="row media-blog">
        <BlogContent />
        <Tweets />
      </div>
    </Layout>
  )
}
