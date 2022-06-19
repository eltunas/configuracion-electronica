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
                    x: 2,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "H",
                    x: 4,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-ver",
                    x: 2,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "cov-ver",
                    x: 4,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "c",
                    x: 2,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "c",
                    x: 4,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "cov-hor",
                    x: 3,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontalDoble />
                }, {
                    nombre: "cov-hor",
                    x: 1,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontal />
                },
                {
                    nombre: "H",
                    x: 0,
                    y: 2,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 5,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontal />
                },
                {
                    nombre: "H",
                    x: 6,
                    y: 2,
                    type: "a",
                    component: <Hidrogeno />
                },
            ],
            options: [
                <Hidrogeno />,
                <Hidrogeno />,
                <Carbono />,
                <Hidrogeno />,
                <Hidrogeno />,
                <Carbono />,
            ]
        }
    ];

    const [moleculaConsigna, setConsigna] = useState(0);

    const [selectedOption, setSelectedOption] = useState({});

    const [usedOptions, setUsedOptions] = useState([])

    useEffect(() => {
        setConsigna(0)
    }, [moleculaConsigna]);

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

    const Atom = ({ name, comp, molecula, selectOption }) => {

        const [showComp, setShowComp] = useState(false)

        //cuando se le hace click, checkear si el seleccionado de opciones es el mismo y cambiar al atomo que corresponde
        const handleOnClick = () => {
            if(selectedOption && selectedOption.name === name) {
                const newUsed = [...usedOptions];
                newUsed.push(selectedOption.id);
                setUsedOptions(newUsed);
                setShowComp(true);
            }
        }

        return (
            <div style={{ width: "50px", height: "50px", fontSize: "10" }} onClick={() => handleOnClick()}>
                {showComp ? 
                    <>{comp}</> : 
                    <div style={{ margin: "5px", width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "white" }}></div>}
            </div>
        )
    }


    return (<>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
                Ubica los elementos el los lugares correspondientes de la molecula en base a sus enlaces
                <button onClick={() => setConsigna(0)}>H4C2</button>
            </div>
            <div>
                {
                    yPos.map(yP => {
                        return (
                            <div style={{ display: "flex", felxDirection: "column" }}>
                                {xPos.map(xP => {
                                    return <GridItem id={"grid-" + xP + "-" + yP} key={"grid-" + xP + "-" + yP} x={xP} y={yP} molecula={consignas[selectedOption]} />
                                })}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                opciones
                <div style={{ height: "50px", display: "flex", flexDirection: "row", border: "solid 1px white", borderRadius: "15px", backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                    {console.log(consignas[0].options)}
                    {consignas[0] && consignas[0].options.map((op, index) => {
                        return <div onClick={() => {setSelectedOption({id: index, ...op})}}>{op}</div>;
                    })}
                </div>
            </div>
        </div>
    </>)
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
    return (
        <div style={{ margin: "5px", backgroundColor: "#5540ff", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            O
        </div>
    )
}

const Hidrogeno = () => {
    return (
        <div style={{ margin: "5px", backgroundColor: "#a6e6a7", color: "black", width: "40px", height: "40px", borderRadius: "20px" }}>
            H
        </div>
    )
}

const Carbono = () => {
    return (
        <div style={{ margin: "5px", backgroundColor: "#c09d55", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            C
        </div>
    )
}

const Sulfuro = () => {
    return (
        <div style={{ margin: "5px", backgroundColor: "#8d00ff", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            S
        </div>
    )
}

const CovalenteVertical = () => {
    return (<div style={{ transform: "rotate(90deg)",display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><BsDashLg /></div>)
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
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <BsDashLg />
        </div>
    )
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