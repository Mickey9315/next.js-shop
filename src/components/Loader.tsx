export const Loader: React.FC = () => (
  <>
    <div className="flex items-center justify-between space-x-4">
      <div className="w-3/5 h-10 px-4 py-2 rounded-md animate-pulse bg-gray-100/10" />
      <div className="w-1/5 h-10 px-4 py-2 rounded-md animate-pulse bg-gray-100/10" />
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="p-4 space-y-4 bg-white rounded-md backdrop-blur-md bg-gray-100/10"
        >
          <div className="flex items-center flex-shrink-0 space-x-4">
            <div className="flex flex-shrink-0 rounded-md">
              <div className="w-16 h-16 rounded-md bg-gray-100/10 animate-pulse" />
            </div>

            <div className="flex flex-col items-start flex-grow space-y-1 overflow-x-hidden">
              <h2 className="w-2/3 h-6 rounded-md bg-gray-100/10" />
              <div className="w-1/4 h-6 text-xs rounded-md animate-pulse bg-gray-100/10" />
            </div>
          </div>

          <div className="flex flex-wrap items-center flex-shrink-0 space-x-2 ">
            <div className="w-1/6 h-5 rounded-md bg-gray-100/10" />
            <div className="w-2/6 h-5 rounded-md bg-gray-100/10" />
            <div className="w-1/6 h-5 rounded-md bg-gray-100/10" />
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Loader;
