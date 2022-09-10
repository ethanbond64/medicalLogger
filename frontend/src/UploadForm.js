import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UploadForm() {

    const [title, setTitle] = useState("");
    const [file, setFile] = useState(undefined);

    function onChangeTitle(e) {
        setTitle(e.target.value);
    }

    function onChangeFile(e) {
        const file = e.target.files[0];
        setFile(file);
    }

    function onSave(e) {

        let formData = new FormData();

        formData.append("file", file);

        fetch("http://localhost:8000/create/file/" + title, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    console.log(json);
                    // document.getElementById('dragDropBox').remove();
                    // setImage(json.filename);
                    // setImageUrl("http://localhost:8000/uploads/" + json.filename);
                });
            }
        });
    };

    return (
        <div>
            <span>Test</span>
            <br />
            <input type={`text`} onChange={onChangeTitle} placeholder="Title" />
            <br />
            <input type={`file`} onChange={onChangeFile} />
            <br />
            <span>*TYPE</span>
            <br />
            <button onClick={onSave}>Save</button>
            {/* <div className={`container`}>
                <input type={`text`}>Title</input>
                <input type={`file`}>File</input>
            </div> */}
        </div>
    );
}

export default UploadForm;