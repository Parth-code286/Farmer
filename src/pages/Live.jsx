import { useEffect, useState } from "react";
import { GetApiLive } from "../components/api/GetApiLive";
import { LiveCard } from "../components/ui/LiveCard";
import { SearchLive } from "../components/ui/SearchLive"; 
import "../pages/Live.css";

export const Live = () => {
    const [showdata, setShowdata] = useState(null);
    const [searchDistrict, setSearchDistrict] = useState("");
    const [searchCommodity, setSearchCommodity] = useState("");

    const newData = async () => {
        const response = await GetApiLive();
        if (response) {
            setShowdata(response.records);
        }
    };

    useEffect(() => {
        newData();
    }, []);

    // Filter data dynamically based on search inputs
    const filteredData = showdata?.filter((item) => 
        item.District.toLowerCase().includes(searchDistrict.toLowerCase()) &&
        item.Commodity.toLowerCase().includes(searchCommodity.toLowerCase())
    );

    return (
        <>
        <div className="badaDabba">
            <SearchLive 
                searchDistrict={searchDistrict} 
                setSearchDistrict={setSearchDistrict} 
                searchCommodity={searchCommodity} 
                setSearchCommodity={setSearchCommodity} 
            />

            <div>
                <button onClick={newData}>Refresh</button>
            </div>

            <div className="bigBoss">
                {filteredData ? (
                    filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <LiveCard key={index} currentCommodity={item} />
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                ) : (
                    <p>Loading live prices...</p>
                )}
            </div>
            </div>
        </>

    );
};