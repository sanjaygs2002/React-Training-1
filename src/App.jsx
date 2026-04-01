import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Counter from "./ClassComponents/counter";
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
import { lazy, Suspense } from "react";
import ConsumeContext from "./Context/ConsumeContext";
import ProContext from "./Context/ProContext";
// error boundary

import ParentRef from "./ForwardRef/ParentRef";
import Sample from "./Accessibility/sample";
import ApiCall from "./UseEffectHook/ApiCall";
import Timer from "./UseEffectHook/Timer";
import Consume from "./Context/Auth/Consume";
import Provider from "./Context/Auth/Provider";
import { ErrorBoundary } from "react-error-boundary";
import Message from "./Portals/Message";
import { Profiler } from "react";
import Memo from "./Hooks/Memo";
import Callback from "./Hooks/Callback";
import Reducer from "./Hooks/Reducer";
import Transition from "./Hooks/Transition";
import Cart from "./Hooks/Cart";
import Optimistic from "./Hooks/Optimistic";
import ClientCall from "./ServerFunc/ClientCall";
import Client from "./ServerFunc/FormAction/client";
import Ref from "./Hooks/Ref";
import Counter from "./Counter";
import { Axios } from "axios";
import UserData from "./Axios/UserData";
import ListElement from "./ListElement";
import AsyncData from "./AsyncData";
import UserForm from "./Axios/UserForm";
import Product from "./NormalRedux/Product";
import ShowItem from "./NormalRedux/ShowItem"
import Products from "./ReduxToolkit/Products";
import ShowItems from "./ReduxToolkit/ShowItems"
import HandleProducts from "./NormalRedux/HandleProducts";
import DataList from "./ReduxToolkit/DataList";
import ProductList from "./ReduxSaga/ProductList";
import QueryData from "./RTK-Query/QueryData";
const LoginForm = lazy(() => import("./FunctionalCom/LoginForm"));

// function onRender(id,phase,actualDuation,baseDuration,startTime,commitTime,interactions){
// console.log(id,phase,actualDuation,baseDuration,startTime,commitTime,interactions);
// }

function App() {
  return (
    <>
      <my-element>React App</my-element>
      <ErrorBoundary fallback={<p>Something went worng, try later</p>}>
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
              <Route path="/login" element={<LoginForm />} />
              <Route path="/hookForm" element={<FormHook />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/display" element={<DisplayName />} />
              <Route path="update" element={<UpdateName />} />
              <Route path="/id" element={<Id />} />
              <Route path="/consumeValue" element={<ConsumeContext />} />
              <Route path="/provider" element={<ProContext />} />
              <Route path="/parentRef" element={<ParentRef />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/apicall" element={<ApiCall />} />
              {/* <Profiler  onRender={onRender}> */}
              <Route path="/timer" element={<Timer />} />
              {/* </Profiler> */}

              <Route path="/consume" element={<Consume />} />
              <Route path="/message" element={<Message />} />
              {/* <Route path="/element" element={<Element/>}/> */}
              <Route path="/memo" element={<Memo />} />
              <Route path="/callFunc" element={<Callback />} />
              <Route path="/reducer" element={<Reducer />} />
              <Route path="/transition" element={<Transition />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/optimistic" element={<Optimistic />} />

              <Route path="/clientcall" element={<ClientCall />} />
              <Route path="/client" elemeent={<Client />} />
              <Route path="/ref" element={<Ref />} />
              <Route path="/counter" element={<Counter/>}/>
              <Route path="/axios" element={<UserData/>}/>
              <Route path="listing" element={<ListElement/>}/>
              <Route path="asyncData" element={<AsyncData/>}/>
              <Route path="interceptor" element={<UserForm/>}/>
              <Route path ="/products" element={<Product/>}/>
              <Route path="/showitem" element={<ShowItem/>}/>
              <Route path ="/product" element={<Products/>}/>
              <Route path="/showItems" element={<ShowItems/>}/>
              <Route path="/fetchProducts" element={<HandleProducts/>}/>
              <Route path="/datalist" element={<DataList/>}/>
              <Route path="/productList" element={<ProductList/>}/>
              <Route path="/querydata" element={<QueryData/>}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}
export default App;
