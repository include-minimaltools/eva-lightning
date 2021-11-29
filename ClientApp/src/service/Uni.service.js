import { UserData } from "../helpers";

class Uni
{
    static async login({ email, password })
    {
        const response = await fetch(`/api/user/login?email=${email}&password=${password}`, { method: 'GET' });

        if(response.status !== 200)
            return null;

        const data = await response.json();
        return await data;
    }

    static async getCourses()
    {
        const { carnet } = UserData();
        const response = await fetch(`/api/course/GetCoursesByStudent?carnet=${carnet}`, { method: 'GET' });
        const data = await response.json();
        return await data;
    }

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

export default Uni;