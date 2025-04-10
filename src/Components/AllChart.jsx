import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AllChart = () => {
  const { id } = useParams();
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://king-kalyan-backend.vercel.app/api/v1/calander",
          {gameId: id } 
        );
        if (response.data.code === 0) {
          setChartData(response.data.data||[]);
          console.log("chart_______", response.data.data);
        } else {
          setError("Failed to load results.");
        }
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className=''>
      <div className="w-full mt-6">
                    <div>
                        <div className="overflow-x-auto px-1 w-full">
                            <table className="min-w-full  md:text-base divide-y divide-gray-200 w-full">
                                <thead>
                                    <tr className="bg-yellow-400 font-semibold text-[12px] border-b-2 border-black">
                                        {["Date", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                                            <th
                                                key={day}
                                                className="text-center border text-[#17273B] uppercase tracking-wider px-2 py-1 md:px-2 md:py-2"
                                            >
                                                {day}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {chartData && chartData.length > 0 ? (
                                        chartData.map((week, index) => {
                                            const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
                                            return (
                                                <tr key={index} className="bg-white border text-[14px] ">
                                                    <div className='p-0.5 text-xs'>

                                                    {week?.rDate ? week?.rDate : '-'}

                                                    </div>
                                                    {days.map((day) => (
                                                        <>
                                                            {/* <td>{week?.rWeek?week?.rWeek:}</td> */}
                                                            <td key={day} className="px-1 whitespace-nowrap border">
                                                                <div className="flex md:gap-3 gap-1 justify-center items-center">
                                                                    <div>
                                                                    {/* <div>{week[day]?.result?.openNumber?.toString()[0] || "*"}</div>
                                                                    <div>{week[day]?.result?.openNumber?.toString()[1] || "*"}</div>
                                                                    <div>{week[day]?.openNumber?.toString()[2] || "*"}</div> */}
                                                                </div>


                                                                    <div className="">
                                                                        {week[day]?.result?.jodiNumber?.toString()[0] || "*"}
                                                                        {week[day]?.result?.jodiNumber?.toString()[1] || "*"}
                                                                        {/* {console.log("data---------------------->",week[day]?.result?.jodiNumber)} */}
                                                                        
                                                                    </div>
                                                                    <div>
                                                                    <div>{week[day]?.result?.closeNumber?.toString()[0] || "*"}</div>
                                                                    <div>{week[day]?.result?.closeNumber?.toString()[1] || "*"}</div>
                                                                    <div>{week[day]?.result?.closeNumber?.toString()[2] || "*"}</div>
                                                                </div>
                                                                </div>
                                                            </td>
                                                        </>

                                                    ))}
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan={7} className="text-center py-4">
                                                No Data Found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    </div>
  );
};

export default AllChart;
