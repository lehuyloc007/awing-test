import { createSlice } from "@reduxjs/toolkit";
export const stepSlice = createSlice({
    name: "stepManagement",
    initialState: {
        firstStep: {},
        secondStep: [
            {
                view: 0,
                active: true,
                content: {},
            },
        ],
    },
    reducers: {
        handelSetValueFirstStep: (state, action) => {
            state.firstStep = action.payload;
        },
        handelSetValueViewSecondStep: (state, action) => {
            state.secondStep = state.secondStep?.map((item) => {
                if (item.active === true) {
                    item.content = action.payload;
                }
                return item;
            });
        },
        handelSetActiveViewSecondStep: (state, action) => {
            state.secondStep = state.secondStep?.map((item) => {
                item.active = false;
                if (item.view === action.payload) {
                    item.active = true;
                }
                return item;
            });
        },
        handelAddViewSecondStep: (state, action) => {
            const newData = state.secondStep?.map((item) => {
                item.active = false;
                return item;
            });
            state.secondStep = state.secondStep = [
                ...newData,
                {
                    view: state.secondStep.length,
                    active: true,
                    content: {},
                },
            ];
        },
    },
});
export const {
    handelSetValueFirstStep,
    handelSetValueViewSecondStep,
    handelSetActiveViewSecondStep,
    handelAddViewSecondStep,
} = stepSlice.actions;
export default stepSlice.reducer;
