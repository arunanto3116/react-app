import React,{Component} from 'react';
import * as Comp from '../../components/TestComponent/TestComponent';
import DivContainer from '../../components/TestComponent/DivContainer';
export class TestContainer extends Component{




    constructor(props){
        super(props);
        // this.changename = this.changename.bind(this);
        this.state = {name:'arun',place:'chevoor'};
    }

    componentWillMount(){
        console.log("will mount");
    }

    componentDidMount(){
        console.log("mounted");
    }

    shouldComponentUpdate(prevProps, prevState){
        console.log('shouldComponentUpdate');
        console.log(prevProps);
        console.log(prevState);
        console.log(this.props);
        console.log(this.state);
        return true;
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }


    componentWillUnmount(){

    }

    test (){
        const obj  = {key1: '1', key2:'2', key3: '3'};
        const name = "arun";
        const place = "chevoor";
        const obj2 = {name, place};
        console.log(obj2)
    }
    // changename () {
    //     this.setState({name:'kiran'});
    // }
    changename = () => {
        this.setState({name:'kiran'}, () => {
            console.log(this.state.name);
        });
       console.log(this.state.place)
    }
    render(){
         console.log("renderd")
        // console.log("state", this.state);
        // this.test();
        return <>
            <DivContainer >
                <Comp.TestComponent1/>
            </DivContainer>
            <DivContainer >
            <Comp.TestComponent/>
            </DivContainer>
                {this.state.name} {this.state.place}
                <button onClick={this.changename}>click</button>
                {this.state.name==="arun" && <Comp.TestComponent fun={this.changename} details={this.state} {...this.props}/>}
                <Comp.TestComponent1/>
                <Comp.TestComponent {...this.props} showDetails={false} title="jjjk"/>
                <Comp.TestComponent {...this.props}/>
                <Comp.TestComponent {...this.props}/>
               </>
    }

}