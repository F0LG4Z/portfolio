import React from "react"
import { Link } from "react-router-dom"

export default function Projeto({id, title, imageUrl, softwares, description, videoUrl}){

    return(
        <>
        <section className="project-card">
            <section>
                <img src={`/assets/images/${imageUrl}`} alt={title} />
            </section>
            <section className="card-text">
                <h1>{title}</h1>
                <p className="card-software">{softwares}</p>
                <p>{description}</p>
                <Link to={`/video/${id}`}>
                    <p className="card-link">video</p>
                </Link>
            </section>
        </section>
        </>
    )
}
