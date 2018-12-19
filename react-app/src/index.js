import React from 'react';
import ReactDOM from 'react-dom'


const elem = [
    {id:'clear', content:"c"},
    {id:'back', content:'<=='},
    {id:'proc', content:'%'},
    {id:'division', content:'/'},
    {id:'1', content:'1'},
    {id:'2', content:'2'},
    {id:'3', content:'3'},
    {id:'egal', content:'*'},
    {id:'4', content:'4'},
    {id:'5', content:'5'},
    {id:'6', content:'6'},
    {id:'egal', content:'-'},
    {id:'7', content:'7'},
    {id:'8', content:'8'},
    {id:'9', content:'9'},
    {id:'egal', content:'+'},
    {id:'', content:''},
    {id:'0', content:'0'},
    {id:'dot', content:'.'},
    {id:'egal', content:'='}
];

function botton(prop){
        
    const divBtnElement = React.createElement('div',{id:'buttons'},[ 
                          React.createElement('div', {}, 
                         [
                            React.createElement('div', {className:'button', id:prop[0].id},prop[0].content),
                            React.createElement('div', {className:'button', id:prop[1].id},prop[1].content),
                            React.createElement('div', {className:'button', id:prop[2].id},prop[2].content),
                            React.createElement('div', {className:'button', id:prop[3].id},prop[3].content),
                         ]),
                         React.createElement('div', {}, 
                         [
                            React.createElement('div', {className:'button', id:prop[4].id},prop[4].content),
                            React.createElement('div', {className:'button', id:prop[5].id},prop[5].content),
                            React.createElement('div', {className:'button', id:prop[6].id},prop[6].content),
                            React.createElement('div', {className:'button', id:prop[7].id},prop[7].content),
                         ]),
                         React.createElement('div', {}, 
                         [
                            React.createElement('div', {className:'button', id:prop[8].id},prop[8].content),
                            React.createElement('div', {className:'button', id:prop[9].id},prop[9].content),
                            React.createElement('div', {className:'button', id:prop[10].id},prop[10].content),
                            React.createElement('div', {className:'button', id:prop[11].id},prop[11].content),
                         ]),
                         React.createElement('div', {}, 
                         [
                            React.createElement('div', {className:'button', id:prop[12].id},prop[12].content),
                            React.createElement('div', {className:'button', id:prop[13].id},prop[13].content),
                            React.createElement('div', {className:'button', id:prop[14].id},prop[14].content),
                            React.createElement('div', {className:'button', id:prop[15].id},prop[15].content),
                         ]),
                         React.createElement('div', {}, 
                         [
                            React.createElement('div', {className:'button', id:prop[16].id},prop[16].content),
                            React.createElement('div', {className:'button', id:prop[17].id},prop[17].content),
                            React.createElement('div', {className:'button', id:prop[18].id},prop[18].content),
                            React.createElement('div', {className:'button', id:prop[19].id},prop[19].content),
                         ]),
                        ]);
    return divBtnElement;
};

function tick(){
    const date = new Date().toLocaleString();
    
    //const myDivStyle = {margin: '10px 0px 0px 0px'};
    //const dateElement = React.createElement('div',{id:'123'},`Current date ${date}` );
    
    const component = (
        <div>
            
            
            {botton(elem)}
        </div>
    )

    
     ReactDOM.render(component, document.getElementById("root")); 
    // const btnElement = React.createElement('div', null);
    // const btnComp = (
    //     <div>
    //         {btnElement}
    //     </div>
    // );
    // ReactDOM.render(btnComp, document.getElementById("root"));
}
tick()
//setInterval(tick, 100);