import { RotatingTriangles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <RotatingTriangles
        visible={true}
        height="100"
        width="100"
        color="#3B82F6"
        ariaLabel="rotating-triangles-loading"
      />
      <p className="mt-6 text-lg font-semibold text-blue-400 animate-pulse tracking-wide">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
