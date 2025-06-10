type HighlightProps = {
  isDarkMode: boolean;
  children: React.ReactNode;
};

function Highlight({ isDarkMode, children }: HighlightProps) {
  return (
    <span
      style={{
        color: isDarkMode ? "#a78bfa" : "#fb923c", // violet-400 or orange-400
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}

export default Highlight;