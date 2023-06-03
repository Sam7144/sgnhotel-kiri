import Image from "next/image";
import React from "react";

function Wine() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto md:gap-10">
        <div className="flex items-start">
          <Image src="/dinning/wine1.webp" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">
              The Wine Cellar
            </h1>
            <p className="pl-5 opacity-70">
              Our Wine Cellar features more than 350 labels, all presented in a
              climate-controlled cave, with organic and biodynamic wines making
              up more than 50% of the collection. Our resident master Sommelier
              holds regular wine tasting evenings with canapés and chocolates.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Image src="/dinning/wine2.jpg" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">So Chilled</h1>
            <p className="pl-5 opacity-70">
              Our renowned Ice Cream Parlour features a chilled wall of more
              than 60 flavours of ice creams and sorbets.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[95%] mx-auto md:gap-10">
        <div className="flex items-start">
          <Image src="/dinning/wine3.webp" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">
              In-Villa Dining
            </h1>
            <p className="pl-5 opacity-70">
              Midnight desserts in the lunar glow? A family lunch where the
              children plan the menu? A romantic gathering of sensual flavours
              on a private terrace for two? Take advantage of your tropical
              living spaces for breakfast, lunch, and dinner.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Image src="/dinning/wine4.jpg" width="200" height="200" alt="" />
          <div className="pb-5">
            <h1 className="pb-[15px] pl-5 text-3xl opacity-70">
              Special Diets
            </h1>
            <p className="pl-5 opacity-70">
              Be your needs allergy-related or rooted in your religion or
              culture, we can cater to your dietary requirements. Don’t hesitate
              to let us know of any special preparations that you need in
              advance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wine;
