import Banner from "../HomeComponents/Banner/Banner";
import CvSection from "../HomeComponents/CvSection/CvSection";
import JobCategories from "../HomeComponents/JobCategories/JobCategories";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CvSection></CvSection>
            <JobCategories></JobCategories>
        </div>
    );
};

export default Home;