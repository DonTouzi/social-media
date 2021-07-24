const Book = ({ img, title, author }) => {
  const handleClick = (value) => console.log(value);

  return (
    <>
      <div className="book">
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{author}</p>
        <button
          type="button"
          style={{ width: 200 }}
          onClick={() => handleClick(author)}
        >
          Click me!
        </button>
      </div>
    </>
  );
};

export default Book;
