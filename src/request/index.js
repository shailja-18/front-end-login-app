import { useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const useRequest = (method, url) => {
  let response = undefined;
  let isLoading = false;
  let error = undefined;
  const execute = useCallback((data) => {
    isLoading = true;
    axios({
      method,
      url: `https://reqres.in/api/${url}`,
      data
    }).then((response) => {
      response = response.data;
      toast.success('You are logged in')
    }).catch((e) => {
      if (e.response) {
        error = e.response.data.error;
      } else {
        error = "An error occurred"
      }
      toast.error(error)
    }).finally(() => {
      isLoading = false;
    })
  }, []);
  return [{ response, error, isLoading }, execute];
}


export default useRequest;
