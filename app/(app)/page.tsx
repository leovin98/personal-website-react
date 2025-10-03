import WorkCard from "@/components/layout/work-card";
import { socialItems, workItems } from "@/lib/constants";
import ProjectCard from "@/components/layout/project-card";
import SocialCard, { Name } from "@/components/layout/social-card";

export default function Page() {
  return (
    <>
      <section className="w-full">
        <h1 className="mt-8 flex items-center font-medium tracking-tight">
          Hey, I&apos;m Leovin
        </h1>
        <p className="mt-5 text-muted-foreground">
          I&apos;m a software engineer with 4+ years of experience in
          developing, testing, and maintaining software for web and mobile
          applications. My focus is on creating clean, efficient, and
          maintainable code.
        </p>
        <div className="mt-5 flex w-full flex-wrap justify-start gap-3">
          {socialItems.map((item) => (
            <SocialCard
              key={item.name}
              href={item.href}
              target={item.target}
              rel={item.rel}
              icon={item.icon}
              name={item.name as Name}
            />
          ))}
        </div>
      </section>

      <section className="mt-24 w-full">
        <p className="text-foreground leading-none font-bold w-full items-center uppercase">
          Projects
        </p>
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <ProjectCard title="leovin.web.app" description="Personal Website" />
          <ProjectCard
            title="Beyond the Resume"
            description="Personal Website."
          />
        </div>
      </section>

      <section className="mt-24 w-full">
        <p className="text-foreground leading-none font-bold w-full items-center uppercase">
          My Career
        </p>
        <p className="mt-5 text-muted-foreground">
          Besides freelancing, I&apos;ve taken on different roles that pushed me
          to grow and pick up new skills along the way. Every stop in my career
          has taught me something valuable and helped me adapt to this
          ever-changing tech world.
        </p>
        <div className="mt-5 flex w-full flex-col">
          {workItems.map((item, index) => (
            <WorkCard {...item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
