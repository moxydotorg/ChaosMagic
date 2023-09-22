import React, { useState } from 'react';
import {  Card, InputNumber, Popover } from 'antd';
import './App.css';
import Meta from 'antd/es/card/Meta';
import { CaretLeftOutlined, CaretRightOutlined, MacCommandOutlined, SearchOutlined } from '@ant-design/icons';
import { chaosList } from './chaosList';


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
       imgSrc = "https://cards.scryfall.io/art_crop/front/5/8/58831a7d-60c8-431a-a172-b78a23a678f4.jpg?1678810324";
      //set Default title
       title = 'Welcome to Chaos';
      //set default desc
       description = '';
      //set default text
       text = (<React.Fragment>For complete rules see <a href='https://i.4pcdn.org/tg/1447655855551.pdf'>here.</a><br/>
       <ol>
         <li>Chaos Phase is before untap.</li>
         <li>You MUST roll, extra costs MUST be paid, no targets? the effect fizzles.</li>
         <li>Roll EnchantWorld before game starts after muligans.</li>
         <li>You get a "saving roll" when you die, heal to zero if the roll gives extra life congrats!</li>
         <li>Chaos is colorless.</li>
         <li>No spells or effects allowed during Chaos Phase.</li>
         <li>Triggered Effects still trigger.</li>
         <li>EnchantWorlds are enchantments.</li>
         <li>Counter-rolls and Fork-rolls are rolls themselves when used.</li>
         <li>Ignore rolls that give you extra rolls on extra rolls.</li>
       </ol></React.Fragment>
      );
    }else{
      //TODO reset the image here for non-default
      imgSrc = "https://cards.scryfall.io/art_crop/front/5/2/520db5fb-d961-45a3-af74-6f054b8be3ab.jpg?1562858733";
      //TODO reset title for non-default
      title = 'Eureka';
      //TODO reset description for non-default
      description =  <React.Fragment>Flavor?<br/>Rules?<br/>Roll - {roll+1}</React.Fragment>
      text = chaosList[roll];
    }
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