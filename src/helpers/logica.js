export const procesarDatos = (data) => {
    const numClientes = data.index.length - 1

    for (let i = 0; i < numClientes; i++) {
        if (data.Edad.values[i] < 18) {
            data.Edad.values[i] = 0
        } else if (data.Edad.values[i] >= 18 && data.Edad.values[i] < 60) {
            data.Edad.values[i] = 1
        } else {
            data.Edad.values[i] = 2
        }
    }

    for (let i = 0; i < numClientes; i++) {
        if (data.Temperatura.values[i] <= 10) {
            data.Temperatura.values[i] = 0
        } else if (data.Temperatura.values[i] > 10 && data.Temperatura.values[i] < 20) {
            data.Temperatura.values[i] = 1
        } else {
            data.Temperatura.values[i] = 2
        }
    }

    // -----------------------------------------------

    const prioriZ = [0, 0]

    for (let i = 0; i < numClientes; i++) {
        prioriZ[data.Bebida.values[i]] += 1
    }

    for (let i = 0; i < prioriZ.length; i++) {
        prioriZ[i] /= numClientes
    }

    // -------------------------------------------------

    const evidenciaXY = [[0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]]

    for (let i = 0; i < numClientes; i++) {
        evidenciaXY[data.Edad.values[i]][data.Temperatura.values[i]] += 1
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
        distriXYZ[data.Bebida.values[i]][data.Edad.values[i]][data.Temperatura.values[i]] += 1
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                distriXYZ[i][j][k] /= numClientes
            }
        }
    }

    // -------------------------------------------------------------

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