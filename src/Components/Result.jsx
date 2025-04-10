import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";

const Result = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://king-kalyan.gammingverse.com/api/v1/twoDaysResult"
        );
        if (response.data) {
          setResults(response?.data?.data || []);
          console.log("data2222222222222222222______", response?.data.data);
        } else {
          setError("Failed to load results.");
        }
      } catch (e) {
        setLoading(false);
        setError(e.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatTime = (seconds) => {
    if (!seconds && seconds !== 0) return "-";
    
    const time = moment()
      .hours(parseInt(seconds / 3600))
      .minutes(parseInt((seconds % 3600) / 60))
      .seconds(parseInt(seconds % 60))
      .milliseconds(0);

    return time.format("hh:mm A");
  };
  
  const formatResult = (resultObj) => {
    if (!resultObj) return "-";
    
    // Check if resultObj is an object with these properties
    if (typeof resultObj === 'object') {
      const open = resultObj.openNumber || '';
      const jodi = resultObj.jodiNumber || '';
      return `${open}-${jodi}`;
    }
    
    // If it's a string, return it directly
    return String(resultObj);
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-2 md:p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl">
          {/* Header */}
          <div className="bg-yellow-500 text-white text-center py-3 font-bold text-xl">
            Result
          </div>

          <div className="w-auto overflow-hidden overflow-x-auto">
            <table className="min-w-full border-collapse overflow-x-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-2 md:px-4 border-b text-left text-xs md:text-base">
                    Game Play Timing
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b text-center text-xs md:text-base">
                    Draw
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b text-center text-xs md:text-base">
                    Old Result
                  </th>
                  <th className="py-3 px-2 md:px-4 border-b text-center text-xs md:text-base">
                    New Result
                  </th>
                </tr>
              </thead>
              <tbody>
                {results?.map((result, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-yellow-100 text-xs md:text-base ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-2 md:px-4 border-b text-left">
                      <span className="font-semibold text-gray-900 capitalize">
                        {result?.gameName || null}
                      </span>
                      <p className="text-xs md:text-sm text-gray-500">
                        (<span>{formatTime(result?.openTime)}</span> -{" "}
                        <span>{formatTime(result?.closingTime)}</span>)
                      </p>
                    </td>
                    <td className="py-3 px-2 md:px-4 border-b text-center text-gray-700 uppercase">
                      {formatTime(result?.ResultTime)}
                    </td>
                    <td className="py-3 px-2 md:px-4 border-b text-center text-gray-700">
                      {result.yesterdayResult ? formatResult(result.yesterdayResult) : "-"}
                    </td>
                    <td className="py-3 px-2 md:px-4 border-b text-center text-gray-700">
                      {result.todayResult ? formatResult(result.todayResult) : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;