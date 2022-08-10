import React from 'react'
import "./FilterCheckbox.css"

export default function FilterCheckbox({text}) {
  return (
    <label>

    <input type = "checkbox" className='filter-check-box'></input>
    <span class="filter-check-box__pseudo-item">
        <span className='filter-check-box__circle'>
            
        </span>
    </span>
        <span className='filter-check-box__label-text'>{text}</span>
</label>

  )
}
