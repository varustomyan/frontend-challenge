import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

function Navbar() {

  const router = useNavigate()
  let location = useLocation();

  let loveCats = ['love-cats']
  let allCats = ['all-cats']

  switch (location.pathname) {
    case '/all':
      allCats = ['all-cats', 'active']
      loveCats = ['love-cats'];
      break;
    case '/like':
      allCats = ['all-cats']
      loveCats = ['love-cats', 'active'];
      break;
  
    default:
      break;
  }



  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper'>
        <button onClick={() => router('/all')} className={allCats.join(' ')}>Все котики</button>
        <button onClick={() => router('/like')} className={loveCats.join(' ')}>Любимые котики</button>
      </div>
    </div>
  )
}

export default Navbar



// function Navbar() {

//   const router = useNavigate()
//   let location = useLocation();

//   let loveCats = ['love-cats']
//   let allCats = ['all-cats']

//   switch (location.pathname) {
//     case '/all':
//       allCats = ['all-cats', 'active']
//       loveCats = ['love-cats'];
//       break;
//     case '/like':
//       allCats = ['all-cats']
//       loveCats = ['love-cats', 'active'];
//       break;
  
//     default:
//       break;
//   }



//   return (
//     <div className='navbar__container'>
//       <div className='navbar__wrapper'>
//         <button onClick={() => router('/all')} className={allCats.join(' ')}>Все котики</button>
//         <button onClick={() => router('/like')} className={loveCats.join(' ')}>Любимые котики</button>
//       </div>
//     </div>
//   )
// }