import './styles.css';
import { FaLongArrowAltRight } from "react-icons/fa";


const CvSection = () => {
    return (
        <div className="flex gap-5 px-10 mt-10">
            <div className="relative w-[50%] bg-[#fbf7ed] rounded-xl p-10 dKOpLh">
                <h1 className="relative z-10 text-2xl mb-3">Upload your CV</h1>
                <p className="relative z-10 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <div className='w-5'>
                    <div className='w-12 h-12 bg-[#289278] rounded-full flex items-center justify-center'>
                        <FaLongArrowAltRight className='text-white' />
                    </div>
                </div>
            </div>

            <div className="relative w-[50%] bg-[#fbf7ed] rounded-xl p-10 dKOpLh">
                <h1 className="relative z-10 text-2xl mb-3">Post About Job</h1>
                <p className="relative z-10 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <div className='w-5'>
                    <div className='w-12 h-12 bg-[#289278] rounded-full flex items-center justify-center'>
                        <FaLongArrowAltRight className='text-white' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvSection;