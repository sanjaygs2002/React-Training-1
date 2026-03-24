import { Context } from "./Context";
import ConsumeContext from "./ConsumeContext";
function ProContext() {
  return (
    <>
      <Context.Provider value="Ram">
        <ConsumeContext />
      </Context.Provider>
    </>
  );
}
export default ProContext;
