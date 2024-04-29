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
