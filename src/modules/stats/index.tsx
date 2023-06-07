import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { MapContainer, TileLayer } from "react-leaflet";
import Map from "../map";
import { Country } from "../map/types";
import { ChartData } from "./types";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [],
  });

  const countriesDataQuery = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await axios.get("https://disease.sh/v3/covid-19/countries");
      const data = await res.data;
      setCountriesData(data);
      return data;
    },
  });
  const chartDataQuery = useQuery({
    queryKey: ["chart"],
    queryFn: async () => {
      const res = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const data = await res.data;

      const newChartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: "Covid cases",
            data: Object.values(data.cases),
            fill: false,
            borderColor: "#213555",
            tension: 0.2,
          },
        ],
      } as ChartData;

      setChartData(newChartData);

      ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      return data;
    },
  });

  return (
    <div className="flex flex-col w-full pt-20 px-4 pb-8">
      <h2 className="flex justify-center font-bold text-gray-900 py-3 text-2xl">
        Covid Cases Line Graph
      </h2>

      <div className="border-2 border-p-light-blue w-11/12  m-auto 10 auto 10">
        {chartDataQuery.isError ? (
          <h1 className="text-red-400 mb-4 font-bold text-2xl">Error</h1>
        ) : chartDataQuery.isLoading ? (
          <h1 className="text-p-navy-blue mb-4 font-bold text-2xl">
            Loading...
          </h1>
        ) : (
          <>{chartData.datasets && <Line data={chartData} />}</>
        )}
      </div>

      <h2 className="text-xl text-white font-bold mb-4">
        <h2 className="flex justify-center font-bold text-gray-900 py-3 text-2xl">
          Covid Cases World Map
        </h2>
      </h2>
      <div className="border-2 border-p-light-blue w-11/12  m-auto 5 auto 5">
        {countriesDataQuery.isError ? (
          <h1 className="text-red-400 mb-4 font-bold text-2xl">Error</h1>
        ) : countriesDataQuery.isLoading ? (
          <h1 className="text-p-navy-blue mb-4 font-bold text-2xl">
            Loading...
          </h1>
        ) : (
          <MapContainer
            className="m-auto w-full h-full  border-p-light-blue"
            bounds={[
              [-60, -180],
              [85, 180],
            ]}
            zoom={2}
            center={[20, 40]}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            />
            <Map countriesData={countriesData} />
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
