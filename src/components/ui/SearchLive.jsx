import "../ui/SearchLive.css";

export const SearchLive = ({ searchDistrict, setSearchDistrict, searchCommodity, setSearchCommodity }) => {
    return (
        <>
            <section className="SEARCH">
                <input 
                    type="text" 
                    placeholder="Search by District" 
                    value={searchDistrict} 
                    onChange={(e) => setSearchDistrict(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Search by Commodity" 
                    value={searchCommodity} 
                    onChange={(e) => setSearchCommodity(e.target.value)} 
                />
            </section>
        </>
    );
};