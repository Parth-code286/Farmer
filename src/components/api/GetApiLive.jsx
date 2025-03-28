// GetApiLive.js
export const GetApiLive = async () => {
    try {
        const response = await fetch(
            `https://api.data.gov.in/resource/35985678-0d79-46b4-9ed6-6f13308a1d24?api-key=${import.meta.env.VITE_API_KEY}&format=json&limit=999&filters%5BState.keyword%5D=Maharashtra&filters%5BArrival_Date%5D=12%2F03%2F2025`

        );

        if (!response.ok) {
            console.log(`Data Not Found: ${response.status}`);
            return null;
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error fetching data:", error);
        return null;
    }
};