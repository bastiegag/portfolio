import React from "react";

import { Clothesline } from "./Clothesline";
import { Bottle } from "./Bottle";

export const Objects = () => {
    return (
        <React.Fragment>
            <Clothesline params={{ x: 660, y: 244 }} />
            <Bottle params={{ x: 720, y: 326 }} />
        </React.Fragment>
    );
};
