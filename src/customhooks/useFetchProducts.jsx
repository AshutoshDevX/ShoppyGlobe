import { setProducts } from '../redux/productSlice'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
const useFetchProducts = () => {
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To store error if any
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchD = await fetch('https://dummyjson.com/products');
        const realData = await fetchD.json();
        const data = realData.products
        console.log(data)
        dispatch(setProducts(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [])

  return { loading, error };
};

export default useFetchProducts;
