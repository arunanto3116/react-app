import React,{Component} from 'react';
import * as Comp from '../../components/TestComponent/TestComponent';

export class TestContainer extends Component{
    
    test (){
        const obj  = {key1: '1', key2:'2', key3: '3'};
        const name = "arun";
        const place = "chevoor";
        const obj2 = {name, place};
        console.log(obj2)
    }
    render(){
        this.test();
        return <>
                <Comp.TestComponent {...this.props}/>
                <Comp.TestComponent1/>
                <Comp.TestComponent {...this.props} showDetails={false} title="jjjk"/>
                <Comp.TestComponent {...this.props}/>
                <Comp.TestComponent {...this.props}/>
               </>
    }

}