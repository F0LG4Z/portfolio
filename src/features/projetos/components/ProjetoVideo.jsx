import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjetoVideo(){

    let nav = useNavigate();

    let params = useParams();
    
    let projeto = useSelector( state => state.portfolio.projetos.find( p => p.id == params.id ) )

    let {videoUrl, title} = projeto

    return(
        <>
        <section className="main-container">
            <button 
                onClick={()=>nav(-1)}
                className="btn"    
            >voltar</button>
            <section className="projeto-video">
                <video 
                    src={`/portfolio/assets/videos/${videoUrl}`}
                    className="video"
                    autoPlay
                    loop
                    ></video>
            </section>
        </section>
        </>
    )
}
