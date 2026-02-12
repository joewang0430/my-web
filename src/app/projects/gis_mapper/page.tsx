import Image from 'next/image';

export default function GISMapperPage() {
    return (
        <section id="projects" className="flex items-center justify-center bg-wz-bg-color">
            <div className="container mx-auto px-4 flex flex-col items-start justify-between max-w-5xl lg:gap-x-8 mt-24 mb-12">
                <h1 className="text-7xl font-bold text-wz-main-color font-funnel-display self-start">GIS Mapper</h1>
                <p className="text-wz-text-color mt-8 font-wf-theme text-lg">
                    A semester-long project focused on building mapping software for place searching and navigation using C++. It combines geographic data visualization, pathfinding algorithms, and delivery constraints to simulate real-world logistics optimization.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    (Due to school regulations, it is not permitted to share the code on GitHub.)
                </p>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Tech Stack: </span>
                    <span className="text-wz-text-color">C++, EZGL, libCurl, STL library.</span>
                </p>
                <p className="mt-4 font-wf-theme text-lg">
                    <span className="text-wz-main-color font-bold">Implemented by: </span>
                    <span className="text-wz-text-color">Kaeul Lee, Alex Hu.</span>
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-wz-main-color font-wf-title">Overall Functions</h2>
                    <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                        The software is designed to provide a user-friendly interface for searching and navigating maps. It offers the following key functions:
                    </p>
                    <ul className="list-disc pl-5 mt-4 text-lg text-wz-text-color font-wf-theme">
                        <li><span className="font-bold">Geographical Display:</span>&nbsp;Retrieves data from the libStreetMap API and uses EZGL graphics to render it on a canvas.</li>
                        <li><span className="font-bold">Point Query:</span>&nbsp;Allows users to click on a point to display its related information, or input information to locate a point.</li>
                        <li><span className="font-bold">Points of Interest (POI):</span>&nbsp;Enables users to display all POIs in a city using the provided UI buttons—such as restaurants or clinics.</li>
                        <li><span className="font-bold">Two-Point Navigation:</span>&nbsp;Input two points and the software calculates and displays the optimal path on the map.</li>
                        <li><span className="font-bold">Navigation Directions:</span>&nbsp;Processes the data from two-point navigation and generates a list of directions for real-world navigation.</li>
                        <li><span className="font-bold">Solving TSP Problem:</span>&nbsp;Solves a given Traveling Salesman Problem (TSP) using specialized algorithms based on the collected data.</li>
                    </ul>
                </div>
                {/* Map Graphics */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Map Graphics</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The map graphics are created using EZGL, a C++ graphics library that provides functions to draw shapes, text, and images on a canvas. The map data is obtained from the libStreetMap API, and at different zoom levels, the software displays varying levels of detail.
                </p>
                {/* picture */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_1.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_2.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg mt-8"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Graphic examples: different zoom levels display varying details.
                    </p>
                </div>
                {/* Interactions In Map */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Interactions on the Map</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The map is designed to be interactive, allowing users to click on points to retrieve information or navigate the map. The software handles text input through a UI form; users can enter either navigation points or specific intersection names. Additionally, clicking on the map provides details about the selected point.
                </p>
                {/* picture 2 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_3.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Example: Given start and end points, the software displays a graphic route with detailed directions.
                    </p>
                </div>
                {/* Button Interactions */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Button Interactions</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Buttons on the right allow users to select POIs, toggle light mode, and switch cities.
                </p>
                {/* picture 3 */}
                <div className="mt-8 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_4.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Features in dark mode.
                    </p>
                </div>
                {/* picture 4 */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_5.jpg" 
                        alt="GIS Mapper picture 5" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        When &quot;Cafes&quot; is selected, all the cafes in the city are displayed on the map.
                    </p>
                </div>
                {/* picture 5 */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_6.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        Switch city: this instance shows Beijing, China.
                    </p>
                </div>
                {/* Algorithms: Dijkstra */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Algorithms: Dijkstra</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The software implements Dijkstra&apos;s algorithm to find the shortest path between two points. It uses a priority queue to efficiently select the next point to explore and updates the distances of neighboring points dynamically. This algorithm is designed to handle large maps efficiently, making it suitable for real-world applications.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    By planning an efficient data structure in the loadMap function and utilizing the STL library wisely, the software finds the shortest path between two points in a very short time—even on a map with over 10,000 points, such as in New York City or Tokyo. Typically, it takes less than 0.1 seconds to determine the path. All test cases for two-point navigation are passed, as shown below.
                </p>
                {/* picture 6 */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_7.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        All test cases passed for Dijkstra&apos;s algorithm.
                    </p>
                </div>
                {/* Algorithm: Traveling Salesman Problem */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">Algorithm: Traveling Salesman Problem</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    The software also implements a solution for a modified Traveling Salesman Problem, called the Traveling Delivery Problem (TDP), using a mixed approach. It first opened 64 threads (on an 8-core computer) to run different greedy algorithms that calculate feasible paths between all points.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Then, based on the 64 results, it performs simulated annealing to find a globally optimized solution. Finally, depending on the remaining time, the software runs 2-opt or 3-opt to further optimize the path locally.
                </p>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Take London as an example: if there are approximately 260 delivery points (130 × 2) in the city (with some overlaps), the optimized time will be around 37 hours (133214 seconds). It may seem like a huge number, but considering the density of points in such a city, it is extremely fast!
                </p>
                {/* picture 7 */}
                <div className="mt-4 flex flex-col items-center self-center">
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_8.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <Image 
                        src="/projects/gis_mapper/gis_mapper_9.jpg" 
                        alt="GIS Mapper picture" 
                        width={950} 
                        height={950} 
                        className="rounded-lg"
                    />
                    <p className="mt-2 text-center text-wz-text-color font-wf-theme text-lg">
                        An extreme TDP case: 260 points in London.
                    </p>
                </div>
                {/* What's Next */}
                <h2 className="text-2xl font-bold text-wz-main-color font-wf-title mt-8">What&apos;s Next</h2>
                <p className="text-wz-text-color mt-4 font-wf-theme text-lg">
                    Currently, the software serves as a proof of concept for map navigation and delivery optimization. In the future, we plan to enhance the software with the following features:
                </p>
                <ul className="list-disc pl-5 mt-4 text-wz-text-color font-wf-theme text-lg">
                    <li>Add AI suggestions based on the navigation path and real-time information (e.g., weather conditions).</li>
                    <li>Fetch real-time traffic data for each city and display it within the graphics.</li>
                    <li>Add a voice broadcast function.</li>
                </ul>
            </div>
        </section>
    );
}