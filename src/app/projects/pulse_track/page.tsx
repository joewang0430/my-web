import Image from 'next/image';
import Link from 'next/link';

export default function PulseTrackPage() {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-5xl lg:gap-x-8 mt-24 mb-12">
                <h1 className="text-7xl font-bold text-wz-main-color font-funnel-display self-start">Pulse Track</h1>
                <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                    A wearable device monitoring biometric indicators, including body temperature, heart rate, step counts, and blood oxygen in real-time.
                </p>
                <Link className="text-wz-main-color mt-4 font-wf-theme text-lg font-bold hover:underline hover:text-wz-secondary-color" href="https://github.com/joewang0430/health-monitor">
                    GitHub Repository&nbsp;&rarr;
                </Link>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Implemented with: </span>
                    <span className="text-wz-text-color">Brain Liu, Suzen Bao, Alex Hu.</span>
                </p>
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Overall pipline</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The system consists of an ESP32-based microcontroller that collects data from multiple sensors and transmits it to a web application for visualization. 
                    The data is stored in an SQLite database via a Flask server with WebSocket support, allowing real-time updates to the front-end.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-wz-main-color font-wf-title">Hardware Description</h2>
                    <ul className="list-disc pl-5 mt-4 text-lg text-wz-text-color font-wf-theme">
                        <li><span className="font-bold">ESP32-WROOM</span> - Main microcontroller with WiFi and BLE capabilities.</li>
                        <li><span className="font-bold">MAX30100 / MAX30102</span> - Heart rate and (blood oxygen) sensor (PPG-based).</li>
                        <li><span className="font-bold">MPU6050</span> - Accelerometer and gyroscope for step counting and motion analysis.</li>
                        <li><span className="font-bold">3.7V Li-ion Battery (800mAh)</span> - Power source for the ESP32.</li>
                        <li><span className="font-bold">AMS1117-3.3V</span> - Voltage regulator to step down from 3.7V to 3.3V.</li>
                        <li><span className="font-bold">Adjustable Velcro Strap</span> - To secure the wearable system on the wrist.</li>
                        <li><span className="font-bold">OLED Display (SSD1306, 0.96")</span> - Optional local data visualization.</li>
                    </ul>
                </div>
                {/* assembling */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Assembling</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The system is assembled to the human body using cinch cable ties. The central ESP32 and battery are soldered onto a PCB board and connected with other sensors using jump wires, 
                    as each hardware was required to be at its best monitoring part. 
                </p>
                {/* picture */}
                <div className="mt-8 flex flex-col items-center">
                    <Image 
                        src="/projects/pulse_track/pulse_track_1.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={800} 
                        height={450} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        The wearable device is secured to the wrist and waist using cinch cable ties.
                    </p>
                </div>
                {/* software part */}
                
            </div>
        </section>
    );
}