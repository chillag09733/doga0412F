import React, { createContext, useEffect, useState } from "react";
import { MyAxios } from "./MyAxios";


export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
    const [list, setList] = useState([])
    function getAdat(vegpont) {
        MyAxios
            .get(vegpont)
            .then(function (response) {
                setList(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () { })
    }

    function postAdat(vegpont, adat) {
        MyAxios
            .post(vegpont, adat)
            .then(function (response) {
                getAdat('/tevekenysegs', setList)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () { })
    }

    function putAdat(vegpont, adat) {
        MyAxios
            .put(vegpont, adat)
            .then(function (response) {
                getAdat('/tevekenysegs', setList)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () { })
    }

    function deleteAdat(vegpont, adat) {
        MyAxios
            .delete(vegpont, adat)
            .then(function (response) {
                getAdat('/tevekenysegs', setList)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () { })
    }

    useEffect(() => {
        getAdat("/tevekenysegs")
    }, [])

    return(
        <ApiContext.Provider value={{list, setList, getAdat, postAdat, putAdat, deleteAdat}}>
            {children}
        </ApiContext.Provider>
    )


}