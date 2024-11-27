// ChallengeButton.tsx

import React from 'react';

interface ChallengeButtonProps {
  challengerId: number;
  challengedId: number;
  onChallenge: (challengerId: number, challengedId: number) => void;
}

const ChallengeButton: React.FC<ChallengeButtonProps> = ({ challengerId, challengedId, onChallenge }) => {
  return (
    <button
      onClick={() => onChallenge(challengerId, challengedId)}
      className="mt-2 bg-blue-500 text-white py-1 px-3 text-sm rounded-full hover:bg-blue-700"
    >
      Challenge
    </button>
  );
};

export default ChallengeButton;
