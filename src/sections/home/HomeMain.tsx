import ProfileButton from "@/components/general/ui/ProfileButton";
import ResumeButton from "@/components/general/ui/ResumeButton";
import EmailTag from "@/components/general/ui/EmailTag";
import GitHubTag from "@/components/general/ui/GitHubTag";
import LinkedInTag from "@/components/general/ui/LinkedInTag";
import InstagramTag from "@/components/general/ui/InstagramTag";

const HomeMain = () => {
    return (
        <section id="homemain" className="flex items-center justify-center bg-wz-bg-color h-screen">

            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between max-w-5xl mt-12">
                {/* Left Column: Introductory Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0">
                    <h1 className="text-6xl font-bold text-wz-main-color font-funnel-display">
                        Howdy,
                    </h1>
                    <h1 className="mt-4 text-7xl font-bold text-wz-main-color font-funnel-display">
                        This is Joe.
                    </h1>
                    <p className="mt-8 mb-12 text-xl text-wz-text-color font-wf-theme">
                        My name is Jue Wang (Joe), a 2nd year computer engineering student at University of Toronto.
                    </p>
                    <div className="flex flex-row space-x-4">
                        <ProfileButton />   
                        <ResumeButton />
                    </div>
                    <div className="mt-8 flex flex-row space-x-6">
                        <EmailTag />
                        <GitHubTag />
                        <LinkedInTag />
                        <InstagramTag />
                    </div>
                    
                </div>
                
                {/* Right Column: Figure/Image Placeholder */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gray-300 rounded-lg" />
                </div>
            </div>

        </section>
    );
};

export default HomeMain;