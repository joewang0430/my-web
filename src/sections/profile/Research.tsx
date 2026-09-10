import Link from "next/link";
import { PUBLICATIONS, RESEARCH_EXPERIENCE } from "@/data/research";

const titleClass = "font-wf-title text-wz-main-color font-bold text-xl";

const Research = () => {
    return (
        <section id="research" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start max-w-4xl mt-16 mb-8">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-10 self-start">
                    Research
                </h1>

                <h2 className="text-3xl font-bold text-wz-main-color font-funnel-display mb-6">
                    Publications &amp; Preprints
                </h2>
                <ol className="w-full flex flex-col gap-8 mb-14">
                    {PUBLICATIONS.map(({ title, authors, venue, status, href }, index) => (
                        <li key={title} className="flex gap-x-3">
                            <span className="font-wf-theme text-wz-text-color text-xl shrink-0">
                                [{index + 1}]
                            </span>
                            <div className="w-full">
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                                    {href ? (
                                        <Link href={href} className={`${titleClass} hover:underline hover:text-wz-secondary-color`}>
                                            {title}
                                        </Link>
                                    ) : (
                                        <h3 className={titleClass}>{title}</h3>
                                    )}
                                    <span className="font-wf-theme text-wz-secondary-color text-base shrink-0 mt-1 sm:mt-0">
                                        {status}
                                    </span>
                                </div>
                                <p className="text-wz-text-color font-wf-theme text-lg mt-1">
                                    {authors}
                                </p>
                                <p className="text-wz-text-color font-wf-theme text-base opacity-80">
                                    {venue}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                <h2 className="text-3xl font-bold text-wz-main-color font-funnel-display mb-6">
                    Research Experience
                </h2>
                <ul className="w-full flex flex-col gap-8">
                    {RESEARCH_EXPERIENCE.map(({ title, affiliation, supervisor, period, detail, href }) => (
                        <li key={title}>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                                {href ? (
                                    <Link href={href} className={`${titleClass} hover:underline hover:text-wz-secondary-color`}>
                                        {title}
                                    </Link>
                                ) : (
                                    <h3 className={titleClass}>{title}</h3>
                                )}
                                {period && (
                                    <span className="font-wf-theme text-wz-text-color text-base shrink-0 mt-1 sm:mt-0">
                                        {period}
                                    </span>
                                )}
                            </div>
                            <p className="text-wz-text-color font-wf-theme text-base opacity-80 mt-1">
                                {affiliation} &nbsp;·&nbsp; Supervisor: {supervisor}
                            </p>
                            <p className="text-wz-text-color font-wf-theme text-lg mt-2">
                                {detail}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Research;
