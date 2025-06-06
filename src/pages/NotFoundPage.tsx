import { HiArrowLeft, HiHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        
        <div className="relative mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange select-none">
            404
          </h1>
          <div className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-orange-300 opacity-20 animate-pulse">
            404
          </div>
        </div>
        <div className="space-y-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Oops! Page Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, even the best explorers sometimes take a wrong turn.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={"/"}
            className="group relative overflow-hidden bg-gradient-to-r from-orange-600 to-orange hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              <HiHome className="w-5 h-5" />
              <span className="text-base sm:text-lg">Go Home</span>
            </span>
          </Link>
          <Link
            to={"/"}
            className="group text-gray-600 hover:text-orange-600 font-medium py-3 px-8 rounded-full border-2 border-gray-300 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2">
              <HiArrowLeft className="w-5 h-5 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-base sm:text-lg">Go Back</span>
            </span>
          </Link>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm sm:text-base text-gray-500 mb-4">
            Need help? Here are some quick links:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200">
              Contact Support
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200">
              FAQ
            </button>
            <span className="text-gray-300">|</span>
            <button className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200">
              Site Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFoundPage;