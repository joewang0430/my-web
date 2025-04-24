import Image from 'next/image';
import Link from 'next/link';

export default function PulseTrackPage() {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-5xl lg:gap-x-8 mt-24 mb-12">
                <h1 className="text-7xl font-bold text-wz-main-color font-funnel-display mb-8 self-start">Pulse Track</h1>
                <p className="text-wz-text-color mb-4 font-wf-theme text-xl">
                    A wearable device monitoring biometric indicators, including body temperature, heart rate, step counts, and blood oxygen.
                </p>
                <Link className="text-wz-main-color mb-4 font-wf-theme text-xl font-bold hover:underline hover:text-wz-secondary-color" href="https://github.com/joewang0430/health-monitor">
                    GitHub Repository&nbsp;&rarr;
                </Link>
                <p className="mb-4 font-wf-theme text-xl">
                    <span className="text-wz-main-color font-bold">Implemented with: </span>
                    <span className="text-wz-text-color">Brain Liu, Suzen Bao, Alex Hu.</span>
                </p>
                
            </div>
        </section>
    );
}