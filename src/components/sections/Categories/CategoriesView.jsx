import styled from 'styled-components'


import React from 'react'

const CategoriesSection = styled.section`
    .cards ul {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-flow: row wrap;
        justify-content: space-around;
    }
    
    .cards .card {
        width: 100%;
        max-width: 10rem;
        height: 7.5rem;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card {
        border: 1.5px solid;
        border-color: #2E818A;
        border-radius: 8px;
        box-shadow: 2px 2px 2px #C5F8E6;
        transition: 0.3s;
        flex-direction: column;
        justify-content: space-between;

    }
    
    img{
        width: 70px;
        border-radius: 20px;
    }
    h5{
      margin-top: 0px;
      margin-bottom: 5px;
      color: #2E818A;
    }


`

const CategoriesView = () => (

    <CategoriesSection className="Categories">
        
        <section className="cards">
            <ul>
                <article className="card" >
                    <img src="https://image.freepik.com/vector-gratis/plomero-sonriente-dibujos-animados-uniforme-azul_81522-980.jpg" alt=""/>
                    <h5>Plomeria</h5>
                </article>

                <article className="card">
                    <img src="https://st2.depositphotos.com/4199035/6348/v/950/depositphotos_63488975-stock-illustration-carpenter.jpg" alt=""/>
                    <h5>Carpinteria</h5>
                </article>
                <article className="card">
                    <img src="https://image.freepik.com/vector-gratis/limpiador-productos-limpieza-servicio-limpieza_18591-52057.jpg" alt=""/>
                    <h5>Limpieza</h5>
                </article>
                <article className="card">
                    <img src="https://st.depositphotos.com/1006018/3320/v/950/depositphotos_33204675-stock-illustration-bricklayer-mason-at-work.jpg" alt=""/>
                    <h5>Albañileria</h5>                    
                </article>
                <article className="card">
                    <img src="http://www.gifs-animados.es/profesiones-imagenes/profesiones-imagenes/jardinero/gifs-animados-jardinero-8055359.gif" alt=""/>
                    <h5>Jardineria</h5>                    
                </article>
                <article className="card">
                    <img src="https://www.gifsanimados.org/data/media/1539/herrero-y-forjador-imagen-animada-0009.gif" alt=""/>
                    <h5>Herreria</h5>                    
                </article>
                <article className="card">
                    <img src="https://image.freepik.com/vector-gratis/dibujos-animados-pintor-profesional_33070-2167.jpg" alt=""/>
                    <h5>Pintor</h5>                    
                </article>
                <article className="card">
                    <img src="https://www.pinclipart.com/picdir/middle/155-1555576_picture-freeuse-eletricista-na-regi-o-de-osasco.png" alt=""/>
                    <h5>Electricista</h5>                    
                </article>
            </ul>
        </section>
    </CategoriesSection>

)

export default CategoriesView;