import React, { useContext } from 'react';
import { LikeCatsContext } from './../App';
import Card from './Card/Card';

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

function LikeCats() {
  const {likeCats, setLikeCats} = useContext(LikeCatsContext)

  

  return (
    <div>
    {
      likeCats.length 
        ? 
        <div style={style}>
          {likeCats.map(cat => 
              <Card cat={cat} key={cat.id} />
          )}
        </div>
        : 
        <div>Пока нет любимых котиков</div>
    }
  </div>
  )
}

export default LikeCats