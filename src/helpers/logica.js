export const procesarDatos = (data) => {
    const numClientes = data.length - 1

    for (let i = 0; i < numClientes; i++){
        data[i].Bebida = Number(data[i].Bebida)
    }

    for (let i = 0; i < numClientes; i++) {
        if (Number(data[i].Edad) < 18) {
            data[i].Edad = 0
        } else if (Number(data[i].Edad) >= 18 && Number(data[i].Edad) < 60) {
            data[i].Edad = 1
        } else {
            data[i].Edad = 2
        }
    }

    for (let i = 0; i < numClientes; i++) {
        if (Number(data[i].Temperatura) <= 10) {
            data[i].Temperatura = 0
        } else if (Number(data[i].Temperatura) > 10 && Number(data[i].Temperatura) < 20) {
            data[i].Temperatura = 1
        } else {
            data[i].Temperatura = 2
        }
    }

    // -----------------------------------------------

    const prioriZ = [0, 0]

    for (let i = 0; i < numClientes; i++) {
        prioriZ[data[i].Bebida] += 1
    }

    for (let i = 0; i < prioriZ.length; i++) {
        prioriZ[i] /= numClientes
    }

    // -------------------------------------------------

    const evidenciaXY = [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]

    for (let i = 0; i < numClientes; i++) {
        evidenciaXY[data[i].Edad][data[i].Temperatura] += 1
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            evidenciaXY[i][j] /= numClientes
        }
    }

    // ---------------------------------------------------------

    const distriXYZ = [[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ], [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]]

    for (let i = 0; i < numClientes; i++) {
        distriXYZ[data[i].Bebida][data[i].Edad][data[i].Temperatura] += 1
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                distriXYZ[i][j][k] /= numClientes
            }
        }
    }

    // // -------------------------------------------------------------

    const tablaLikelihood = [[
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ], [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]]

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                tablaLikelihood[i][j][k] = distriXYZ[i][j][k] / prioriZ[i]
            }
        }
    }

    return [prioriZ, evidenciaXY, tablaLikelihood]

}

export const predecir = (prioriZ, evidenciaXY, tablaLikelihood, edad, temperaturaDDia) => {

    if (edad < 18) {
        edad = 0
    } else if (edad >= 18 && edad < 60) {
        edad = 1
    } else {
        edad = 2
    }


    if (temperaturaDDia <= 10) {
        temperaturaDDia = 0
    } else if (temperaturaDDia > 10 && temperaturaDDia < 20) {
        temperaturaDDia = 1
    } else {
        temperaturaDDia = 2
    }

    const probBebFria = (prioriZ[0] * tablaLikelihood[0][edad][temperaturaDDia]) / evidenciaXY[edad][temperaturaDDia]
    const probBebCaliente = (prioriZ[1] * tablaLikelihood[1][edad][temperaturaDDia]) / evidenciaXY[edad][temperaturaDDia]

    return [probBebFria, probBebCaliente]

}

export const csvToArray = (str, delimiter = ",") => {

    const strFormat = str.replace(/\r/g, '')
    const headers = strFormat.slice(0, str.indexOf("\n")).split(delimiter);
    
    const formatHeaders = headers.map( (header) => header.replace(/\n/g, ''))
    const rows = strFormat.slice(strFormat.indexOf("\n") + 1).split("\n");
  

    const arr = rows.map(function (row) {
      const values = row.split(delimiter);
      const el = formatHeaders.reduce(function (object, header, index) {
        object[header] = values[index];
        return object;
      }, {});
      return el;
    });
  
    return arr;
  }
  