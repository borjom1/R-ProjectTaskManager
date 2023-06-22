import React from 'react';
import classNames from "classnames";

export default function FileUpload({onChange}) {

  const fileUploadClasses = classNames(
    'block w-min text-xs text-gray-7d mt-6 mb-4',
    'file:mr-2 file:py-2 file:px-4',
    'file:rounded-md file:border-0',
    'file:text-xs file:font-semibold',
    'file:bg-cyan file:text-white-f0',
    'hover:file:bg-cyan-2f file:duration-500 hover:file:scale-[1.02]'
  );

  return (
    <input
      onChange={onChange}
      type='file'
      accept='image/*'
      className={fileUploadClasses}
    />
  );
}