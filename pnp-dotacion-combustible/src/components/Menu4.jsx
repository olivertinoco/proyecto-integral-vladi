import { useState, Fragment } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import {
  InboxIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Bars3Icon,
  StarIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  TrashIcon,
  ExclamationTriangleIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const Menu4 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubItems, setOpenSubItems] = useState({});

  const toggleSubItem = (item) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List className="bg-gray-900 text-white text-sm">
        {/* Inbox */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <InboxIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
        </ListItem>

        {/* Subitems que colapsan */}
        {["Important", "Work", "Personal"].map((text) => (
          <Fragment key={text}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => toggleSubItem(text)}>
                <ListItemIcon>
                  {openSubItems[text] ? (
                    <ChevronDownIcon className="h-5 w-5 text-gray-300" />
                  ) : (
                    <ChevronRightIcon className="h-5 w-5 text-gray-300" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>

            <Collapse in={openSubItems[text]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Sub A", "Sub B"].map((sub, i) => (
                  <ListItem key={i} disablePadding sx={{ pl: 6 }}>
                    <ListItemButton onClick={() => setMenuOpen(false)}>
                      <ListItemIcon>
                        <DocumentIcon className="h-5 w-5 text-gray-300" />
                      </ListItemIcon>
                      <ListItemText primary={`${text} - ${sub}`} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ))}

        {/* Items normales */}
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <StarIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <PencilSquareIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider className="bg-gray-700" />

      {/* Lista secundaria */}
      <List className="bg-gray-900 text-white text-sm">
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <EnvelopeIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="All mail" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <TrashIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={() => setMenuOpen(false)}>
            <ListItemIcon>
              <ExclamationTriangleIcon className="h-5 w-5 text-gray-300" />
            </ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {/* NAVBAR */}
      <nav className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center space-x-2"
        >
          <Bars3Icon className="h-6 w-6" />
          <span className="font-semibold">Menú</span>
        </button>
        <span className="font-bold">Mi App</span>
      </nav>

      {/* PANEL LATERAL BAJO EL NAV */}
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        <div className="shadow-md flex">
          <div className="w-[250px]">{list}</div>
        </div>
      </Collapse>
    </div>
  );
};

export default Menu4;
