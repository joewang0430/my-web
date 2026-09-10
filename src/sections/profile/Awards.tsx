import { AWARDS } from "@/data/awards";

const Awards = () => {
    return (
        <section id="awards" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-4xl lg:gap-x-8 mt-16 mb-8">
                <h1 className="text-5xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Awards</h1>

                <ul className="w-full flex flex-col gap-6">
                    {AWARDS.map(({ title, detail, year }) => (
                        <li key={title}>
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-6">
                                <h2 className="font-wf-title text-wz-main-color font-bold text-xl">
                                    {title}
                                </h2>
                                {year && (
                                    <span className="font-wf-theme text-wz-text-color text-base shrink-0">
                                        {year}
                                    </span>
                                )}
                            </div>
                            <p className="text-wz-text-color font-wf-theme text-lg mt-1">
                                {detail}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Awards;
