import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showBlender } from "../projectSlice";
import { showZbrush } from "../projectSlice";
import { showSolidworks } from "../projectSlice";
import { showProjects } from "../projectSlice";

export default function ProjetosFiltros(){

    let dispatch = useDispatch();

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 650);
      };

    useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);


    return(
        <div className="filters-narrow-container">
        {isMobile ? (
        <><label htmlFor="softwares"></label><select name="softwares" id="softwares" className="filters-narrow">
                    <option value="todos"
                        onClick={() => dispatch(showProjects())}
                        className="btn"
                    >todos</option>
                    <option value="blender"
                        onClick={() => dispatch(showBlender())}
                        className="btn"
                    >blender</option>
                    <option value="solidworks"
                        onClick={() => dispatch(showSolidworks())}
                        className="btn"
                    >solidworks</option>
                    <option value="zbrush"
                        onClick={() => dispatch(showZbrush())}
                        className="btn"
                    >zbrush</option>
                </select></>
        ) : (
        <section className="filters-wide">
            <button 
                onClick={()=>dispatch(showProjects())}
                className="btn"
            >todos</button>
            <button 
                onClick={()=>dispatch(showBlender())}
                className="btn"
            >blender</button>
            <button 
                onClick={()=>dispatch(showZbrush())}
                className="btn"
            >zbrush</button>
            <button 
                onClick={()=>dispatch(showSolidworks())}
                className="btn"    
            >solidworks</button>
        </section>
     ) }
     </div>
    )
}