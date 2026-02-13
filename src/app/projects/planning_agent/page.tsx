import Image from 'next/image';

export default function PlanningAgentPage() {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-5xl lg:gap-x-8 mt-24 mb-12">
                <h1 className="text-7xl font-bold text-wz-main-color font-funnel-display self-start">AI Government Planning Writing Agent</h1>
                <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                    This is an outsourcing project I completed for a company in China in two months. The project obtained a Computer Software Copyright in China (Registration No. 17741364).
                </p>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Tech Stack: </span>
                    <span className="text-wz-text-color">LangChain (LangGraph), Embedding AI, Vector Database, ChromaDB</span>
                </p>
                {/* <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Implemented by: </span>
                    <span className="text-wz-text-color">Myself</span>
                </p> */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-wz-main-color font-wf-title">Overall Functions</h2>
                    <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                        This AI agent is built on external knowledge bases and supports generating government planning reports (in Chinese) and revising them. The document is generated in three steps: selecting relevant knowledge bases by title relevance, generating an outline from the title and selected sources, and producing the full text based on all prior information.
                    </p>
                    <ul className="list-disc pl-5 mt-4 text-lg text-wz-text-color font-wf-theme">
                        <li><span className="font-bold">Staged Generation:</span>&nbsp;The document is generated as outline first, then content.</li>
                        <li><span className="font-bold">Knowledge Base Selection:</span>&nbsp;The agent selects which external knowledge bases to reference based on the input title.</li>
                        <li><span className="font-bold">Customized Knowledge Base:</span>&nbsp;Users can specify which knowledge bases the AI must reference.</li>
                        <li><span className="font-bold">Text Revision:</span>&nbsp;After the full text is generated, users can select specific paragraphs to rewrite with additional requirements.</li>
                        <li><span className="font-bold">Sidebar Q&amp;A:</span>&nbsp;A Q&amp;A agent sits beside the main editing area, with access to the current text for answering questions.</li>
                    </ul>
                </div>
                {/* DB selection */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Vector Database and RAG</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Users begin report generation by entering a title.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The following example may be unintuitive because it is in Chinese. The user input title <i>&quot;上海市政府关于全市水资源卫生质量监管的专项规划&quot;</i> means <i>&quot;The special plan of the Shanghai Municipal Government on the supervision of water resources hygiene quality throughout the city&quot;.</i>
                </p>
                <div>
                    <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                        The first thing the platform does is find a maximum of five knowledge bases most relevant to the input title. There are around 2,000 knowledge bases, and selection uses vector embeddings to compute similarity between texts.
                    </p>
                </div>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                        Three relevant sections most related to &quot;Shanghai water resources sanitation&quot; are found:</p>
                    <ul className="list-disc pl-5 mt-4 text-lg text-wz-text-color font-wf-theme">
                        <li><span className="font-semibold">上海市水系统治理“十四五“规划:</span>&nbsp;The 14th Five-Year Plan for Water System Governance in Shanghai.</li>
                        <li><span className="font-bold">上海市生态空间建设和市容环境优化“十四五“规划:</span>&nbsp;The 14th Five-Year Plan for Ecological Space Construction and Urban Appearance and Environment Optimization in Shanghai.</li>
                        <li><span className="font-bold">舟山市水生态环境保护“十四五“规划:</span>&nbsp;The 14th Five-Year Plan for Water Ecological Environment Protection in Zhoushan City (a city close to Shanghai).</li>
                    </ul>
                {/* picture */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_outline.jpg" 
                        alt="Document outline generation picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Graphic examples: knowledge base selection, the agent&apos;s thinking section, and the generated outline.
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_be_details.jpg" 
                        alt="Document outline generation picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Behind the scenes, there are steps for embedding similarity checks and required compliance checks.
                    </p>
                </div>
                {/* Outline */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Pre-thinking & Outline Stage</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    As shown in the first picture, after inputting the title and selecting external resources, a thinking step extracts key information (similar to the thinking mode in ChatGPT/Gemini). After that, the agent proceeds to write the outline.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    All steps are organized using LangGraph.
                </p>
                {/* Text Generation */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Content Generation / Outline Revision</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Users can choose to generate the content for the current outline. In practice, changes are often needed, so the platform allows users to reprompt and rewrite specific outline sections with additional requirements.
                </p>
                {/* picture 3 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_content.jpg" 
                        alt="Picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        An example of generated content based on the outline in the previous picture.
                    </p>
                </div>
                {/* Content Rewrite */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Rewrite Content</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Rewriting content follows the same flow as rewriting the outline. An example is below:
                </p>
                <div className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    <div className="font-bold">User:</div> 
                    <i> 对于“部分区域的供水管网老化，导致水质下降”，请用数据或资料支撑 | For the statement that &quot;the aging of water supply networks in some areas has led to a decline in water quality&quot;, please support it with data or materials</i>
                </div>
                <div className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    <div className="font-bold">Agent:</div> 
                    <div>(Updates the paragraph that the user pointed out, and rewrites it according to the request.)</div>
                </div>
                {/* picture */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_rewrite.jpg" 
                        alt="Picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        How the rewrite section works: user enters revision requirements.
                    </p>
                </div>
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_rewrite_after.jpg" 
                        alt="Picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        How the rewrite section works: update after user feedback.
                    </p>
                <div className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    It is not limited to paragraph-by-paragraph editing; users can also select several paragraphs to redo together, or even rewrite everything.
                </div>
                </div>
                {/* Customized DB */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Customized Knowledge Base / External Documentation</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    It is not limited to letting the AI select external reference resources. Users can assign fixed knowledge bases in the background and upload their own files, similar to attachments in major LLM chat platforms.
                </p>
                {/* picture 6 */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/planning_agent/plagt_db_selection.jpg" 
                        alt="Picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Users can decide what to include in the attachments.
                    </p>
                </div>
                {/* Final */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Finish</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Of course, the platform supports downloading the generated report.
                </p>
            </div>
        </section>
    );
}