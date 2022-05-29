import React, { useContext } from 'react';
import Card from './Card';
import { FavoriteCatsContext } from './context/Context';


function Favorite() {
  
  const {favoriteCats} = useContext(FavoriteCatsContext)

  return (
    <div>
      {
        favoriteCats.length 
          ? 
            <div className={'card-list'}>
              {favoriteCats.map(cat => 
                  <Card 
                    cat={cat} 
                    key={cat.id}
                  />
              )}
            </div>
          : 
            <h2 
              style={{textAlign: 'center', marginTop: '20px', fontSize: '18px'}}
            >
              Пока нет любимых котиков
            </h2>
      }
  </div>
  )
}

export default Favorite