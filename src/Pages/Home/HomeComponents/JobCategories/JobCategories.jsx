// import React from 'react';

const JobCategories = () => {
    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl mb-5">Popular Jobs In Bangladesh</h1>
            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab mr-5" aria-label="Popular Searches" />
                <div role="tabpanel" className="tab-content p-10">Popular Searches</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab mr-5" aria-label="Jobs By Sector" defaultChecked />
                <div role="tabpanel" className="tab-content p-10">Jobs By Sector</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Jobs By Location" />
                <div role="tabpanel" className="tab-content p-10">Jobs By Location</div>
            </div>
        </div>

    );
};

export default JobCategories;