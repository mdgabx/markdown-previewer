import React from "react";

const Editor = (props) =>  {

    const changeInput = () => {
        console.log('props', props);
    }    

    return (
        <div className="container bg-white main-container">
             <div className="col">
                 <div className="title-con">Editor</div>
                 <textarea id="editor" className="w-100 px-2" onChange={changeInput} >
     
                  </textarea>
              </div>
        </div>
    )
}

export default Editor;