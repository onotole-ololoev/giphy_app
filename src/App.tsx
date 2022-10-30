import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {useAppDispatch, useAppSelector} from "./store/store";
import {getGifTC} from "./store/giphy-reducer";



function App() {



    const dispatch = useAppDispatch()
    const count = useAppSelector(state => state.giphy.pagination.count)
    const gifArr = useAppSelector(state => state.giphy.data)
    const offset = useAppSelector(state => state.giphy.pagination.offset)
    const totalCount = useAppSelector(state => state.giphy.pagination.total_count)

    const getModel = {
        params: {
            api_key: 'NoW0NSD2bX3VxiiqA297sHPNso5Nc97q',
            limit: count,
            offset: offset,
            rating: 'g',
            random_id: 'e826c9fc5c929e0d6c6d423841a282aa',
            bundle: 'messaging_non_clips'
        }
    }


    useEffect(() => {
        dispatch(getGifTC(getModel))
    },[])

  return (
    <div className="App">
        <Header />
        <div>{count}</div>
        {gifArr.map(el => {
            return (
                <div key={el.id}>
                    <img src={el.url} alt='some gif'/>
                    <p>{el.title}</p>
                </div>
            )
        })}
    </div>
  );
}

export default App;
