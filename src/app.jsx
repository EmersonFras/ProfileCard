import Body from "./components/body"
import Footer from "./components/footer"
import Head from "./components/head"
import "./styles/footer.css"
import "./styles/body.css"
import "./styles/head.css"
import "./styles/style.css"

export default function App() {
    return (
        <div id = "Page">
            <div id ="glow">
                <Head />
                <Body />
                <Footer />
            </div>
        </div>
    )
}