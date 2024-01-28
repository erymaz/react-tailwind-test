import Weather from "../components/weather";

export default function Home() {
  return (
    <div className="w-full py-12">
      <div className="max-w-lg mx-auto">
        <Weather />
      </div>
    </div>
  );
}
