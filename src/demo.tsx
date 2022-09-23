import * as React from 'react';
import {useEffect, useState} from "react";
import MoreVert from "./moreVert.tsx";

const shareFunction = ({handleClick, handleClose, open, anchorEl}) => {
    return (
        <div>
               {/*<MoreVertIcon></MoreVertIcon>*/}

                <MoreVert
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    anchorEl={anchorEl}
                >

                </MoreVert>
        </div>
    );
};

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [outerText, setOuterText] = React.useState("");
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        console.log(event.target.outerText);
        setOuterText(event.target.outerText);
    };

    useEffect(() => {
        console.log("anme");
    }, [outerText]);

    return (
        <div>
            {shareFunction({handleClick, handleClose, open, anchorEl})}
            Hello
        </div>
    );
}
