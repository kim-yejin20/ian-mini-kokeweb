import React from 'react';
import ContentItem from './ContentItem';

export const ContentList: any = (props: any) => {
  return props.contents.map((content: any) => (
    <ContentItem key={content} content={content} />
  ));
};
