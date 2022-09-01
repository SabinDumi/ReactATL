import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Interface } from 'readline';

/*
 "primary": {
        "title": [
            {
                "type": "heading1",
                "text": "Interest",
                "spans": []
            }
        ],
        "artist": "men",
        "cover": {
            "dimensions": {
                "width": 900,
                "height": 500
            },
            "alt": null,
            "copyright": null,
            "url": "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1"
        },
        "songlink": {
            "link_type": "Web",
            "url": "https://prismic.io"
        }
    }
}
﻿
*/
interface IRichText{
                type: string,
                text: string,
                spans:string;
}

interface  IImage{
  dimensions:{
    width: number;
    height:number;
  };
  alt: string | null;
  songLink:{
  copyright: string | null;
    url: string;
  }

}

interface  IPrimary{
  title:string;
  artist:string;
  cover:string;
  songLink:{
  link_type:string;
  url:string;
  }
}
interface IProps{
  slice : {primary : IPrimary };
}

const Song = ({slice}: IProps) =>{

}