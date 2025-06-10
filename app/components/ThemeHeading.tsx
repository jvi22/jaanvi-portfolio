type ThemeHeadingProps = {
  isDarkMode: boolean;
};

function ThemeHeading({ isDarkMode }: ThemeHeadingProps) {
  return (
    <h2 className="text-5xl font-extrabold mb-4">
      <span
        style={{
          color: isDarkMode ? "#fff" : "#374151", // white or dark gray
        }}
      >
        hi,&nbsp;
      </span>
      <span
        style={{
          color: isDarkMode ? "#a78bfa" : "#fb923c", // violet-400 or orange-400
        }}
      >
        i&apos;m&nbsp;jaanvi.
      </span>
    </h2>
  );
}

export default ThemeHeading;