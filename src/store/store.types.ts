import { store } from "./index";
import { AuthState } from "../features/auth/authSlice";
import { PersistPartial } from "redux-persist/es/persistReducer";

// Define the complete root state type including persisted state
export interface RootState {
  auth: AuthState & PersistPartial;
}

// Infer dispatch type from store
export type AppDispatch = typeof store.dispatch;
