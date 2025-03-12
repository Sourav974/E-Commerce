import { Provider } from "react-redux";
import store from "./store";
import AppRoutes from "./routes";

import { FC } from "react";

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
