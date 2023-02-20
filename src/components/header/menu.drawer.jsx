import { SwipeableDrawer, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import { ArrowForward, Home, Person, Psychology, Task, Work } from "@mui/icons-material";

const icons = [
    <Home/>,
    <Person/>,
    <Work/>,
    <Task/>,
    <Psychology/>,
];

const MenuSwipeableDrawer = ({open, buttons, index, setIndex, onOpen, onClose}) => {

    return (
        <SwipeableDrawer anchor="left" open={open} onOpen={onOpen} onClose={onClose}>
            <List component="nav" sx={{width : 300}}>
                {
                    buttons.map((v, i) => (
                        <ListItemButton key={i} selected={index === i} onClick={() => {setIndex(i); onClose();}}>
                            <ListItemIcon sx={{color : "primary.main"}}>
                                {icons[i]}
                            </ListItemIcon>
                            <ListItemText sx={{color : "primary.main"}} >
                                {v}
                            </ListItemText>
                        </ListItemButton>
                    ))
                }
            </List>
        </SwipeableDrawer>
    );
}

export default MenuSwipeableDrawer;