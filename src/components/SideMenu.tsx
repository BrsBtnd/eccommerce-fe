import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import Icon from '@/components/Icon';
import { SideMenuItems } from '@/lib/constants';
import { enumToArray } from '@/lib/utils';

export default function SideMenu() {
  return (
    <div className="bg-light-silver rounded-2xl mr-16 hidden md:flex">
      <List>
        {enumToArray(SideMenuItems).map((item) => (
          <ListItem key={item}>
            <IconButton>
              <ListItemAvatar>
                <Avatar>
                  <Icon name={item} className="!fill-light-green" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item} className="text-light-green" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
