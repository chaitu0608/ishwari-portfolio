import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Blog = () => {

  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Blog | Craig Rosario";
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen">
      <main className="relative z-10 px-8 py-16 pb-28 flex flex-col items-center">
        <div className="text-left space-y-12 max-w-3xl w-full leading-relaxed">
          {/* Hero Section */}
          <section className="flex flex-col space-y-2">
            <h1 className="text-6xl font-extrabold text-black dark:text-white">
              Blogs
            </h1>
            <p className="text-xl text-neutral-600 dark:text-muted-foreground">
              My thoughts I guess
            </p>
          </section>

          {/* Blog Content */}
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight cursor-pointer hover:text-neutral-400 transition-colors duration-200" onClick={() => navigate('/blog/gsoc-blog')}>
                The GSoC Experience
              </h2>
              <p className="text-neutral-700 dark:text-muted-foreground">
                A chill blog about the open source experinece at GSoC
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Blog;
