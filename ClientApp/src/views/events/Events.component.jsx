import React, { useState } from "react";
import { Calendar, Badge } from 'antd';
import { useEffect } from "react";
import Uni from "../../service/Uni.service";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [taskList, setTaskList] = useState([]);

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item?.content} onClick={() => AsignDetail(item?.id)}>
            <Badge status={item?.type} text={item?.content} />
          </li>
        ))}
      </ul>
    );
  }

  const AsignDetail = (id) => {
    navigate(`/assign/${id}`);
  }

  function getListData(value)
  {
    let listData = [];
    taskList.forEach(task => {
      var delivery_date = new moment(task?.task_delivery_date)

      if(delivery_date.format('YYYY-MM-DD') === value.format('YYYY-MM-DD'))
        listData.push({ type: 'warning', content: task?.task_name, id: task?.id_task });
    })

    return listData || [];
  }

  useEffect(() => {
    async function getTask() {
      const tasks = await Uni.GetTaskByStudent()
      setTaskList(tasks);
    }

    getTask();
  },[])


  return <Calendar dateCellRender={dateCellRender}/>;
}

export default Events;
