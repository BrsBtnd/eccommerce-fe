'use client';
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
import { useAppDispatch, useAppSelector } from '@/app/store/store';
import {
  selectSelectedSideMenuItems,
  setSelectedSideMenuItems,
} from '@/app/store/sideMenuItemsSlice';

export default function SideMenu() {
  const dispatch = useAppDispatch();
  const selectedSideMenuItems = useAppSelector(selectSelectedSideMenuItems);

  const handleClick = (item: SideMenuItems) => {
    const isItemInArray = selectedSideMenuItems.includes(item);
    if (isItemInArray) {
      dispatch(
        setSelectedSideMenuItems(
          selectedSideMenuItems.filter((i) => i !== item),
        ),
      );
    } else {
      dispatch(setSelectedSideMenuItems([...selectedSideMenuItems, item]));
    }
  };

  return (
    <div className="bg-light-silver rounded-2xl mr-16 hidden md:flex">
      <List>
        {enumToArray(SideMenuItems).map((item) => (
          <ListItem key={item}>
            <IconButton onClick={() => handleClick(item)}>
              <ListItemAvatar>
                <Avatar>
                  <Icon
                    name={item}
                    className={
                      selectedSideMenuItems.includes(item)
                        ? '!fill-dark-green'
                        : '!fill-light-green'
                    }
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item}
                className={
                  selectedSideMenuItems.includes(item)
                    ? '!text-dark-green'
                    : '!text-light-green'
                }
              />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
