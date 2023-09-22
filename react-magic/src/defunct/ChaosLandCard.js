import React, { useState } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { CaretLeftOutlined, CaretRightOutlined, MacCommandOutlined, SearchOutlined } from '@ant-design/icons';
import { chaosList, chaosDefaultCard } from './chaosList';
import parse from 'html-react-parser';


export function ChaosLandCard({ roll=-1, hasPrevious, hasNext, onUndoClick, onRollClick, onRedoClick, onSearchClick}){
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
            <InputNumber defaultValue={(roll >=0)? roll+1 : 1} className='rollSearchInput' precision={0} addonAfter={searchIcon} min={1} max={chaosList.length} controls={true} 
              onChange={ e => {setSearchValue(e)}  } onPressEnter={ ()=>onSearchClick(searchValue) } 
             />
          </div>
        );
       actionItems[actionItems.length] = (
          <Popover className='' content={content} title={'Specific Roll: 1 - '+chaosList.length} >
            <SearchOutlined key="search" />
          </Popover>
      );
    }
    //<DeleteOutlined key="delete" />, 
    //<EllipsisOutlined key="ellipsis" />, 

    if(roll === -1){
      //set Default image
      imgSrc = chaosDefaultCard.img;
      //set Default title
       title = chaosDefaultCard.name;
      //set default desc
       description = chaosDefaultCard.flavor;
      //set default text
       text = parse(chaosDefaultCard.text);
    }else{
      //TODO reset the image here for non-default
      imgSrc = "https://cards.scryfall.io/art_crop/front/5/2/520db5fb-d961-45a3-af74-6f054b8be3ab.jpg?1562858733";
      //TODO reset title for non-default
      title = 'Eureka';
      //TODO reset description for non-default
      description =  <React.Fragment>Flavor?<br/>Rules?<br/>Roll - {roll+1}</React.Fragment>
      text = chaosList[roll];
    }
    // ((typeof chaosList[roll] === 'undefined') || (typeof chaosList[roll].img === 'undefined')) ?
    //   imgSrc = chaosDefaultCard.img :
    //   imgSrc = chaosList[roll].img;
    return (
        <Card className='chaosCard'
            cover={
            <img alt="" src={imgSrc} />
            }
            actions={actionItems}>
            <Meta title={title} description={description} />
            {text}
        </Card>
    );
}