import { useState, useEffect, FC, ReactNode } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import Script from 'next/script';

interface IPage {
  children: ReactNode | ReactNode[]
  id?: string
  className?: string
  title?: string
  description?: string
  image?: string
  twitter?: string
  contentType?: string
  published?: string
  category?: string
  updated?: string
  noCrawl?: string
  tags?: string
  ogTitle?: string
  ogDescription?: string
}

const Page: FC<IPage> = ({
  children,
  id,
  className,
  title,
  description,
  image,
  twitter,
  contentType,
  published,
  category,
  updated,
  noCrawl,
  tags,
  ogTitle = '',
  ogDescription = '',
}) => {

  return (
    <div className="root-component">

      
      {/* <main >{children}</main> */}
      
    </div>
  );
}


export default Page
