import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MetaData = {
	currentPage: string;
	pages: string[];
};

type SnackbarMessage = {
	message: string;
	severity: 'success' | 'error' | 'warning' | 'info';
};

type ConfirmationPopup = {
	open: boolean;
	title: string;
	message: string;
	onConfirm: (() => void) | null;
};

type NotificationData = {
	data: string
}

type User = {
	firstName: string
}

type AppState = {
	metaData: MetaData;
	notificationData: NotificationData | null;
	isLoading: boolean;
	isLeftDrawerOpened: boolean;
	snackbarMessageObj: SnackbarMessage | null;
	confirmationPopUpObj: ConfirmationPopup;
	userData: User | null;
};

const initialState: AppState = {
	metaData: {
		currentPage: '',
		pages: [],
	},
	notificationData: null,
	isLoading: false,
	isLeftDrawerOpened: true,
	snackbarMessageObj: null,
	confirmationPopUpObj: {
		open: false,
		title: '',
		message: '',
		onConfirm: null,
	},
	userData: null,
};

const AppStore = createSlice({
	name: 'AppStore',
	initialState,
	reducers: {
		setMetaData: (state, action: PayloadAction<MetaData>) => {
			state.metaData = {
				currentPage: action.payload.currentPage || '',
				pages: action.payload.pages || [],
			};
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		toggleLeftDrawer: (state, action: PayloadAction<boolean>) => {
			state.isLeftDrawerOpened = action.payload;
		},
		showSnackbarMessage: (state, action: PayloadAction<SnackbarMessage>) => {
			state.snackbarMessageObj = action.payload;
		},
		hideSnackbarMessage: (state) => {
			state.snackbarMessageObj = null;
		},
		showConfirmation: (
			state,
			action: PayloadAction<Pick<ConfirmationPopup, 'title' | 'message' | 'onConfirm'>>
		) => {
			state.confirmationPopUpObj.open = true;
			state.confirmationPopUpObj.title = action.payload.title;
			state.confirmationPopUpObj.message = action.payload.message;
			state.confirmationPopUpObj.onConfirm = action.payload.onConfirm;
		},
		hideConfirmation: (state) => {
			state.confirmationPopUpObj.open = false;
			state.confirmationPopUpObj.message = '';
			state.confirmationPopUpObj.onConfirm = null;
		},
		setNotificationData: (state, action: PayloadAction<NotificationData>) => {
			state.notificationData = action.payload;
		},
		setUserData: (state, action: PayloadAction<User>) => {
			state.userData = action.payload;
		},
	},
});

export const {
	setMetaData,
	setLoading,
	toggleLeftDrawer,
	showSnackbarMessage,
	hideSnackbarMessage,
	setNotificationData,
	showConfirmation,
	hideConfirmation,
	setUserData,
} = AppStore.actions;

export default AppStore.reducer;