import React, { Component } from "react";
import { marked } from 'marked';

let initialState = `
# Welcome to my React Markdown Previewer!

## sub header

[links](https://www.freecodecamp.org)

inline code \`<span><em>hello</em></span>\`
\`\`\`

let x = 1;
let y = 2;

\`\`\`

- list item 1
- list item 2

> Block Quotes!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**bold**

`

//  a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text


class Home extends Component {
    state = {
        input: initialState
    };

    handleText = (e) => {
    
        this.setState({
          input: e.target.value
        })
      }


    render() {
        const { input } = this.state;

        const markdown = marked.parse(input, { breaks: true });


        return (
            <div className="container">
                <h1 className="text-center mt-4 head">Markdown Previewer</h1>
                <div className="row main-content">
                    <div className="col-sm-12 col-md-6 ma-2 pa-2">
                    <div className="container bg-white main-container">
                            <div className="col">
                                <div className="title-con">Editor</div>
                                <textarea id="editor" className="w-100 px-2" value={ this.state.input } onChange={this.handleText} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6  ma-2 pa-2">
                    <div className="container bg-white main-container">
                            <div className="col">
                                <div className="title-con">Previewer</div>
                                { /* <textarea id="preview" className="w-100 px-2" value={this.state.input} disabled></textarea> */ }
                                <div dangerouslySetInnerHTML={{ __html: markdown }} id="preview"></div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="text-center my-2 py-2">
                    <p>Get the source code <a rel="nofollow noreferrer" href="https://github.com/wdbsa/markdown-previewer" target="_blank">here</a></p>
                </div>     
            </div>
        )
    }
}

export default Home;