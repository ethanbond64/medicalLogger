import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ShareForm() {
    return (
        <div>
            <div className={`container`}>
                <input type={`text`}>Title</input>
                <input type={`file`}>File</input>
            </div>
        </div>
    );
}

export default ShareForm;