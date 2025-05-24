import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-24 p-5 xl:gap-10">
      <div className="flex flex-col justify-between items-center gap-10 xl:flex-row">
        <div className="w-full flex-col gap-5 xl:w-1/2">
          <h4 className="text-4xl">Cine nest</h4>

          <span className="w-full text-sm text-gray-300 xl:w-1/2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            vel quas voluptatum incidunt veritatis eveniet! Aliquam ipsam itaque
            numquam libero, saepe doloremque atque dolorem nulla obcaecati
            ratione suscipit! Dicta fugiat sed, consequatur ducimus ratione
            voluptatum blanditiis at numquam atque libero! Quasi quos vitae
            assumenda nisi nihil debitis sit ipsam! Repellendus suscipit ex
            inventore officiis amet magni eos facere itaque adipisci velit,
            cumque error corrupti qui fuga reprehenderit eveniet assumenda ut
            libero, consequatur sit nam sed? Magni, iure sunt! Quisquam quidem,
            itaque ut aspernatur at quo? Accusantium facere fuga mollitia
            tenetur repudiandae, labore doloribus possimus eveniet quidem
            excepturi quibusdam? Doloribus expedita quisquam ea asperiores nulla
            cupiditate officia quia praesentium iste recusandae quaerat dolores
            cumque, voluptates tempore? Aliquid quis veritatis ex reprehenderit
            amet cupiditate aut laborum possimus iusto animi cum nemo suscipit
            repellendus eveniet facilis repudiandae atque, modi dolor. Nemo rem
            cupiditate, sapiente odio voluptatibus necessitatibus quis culpa
            voluptatum dolorum ab, facere minima architecto dignissimos
            consectetur vel harum velit beatae sed et debitis. Sequi maxime
            saepe aspernatur officiis labore illum facere quis mollitia modi,
            earum omnis animi cumque dolores cum quasi harum maiores explicabo
            qui deleniti beatae commodi voluptatibus placeat dolorum? Deleniti
            maxime quas, soluta error aliquam consequatur rem excepturi eum
            alias.
          </span>
        </div>

        <div className="w-full xl:w-1/2 ">
            <Image src="/Images/cineHall.jpg" alt="" width={500} height={500} className="w-full object-contain rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between items-center gap-10 xl:flex-row">
        <div className="w-full xl:w-1/2 ">
            <Image src="/Images/cineHall2.jpg" alt="" width={500} height={500} className="w-full object-contain rounded-2xl" />
        </div>

        <div className="w-full flex-col gap-5 xl:w-1/2">
          <h4 className="text-4xl">Cine nest</h4>

          <span className="text-sm text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            vel quas voluptatum incidunt veritatis eveniet! Aliquam ipsam itaque
            numquam libero, saepe doloremque atque dolorem nulla obcaecati
            ratione suscipit! Dicta fugiat sed, consequatur ducimus ratione
            voluptatum blanditiis at numquam atque libero! Quasi quos vitae
            assumenda nisi nihil debitis sit ipsam! Repellendus suscipit ex
            inventore officiis amet magni eos facere itaque adipisci velit,
            cumque error corrupti qui fuga reprehenderit eveniet assumenda ut
            libero, consequatur sit nam sed? Magni, iure sunt! Quisquam quidem,
            itaque ut aspernatur at quo? Accusantium facere fuga mollitia
            tenetur repudiandae, labore doloribus possimus eveniet quidem
            excepturi quibusdam? Doloribus expedita quisquam ea asperiores nulla
            cupiditate officia quia praesentium iste recusandae quaerat dolores
            cumque, voluptates tempore? Aliquid quis veritatis ex reprehenderit
            amet cupiditate aut laborum possimus iusto animi cum nemo suscipit
            repellendus eveniet facilis repudiandae atque, modi dolor. Nemo rem
            cupiditate, sapiente odio voluptatibus necessitatibus quis culpa
            voluptatum dolorum ab, facere minima architecto dignissimos
            consectetur vel harum velit beatae sed et debitis. Sequi maxime
            saepe aspernatur officiis labore illum facere quis mollitia modi,
            earum omnis animi cumque dolores cum quasi harum maiores explicabo
            qui deleniti beatae commodi voluptatibus placeat dolorum? Deleniti
            maxime quas, soluta error aliquam consequatur rem excepturi eum
            alias.
          </span>
        </div>
      </div>
    </div>
  );
}
