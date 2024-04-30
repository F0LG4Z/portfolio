import React from "react";

export default function Sobre() {
    return (
        <>
        <section className="main-container">
            <h1 className="pg-title">sobre.</h1>
            <p>Olá, o meu nome é Gonçalo Caeiro. Cresci no Alentejo e vim estudar para Lisboa para poder melhorar as minhas capacidades como artista. Licenciei-me em Design de Equipamento pela Faculdade de Belas Artes da Universidade de Lisboa em 2023, e descobri um grande interesse em Modelagem 3D. Atualmente, estou no Mestrado de Desenho da mesma faculdade, onde tenciono explorar ainda mais esta área. </p>
            <section className="software-list">
                <h3>softwares</h3>
                <section className="software">
                    <img src="assets/icons/blender.svg" className="icon" /><p>Blender</p>
                </section>
                <section className="software">
                    <img src="assets/icons/solidworks.svg" className="icon" /><p>Solidworks</p>
                </section>
                <section className="software">
                    <img src="assets/icons/zbrush.svg" className="icon" /><p>Zbrush</p>
                </section>
            </section>
        </section>
        </>
    )
}
