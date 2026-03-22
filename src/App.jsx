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
import FormHook from "./FunctionalCom/FormHook";
import Parent from "./Lifting/Parent";
import DisplayName from "./Lifting/DisplayName";
import UpdateName from "./Lifting/UpdateName";
import Id from "./Accessibility/Id";
import { lazy,Suspense } from "react";
import ConsumeContext from "./Context/ConsumeContext";
import ProContext from "./Context/ProContext";
// error boundary
import {ErrorBoundary} from "react-error-boundary";
import ParentRef from "./ForwardRef/ParentRef";

const LoginForm = lazy(()=>import("./FunctionalCom/LoginForm"));


function App() {
  return (
    <>
    <ErrorBoundary fallback={<h1>Error happens please check once again</h1>}>
        <BrowserRouter>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Routes>
          <Route path="*" element={<Counter />} />
          <Route path="/decrement" element={<LifeCycle />} />
          <Route path="/props" element={<ParentCom />} />
          <Route path="/state" element={<State />} />
          <Route path="/event" element={<InputEvent />} />
          <Route path="/rendering" element={<ConditionalRender />} />
          <Route path="/list" element={<List />} />
          <Route path="/task1" element={<Task1 />} />
          <Route path="/form" element={<Form />} />
          <Route path="/UnControlForm" element={<UnControlForm />} />
          {/* <Route path="/login" element={<LoginForm />} /> */}
           <Route path="/login" element={<LoginForm />} />
          <Route path="/hookForm" element={<FormHook />} />
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/display" element={<DisplayName/>}/>
          <Route path="update" element={<UpdateName/>}/>
          <Route path="/id" element={<Id/>}/>
          <Route path = "/consumeValue" element={<ConsumeContext/>}/>
          <Route path="/provider" element={<ProContext/>}/>
          <Route path="/parentRef" element={<ParentRef/>}/>
        </Routes>
         </Suspense>
      </BrowserRouter>

    </ErrorBoundary>
      
    </>
  );
}
export default App;
