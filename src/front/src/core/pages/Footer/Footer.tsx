import React from 'react'
import {IconLightningBolt} from '@consta/uikit/IconLightningBolt';
import {Card} from '@consta/uikit/Card';

interface IFooterProps {

}

export const Footer: React.FC<IFooterProps> = ({}) => {
  return (
    <div className={"m-l-9"}>
        <IconLightningBolt view={'alert'} size={'xs'}/>
        <IconLightningBolt view={'alert'} size={'xs'}/>
        <IconLightningBolt view={'warning'} size={'xs'}/>
    </div>
  );
};
