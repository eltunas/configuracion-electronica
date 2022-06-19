import React, { useState, useEffect } from "react";
import "./Lewis.css";

import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import { BsDashLg } from "react-icons/bs";

//moleculas de Lewis
//H4C2
//H2SO4
//H2O



const xPos = [0, 1, 2, 3, 4, 5, 6, 7]
const yPos = [0, 1, 2, 3, 4, 5, 6, 7]

const Lewis = () => {

    const consignas = [
        {
            nombre: "H4C2",
            items: [
                {
                    nombre: "H",
                    x: 0,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-ver",
                    x: 0,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "c",
                    x: 0,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "cov-ver",
                    x: 0,
                    y: 3,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "H",
                    x: 0,
                    y: 3,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 1,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontal />
                },
                {
                    nombre: "C",
                    x: 2,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                },
                {
                    nombre: "cov-hor",
                    x: 3,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontalDoble />
                },
                {
                    nombre: "H",
                    x: 4,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-ver",
                    x: 4,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "c",
                    x: 4,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "cov-ver",
                    x: 4,
                    y: 3,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "H",
                    x: 4,
                    y: 3,
                    type: "a",
                    component: <Hidrogeno />
                }
            ]
        }
    ];

    const [moleculaConsigna, setConsigna] = useState(0);

    useEffect(() => {
        setConsigna(0)
    }, [moleculaConsigna]);


    return (<>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
                Ubica los elementos el los lugares correspondientes de la molecula en base a sus enlaces
                <button onClick={() => setConsigna(0)}>H4C2</button>
            </div>
            <div>
                {
                    xPos.map(xP => {
                        return (
                            <div style={{ display: "flex", felxDirection: "column" }}>
                                {yPos.map(yP => {
                                    return <GridItem id={"grid-" + xP + "-" + yP} key={"grid-" + xP + "-" + yP} x={xP} y={yP} molecula={consignas[0]} />
                                })}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                opciones
            </div>
        </div>
    </>)
}

const GridItem = ({ x, y, molecula }) => {
    const getElement = () => {
        const element = molecula && molecula.items.find(item => item.x === x && item.y === y);
        if (element) {
            if (element.type === "a") {
                return <Atom name={element.nombre} comp={element.component} molecula={molecula} />
            } else {
                return <Bond comp={element.component} />
            }
        } else {
            //espacio en blanco
            return (<Empty />)
        }
    }
    return <>{getElement()}</>
}

const Atom = ({ name, comp, molecula }) => {
    return (
        <div style={{ width: "50px", height: "50px", fontSize: "10" }}>
            <div style={{ margin: "5px", width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "white" }}></div>
        </div>
    )
}

const Bond = ({ comp }) => {
    return (<div style={{ width: "50px", height: "50px", fontSize: "10" }}>
        {comp}
    </div>)
}

const Empty = () => {
    return (<div style={{ width: "50px", height: "50px" }} />)
}

const Oxigeno = () => {
    return (<></>)
}

const Hidrogeno = () => {
    return (<>
    </>)
}

const Carbono = () => {
    return (<>
    </>)
}

const Sulfuro = () => {
    return (<>
    </>)
}

const CovalenteVertical = () => {
    return (<div style={{ transform: "rotate(90deg)" }}><BsDashLg /></div>)
}

const CovalenteVerticalDoble = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <div style={{ transform: "rotate(90deg)" }}>
                <BsDashLg />
            </div>
            <div style={{ transform: "rotate(90deg)" }}>
                <BsDashLg />
            </div>
        </div>)
}

const CovalenteVerticalTriple = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <div style={{ transform: "rotate(90deg)" }}>
                <BsDashLg />
            </div>
            <div style={{ transform: "rotate(90deg)" }}>
                <BsDashLg />
            </div>
            <div style={{ transform: "rotate(90deg)" }}>
                <BsDashLg />
            </div>
        </div>
    )
}

const CovalenteHorizontal = () => {
    return (<BsDashLg />)
}

const CovalenteHorizontalDoble = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <BsDashLg />
            <BsDashLg />
        </div>
    )
}

const CovalenteHorizontalTriple = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <BsDashLg />
            <BsDashLg />
            <BsDashLg />
        </div>
    )
}

const DativoUp = () => {
    return (<BsArrowUp />)
}

const DativoDown = () => {
    return (<BsArrowDown />)
}

const DativoIzq = () => {
    return (<BsArrowLeft />)
}

const DativoDer = () => {
    return (<BsArrowRight />)
}

export default Lewis;