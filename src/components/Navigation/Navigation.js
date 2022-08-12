import React from 'react'
import icon from '../../images/profile-icon.svg'
import { useHistory, Link } from 'react-router-dom'; 
import "./Navigation.css"


export default function Navigation({mode}) {
    const history = useHistory(); 
    const current = history.location.pathname;
    const generateClassName = (path) => {
        return `navigation__link navigation__link_mode_${mode} ${(path===current ? `navigation__link_mode_${mode}_current` : "")}`
    }

    const className = `navigation navigation__mode_${mode}`;//header or popup
  return (
    <div className={className}>
    <ul className={'navigation__links navigation__links_mode_'+mode}>
        <li className='navigation__link-container'>
            <Link to="/movies" className={generateClassName("/movies")}>Фильмы</Link>
        </li>
        <li className='navigation__link-container'>
            <Link to="/saved-movies" className={generateClassName("/saved-movies")}>Сохраненные фильмы</Link>
        </li>
    </ul>
    <button className='navigation__profile-button' onClick={()=>{history.push("/profile")}}>
    Аккаунт
<img className='navigation__profile-button-icon' alt='Иконка человечка' src={icon}/>
    </button>
    </div>
  )
}
