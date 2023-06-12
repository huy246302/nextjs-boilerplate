import React from 'react';

interface TopbarProps {
  title: string;
}

const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <div className="bg-red-400 mx-auto flex flex-wrap p-5 flex-col items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4">
          {/* <img src={locofy} /> */}
        </a>
        <div className="flex flex-wrap items-center text-base justify-center">
          <a className="mr-5">First Link</a>
          <a className="mr-5">Second Link</a>
          <a className="mr-5">Third Link</a>
          <a className="mr-5">Fourth Link</a>
        </div>
    </div>
  );
};

export default Topbar;
