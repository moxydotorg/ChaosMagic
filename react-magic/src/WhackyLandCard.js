import React, { useState } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { CaretLeftOutlined, CaretRightOutlined, MacCommandOutlined, SearchOutlined } from '@ant-design/icons';
import { whackyLandList } from './whackyLandList';
import parse from 'html-react-parser';


export function WhackyLandCard({ roll=-1, hasPrevious, hasNext, onUndoClick, onRollClick, onRedoClick, onPickClick,onSearchClick}){
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
          <InputNumber defaultValue={(roll >=0)? roll+1 : 1} className='rollSearchInput' precision={0} addonAfter={searchIcon} min={1} max={whackyLandList.length} controls={true} 
            onChange={ e => {setSearchValue(e)}  } onPressEnter={ ()=>onSearchClick(searchValue) } 
           />
        </div>
      );
     actionItems[actionItems.length] = (
        <Popover className='' content={content} title={'Specific Roll: 1 - '+whackyLandList.length} >
          <SearchOutlined key="search" />
        </Popover>
    );
  }
    //Set defaults here:
    //TODO reset the image here for non-default
    imgSrc = "https://cards.scryfall.io/art_crop/front/5/2/520db5fb-d961-45a3-af74-6f054b8be3ab.jpg?1562858733";
    //TODO reset title for non-default
    title = 'Eureka';
    //TODO reset description for non-default
    description =  <React.Fragment>Flavor?<br/>Rules?<br/>Roll - {roll+1}</React.Fragment>
    text = String(whackyLandList[roll]); //may be gibberish if we get an object back.

    //override if no card is drawn yet.
    if(roll === -1){
      //set Default image
       imgSrc = "https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324";
      //set Default title
       title = 'Welcome to WhackyLand';
      //set default desc
       description = '';
      //set default text
       text = (<React.Fragment>For complete rules see <a href='https://i.4pcdn.org/tg/1447655855551.pdf'>here.</a><br/>
       <ol>
         <li>Roll for WhackyLand onlly when another roll tellls you to.</li>
       </ol></React.Fragment>
      );
    }else{
      //validate the data a bit before trying to set it though
      (typeof whackyLandList[roll].img !== 'undefined') && (imgSrc = whackyLandList[roll].img);
      (typeof whackyLandList[roll].name !== 'undefined') && (title = whackyLandList[roll].name);
      (typeof whackyLandList[roll].flavor !== 'undefined') && (description = parse(whackyLandList[roll].flavor));
      (typeof whackyLandList[roll].text !== 'undefined') && (text = parse(whackyLandList[roll].text));
    }
    return (
        <Card className='whackyCard'
            cover={
            <img alt="" src={imgSrc} />
            }
            actions={actionItems}>
            <Meta title={title + ((roll >= 0)?' - ('+(roll+1)+')':'')} description={description} />
            {text}
        </Card>
    );
}