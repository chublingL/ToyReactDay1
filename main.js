import {ToyReact,Component} from './ToyReact'

class MyComponent extends Component {
    render() {
        return ( 
        <div>
            OHHH!
            <span> Hello </span>
            <span> World! </span>
            <div>{this.children}</div> 
        </div>
        );
    }
}

const a = (<MyComponent name = "a" id = "ida"> 
    <div> 111 </div> 
    <div> 222 </div>
    {true}
    </MyComponent>
)

window.onload = () => {
    ToyReact.render(
        a,
        document.getElementById('root')
    )
}