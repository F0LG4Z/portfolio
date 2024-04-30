import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "../features/projetos/projectSlice";

export default configureStore({
    reducer:{
        portfolio: projectSlice,
    }
})