import GSoCPage from '@/assets/project-images/GSoCPage.png'
import GSoCMerge from '@/assets/project-images/GSoCMerge.png'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useEffect } from 'react';
const GSoCBlog = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "The GSoC Experience";
  }, []);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-black dark:text-white">
      <main className="relative z-10 px-8 py-16 pb-28 flex flex-col items-center">
        <div className="text-left max-w-3xl w-full leading-relaxed">

          <section className="flex justify-end">
            <Button onClick={() => navigate('/blog')} variant="ghost" className="gap-2 cursor-pointer">
              <X />
            </Button>
          </section>
          <section className="space-y-4">
            <h1 className="text-4xl font-bold">The GSoC Experience</h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              3rd Aug, 2025 (my first blog, cut me some slack)
            </p>
          </section>

          <section className="mt-8">
            <p className="mt-4 ">
              I don't know how to start blogs, so I'm just going to type like I talk.
            </p>

            <p className="mt-8">
              So, I did get into GSoC, my project was to move the old Angular based Mifos Web app to a new
              React based web app, it would have a component based architecture and would work with the Apache Fineract Backend
              using the OpenAPI TypeScript client generator, sounds fancy but it's just me trying not to break stuff and
              slowly building things that look decent.
            </p>

            <div className='my-8 rounded-2xl'>
              <img className='rounded-sm' src={GSoCPage} alt="name's on the page"></img>
              <p className='text-center mt-2 text-neutral-500 dark:text-neutral-400 text-sm'>kinda cool</p>
            </div>

            <p className="mt-8">
              One of my first contributions to Mifos was a simple UI fix, but that{" "}
              <span className="text-purple-400 font-medium">purple</span> merged icon is everything. One of the best feelings.
            </p>

            <div className='my-8 rounded-2xl'>
              <img className='rounded-sm' src={GSoCMerge} alt="name's on the page"></img>
              <p className='text-center mt-2 text-neutral-500 dark:text-neutral-400 text-sm'>first ever PR merged to mifos</p>
            </div>

            <p className="mt-8">
              Fast forward a bit, I merged around 10 PRs at Mifos, even made a react based prototype which defined the structure
              of the new web app I work on now. For the GSoC applications, I made a 20 page long proposal, got it reviewed by 4 different people and finally got accepted into the program.🎉🎉
            </p>

            <p className="mt-8">
              Over the three months I have been in the program, would rate it <span className="text-yellow-400 font-medium">10/10</span>. The community and the mentors guide you and make sure you have a successful project, the actual Google admins are super nice and help us in having a smooth program, you get to learn a lot, and learn how to interact with people while working on production level products.
            </p>

            <p className="mt-8">
              GSoC also makes you professional without forcing it. You learn how to communicate clearly, write better commits and PRs and how to ask questions. These things stick with you beyond the summer.
            </p>

            <p className="mt-8">
              If you're reading this and maybe want to try out GSoC, do go for it. There is a lot to learn and it's a great experience overall.
            </p>

            <section className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold">Here are some quick tips that helped me:</h2>

              <ul className="list-disc list-inside space-y-3 text-base">
                <li>Pick an org or project with a tech stack you're actually comfortable with.</li>
                <li>
                  <strong>TALK.</strong> Half of it is communication, with mentors and the community. Even if your question feels dumb (it probably is), ask it. It helps you understand the problem better.
                </li>
                <li>Make small but good contributions.</li>
                <li>Write a solid proposal and don't hesitate to get feedback from people and mentors.</li>
                <li>
                  And honestly, even if you don't get selected, the fact that your code is being used by real people is a win.
                </li>
              </ul>
            </section>

            <p className="mt-8">
              Anyways, that's it for now, hope you liked the so called blog.
            </p>

            <p className="mt-8">
              — Craig
            </p>
          </section>

          <footer className="pt-12 border-t border-muted mt-8">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              P.S. Thanks to the Mifos community, mentors and the GSoC team for making this possible.
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default GSoCBlog;