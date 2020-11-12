import React,{useState, useEffect} from 'react';

export const TestComponent = props => { 
    const [status, setStatus] = useState({name:"kiran", place: "chevoor"});
    console.log(status);

    useEffect(()=> {
        console.log("rendered")
        return () => {
            console.log("unmount")
        }
    },[status])

    console.log("props 1", props)

    return <>From funtional component <button onClick={() => setStatus({name: "shebin", ...status})}>Change</button></>
}

TestComponent.defaultProps = {
    name: "Shebin"
}

export class TestComponent1 extends React.Component {
    
    render(){
        console.log("props 2", this.props)
        return(
            <div className={this.props.className}>
                component 2 {this.props.time} {this.props.title}
            </div>
        )
    }

}