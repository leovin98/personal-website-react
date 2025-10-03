const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="shadow-bg bg-preview-bg shadow-custom flex h-64 flex-col items-center justify-center rounded-xl p-1 transition-colors duration-200 ease-out hover:bg-gray-100 dark:border dark:border-gray-300 dark:shadow-none dark:hover:bg-gray-200">
      <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100">
        <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
          <span className="h-full border-l border-dashed border-gray-300"></span>
          <span className="h-full border-l border-dashed border-gray-300"></span>
        </div>
        <div className="absolute top-1/2 left-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-24">
          <span className="w-full border-t border-dashed border-gray-300"></span>
          <span className="w-full border-t border-dashed border-gray-300"></span>
        </div>
        <div className="shadow-bg bg-preview-bg shadow-custom flex size-14 shrink-0 items-center justify-center rounded-xl dark:border dark:border-gray-300 dark:bg-gray-200 dark:shadow-none">
          <p>🪴</p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-center gap-0.5 p-2 font-medium">
        <p>{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
