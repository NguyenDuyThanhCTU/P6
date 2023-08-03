import React from "react";
import { RelatedPostItems } from "../../../Utils/temp";

const RelatedPosts = () => {
  return (
    <div className="font-NunitoSans py-5">
      <h3 className="uppercase font-bold">Bài viết liên quan:</h3>
      <div className="flex flex-col gap-1 mt-2 ml-4">
        {RelatedPostItems.map((items, idx) => (
          <div className="cursor-pointer hover:text-blue-500 hover:underline">
            <li>{items.name}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
