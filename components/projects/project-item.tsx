import Image from "next/legacy/image";
import Link from "next/link";

export default function ProjectItem({ data }: { data: any }) {
  const title = data.properties.Name.title[0]?.plain_text || "Untitled Project";
  const cover = data.cover.external.url;
  const description =
    data.properties.Description.rich_text[0]?.plain_text || "";
  const skills = data.properties.Tags.multi_select;
  const github = data.properties.Github.url;
  const startDate = data.properties.WorkPeriod.date.start;
  const endDate = data.properties.WorkPeriod.date.end;

  const calculatePeriod = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  console.log(calculatePeriod(startDate, endDate));
  return (
    <div className="project-card">
      <Image
        src={cover}
        alt={title}
        width="100"
        height="50"
        style={{ width: "100%", height: "50%" }}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="my-4 text-m">{description}</p>
        <div className=" flex gap-5">
          <Link
            href={github}
            className="rounded-md px-2 py-1 border border-slate-700"
          >
            Github
          </Link>
          <Link
            href={"https://google.com"}
            className="rounded-md px-2 py-1 border border-slate-700"
          >
            Web Link
          </Link>
        </div>
        <p className="mt-4 text-md">
          {startDate} ~ {endDate}{" "}
          {`(${calculatePeriod(startDate, endDate)} days)`}
        </p>
        <div className="flex flex-wrap gap-1 items-start mt-2">
          {skills.map((skill: any) => (
            <h1 className="rounded-md px-2 py-1 mr-2  bg-sky-200 dark:bg-sky-700">
              {skill.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
