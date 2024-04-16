import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/pgdac degree_page-0001.jpg'},
        {image: '/images/certificates/12th marksheet_page-0001.jpg'},
        {image: '/images/certificates/10th marksheet_page-0001.jpg'},
        {image: '/images/certificates/FE-cert-9681401-Pranav_Sahu-05-03-24_12_57_page-0001.jpg'},
        {image: '/images/certificates/GuviCertification - 171qy7Wk50T1v08m10.png'},
        {image: '/images/certificates/GuviCertification - l571aN2f79011810kX.png'},
        {image: '/images/certificates/GuviCertification - 1411Y7Ie5DOoE08701.png'},
        {image: '/images/certificates/GuviCertification - 05a12701911B7ykmT8.png'},
        {image: '/images/certificates/GuviCertification - 171cQF1U8nf7j0I105.png'},
        {image: '/images/certificates/GuviCertification - 8Ne7811A70571Gr10d.png'},
        {image: '/images/certificates/GuviCertification - 50s98h7y1711481B0r.png'},
        {image: '/images/certificates/GuviCertification - 0S7F15mo18t7Dz0011.png'},
        {image: '/images/certificates/Graphic Design.jpg'},
        {image: '/images/certificates/GuviCertification - 1E65087G7AC0xB9111.png'},
        // {image: '/images/certificates/provisional_page-0001.jpg'},
        // {image: '/images/certificates/diploma-npm.webp'},
        // {image: '/images/certificates/diploma-slack.webp'},
        // {image: '/images/certificates/diploma-terminal.webp'},
        // {image: '/images/certificates/diploma-webpack.webp'},
        // {image: '/images/certificates/diploma-api-practico.webp'},
        // {image: '/images/certificates/diploma-api.webp'},
        // {image: '/images/certificates/diploma-backend.webp'},
        // {image: '/images/certificates/diploma-html-practico.webp'},
        // {image: '/images/certificates/diploma-html-css.webp'},
        // {image: '/images/certificates/diploma-ingenieria.webp'},
        // {image: '/images/certificates/diploma-paginas-web.webp'},
        // {image: '/images/certificates/diploma-pensamiento-logico-estructuras.webp'},
        // {image: '/images/certificates/diploma-pensamiento-logico-lenguajes.webp'},
        // {image: '/images/certificates/diploma-pensamiento-logico.webp'},
        
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage