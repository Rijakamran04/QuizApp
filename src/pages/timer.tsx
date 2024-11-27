import { CountdownCircleTimer } from "react-countdown-circle-timer";

// Define the type for the props
interface TimerProps {
  onTimeUp: () => void;  // Function to call when the timer ends
}

const Timer: React.FC<TimerProps> = ({ onTimeUp }) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={10} // Total duration of the timer in seconds
      onComplete={onTimeUp} // Call onTimeUp when the timer completes
      colors={['#004777', '#F7B801', '#A30000']} // Colors to change through
      colorsTime={[6, 3, 0]} // Time points when the colors should change
      size={60} // Default size
      strokeWidth={6} // Default stroke width
    >
      {({ remainingTime }: { remainingTime: number }) => (
        <span className="text-2xl font-bold text-black">{remainingTime}</span>
      )}
    </CountdownCircleTimer>
  );
};


export default Timer;
