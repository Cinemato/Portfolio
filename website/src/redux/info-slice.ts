import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollectionData } from "../config/firebase";
import { ListItem, Skill, File } from "../data/interfaces";

export const infoSlice = createSlice({
    name: "info",
    initialState: {
        projects: [] as ListItem[],
        education: [] as ListItem[],
        skills: [] as Skill[],
        certs: [] as Skill[],
        files: [] as File[],
        storedDate: new Date(),
        hasLoaded: false,
    },
    reducers: {
        setHasLoaded: (state, action) => {
            state.hasLoaded = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getInfo.fulfilled, (state, action) => {
            state.projects = action.payload.projects;
            state.education = action.payload.education;
            state.skills = action.payload.skills;
            state.certs = action.payload.certs;
            state.files = action.payload.files;
            state.storedDate = new Date();
            state.hasLoaded = true;
        });
    }
});

export const getInfo = createAsyncThunk("info/getInfo", async () => {
    const projects = await getCollectionData<ListItem>("projects");
    const education = await getCollectionData<ListItem>("education");
    const skills = await getCollectionData<Skill>("skills");
    const certs = await getCollectionData<Skill>("certs");
    const files = await getCollectionData<File>("files");

    const info = {projects, education, skills, certs, files};
    return info;
});

export default infoSlice.reducer;
export const { setHasLoaded } = infoSlice.actions;