import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import {
  InboxIcon,
  EnvelopeIcon,
  StarIcon,
  TrashIcon,
  ArchiveBoxIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const drawerWidth = 240;

const Menu6 = () => {
  const [openInbox, setOpenInbox] = useState(false);
  const [openStarred, setOpenStarred] = useState(false);

  const handleToggleInbox = () => setOpenInbox((v) => !v);
  const handleToggleStarred = () => setOpenStarred((v) => !v);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Drawer permanente */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          {/* Inbox colapsable */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleToggleInbox}>
              <ListItemIcon>
                <InboxIcon className="h-5 w-5" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {openInbox ? (
                <ChevronDownIcon className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronRightIcon className="h-4 w-4 ml-auto" />
              )}
            </ListItemButton>
          </ListItem>

          <Collapse in={openInbox} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Important", "Work", "Personal"].map((text, index) => (
                <ListItemButton key={text} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <StarIcon className="h-4 w-4" />
                    ) : (
                      <EnvelopeIcon className="h-4 w-4" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Starred colapsable */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleToggleStarred}>
              <ListItemIcon>
                <StarIcon className="h-5 w-5" />
              </ListItemIcon>
              <ListItemText primary="Starred" />
              {openStarred ? (
                <ChevronDownIcon className="h-4 w-4 ml-auto" />
              ) : (
                <ChevronRightIcon className="h-4 w-4 ml-auto" />
              )}
            </ListItemButton>
          </ListItem>

          <Collapse in={openStarred} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {["Drafts", "Archive"].map((text, index) => (
                <ListItemButton key={text} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <EnvelopeIcon className="h-4 w-4" />
                    ) : (
                      <ArchiveBoxIcon className="h-4 w-4" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>

        <Divider />

        {/* Lista secundaria normal */}
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EnvelopeIcon className="h-5 w-5" />
              </ListItemIcon>
              <ListItemText primary="All mail" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TrashIcon className="h-5 w-5" />
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArchiveBoxIcon className="h-5 w-5" />
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Contenido principal */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1 className="text-xl font-bold">Contenido principal</h1>
        <p>Aquí va tu app o página</p>
      </Box>
    </Box>
  );
};

export default Menu6;
