const taglines = [
  {
    num: 1,
    tag: "Automotive",
  },
  {
    num: 2,
    tag: "Business Development",
  },
  {
    num: 3,
    tag: "Network Development",
  },
  {
    num: 4,
    tag: "General Management",
  },
  {
    num: 5,
    tag: "PMP",
  },
  {
    num: 6,
    tag: "Credit & Treasury",
  },
];

const FullWidthBanner = () => {
  return (
    <section className="w-full bg-[#323232] h-auto flex items-center justify-center py-2">
      <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 font-bold justify-center text-[#f5f5f5] text-sm sm:text-base">
        {taglines.map((tagline, index) => (
          <span key={tagline.num} className="flex items-center">
            <p>{tagline.tag}</p>
            {index < taglines.length - 1 && (
              <span className="hidden sm:inline mx-2 sm:mx-4">|</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
};

export default FullWidthBanner;
