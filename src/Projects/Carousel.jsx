import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ images, altText }) => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const goToPrev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrent((prev) => Math.min(prev + 1, images.length - 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="w-full h-full overflow-visible">
        <div
          ref={trackRef}
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className="w-full flex-shrink-0 flex items-center justify-center px-4"
                style={{
                  width: `${100 / images.length}%`,
                  transform: `scale(${isActive ? 1 : 0.85})`,
                  transition: 'transform 0.5s ease-in-out',
                }}
              >
                <img
                  src={src}
                  alt={`${altText} ${index}`}
                  className="h-full w-full object-contain rounded-2xl shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>

      {images.length > 1 && (
        <>
          {current > 0 && (
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
          )}
          {current < images.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-20"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${index === current ? 'bg-sky-700' : 'bg-white/30'}`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
