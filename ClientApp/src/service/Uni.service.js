import URL from "./connection";
import React, {useState, useEffect} from "react";

export default class Uni {


    static async GetTeacherCourse()
    {
        const response = await fetch("/api/Teacher_Course/Get");
        const data = await response.json();
        return data;
    }
    
    static async GetTeacher()
    {
        const response = await fetch("/api/Teacher/Get");
        const data = await response.json();
        return data;
    }

    static async GetCareer(id)
    {
        const response = await fetch(`/api/Campus/GetAboutInfo?id=${id}`);

        if(response.status !== 200)
            return null;

        const data = await response.json();
        console.log(data);
        return await data;
    }

}
