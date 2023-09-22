import React, { useState } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { CaretLeftOutlined, CaretRightOutlined, MacCommandOutlined, SearchOutlined } from '@ant-design/icons';
import { personaLandList, personaDefaultCard} from './personaLandList';
import parse from 'html-react-parser';


export function PersonaLandCard({ roll=-1, hasPrevious, hasNext, onUndoClick, onRollClick, onRedoClick, onSearchClick}){
  const[searchValue, setSearchValue] = useState('1');
    var imgSrc,title,description,text;

    var actionItems = []
    if(typeof onRollClick !== 'undefined') actionItems[actionItems.length] = <MacCommandOutlined key="roll" onClick={onRollClick}/>;
    if(typeof onUndoClick !== 'undefined' && hasPrevious) actionItems[actionItems.length] = <CaretLeftOutlined key="undo" onClick={onUndoClick}/>;
    if(typeof onRedoClick !== 'undefined' && hasNext) actionItems[actionItems.length] = <CaretRightOutlined key="redo" onClick={onRedoClick}/>;
    if(typeof onSearchClick !== 'undefined'){
      const searchIcon = <SearchOutlined onClick={()=>onSearchClick(searchValue)} />
      const content = (
        <div>
          <InputNumber defaultValue={(roll >=0)? roll+1 : 1} className='rollSearchInput' precision={0} addonAfter={searchIcon} min={1} max={personaLandList.length} controls={true} 
            onChange={ e => {setSearchValue(e)}  } onPressEnter={ ()=>onSearchClick(searchValue) } 
           />
        </div>
      );
     actionItems[actionItems.length] = (
        <Popover className='' content={content} title={'Specific Roll: 1 - '+personaLandList.length} >
          <SearchOutlined key="search" />
        </Popover>
    );
  }

    title = ((typeof personaLandList[roll] === 'undefined') || (typeof personaLandList[roll].name === 'undefined')) ? 
      personaDefaultCard.name :  personaLandList[roll].name;
    text = parse(((typeof personaLandList[roll] === 'undefined') || (typeof personaLandList[roll].text === 'undefined')) ? 
      personaDefaultCard.text :  personaLandList[roll].text);
    description = parse(((typeof personaLandList[roll] === 'undefined') || (typeof personaLandList[roll].flavor === 'undefined')) ? 
      personaDefaultCard.flavor :  personaLandList[roll].flavor);
    imgSrc = ((typeof personaLandList[roll] === 'undefined') || (typeof personaLandList[roll].img === 'undefined')) ? 
      personaDefaultCard.img :  personaLandList[roll].img;
    return (
        <Card className='personaCard'
            cover={
            <img alt="" src={imgSrc} />
            }
            actions={actionItems}>
            <Meta title={title + ((roll >= 0)?' - ('+(roll+1)+')':'')} description={description} />
            {text}
        </Card>
    );
}