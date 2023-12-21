import React, { useState } from 'react';
import {Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText,Button} from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
const DrawerComp = () => {
   const [openDrawer, setOpenDrawer] = useState(false);
   
    return (
        <React.Fragment>

           <Drawer open={openDrawer}
           onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                          <ListItemText>
                            Admin
                            </ListItemText>  
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                          <ListItemText>
                            Dashboard
                            </ListItemText>  
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                          <ListItemText>
                           Appointment
                            </ListItemText>  
                        </ListItemIcon>
                    </ListItemButton>
                    
                </List>
           </Drawer>
           <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
           <Button  sx={{marginRight: 'auto'}} varient="contained"><DehazeIcon style={{color: 'skyblue', padding: '5px'}} /></Button>
           </IconButton>
        </React.Fragment>
    );
};
export default DrawerComp;