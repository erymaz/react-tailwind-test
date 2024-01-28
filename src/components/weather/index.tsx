import ProductionEye from "./production-eye";
import WeatherDetails from "./details";
import GlobalRundown from "./global-rundown";

export default function Weather() {
  return (
    <div id="production-eye" className="text-gray-700">
      <ProductionEye />
      <div className="pl-2 pr-1 -my-0.5">
        <WeatherDetails />
        <div className="relative">
          <div className="absolute left-0 bottom-0 opacity-80 w-full h-40 bg-gradient-to-t from-gray-400" />
        </div>
      </div>
      <GlobalRundown />
    </div>
  );
}
