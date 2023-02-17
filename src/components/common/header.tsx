import * as React from 'react';

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
    console.log('Render header')
  return (
    <div className='dynamic-header'>
      Header
    </div>
  );
}
