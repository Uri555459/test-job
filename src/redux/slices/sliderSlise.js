import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
      image: 'images/pictures/1.jpg',
      title: 'Картина 1',
    },
    {
      image: 'images/pictures/2.jpg',
      title: 'Картина 2',
    },
    {
      image: 'images/pictures/3.jpg',
      title: 'Картина 3',
    },
    {
      image: 'images/pictures/4.jpg',
      title: 'Картина 4',
    },
    {
      image: 'images/pictures/5.jpg',
      title: 'Картина 5',
    },
    {
      image: 'images/pictures/6.jpg',
      title: 'Картина 6',
    },
    {
      image: 'images/pictures/7.jpg',
      title: 'Картина 7',
    },
    {
      image: 'images/pictures/8.jpg',
      title: 'Картина 8',
    },
    {
      image: 'images/pictures/9.jpg',
      title: 'Картина 9',
    },
    {
      image: 'images/pictures/10.jpg',
      title: 'Картина 10',
    },
  ],
}

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    slider: (state, action) => {
      state.value += action.payload
    },
  },
})

export default sliderSlice.reducer
