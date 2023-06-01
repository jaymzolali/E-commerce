import React from 'react'
import './modern.css'
import { modData } from './modernData'

const Modern = () => {
  return (
    <section className="modern">
        {modData.map(item => (
            <div className="modern-item" key={item.id}>
                <p>{item.post}</p>
            </div>
        ))}
    </section>
  )
}

export default Modern