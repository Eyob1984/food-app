import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './fetchData.css'
import { setData } from './dataSlice';

function FetchData() {

const dispatch = useDispatch()

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState(null)
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setData1(response.data.categories);
        setUpdateId(response.data.categories);
        dispatch(setData(response.data.categories))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://covers.openlibrary.org/b/id/${updateId}-M.jpg`
        );
        setData2(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (updateId) {
      getData();
    }
  }, [updateId]);

  

  return <div className='card-container'>Click the button to fetch data</div>;
}

export default FetchData;

