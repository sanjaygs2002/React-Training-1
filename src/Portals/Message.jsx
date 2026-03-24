import { createPortal } from "react-dom";

function Message() {
  return (
    <div style={{ border: "2px solid black" }}>
      <p>This is an without portal</p>
      {createPortal(
        <p>This is an with portal</p>,
        document.getElementById("modal-root"),
      )}
    </div>
  );
}
export default Message;
