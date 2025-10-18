import React from 'react';

interface ArrowControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const ArrowControls: React.FC<ArrowControlsProps> = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button onClick={onPrev} className="p-2 bg-gray-300 rounded hover:bg-gray-400">
        &lt; Prev
      </button>
      <button onClick={onNext} className="p-2 bg-gray-300 rounded hover:bg-gray-400">
        Next &gt;
      </button>
    </div>
  );
};

export default ArrowControls;