import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./parts/Header";
import Contents from "./parts/Contents";
import './App.css'
function App() {
  const BASEURL = "https://api.thecatapi.com/v1/breeds";
  const [dataAPI, setDataAPI] = useState([]);
  const [paramsInit, setParamsInit] = useState({
    attach_breed: "",
    page: 1,
    limit: 10,
  });

  const onHandleFilter = (val) => {
    axios.get(`${BASEURL}/search`, {
      params: {
        q: val
      }
    }).then((res) => {
      setDataAPI(res.data)
      console.log(res.data)
    }).catch((message, error) => {
      console.log(message);
      console.log(error);
    })
  };
  const onInitData = () => {
    axios
      .get(BASEURL, {
        params: { ...paramsInit },
      })
      .then((res) => {
        if(res.data.length !== 0) {
         setDataAPI(arr => [...arr, ...res.data])
        }
      })
      .catch((message, error) => {
        console.log(message);
        console.log(error);
      });
  };

  useEffect(() => {
    onInitData()
  }, []);

  return (
    <div>
      <Header updateFilter={onHandleFilter} />
      <Contents data={dataAPI} />
    </div>
  );
}

export default App;
