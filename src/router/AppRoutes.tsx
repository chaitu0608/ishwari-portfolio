import Blog from "@/pages/blog/Blog";
import GSoCBlog from "@/pages/blog/blog-pages/GSoCBlog";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/not-found/NotFound";
import Projects from "@/pages/projects/Projects";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/gsoc-blog" element={<GSoCBlog />} />

        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
