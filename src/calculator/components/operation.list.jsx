import React from 'react';
import {Box, List, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import {Add, Remove, Close, Percent} from "@mui/icons-material";

const ListItemCustom = ({icon, selected, index, onClick, children}) => {
    return (
      <ListItemButton
        selected={selected === index}
        onClick={onClick}
        sx={{ color: "primary.main"}}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={children} />
      </ListItemButton>
    );
}

const renderObj = [
    { index : 0, title : 'Addition', icon : <Add/> },
    { index : 1, title : 'Subtraction', icon : <Remove/> },
    { index : 2, title : 'Multiplication', icon : <Close/> },
    { index : 3, title : 'Division', icon : <Percent/> },
]

const OperationList = () => {
    const [index, setIndex] = React.useState(0);

    return (
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <List component="nav" disablePadding>
          {renderObj.map((obj) => (
            <ListItemCustom
              icon={obj.icon}
              selected={index}
              index={obj.index}
              onClick={() => setIndex(obj.index)}
            >
              {obj.title}
            </ListItemCustom>
          ))}
        </List>

      </Box>
    );
}
 
export default OperationList;