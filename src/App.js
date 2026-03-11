import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux" ; 

function App() {
  return (
    <Provider store={store}>
      <div>
        {/**
         *
         * head
         * body
         * - sidebar
         *  - menulist
         * -MainContainer
         *  - buttonList
         *  - video container
         *   - video card
         *
         *
         *
         */}

        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
