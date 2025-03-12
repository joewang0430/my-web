import EmailTag from '../../components/general/ui/EmailTag';
import LinkedInTag from "@/components/general/ui/LinkedInTag";

const GalleryPage = () => {
    return (
        <div className="flex flex-col w-full mx-auto">
            <section className="bg-wz-bg-color h-screen flex flex-col items-center justify-center">
                <h1 className="font-funnel-display text-3xl text-wz-main-color">The galary page will be there soon!</h1>
                <div className="h-8"></div>
                <h2 className="text-wz-text-color font-wf-theme">Currently there is no enought time for me to finish the gallery page</h2>
                <div className="flex">
                    <h2 className="text-wz-text-color font-wf-theme">It is scheduled to be done before </h2>
                    <h2 className="text-wz-text-color font-bold font-wf-theme">&nbsp;May 10, 2025</h2>
                </div>
                <div className="h-4"></div>
                <h2 className="text-wz-text-color font-wf-theme">The WZ Gallery will contain interesting personal parts</h2>
                <h2 className="text-wz-text-color font-wf-theme">Thank you for your interest, and welcome to connect me via:</h2>
                <div className="h-4"></div>
                <div className="flex space-x-4">
                    <EmailTag />
                    <LinkedInTag />
                </div>
            </section>
        </div>
    );
};

export default GalleryPage;

