import React from 'react';

export class TestComponent extends React.Component {

    render(){
        console.log(this.props)
        if(this.props.showDetails){
            console.log("sdsd")
        }
        return(
            <>
            <div>
                Hello {this.props.name} place : {this.props.place} {this.props.showDetails ? "details" : ""}
            </div>
            <TestComponent1 {...this.props}/>
            </>
        )
    }

}

TestComponent.defaultProps = {
    name: "Shebin"
}

export class TestComponent1 extends React.Component {

    render(){
        return(
            <React.Fragment>
                component 2 {this.props.time} {this.props.title}
            </React.Fragment>
        )
    }

}