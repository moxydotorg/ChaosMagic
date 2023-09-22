import React, { useState } from 'react';
import { useEffect } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { MacCommandOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { encantWorldLandList } from './enchantWorldLandList';
import { useRef } from 'react';


//TODO Add delete button
//Can we also remove delete button from default card?
//How to get height of all cards the same - display:table-cell but then the bottom part gets wonky

export function EnchantWorldLandCard({ roll=-1, rollIndex=-1, onRollClick, onDeleteClick, focus=false, onSearchClick}){
  const[searchValue, setSearchValue] = useState('1');
  const inputRef = useRef(null);

  useEffect(() => {
      if (focus) {
        inputRef.current.scrollIntoView();
      }
    }
  )
  var imgSrc,title,description,text;
    if(roll === -1){
      //set Default image
       imgSrc = "https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324";
      //set Default title
       title = 'Welcome to Chaos';
      //set default desc
       description = '';
      //set default text
       text = (<React.Fragment>For complete rules see <a href='https://i.4pcdn.org/tg/1447655855551.pdf'>here.</a><br/>
            <ol>
            <li>Roll EnchantWorld before game starts after muligans.</li>
            <li>EnchantWorlds are enchantments.</li>
          </ol></React.Fragment>
      );
    }else{
      //TODO reset the image here for non-default
      imgSrc = "https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324";
      //TODO reset title for non-default
      title = 'Eureka';
      //TODO reset description for non-default
      description =  <React.Fragment>Flavor?<br/>Rules?<br/>Roll - {roll+1}</React.Fragment>
      text = encantWorldLandList[roll];
    }

    var actionItems = [];
    if (typeof onRollClick !== 'undefined') actionItems[actionItems.length] = <MacCommandOutlined key="roll" onClick={onRollClick}/>;
    if (typeof onDeleteClick !== 'undefined') actionItems[actionItems.length] =  (<DeleteOutlined key="delete" onClick={onDeleteClick}/> );
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
        <Popover className='' content={content} title={'Specific Roll: 1 - '+encantWorldLandList.length} >
          <SearchOutlined key="search" />
        </Popover>
    );
  }  // <EllipsisOutlined key="ellipsis" />,

    if(focus){
      return (
          <Card key={rollIndex} className="enchantCard focused" ref={inputRef} 
            cover={
              <img src={imgSrc} alt='' />
            }
            actions={actionItems} >
          <Meta title={title} description={description} />
          {text}
          </Card>
      );
    }else{
      return (
        <Card key={rollIndex} className="enchantCard"
          cover={
            <img src="https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324" alt='' />
          }
          actions={actionItems}>
        <Meta title={title} description={description} />
        {text}
        </Card>
    );
    }
}