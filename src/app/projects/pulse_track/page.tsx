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
                <Link className="text-wz-main-color mt-4 font-wf-theme text-lg font-bold hover:underline hover:text-wz-secondary-color" 
                    href="https://github.com/joewang0430/health-monitor"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub Repository&nbsp;&rarr;
                </Link>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Tech Stack: </span>
                    <span className="text-wz-text-color">C++, ESP32, Flask, Gevent, Next.js, Python, React, TypeScript, WebSocket.</span>
                </p>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Implemented with: </span>
                    <span className="text-wz-text-color">Kaiqi Hu, Suzen Bao, Brian Liu.</span>
                </p>
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Overall pipeline</h2>
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
                        <li><span className="font-bold">OLED Display (SSD1306, 0.96&quot;)</span> - Optional local data visualization.</li>
                    </ul>
                </div>
                {/* assembling */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Assembling</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The system is assembled to the human body using cinch cable ties. The central ESP32 and battery are soldered onto a PCB board and connected with other sensors using jump wires, 
                    ensuring each component is optimally positioned for monitoring.
                </p>
                {/* picture */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/pulse_track/pulse_track_1.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={450} 
                        height={450} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        The wearable device is secured to the wrist and waist using cinch cable ties.
                    </p>
                </div>
                {/* software part */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Backend</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    After the ESP32 collects data from the sensors, it transmits the data to a Flask server by sending the 
                    http post requests. After receiving the data, the server traverses the clients and sends this data in real-time to the front-end page.
                </p>
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Frontend: Monitor Page</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The front-end page is built using React and Next.js. Since the back end is sending data through WebSockets, it can directly retrieve real-time data. 
                    Finally, the monitor page displays all of the data. The page is designed to be responsive and can be accessed from any device with a web browser.
                </p>
                {/* picture 2 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/pulse_track/pulse_track_5.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={650} 
                        height={650} 
                        className="rounded-lg"
                    />
                    <Image 
                        src="/projects/pulse_track/pulse_track_2.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={450} 
                        height={450} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        The webpage displays real-time data from the wearable device.
                    </p>
                </div>
                {/* software part continue */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Frontend: Exercise Mode</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The webpage also provides an exercise mode. Users can enter exercise mode by clicking the button on the monitor page. Once activated, the webpage will individually monitor the data during that period. 
                    Users will decide the start and end times of the exercise mode, and the webpage will also provide an AI report after the exercise mode is deactivated.
                </p>
                {/* picture 4 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/pulse_track/pulse_track_4.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={450} 
                        height={450} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Exercise Mode
                    </p>
                </div>
                {/* software part continue */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Frontend: AI Page</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Finally, the webpage will provide an AI page. It uses the data collected from the wearable device during exercise mode to prompt a Gemini AI model to generate a personalized health report and offer exercise advice.
                </p>
                {/* picture 3 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/pulse_track/pulse_track_3.jpg" 
                        alt="Pulse Track experimental setup" 
                        width={450} 
                        height={450} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        The AI page generates a personalized health report based on the data collected. Tricky zero here!
                    </p>
                </div>
                {/* future */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">What&apos;s Next</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    We plan to enhance Pulse Track with:
                </p>
                <ul className="list-disc pl-5 mt-4 text-wz-text-color font-wf-theme text-lg">
                    <li>Add AI suggestions based on the navigation path and real-time information (e.g., weather conditions).</li>
                    <li>Fetch real-time traffic data for each city and display it within the graphics.</li>
                    <li>Add a voice broadcast function.</li>
                </ul>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    This hackathon has been an incredible journey, and we&apos;re excited to continue pushing the boundaries of health tech!
                </p>
            </div>
        </section>
    );
}