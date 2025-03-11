import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { FC } from "react";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
