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



const xPos = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const yPos = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Lewis = () => {

    const consignas = [
        {
            nombre: "H4C2",
            items: [
                {
                    nombre: "H",
                    x: 3,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "H",
                    x: 5,
                    y: 0,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-ver",
                    x: 3,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "cov-ver",
                    x: 5,
                    y: 1,
                    type: "e",
                    component: <CovalenteVertical />
                }, {
                    nombre: "c",
                    x: 3,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "c",
                    x: 5,
                    y: 2,
                    type: "a",
                    component: <Carbono />
                }, {
                    nombre: "cov-hor-doble",
                    x: 4,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontalDoble />
                }, {
                    nombre: "cov-hor",
                    x: 2,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontal />
                },
                {
                    nombre: "H",
                    x: 1,
                    y: 2,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 6,
                    y: 2,
                    type: "e",
                    component: <CovalenteHorizontal />
                },
                {
                    nombre: "H",
                    x: 7,
                    y: 2,
                    type: "a",
                    component: <Hidrogeno />
                },
            ],
            options: [
                {
                    name: "H",
                    comp: <Hidrogeno />
                },
                {
                    name: "S",
                    comp: <Azufre />
                }, {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },{
                    name: "cov-hor-doble",
                    comp: <CovalenteHorizontalDoble />
                },
                {
                    name: "C",
                    comp: <Carbono />
                },  {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },
                {
                    name: "O",
                    comp: <Oxigeno />
                },{
                    name: "cov-ver",
                    comp: <CovalenteVertical />
                },
                {
                    name: "C",
                    comp: <Carbono />
                },  {
                    name: "cov-ver",
                    comp: <CovalenteVertical />
                }
            ]
        },
        {
            nombre: "H20",
            items: [
                {
                    nombre: "H",
                    x: 2,
                    y: 3,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 3,
                    y: 3,
                    type: "e",
                    component: <CovalenteHorizontal />
                },{
                    nombre: "O",
                    x: 4,
                    y: 3,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "cov-hor",
                    x: 5,
                    y: 3,
                    type: "e",
                    component: <CovalenteHorizontal />
                }, {
                    nombre: "H",
                    x: 6,
                    y: 3,
                    type: "a",
                    component: <Hidrogeno />
                }],
            options: [
                {
                    name: "H",
                    comp: <Hidrogeno />
                },  {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "S",
                    comp: <Azufre />
                },
                {
                    name: "C",
                    comp: <Carbono />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },  {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },
                {
                    name: "O",
                    comp: <Oxigeno />
                },
                {
                    name: "S",
                    comp: <Azufre />
                },
            ]
        },  {
            nombre: "H2SO4",
            items: [
                {
                    nombre: "H",
                    x: 0,
                    y: 4,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 1,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontal />
                },{
                    nombre: "O",
                    x: 2,
                    y: 4,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "cov-hor",
                    x: 3,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontal />
                }, {
                    nombre: "S",
                    x: 4,
                    y: 4,
                    type: "a",
                    component: <Azufre />
                }, {
                    nombre: "cov-hor",
                    x: 5,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontal />
                },{
                    nombre: "O",
                    x: 6,
                    y: 4,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "cov-hor",
                    x: 7,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontal />
                },{
                    nombre: "H",
                    x: 8,
                    y: 4,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "O",
                    x: 4,
                    y: 2,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "O",
                    x: 4,
                    y: 6,
                    type: "a",
                    component: <Oxigeno />
                },  {
                    nombre: "dat-up",
                    x: 4,
                    y: 3,
                    type: "e",
                    component: <DativoUp />
                },  {
                    nombre: "dat-down",
                    x: 4,
                    y: 5,
                    type: "e",
                    component: <DativoDown />
                },
            ],
            options: [
                {
                    name: "H",
                    comp: <Hidrogeno />
                }, {
                    name: "C",
                    comp: <Carbono />
                }, {
                    name: "cov-hor",
                    component: <CovalenteHorizontal />
                },
                {
                    name: "S",
                    comp: <Azufre />
                },
                {
                    name: "C",
                    comp: <Carbono />
                }, {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },{
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },{
                    name: "O",
                    comp: <Oxigeno />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                },
                {
                    name: "O",
                    comp: <Oxigeno />
                },{
                    name: "O",
                    comp: <Oxigeno />
                },{
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "S",
                    comp: <Azufre />
                },{
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },{
                    name: "O",
                    comp: <Oxigeno />
                },{
                    name: "dat-up",
                    comp: <DativoUp />
                }, {
                    name: "dat-down",
                    comp: <DativoDown />
                }
            ]
        },
        {
            nombre: "HClO4",
            items: [
                {
                    nombre: "H",
                    x: 1,
                    y: 5,
                    type: "a",
                    component: <Hidrogeno />
                }, {
                    nombre: "cov-hor",
                    x: 2,
                    y: 5,
                    type: "e",
                    component: <CovalenteHorizontal />
                },{
                    nombre: "O",
                    x: 3,
                    y: 5,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "cov-hor",
                    x: 4,
                    y: 5,
                    type: "e",
                    component: <CovalenteHorizontal />
                }, {
                    nombre: "Cl",
                    x: 5,
                    y: 5,
                    type: "a",
                    component: <Cloro />
                },{
                    nombre: "O",
                    x: 5,
                    y: 3,
                    type: "a",
                    component: <Oxigeno />
                },{
                    nombre: "O",
                    x: 5,
                    y: 7,
                    type: "a",
                    component: <Oxigeno />
                },{
                    nombre: "O",
                    x: 7,
                    y: 5,
                    type: "a",
                    component: <Oxigeno />
                }, {
                    nombre: "dat-up",
                    x: 5,
                    y: 4,
                    type: "e",
                    component: <DativoUp />
                }, {
                    nombre: "dat-right",
                    x: 6,
                    y: 5,
                    type: "e",
                    component: <DativoDer />
                }, {
                    nombre: "dat-botom",
                    x: 5,
                    y: 6,
                    type: "e",
                    component: <DativoDown />
                }
            ],
            options: [
                {
                    name: "H",
                    comp: <Hidrogeno />
                }, {
                    name: "dat-right",
                    comp: <DativoDer />
                }, {
                    name: "O",
                    comp: <Oxigeno />
                },
                {
                    name: "C",
                    comp: <Carbono />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                }, {
                    name: "dat-up",
                    comp: <DativoUp />
                }, {
                    name: "dat-botom",
                    comp: <DativoDown />
                }, {
                    name: "O",
                    comp: <Oxigeno />
                },
                {
                    name: "Cl",
                    comp: <Cloro />
                }, {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                }, {
                    name: "O",
                    comp: <Oxigeno />
                },
                {
                    name: "S",
                    comp: <Azufre />
                }, {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                }, {
                    name: "O",
                    comp: <Oxigeno />
                }
            ]
        },
        {
            nombre: "CO2",
            items: [
                {
                    nombre: "O",
                    x: 2,
                    y: 4,
                    type: "a",
                    component: <Oxigeno />
                },{
                    nombre: "cov-hor-doble",
                    x: 3,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontalDoble />
                },{
                    nombre: "C",
                    x: 4,
                    y: 4,
                    type: "a",
                    component: <Carbono />
                },{
                    nombre: "cov-hor-doble",
                    x: 5,
                    y: 4,
                    type: "e",
                    component: <CovalenteHorizontalDoble />
                },{
                    nombre: "O",
                    x: 6,
                    y: 4,
                    type: "a",
                    component: <Oxigeno />
                }
            ],
            options: [
                {
                    name: "O",
                    comp: <Oxigeno />
                }, {
                    name: "cov-hor-doble",
                    comp: <CovalenteHorizontalDoble />
                }, {
                    name: "H",
                    comp: <Hidrogeno />
                }, {
                    nombre: "dat-up",
                    comp: <DativoUp />
                },{
                    name: "S",
                    comp: <Azufre />
                }, {
                    name: "cov-hor-doble",
                    comp: <CovalenteHorizontalDoble />
                }, {
                    name: "C",
                    comp: <Carbono />
                },
                {
                    name: "H",
                    comp: <Hidrogeno />
                }, {
                    name: "cov-hor",
                    comp: <CovalenteHorizontal />
                },
                {
                    name: "O",
                    comp: <Oxigeno />
                }
            ]
        },
    ];

    const [selectedConsigna, setConsigna] = useState(0);

    const [selectedOption, setSelectedOption] = useState({});

    const [usedOptions, setUsedOptions] = useState([])

    const [correctAtoms, setCorrectAtoms] = useState([])

    useEffect(() => {
        console.log(selectedConsigna);
    }, [selectedConsigna]);

    const changeConsigna = (n) => {
        setConsigna(n);
        setSelectedOption({});
        setUsedOptions([]);
        setCorrectAtoms([])
    }

    const GridItem = ({ x, y, molecula }) => {
        const getElement = () => {
            const element = molecula && molecula.items.find(item => item.x === x && item.y === y);
            if (element) {
                if (element.type === "a") {
                    return <Atom xAtom={x} yAtom={y} name={element.nombre} comp={element.component} molecula={molecula} />
                } else {
                    return <Bond yBond={y} xBond={x} name={element.nombre} comp={element.component} />
                }
            } else {
                //espacio en blanco
                return (<><Empty /></>)
            }
        }
        return <>{getElement()}</>
    }

    const Atom = ({ xAtom, yAtom, name, comp, molecula }) => {

        //cuando se le hace click, checkear si el seleccionado de opciones es el mismo y cambiar al atomo que corresponde
        const handleOnClick = () => {
            console.log(selectedOption)
            console.log(selectedOption.name)
            if(selectedOption && selectedOption.name.toUpperCase() === name.toUpperCase()) {
                const newUsed = [...usedOptions];
                newUsed.push(selectedOption.id);
                setUsedOptions(newUsed);

                const newCorrect = [...correctAtoms];
                newCorrect.push(""+xAtom+yAtom)
                setCorrectAtoms(newCorrect);

                setSelectedOption({})
            }
        }

        return (
            <div style={{ width: "50px", height: "50px", fontSize: "10" }} onClick={() => handleOnClick()}>
                {correctAtoms.includes(""+xAtom+yAtom) ? <>{comp}</> : <div style={{ margin: "5px", width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "white" }}></div>}
            </div>
        )
    }

    const Bond = ({ comp, yBond, xBond, name }) => {
         //cuando se le hace click, checkear si el seleccionado de opciones es el mismo y cambiar al atomo que corresponde
         const handleOnClick = () => {
            console.log(selectedOption)
            console.log(selectedOption.name)
            if(selectedOption && selectedOption.name.toUpperCase() === name.toUpperCase()) {
                const newUsed = [...usedOptions];
                newUsed.push(selectedOption.id);
                setUsedOptions(newUsed);

                const newCorrect = [...correctAtoms];
                newCorrect.push(""+xBond+yBond)
                setCorrectAtoms(newCorrect);

                setSelectedOption({})
            }
        }
        
        return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "50px", height: "50px", fontSize: "10" }} onClick={() => handleOnClick()}>
                {correctAtoms.includes(""+xBond+yBond) ? <>{comp}</> : <>O</>}
            </div>
        )
    }


    return (<>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                Ubica los elementos el los lugares correspondientes de la molecula en base a sus enlaces
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <button style={{width: "60px", height: "30px", backgroundColor: "#232DCA", color: "white", borderRadius: "10px", margin: "5px"}} onClick={() => changeConsigna(0)}>H4C2</button>
                    <button style={{width: "60px", height: "30px", backgroundColor: "#232DCA", color: "white", borderRadius: "10px", margin: "5px"}} onClick={() => changeConsigna(1)}>H2O</button>
                    <button style={{width: "60px", height: "30px", backgroundColor: "#232DCA", color: "white", borderRadius: "10px", margin: "5px"}} onClick={() => changeConsigna(2)}>H2SO4</button>
                    <button style={{width: "60px", height: "30px", backgroundColor: "#232DCA", color: "white", borderRadius: "10px", margin: "5px"}} onClick={() => changeConsigna(3)}>HClO4</button>
                    <button style={{width: "60px", height: "30px", backgroundColor: "#232DCA", color: "white", borderRadius: "10px", margin: "5px"}} onClick={() => changeConsigna(4)}>CO2</button>
                </div>
            </div>
            <div>
                {
                    yPos.map(yP => {
                        return (
                            <div style={{ display: "flex", felxDirection: "column" }}>
                                {xPos.map(xP => {
                                    return <GridItem id={"grid-" + xP + "-" + yP} key={"grid-" + xP + "-" + yP} x={xP} y={yP} molecula={consignas[selectedConsigna]} />
                                })}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                opciones
                <div style={{ height: "50px", display: "flex", flexDirection: "row", border: "solid 1px white", borderRadius: "15px", backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                    {consignas[selectedConsigna] && consignas[selectedConsigna].options.map((op, index) => {
                        return usedOptions.includes(index) ? 
                            <></> : 
                            (<div style={selectedOption.id === index ? {border: "solid 1px white", borderRadius: "15px"} : {}} onClick={() => {setSelectedOption({id: index, name: op.name})}}>
                                {op.comp}
                            </div>)
                    })}
                </div>
            </div>
        </div>
    </>)
}

const Empty = () => {
    return (<div style={{ width: "50px", height: "50px" }} />)
}

const Oxigeno = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",margin: "5px", backgroundColor: "#5540ff", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            O
        </div>
    )
}

const Hidrogeno = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",margin: "5px", backgroundColor: "#a6e6a7", color: "black", width: "40px", height: "40px", borderRadius: "20px" }}>
            H
        </div>
    )
}

const Carbono = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",margin: "5px", backgroundColor: "#c09d55", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            C
        </div>
    )
}

const Azufre = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",margin: "5px", backgroundColor: "#8d00ff", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            S
        </div>
    )
}

const Cloro = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",margin: "5px", backgroundColor: "#D433FF", color: "white", width: "40px", height: "40px", borderRadius: "20px" }}>
            Cl
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