import { configureStore } from "@reduxjs/toolkit";
import appStore from "./appStore";

export const rootStore = configureStore({
	reducer: {
		appStore
	},
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
