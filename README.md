
# Next JS Starter

This Next.js project starter kit comes fully equipped for immediate use, featuring Tailwind CSS, Material UI, Redux Toolkit, React Redux, Sweet Alert, and Web3Modal integration. It streamlines development with a comprehensive set of tools and libraries pre-configured, enabling rapid prototyping and efficient project kick-off. Start building your web applications effortlessly, leveraging a robust foundation designed for seamless integration and enhanced functionality.


## Running

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



## Library

 - [Axios](https://axios-http.com/docs/intro)
 - [Redux Toolkit](https://redux-toolkit.js.org/)
 - [Material UI](https://mui.com/material-ui/getting-started/)
 - [Tailwind CSS](https://tailwindcss.com/)
 - [Sweet Alert](https://sweetalert2.github.io/)
 - [Web3Modal](https://docs.walletconnect.com/web3modal/about)

## Tech Stack

**Client:** Axios,
Redux Toolkit,
Material UI,
Tailwind CSS,
Sweet Alert,
Web3Modal,


## Environment Variables

To run the API, you will need to add or change the following environment variables to your .env file

`NEXT_PUBLIC_API_URL` = change this to your API base url


## Usage/Api.js

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
let initialState = {
  exampApi: {
    data: [],
    isLoading: true,
  },
};

export const exampApi = createAsyncThunk(
  "exampApi",
  async (params = '', { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/photos', { params });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const StoreApi = createSlice({
  name: "starter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(exampApi.pending, (state) => {
        state.exampApi.isLoading = true;
      })
      .addCase(exampApi.fulfilled, (state, { payload }) => {
        state.exampApi.isLoading = false;
        state.exampApi.data = payload;
      })
      .addCase(exampApi.rejected, (state, { payload }) => {
        state.exampApi.isLoading = false;
        state.exampApi.data = payload;
      });

  },
});

export default StoreApi.reducer;

```


## Usage/Index.js

```javascript
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { exampApi } from '../redux/features/api';

function Index() {
  const {data, isLoading} = useSelector((state) => state.StoreApi.exampApi);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(exampApi())
  }, []);

  return (
    <div className='flex items-center justify-center w-screen'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='flex flex-wrap items-center w-[80%] gap-4 justify-between'>
          {data.map((item, index) => (
            <div key={index} className='w-1/4 p-3 border rounded-lg flex flex-col items-center text-center'>
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Index


```

