import URL from "./connection";
import React, {useState, useEffect} from "react";

export default class Uni {

    static async GetCareer(id)
    {
        const response = await fetch(`/api/Campus/GetAboutInfo?id=${id}`);

        if(response.status !== 200)
            return null;

        const data = await response.json();
        console.log(data);
        return await data;
    }

    
    static async GetInfo()
    {
        const response = await fetch(`/api/Course/GetAboutInfo`);

        if(response.status !== 200)
            return null;

        const data = await response.json();
        console.log(data);
        return await data;
    }

}
