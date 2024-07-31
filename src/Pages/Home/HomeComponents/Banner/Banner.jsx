import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";



const Banner = () => {

    return (
        <div className="bg-green-100 py-32">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="flex-grow">
                        <div className="flex justify-center space-x-2">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <CiSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    className="pl-10 py-2 border border-gray-300 rounded-md"
                                    type="text"
                                    placeholder="Job title, skill or company"
                                />
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <CiLocationOn className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    className="pl-10 py-2 border border-gray-300 rounded-md"
                                    type="text"
                                    placeholder="Town, city or postcode"
                                />
                            </div>
                            <button
                                className="ml-4 px-4 py-2 bg-green-400 text-white rounded-md"
                                aria-label="Search"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            id="permanent"
                            name="permanent"
                        />
                        <label
                            htmlFor="permanent"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Permanent
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            id="temporary"
                            name="temporary"
                        />
                        <label
                            htmlFor="temporary"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Temporary
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            id="part-time"
                            name="part-time"
                        />
                        <label
                            htmlFor="part-time"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Part-Time
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            id="full-time"
                            name="full-time"
                        />
                        <label
                            htmlFor="full-time"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Full-Time
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
