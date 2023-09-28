import React, { useState } from 'react';
import { useEffect } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { MacCommandOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { encantWorldLandList } from './enchantWorldLandList';
import { useRef } from 'react';
import parse from 'html-react-parser';

//provide a default default card
const aDefaultCard = {
  name: '',
  text: '',
  flavor: '',
  img:''
}

//How to get height of all cards the same - display:table-cell but then the bottom part gets wonky

export function EnchantWorldLandCard({ className='enchantCard', roll=-1, rollIndex=-1, onRollClick, onDeleteClick, focus=false, onSearchClick, cardList=[], defaultCard=aDefaultCard}){
  const[searchValue, setSearchValue] = useState('1');
  const inputRef = useRef(null);

  //scroll to the card if we're asked to focus it.
  useEffect(() => {
      if (focus) {
        inputRef.current.scrollIntoView();
      }
    }
  )

  //add buttons to the bottom of the card
  var actionItems = [];
  //Roll button
  if (typeof onRollClick !== 'undefined') actionItems[actionItems.length] = <MacCommandOutlined key="roll" onClick={onRollClick}/>;
  //Delete button if asked for
  if (typeof onDeleteClick !== 'undefined') actionItems[actionItems.length] =  (<DeleteOutlined key="delete" onClick={onDeleteClick}/> );
  //search button
  if (typeof onSearchClick !== 'undefined'){
    const searchIcon = <SearchOutlined onClick={()=>{onSearchClick(searchValue);}} />
    const content = (
      <div>
        <InputNumber defaultValue={(roll >=0)? roll+1 : 1} className='rollSearchInput' precision={0} addonAfter={searchIcon} min={1} max={encantWorldLandList.length} controls={true} 
          onChange={ e => {setSearchValue(e)}} onPressEnter={ ()=>onSearchClick(searchValue) } 
          />
      </div>
    );
    actionItems[actionItems.length] = (
      <Popover content={content} title={'Specific Roll: 1 - '+encantWorldLandList.length} >
        <SearchOutlined key="search" />
      </Popover>
    );
  }

  var imgSrc,title,description,text;
  
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

 // if(focus){
    return (
        <Card className={className+(focus?' focused':'')} key={rollIndex} ref={(focus? inputRef:undefined)} 
          cover={
            <img src={imgSrc} alt='' />
          }
          actions={actionItems} >
        <Meta title={title + ((roll >= 0)?' - ('+(roll+1)+')':'')} description={description} />
        {text}
        </Card>
    );
}