export default function PulseTrackPage() {
    return (
        <div className="flex flex-col w-full mx-auto">
            <h1 className="text-2xl font-bold">Pulse Track</h1>
            <p className="mt-4">
                Pulse Track is a web application that allows users to track their heart rate and other vital signs over time. It provides a user-friendly interface for logging and visualizing health data, helping users monitor their fitness and well-being.
            </p>
            <p className="mt-4">
                The application includes features such as:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Real-time heart rate monitoring</li>
                <li>Data visualization through charts and graphs</li>
                <li>Customizable reminders for tracking vital signs</li>
                <li>Exporting data for further analysis</li>
            </ul>
        </div>
    );
}