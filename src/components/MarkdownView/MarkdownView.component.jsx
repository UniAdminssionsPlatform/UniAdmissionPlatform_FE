import React from 'react'
import MDEditor from "@uiw/react-md-editor";
const MarkdownViewComponent = (props) => {
    const {str} = props
    return (
        <div className="container" data-color-mode="light">
            <MDEditor.Markdown source={str}/>
        </div>
    )
}
export default  MarkdownViewComponent
