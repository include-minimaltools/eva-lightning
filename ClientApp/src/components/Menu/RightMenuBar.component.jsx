import React from "react";
import { Layout } from "antd";
import MicrosoftBlock from "./RightMenuBar/MicrosoftBlock.component";
import NextEventsBlock from "./RightMenuBar/NextEventsBlock.component";
import CalendarBlock from "./RightMenuBar/CalendarBlock.component";
import NavigationBlock from "./RightMenuBar/NavigationBlock.component";
import UserOnlineBlock from "./RightMenuBar/UserOnLineBlock.component";
import BadgesBlock from "./RightMenuBar/Badges.component";
import TimeLineBlock from "./RightMenuBar/TimeLineBlock.component";
import PrivateFileBlock from "./RightMenuBar/PrivateFileBlock.component";

const { Sider } = Layout;


export default function RightMenuBar({isImageRightBar ,...props}) {
  const colorFont = "white";

  return (
    <Sider
      width="300px"
      height="100%"
      style={{
        borderTopLeftRadius:'15px',
        borderBottomLeftRadius:'15px',
        backgroundColor: "#003792",
        // backgroundImage: `url(${background2})`,
        backgroundImage: isImageRightBar ? `url(https://lalupa.press/wp-content/uploads/2020/05/UNI.jpeg)` : null,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflowY:'scroll',
        boxShadow: '0px 0px 10px #000000',
      }}
      collapsedWidth={0}
      {...props}
    >
      <MicrosoftBlock />
      <NavigationBlock colorFont={colorFont} />
      <TimeLineBlock />
      <PrivateFileBlock />
      <UserOnlineBlock />
      <BadgesBlock/>
      <CalendarBlock />
      <NextEventsBlock colorFont={colorFont}/>
    </Sider>
  );
}

