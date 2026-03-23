// components/dashboard/BreathingCard.tsx
import React from 'react';
import { Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BreathingCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onStart?: () => void;
}

const BreathingCard: React.FC<BreathingCardProps> = ({
  title = '4-7-8 Breathing',
  description = 'A calming breathing technique to reduce anxiety',
  buttonText = 'Start Exercise',
  onStart,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onStart) {
      onStart();
    } else {
      navigate('/breathing');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <Wind className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
          Quick Relief
        </span>
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button
        onClick={handleClick}
        className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BreathingCard;
