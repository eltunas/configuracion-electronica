import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Lewis from './lewis/Lewis';

const diagonalOrbitales = [
  [{ tipo: "s", electrones: 2, n: 1 }],
  [{ tipo: "s", electrones: 2, n: 2 }, { tipo: "p", electrones: 6, n: 2 }],
  [{ tipo: "s", electrones: 2, n: 3 }, { tipo: "p", electrones: 6, n: 3 }, { tipo: "d", electrones: 10, n: 3 }],
  [{ tipo: "s", electrones: 2, n: 4 }, { tipo: "p", electrones: 6, n: 4 }, { tipo: "d", electrones: 10, n: 4 }, { tipo: "f", electrones: 14, n: 4 }],
  [{ tipo: "s", electrones: 2, n: 5 }, { tipo: "p", electrones: 6, n: 5 }, { tipo: "d", electrones: 10, n: 5 }, { tipo: "f", electrones: 14, n: 5 }],
  [{ tipo: "s", electrones: 2, n: 6 }, { tipo: "p", electrones: 6, n: 6 }, { tipo: "d", electrones: 10, n: 6 }],
  [{ tipo: "s", electrones: 2, n: 7 }, { tipo: "p", electrones: 6, n: 7 }],
]

function App() {

  const [configuracionElec, setConfiguracionElec] = useState("");
  const [Z, setZ] = useState(0);
  const [numeroAtomicos, setNumerosAtomicos] = useState([]);


  async function getElectronConfiguracion(Z) {


    //move diagonally through diagonalOrbitales, ex [1][0], [2][0], [2][1], [3][0], [3][1], [4][0], [3][2], [4][1], [4][2], [5][0], [5][1], [5][2]
    //iterate z times
    let cantidadElec = 0;
    let configuracion = "";
    let n = 0;
    let l = 0;
    let electronesEnOrbital = 0;
    let orbs = [];
    while (cantidadElec < Z) {
      if (Z - cantidadElec < diagonalOrbitales[n][l].electrones) {
        configuracion = configuracion + diagonalOrbitales[n][l].n + diagonalOrbitales[n][l].tipo + (Z - cantidadElec) + " ";
        electronesEnOrbital = Z - cantidadElec;
        cantidadElec += Z - cantidadElec;
      } else {
        configuracion = configuracion + diagonalOrbitales[n][l].n + diagonalOrbitales[n][l].tipo + (diagonalOrbitales[n][l].electrones) + " ";
        cantidadElec += diagonalOrbitales[n][l].electrones;
        electronesEnOrbital = diagonalOrbitales[n][l].electrones;
      }

      let orbital = diagonalOrbitales[n][l];

      switch (orbital.tipo) {
        case "s":
          const sOrbs = procesarOrbitalS(orbital.n, electronesEnOrbital)
          //orbs = [...orbs, ...sOrbs];
          orbs.push([...sOrbs]);
          break;
        case "p":
          const pOrbs = procesarOrbitalP(orbital.n, electronesEnOrbital)
          //orbs = [...orbs, ...pOrbs];
          orbs.push([...pOrbs]);
          break;
        case "d":
          const dOrbs = procesarOrbitalD(orbital.n, electronesEnOrbital)
          //orbs = [...orbs, ...dOrbs];
          orbs.push([...dOrbs.slice(0, Math.ceil(dOrbs.length/2))]);
          orbs.push([...dOrbs.slice(Math.ceil(dOrbs.length/2), dOrbs.length)]);

          break;
        case "f":
          const fOrbs = procesarOrbitalF(orbital.n, electronesEnOrbital)
          //orbs = [...orbs, ...fOrbs];
          orbs.push([...fOrbs.slice(0, Math.ceil(fOrbs.length/2))]);
          orbs.push([...fOrbs.slice(Math.ceil(fOrbs.length/2), fOrbs.length)]);
          break;
        default:
          break;
      }

      if (l - 1 >= 0) {
        l--;
      } else {
        if (diagonalOrbitales[n - 2] && diagonalOrbitales[n - 2][3]) {
          n = n - 3;
          l = 3;
        } else if (diagonalOrbitales[n - 1] && diagonalOrbitales[n - 1][2]) {
          n = n - 2;
          l = 2;
        } else if (diagonalOrbitales[n] && diagonalOrbitales[n][1]) {
          n = n - 1;
          l = 1;
        }
      }
      n = n + 1;

    }
    console.log("orbs", orbs);
    await setNumerosAtomicos(orbs)
    setConfiguracionElec(configuracion);
  }

  const procesarOrbitalS = (n, cant) => {
    let orbs = [{
      electro: n + "s1",
      n: n,
      l: "0",
      m: "0",
      s: "1/2",
    }, {
      electro: n + "s2",
      n: n,
      l: "0",
      m: "0",
      s: "-1/2",
    }];
    return orbs.slice(0, cant);
  }

  const procesarOrbitalP = (n, cant) => {
    let orbs = [{
      electro: n + "p1",
      n: n,
      l: "1",
      m: "-1",
      s: "1/2",
    }, {
      electro: n + "p2",
      n: n,
      l: "1",
      m: "0",
      s: "1/2",
    }, {
      electro: n + "p3",
      n: n,
      l: "1",
      m: "1",
      s: "1/2",
    }, {
      electro: n + "p4",
      n: n,
      l: "1",
      m: "-1",
      s: "-1/2",
    }, {
      electro: n + "p5",
      n: n,
      l: "1",
      m: "0",
      s: "-1/2",
    }, {
      electro: n + "p6",
      n: n,
      l: "1",
      m: "1",
      s: "-1/2",
    }]
    return orbs.slice(0, cant);
  }

  const procesarOrbitalD = (n, cant) => {
    let orbs = [{
      electro: n + "d1",
      n: n,
      l: "2",
      m: "-2",
      s: "1/2",
    }, {
      electro: n + "d2",
      n: n,
      l: "2",
      m: "-1",
      s: "1/2",
    }, {
      electro: n + "d3",
      n: n,
      l: "2",
      m: "0",
      s: "1/2",
    }, {
      electro: n + "d4",
      n: n,
      l: "2",
      m: "1",
      s: "1/2",
    }, {
      electro: n + "d5",
      n: n,
      l: "2",
      m: "2",
      s: "1/2",
    }, {
      electro: n + "d6",
      n: n,
      l: "2",
      m: "-2",
      s: "-1/2",
    }, {
      electro: n + "d7",
      n: n,
      l: "2",
      m: "-1",
      s: "-1/2",
    }, {
      electro: n + "d8",
      n: n,
      l: "2",
      m: "0",
      s: "-1/2",
    }, {
      electro: n + "d9",
      n: n,
      l: "2",
      m: "1",
      s: "-1/2",
    }, {
      electro: n + "d10",
      n: n,
      l: "2",
      m: "2",
      s: "-1/2",
    }];
    return orbs.slice(0, cant);
  }

  const procesarOrbitalF = (n, cant) => {
    let orbs = [{
      electro: n + "f1",
      n: n,
      l: "3",
      m: "-3",
      s: "1/2",
    }, {
      electro: n + "f2",
      n: n,
      l: "3",
      m: "-2",
      s: "1/2",
    }, {
      electro: n + "f3",
      n: n,
      l: "3",
      m: "-1",
      s: "1/2",
    }, {
      electro: n + "f4",
      n: n,
      l: "3",
      m: "0",
      s: "1/2",
    }, {
      electro: n + "f5",
      n: n,
      l: "3",
      m: "1",
      s: "1/2",
    }, {
      electro: n + "f6",
      n: n,
      l: "3",
      m: "2",
      s: "1/2",
    }, {
      electro: n + "f7",
      n: n,
      l: "3",
      m: "3",
      s: "1/2",
    }, {
      electro: n + "f8",
      n: n,
      l: "3",
      m: "-3",
      s: "-1/2",
    }, {
      electro: n + "f9",
      n: n,
      l: "3",
      m: "-2",
      s: "-1/2",
    }, {
      electro: n + "f10",
      n: n,
      l: "3",
      m: "-1",
      s: "-1/2",
    }, {
      electro: n + "f11",
      n: n,
      l: "3",
      m: "0",
      s: "-1/2",
    }, {
      electro: n + "f12",
      n: n,
      l: "3",
      m: "1",
      s: "-1/2",
    }, {
      electro: n + "f13",
      n: n,
      l: "3",
      m: "2",
      s: "-1/2",
    }, {
      electro: n + "f14",
      n: n,
      l: "3",
      m: "3",
      s: "-1/2",
    }]
    return orbs.slice(0, cant);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='content-container'>
          {/*<div className='input-container'>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Ingresa el valor de Z!
            </p>
            <input style={{
              backgroundColor: "#282c34",
              color: "white",
              width: "250px",
              height: "30px",
              border: "white solid 3px",
              borderCadius: "30px",
            }} type="number" onChange={(e) => setZ(e.target.value)} />
            <button style={{
              width: "180px",
              height: "50px",
              backgroundColor: "#77BB00",
              color: "white",
              borderRadius: "30px",
              fontSize: "20px",
              marginTop: "10px",
            }} onClick={async () => await getElectronConfiguracion(Z)}>Calcular</button>
          </div>
          <div className='conf-container'>
            <div style={{margin: "15px"}}>{configuracionElec}</div>
            {numeroAtomicos && numeroAtomicos.map((orb) => {
              return (<NumerosAtomicos numsAtoms={orb}></NumerosAtomicos>)
            })}
            
          </div>*/}
          <Lewis></Lewis>
        </div>
      </header>
    </div>
  );
}

const NumerosAtomicos = ({ numsAtoms }) => {

  const [showNums, setshowNums] = useState(false);

  useEffect(() => {
    setshowNums(numsAtoms && numsAtoms.length > 0);
  } , [numsAtoms, showNums, setshowNums])

  return (

    <div style={{ display: "flex", flexDirection: "row", alignContent: "start" }}>
      
      {showNums && numsAtoms.map((element, index) => {
        return (
          <>
            <div key={element.electro} style={{
              height: "160px",
              width: "120px",
              border: "white solid 3px",
              borderRadius: "10px",
              fontSize: "20px",
              marginLeft: "8px"
            }}>
              <div style={{ borderBottom: "white solid 3px", minWidth: "100%" }}>{element.electro}</div>
              <div style={{}}>n: {element.n}</div>
              <div style={{}}>l: {element.l}</div>
              <div style={{}}>m: {element.m}</div>
              <div style={{}}>s: {element.s}</div>
            </div>
          </>
        )
      })}
    </div>
  )
}

export default App;
