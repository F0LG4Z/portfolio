import {createSlice} from '@reduxjs/toolkit';


const projectSlice = createSlice({
    name: 'projetos',
    initialState: { projetos: [], filteredProjects: [] },
    reducers: {
        getProjects: (state, action) => {
            state.projetos = action.payload;
            state.filteredProjects = action.payload.projetos;
        },
        showProjects: (state, action) => {
            state.filteredProjects = state.projetos
        },
        showBlender: (state, action) => {
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'blender')
        },
        showSolidworks: (state, action) => {
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'solidworks')
        },
        showZbrush: (state, action) => {
            state.filteredProjects = state.projetos.filter( p => p.softwares === 'zbrush')
        },
    }
});

export const { getProjects, showProjects, showBlender, showSolidworks, showZbrush } = projectSlice.actions;
export default projectSlice.reducer;