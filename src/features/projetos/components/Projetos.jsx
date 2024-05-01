import Projeto from "./Projeto";
import ProjetosFiltros from "./ProjetosFiltros";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../projectSlice";

export default function Projetos(){
    
    async function getProjects() {
        const response = await fetch('/data');
        const data = await response.json();
        return data;
      }
      
      getProjects().then(data => {
        data;
      });


    const {filteredProjects} = useSelector(state => state.portfolio)

    return(
        <>
        <section className="main-container">
            <h1 className="pg-title">projetos.</h1>
            <ProjetosFiltros />
            <section className="project-list">
                {filteredProjects.map(p => (
                    <Projeto
                        key={p.id}
                        id={p.id}
                        imageUrl={p.imageUrl}
                        title={p.title}
                        softwares={p.softwares}
                        description={p.description}
                        videoUrl={p.video}
                    />
                ))}
            </section>
        </section>
        </>
    )
}