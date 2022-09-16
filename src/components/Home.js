import React, { Component } from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";

class Home extends Component {
    state = {
        input: ''
    };

    handleText = (e) => {
        this.setState({
          input: e.target.value
        })
      }

    render() {
        return (
            <div className="container">
                <h1 className="text-center mt-4">Markdown Previewer</h1>
                <div className="row main-content">
                    <div className="col-6 ma-2 px-2">
                        <Editor input={this.state.input} handleText={this.handleText} />
                    </div>
                    <div className="col-6 ma-2 px-2">
                        <Previewer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;