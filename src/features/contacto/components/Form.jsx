import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function Form(){

    return (
        <>
        <form>
            <input type="text" id="nome" name="nome" placeholder="NOME" />
            <input type="text" id="email" name="email" placeholder="EMAIL" />
            <textarea id="mensagem" name="mensagem" placeholder="MENSAGEM" />
            <input type="submit" id="enviar" value="em progresso" disabled/>
        </form>
        </>
    )
}