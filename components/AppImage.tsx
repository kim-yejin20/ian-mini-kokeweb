import React from 'react';

export default function AppImage(props: any) {
  return (
    <div className="flex justify-center w-64 mx-4">
      <div className="flex justify-center">
        <img
          src={props.appImage}
          className="object-contain w-full border-4 border-black rounded-3xl"
        />
      </div>
    </div>
  );
}
