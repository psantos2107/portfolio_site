function SectionHeader({ header }) {
  return (
    <h1 className="text-2xl md:text-5xl md:mb-8 pl-3 mb-4">
      <strong className={`p-1 bg-green-200`}>{header}</strong>
    </h1>
  );
}

export default SectionHeader;
