import {createSlice} from '@reduxjs/toolkit';


const projectSlice = createSlice({
    name: 'projetos',
    initialState: { projetos: [], filteredProjects: [] },
    reducers: {
        getProjects: (state, action) => {
            state.projetos = action.payload;
            state.filteredProjects = action.payload;
        },
        showProjects: (state, action) => {
            state.filteredProjects = state.projetos
        },
        showBlender: (state, action) => {
            console.log("Value of e.projetos before filter:", state.projetos); 
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'blender')
        },
        showSolidworks: (state, action) => {
            console.log("Value of e.projetos before filter:", state.projetos); 
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'solidworks')
        },
        showZbrush: (state, action) => {
            console.log("Value of e.projetos before filter:", state.projetos); 
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'zbrush')
        },
    }
});

export const { getProjects, showProjects, showBlender, showSolidworks, showZbrush } = projectSlice.actions;
export default projectSlice.reducer;