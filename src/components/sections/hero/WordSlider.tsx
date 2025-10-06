function WordSlider({ words }: { words: { text: string; imgPath: string }[] }) {
  return (
    <span className="slide">
      <span className="wrapper">
        {words?.map(({ text, imgPath }) => (
          <span
            key={text}
            className="flex items-center md:gap-3 gap-1 pb-2"
            aria-label={text}
          >
            <img
              src={imgPath}
              alt={text}
              className="xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"
            />
            <span>{text}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

export default WordSlider;