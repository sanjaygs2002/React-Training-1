const InputEvent = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTrasfer.files;
    console.log(files);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      console.log("load more data");
    }
  };

  return (
    <>
      <input onChange={handleChange}></input>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <p>Mouse Events</p>
      <div onMouseEnter={() => console.log("my mouse enter")}> Mouse Enter</div>
      <div onMouseLeave={() => console.log("My mouse leave")}>
        Mouse Leaving
      </div>
      <div onMouseMove={() => console.log("Mouse moving")}>Mouse move</div>
      <h1>KeyBoard events</h1>
      <input
        onKeyDown={(e) => console.log("Key pressing", e.key)}
        onKeyUp={(e) => console.log("Typed keys released", e.key)}
      />
      
      <h4>Drag and drop</h4>

      <div onDragOver={(e) => e.preventDefault} onDrop={handleDrop}>
        {" "}
        Drag the files
      </div>

      <div onScroll={handleScroll}>Scrolling</div>
      <div onResize={() => console.log("Resize ")}>Resize</div>
    </>
  );
};
export default InputEvent;

//checking where we use this concepts
