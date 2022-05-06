import React, { useState } from 'react';

export default function ContentItem(props: any) {
  console.log('here!', props);
  return (
    <div>
      <div className="flex mt-4">
        <div className="flex justify-center items-center ">
          <img src={props.content.logo} className="w-16" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-2xl font-semibold">{props.content.title}</div>
          <div className="font-medium text-gray-700">{props.content.desc}</div>
        </div>
      </div>
    </div>
  );
}
