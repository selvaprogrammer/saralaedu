import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { publicReducer } from "./public";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["public"]
};
const rootReducer = combineReducers({
    public: publicReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const persistRoot: any = rootReducer;
export default persistReducer(persistConfig, persistRoot);
