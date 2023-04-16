import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://gist.githubusercontent.com/andasan/4f4976c373654f73b0a465a2441c2c91/raw/1b3c99936426b59ba4a92c7afe12fc109e4dbdcd/moods.json';

export const fetchMoods = createAsyncThunk('mood/fetchMoods', async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    moods: [],
    currentMood: 'happy',
    size: 320,
    color: '#ffffff',
  },
  reducers: {
    updateMood: (state, action) => {
      state.currentMood = action.payload.mood;
      state.size = action.payload.size;
      state.color = action.payload.color;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoods.fulfilled, (state, action) => {
      state.moods = action.payload;
    });
  },
});

export const { updateMood } = moodSlice.actions
