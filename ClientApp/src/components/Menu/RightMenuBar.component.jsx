import React from "react";
import { Divider, Tree, Layout } from "antd";
import MicrosoftBlock from "./RightMenuBar/MicrosoftBlock.component";
import NextEventsBlock from "./RightMenuBar/NextEventsBlock.component";
import CalendarBlock from "./RightMenuBar/CalendarBlock.component";
import NavigationBlock from "./RightMenuBar/NavigationBlock.component";
import UserOnlineBlock from "./RightMenuBar/UserOnLineBlock.component";

const { Sider } = Layout;


export default function RightMenuBar({isImageRightBar ,...props}) {
  const colorFont = "white";

  return (
    <Sider
      width={"350px"}
      height={"100%"}
      style={{
        borderTopLeftRadius:'15px',
        borderBottomLeftRadius:'15px',
        backgroundColor: "#003792",
        // backgroundImage: `url(${background2})`,
        backgroundImage: isImageRightBar ? `url(https://lalupa.press/wp-content/uploads/2020/05/UNI.jpeg)` : null,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflowY:'scroll'
      }}
      collapsedWidth={0}
      {...props}
    >
      <MicrosoftBlock />
      <NavigationBlock colorFont={colorFont} />
      <Divider orientation="left" style={{ color: colorFont }}>
        Línea de Tiempo
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Archivos Privados
      </Divider>
      <UserOnlineBlock />
      <Divider orientation="left" style={{ color: colorFont }}>
        Insigneas recientes
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Calendario
      </Divider>
      <CalendarBlock />
      <NextEventsBlock colorFont={colorFont}/>
    </Sider>
  );
}

