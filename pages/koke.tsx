import React, { useState } from 'react';
import ContentItem from '../components/ContentItem';
import { ContentList } from '../components/ContentList';
import AppImage from '../components/AppImage';
import { FindButton } from '../components/FindButton';
import dummy from '../public/data.json';

export default function Koke() {
  const [contents, setContents] = useState(dummy.content);
  const [appImages, setAppImages] = useState(dummy.appImage);

  return (
    <div className="flex flex-col">
      <h1 className="border-b-2 border-black ">코케 비즈</h1>
      <div className="flex justify-center m-10">
        <AppImage appImage={appImages} />
        <div className="flex flex-col justify-center w-auto pl-10 ">
          <div className="flex">
            <h2 className="text-4xl font-semibold my-4 pl-3">
              코케비즈를 <br />꼭 이용해야하는 이유
            </h2>
          </div>
          <div>
            <ContentList contents={contents} />
          </div>
          <FindButton />
        </div>
      </div>
    </div>
  );
}
