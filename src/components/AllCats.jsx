import React, { useState, useEffect } from 'react'
import RestApi from './API/RestApi';
import Card from './Card';
import { useFetching } from './Hooks/useFetching';

function AllCats() {

  const [cats, setCats] = useState([])

  const [fetchCounties, isLoading] = useFetching(async () =>{
    const responce = await RestApi.getCats();
    setCats(responce)
  })
 
  useEffect(() => {
    fetchCounties() 
  }, [])
  
  return (
    <div>
      {isLoading 
          ? 
          <div className={'card-list'}>
            {cats.map(cat => 
                <Card cat={cat} key={cat.id} />
            )}
             
             {/* <h2 
              style={{textAlign: 'center', marginTop: '20px', fontSize: '18px'}}
            >
              ...Загружаем еще котиков...
            </h2> */}
          </div>
          : 
          <div class="lds-dual-ring"></div>
      }
    </div>
  )
}

export default AllCats