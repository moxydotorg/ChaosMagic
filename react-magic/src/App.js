import React, { useState } from 'react';
import { Tabs } from 'antd';
import './App.css';
import {chaosList, chaosDefaultCard} from './chaosList.js';
import { encantWorldLandList } from './enchantWorldLandList';
import { EnchantWorldLandCard } from './EnchantWorldLandCard';
import { personaLandList, personaDefaultCard } from './personaLandList';
import { whackyLandList, whackyDefaultCard} from './whackyLandList';
import { GenericLandCard } from './GenericCard copy';





function EnchantTab( {onRollClick, onDeleteClick, draws, onSearchClick} ){
  var items = null;
  if (draws && draws.length > 0){
    items = [...draws.slice(0,-1).map(
                  (roll, index)=>{
                    return(<EnchantWorldLandCard 
                              focus={false} 
                              key={index} 
                              roll={roll} 
                              rollIndex={index} 
                              onRollClick={onRollClick} 
                              onDeleteClick={()=>onDeleteClick(index)}
                              onSearchClick={(num)=> onSearchClick(num)}
                            />);
                  }),
                  <EnchantWorldLandCard 
                      focus={true} key={draws.length-1} 
                      roll={draws[draws.length-1]} 
                      rollIndex={draws.length-1} 
                      onRollClick={onRollClick} 
                      onDeleteClick={()=>onDeleteClick(draws.length-1)}
                      onSearchClick={(num)=>onSearchClick(num)}
                      />];
  }
  return(
    <div className="enchantDiv">
      {draws.length === 0 && 
        //default first card
        <EnchantWorldLandCard rollIndex={-1} onRollClick={onRollClick} onSearchClick={(num)=>onSearchClick(num)}/>
      }
      {items}
    </div>
  );
}



function App() {
  const [chaosDraws, setChaosDraws] = useState([]);
  const [enchantDraws, setEnchantDraws] = useState([]);
  const [personaDraws, setPersonaDraws] = useState([]);
  const [whackyDraws, setWhackyDraws] = useState([]);

  const [chaosIndex, setChaosIndex] = useState(-1);
  const [personaIndex, setPersonaIndex] = useState(-1);
  const [whackyIndex, setWhackyIndex] = useState(-1);


  var tabs = [
    {
      key: 'chaos',
      label: 'Chaos',
      children:  (<div className="chaosDiv">
                    <GenericLandCard
                      className={'chaosCard'} 
                      cardList={chaosList}
                      defaultCard={chaosDefaultCard}
                      roll={chaosDraws[chaosIndex]} 
                      key={chaosIndex}
                      onRollClick={
                        ()=>{
                          setChaosDraws([...chaosDraws.slice(0,chaosIndex+1),Math.floor(Math.random()*chaosList.length)]);
                          setChaosIndex(chaosIndex+1);
                        }}
                        hasPrevious={chaosIndex>=0}
                        hasNext={chaosIndex<chaosDraws.length}
                        onUndoClick={
                          (chaosIndex >= 0) ?
                            ()=>{setChaosIndex(chaosIndex-1);} :
                            undefined
                        }
                        onRedoClick={
                          (chaosIndex >= (chaosDraws.length-1)) ?
                            undefined :
                            ()=>{setChaosIndex(chaosIndex+1)}
                        }
                        onSearchClick={
                          (num)=>{
                            setChaosDraws([...chaosDraws.slice(0,chaosIndex+1),num-1]);
                            setChaosIndex(chaosIndex+1);
                          }
                        }
                    />
                  </div>),
    },
    {
      key: 'enchant',
      label: 'Realm Enchantment',
      children: <EnchantTab 
                  draws={enchantDraws} 
                  onRollClick={()=>setEnchantDraws([...enchantDraws,Math.floor(Math.random()*encantWorldLandList.length)])} 
                  onDeleteClick={(index)=>setEnchantDraws([...enchantDraws.slice(0,index),...enchantDraws.slice(index+1)])} 
                  onSearchClick={(num)=>{
                            setEnchantDraws([...enchantDraws,num-1]);
                          }}
                  />,
    },
    {
      key: 'persona',
      label: 'Persona',
      children: (<div className="personaDiv">
                  <GenericLandCard 
                    className={'personaCard'}
                    cardList={personaLandList}
                    defaultCard={personaDefaultCard}
                    roll={personaDraws[personaIndex]} 
                    key={personaIndex}
                    onRollClick={
                      ()=>{
                        setPersonaDraws([...personaDraws.slice(0,personaIndex+1),Math.floor(Math.random()*personaLandList.length)]);
                        setPersonaIndex(personaIndex+1);
                        }}
                      hasPrevious={personaIndex>=0}
                      hasNext={personaIndex<personaDraws.length}
                      onUndoClick={
                        (personaIndex >= 0)?
                          ()=>{setPersonaIndex(personaIndex-1);} :
                          undefined
                      }
                    onRedoClick={
                      (personaIndex >= (personaDraws.length-1)) ?
                        undefined :
                        ()=>{setPersonaIndex(personaIndex+1)}
                    } 
                    onSearchClick={
                          (num)=>{
                            setPersonaDraws([...personaDraws.slice(0,personaIndex+1),num-1]);
                            setPersonaIndex(personaIndex+1);
                          }
                        }
                  />
                </div>),
    },{
      key: 'whacky',
      label: 'Whacky',
      children: (<div className="whackyDiv">
                  <GenericLandCard
                    className={'whackyCard'}
                    cardList={whackyLandList}
                    defaultCard={whackyDefaultCard}
                    roll={whackyDraws[whackyIndex]} 
                    key={whackyIndex}
                    onRollClick={
                      ()=>{
                        setWhackyDraws([...whackyDraws.slice(0,whackyIndex+1),Math.floor(Math.random()*whackyLandList.length)]);
                        setWhackyIndex(whackyIndex+1);
                      }} 
                    hasPrevious={whackyIndex>=0}
                    hasNext={whackyIndex<whackyDraws.length}
                    onUndoClick={
                      (whackyIndex >= 0)?
                        ()=>{setWhackyIndex(whackyIndex-1);} :
                        undefined
                    }
                    onRedoClick={
                      (whackyIndex >= (whackyDraws.length-1)) ?
                        undefined :
                        ()=>{
                          if(whackyIndex < whackyDraws.length){setWhackyIndex(whackyIndex+1); }
                        }
                      }
                      onSearchClick={
                          (num)=>{
                            setWhackyDraws([...whackyDraws.slice(0,whackyIndex+1),num-1]);
                            setWhackyIndex(whackyIndex+1);
                          }
                        }
                  />
                </div>),
    },
  ];

  return (
    <div className='tabContainer'>
      <Tabs centered defaultActiveKey='1' tabPosition="top" items={tabs} />
    </div>
  );
}



export default App;
