import React from "react";

const Previewer = () => {
    return (
        <div className="container bg-white main-container">
            <div className="col">
                <div className="title-con">Previewer</div>
                <textarea id="preview" className="w-100 px-2" disabled>

                </textarea>
            </div>
       </div>
    )
}

export default Previewer;