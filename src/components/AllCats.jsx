import React, { useState, useEffect, useContext } from 'react'
import PostService from './API/PostService';
import Card from './Card/Card';
import { useFetching } from './Hooks/useFetching';
import { LikeCatsContext } from './../App';

const style = {
  display: 'flex',
  maxWidth: '1316px',
  paddingTop: '20px',
  margin: 'auto',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  columnGap: '48px',
  rowGap: '48px',
  alignItems:'stretch',
}

function AllCats() {

  const [cats, setCats] = useState([])

  const {likeCats, setLikeCats} = useContext(LikeCatsContext)


  const [fetchCounties, isLoading] = useFetching(async () =>{
    const responce = await PostService.getCats();
    setCats(responce)
  })
 
  useEffect(() => {
    fetchCounties() 
    return () => {}
  }, [])

function click() {
  localStorage.loveCats = JSON.stringify(likeCats);
}
function click2() {
  console.log(localStorage)
}
function click3() {
  console.log(JSON.parse( localStorage.loveCats))
}

  
  return (
    <div>
     
        <button onClick={click}>
          кнопка
        </button>
        <button onClick={click2}>
          кнопка
        </button>
        <button onClick={click3}>
          кнопка
        </button>

 {

        !isLoading 
          ? 
          <div style={style}>
            {cats.map(cat => 
                <Card cat={cat} key={cat.id} />
            )}
          </div>
          : 
          <div className="lds-circle"><div></div></div>
      }
    </div>
  )
}

export default AllCats