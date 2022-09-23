import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RWebShare } from "react-web-share";

const options = [
    'Wechat'
];

const ITEM_HEIGHT = 48;

export default function moreVert({handleClick, handleClose, open, anchorEl}) {
    return (
        <div>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
    >
        <MoreVertIcon />
    </IconButton>
    <Menu
        id="long-menu"
        MenuListProps={{
            'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
            style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
            },
        }}
    >
        {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
            </MenuItem>
        ))}
        <RWebShare
          data={{
            text: "喜欢分享什么",
            url: "https://huarenfuwu.com",
            title: "Spread the word about huarenfuwu",
          }}
        >
          <MenuItem key="share">Share</MenuItem>
        </RWebShare>
    </Menu>
        </div>
    )
}