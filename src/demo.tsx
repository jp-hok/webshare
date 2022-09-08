import * as React from 'react';
import {useEffect, useState} from "react";
import { RWebShare } from "react-web-share";
import MoreVert from "./moreVert.tsx";

const shareFunction = ({handleClick, handleClose, open, anchorEl}) => {
    return (
        <div>
            <RWebShare
                data={{
                    text: "喜欢分享什么",
                    url: "https://huarenfuwu.com",
                    title: "Spread the word about huarenfuwu"
                }}
                // onClick={() => console.info("share successful!")}
            >
               {/*<MoreVertIcon></MoreVertIcon>*/}

                <MoreVert
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    anchorEl={anchorEl}
                >

                </MoreVert>

            </RWebShare>
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
