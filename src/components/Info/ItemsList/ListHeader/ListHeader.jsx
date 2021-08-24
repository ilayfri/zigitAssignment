import "./ListHeader.css";
const ListHeader = () => {
  const titles = [
    "Name",
    "Score",
    "Duration In Days",
    "Bugs Count",
    "Made Deadline",
  ];
  return (
    <>
      <div className="header-div">
        {titles.map((title) => {
          return (
            <span className="header-span" key={title}>
              <b>{title}</b>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default ListHeader;
