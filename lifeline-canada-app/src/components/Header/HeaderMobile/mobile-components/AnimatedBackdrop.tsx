interface AnimatedBackdropProps {
  isAnimating: boolean;
  onClick: () => void;
}

export const AnimatedBackdrop = ({
  isAnimating,
  onClick,
}: AnimatedBackdropProps) => (
  <div
    className={`absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 
      backdrop-blur-md transition-all duration-700 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
    onClick={onClick}
    aria-hidden="true"
  />
);
