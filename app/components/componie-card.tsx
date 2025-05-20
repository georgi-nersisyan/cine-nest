import Image from "next/image";
import React from "react";
import { img_url } from "../lib";

export interface ProductionCompanie {
  id:number;
  logo_path:string;
  name:string;
  origin_country:string;
}

interface Props {
    companie:ProductionCompanie;
}

export default function ComponieCard({companie}:Props) {
  return (
    <div className="w-full h-40 flex flex-col items-center text-center justify-center gap-3.5 sm:w-1/2">
      {companie.logo_path ?
      <Image
          src={img_url + companie.logo_path}
          alt={companie.name}
          width={200}
          height={300}
          className="w-full h-full object-contain"
        />
        : 
        <Image
          src="/images/not-found-image.jpg"
          alt={companie.name}
          width={200}
          height={300}
          className="w-full h-full object-contain"
        />
      }
      <h4>{companie.name}</h4>
    </div>
  );
}