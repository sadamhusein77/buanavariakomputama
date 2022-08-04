import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./parts/Header";
import Contents from "./parts/Contents";
import './App.css'
function App() {
  const BASEURL = "https://api.thecatapi.com/v1/breeds";
  const [isLoading, setLoading] = useState(false)
  const [dataAPI, setDataAPI] = useState([]);
  const [paramsInit, setParamsInit] = useState({
    attach_breed: "",
    page: 1,
    limit: 10,
  });
  const [dataFilter, setFilter] = useState('')
  const onSetFilter = (val) => {
    setFilter(val)
  }
  const onHandleFilter = () => {
    if (dataFilter !== '') {
      axios.get(`${BASEURL}/search`, {
        params: {
          q: dataFilter
        }
      }).then((res) => {
        setDataAPI(res.data)
      }).catch((message, error) => {
        console.log(message);
        console.log(error);
      })
    } else {
      onInitData()
    }
  };
  const onInitData = (val) => {
    const param = val ? {...paramsInit, page: val } : {...paramsInit}
    setLoading(true)
    axios
      .get(BASEURL, {
        params: param,
      })
      .then((res) => {
        if(res.data.length !== 0) {
         setDataAPI(arr => [...arr, ...res.data])
         if(val > 0) {
           setParamsInit({...paramsInit, page: val})
         }
        }
      })
      .catch((message, error) => {
        console.log(message);
        console.log(error);
      }).then(() => {
        setLoading(false)
      })
  };

  const onGetData = () => {
    if(!isLoading && dataFilter === '') {
      const getParamPage = paramsInit.page + 1
      onInitData(getParamPage)
    }
  }

  useEffect(() => {
    if(dataFilter === '') {
      setDataAPI([])
      onInitData()
    }
  }, [dataFilter]);

  return (
    <div>
      <Header updateFilter={onSetFilter} dataFilter={dataFilter} onHandleFilter={onHandleFilter} />
      <Contents data={dataAPI} onGetData={onGetData} isLoading={isLoading} isFilter={dataFilter}/>
    </div>
  );
}

export default App;
