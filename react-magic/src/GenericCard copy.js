import React, { useState } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { CaretLeftOutlined, CaretRightOutlined, MacCommandOutlined, SearchOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';

/*
  A generic card to display Chaos, Persona, or Whacky.
*/

const aDefaultCard = {
  name: '',
  text: '',
  flavor: '',
  img:''
}

export function GenericLandCard({ roll=-1, hasPrevious=false, hasNext=false, onUndoClick, onRollClick, onRedoClick, onSearchClick, className, cardList=[], defaultCard=aDefaultCard}){
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
          <InputNumber defaultValue={(roll >=0)? roll+1 : 1} className='rollSearchInput' precision={0} addonAfter={searchIcon} min={1} max={cardList.length} controls={true} 
            onChange={ e => {setSearchValue(e)}  } onPressEnter={ ()=>onSearchClick(searchValue) } 
           />
        </div>
      );
     actionItems[actionItems.length] = (
        <Popover content={content} title={'Specific Roll: 1 - '+cardList.length} >
          <SearchOutlined key="search" />
        </Popover>
    );
  }

    title = ((typeof cardList[roll] === 'undefined') || (typeof cardList[roll].name === 'undefined')) ? 
      defaultCard.name :  cardList[roll].name;
    if(typeof cardList[roll] === 'undefined')
      text = parse(defaultCard.text);
    else if(typeof cardList[roll].text === 'undefined')
      text = parse(cardList[roll]);
    else
      text = parse(cardList[roll].text);
    description = parse(((typeof cardList[roll] === 'undefined') || (typeof cardList[roll].flavor === 'undefined')) ? 
      defaultCard.flavor :  cardList[roll].flavor);
    imgSrc = ((typeof cardList[roll] === 'undefined') || (typeof cardList[roll].img === 'undefined')) ? 
      defaultCard.img :  cardList[roll].img;


    return (
        <Card className={className}
            cover={
            <img alt='' src={imgSrc} />
            }
            actions={actionItems}>
            <Meta title={title + ((roll >= 0)?' - ('+(roll+1)+')':'')} description={description} />
            {text}
        </Card>
    );
}