import Banner from "../HomeComponents/Banner/Banner";
import CvSection from "../HomeComponents/CvSection/CvSection";
import JobCategories from "../HomeComponents/JobCategories/JobCategories";
import Postjobs from "../HomeComponents/Postjobs/Postjobs";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CvSection></CvSection>
            <JobCategories></JobCategories>
            <Postjobs></Postjobs>
        </div>
    );
};

export default Home;