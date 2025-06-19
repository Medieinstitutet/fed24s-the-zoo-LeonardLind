const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f78495]">
      <div className="spinner" />
      <p className="mt-4">Laddar zoo...</p>
    </div>
  );
};

export default LoadingSpinner;
