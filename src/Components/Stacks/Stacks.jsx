import "./Stacks.scss"
import Html from "../../Assets/imagesStacks/iconHtml.png"
import Css from "../../Assets/imagesStacks/iconCss.png"
import React from "../../Assets/imagesStacks/iconReact.png"
import Node from "../../Assets/imagesStacks/iconNode.png"
import Scss from "../../Assets/imagesStacks/iconSass.png"

function Stacks() {
    return (
        <div className="stacks">
            <img src={Html} alt="Logo HTML" />
            <img src={Css} alt="Logo CSS" />
            <img src={React} alt="Logo React" />
            <img src={Node} alt="Logo Node" />
            <img src={Scss} alt="Logo SCSS" />
        </div>
    )
}

export default Stacks