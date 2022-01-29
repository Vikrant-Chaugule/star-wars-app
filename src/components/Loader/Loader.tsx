import { MutatingDots } from "react-loader-spinner";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <MutatingDots
        ariaLabel="loading-indicator"
        color="yellow"
        secondaryColor="lightyellow"
        width={100}
      />
    </div>
  );
};
