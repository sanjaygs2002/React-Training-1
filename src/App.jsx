import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./ClassComponents/counter";
import LifeCycle from "./ClassComponents/LifeCycle";

import ParentCom from "./FunctionalCom/ParentCom";
import State from "./FunctionalCom/State";
import InputEvent from "./FunctionalCom/InputEvent";
import ConditionalRender from "./FunctionalCom/ConditionalRender";
import List from "./FunctionalCom/List";
import Task1 from "./FunctionalCom/Task1";
import Form from "./FunctionalCom/Form";
import UnControlForm from "./FunctionalCom/UnControlForm";
import LoginForm from "./FunctionalCom/LoginForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Counter />} />
          <Route path="/decrement" element={<LifeCycle />} />
          <Route path="/props" element={<ParentCom />} />
          <Route path="/state" element={<State />} />
          <Route path="/event" element={<InputEvent />} />
          <Route path="/rendering" element={<ConditionalRender />} />
          <Route path="/list" element={<List />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/form" element={<Form/>}/>
          <Route path="/UnControlForm" element={<UnControlForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
