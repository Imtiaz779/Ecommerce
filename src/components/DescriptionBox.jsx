import React from "react";

const DescriptionBox = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomRating = getRandomInt(10, 100);

  return (
    <div className="px-6 md:px-0">
     <div className="flex">
     <div className="border border-gray-400 font-semibold p-4">
        Description
      </div>
      <div className="border border-gray-400 font-semibold p-4">
        Review({randomRating})
      </div>
     </div>
     <div className='border border-gray-400 p-8'>
                <p className="font-mono tracking-tighter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam saepe vero, accusantium similique sed eligendi consequuntur magni dolores, amet necessitatibus sunt deleniti autem non nobis cumque debitis! Ratione hic, culpa consectetur repudiandae ipsum reprehenderit excepturi et maiores quasi voluptates dolores, iste soluta inventore odio voluptate ab itaque eos dignissimos.  eos architecto iusto iure doloribus ipsa aliquam quasi unde labore reiciendis deleniti eaque perferendis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.  libero deserunt neque veritatis. Aspernatur mollitia expedita rerum pariatur qui nemo voluptas id earum magni.</p>
               
            </div>
    </div>
  );
};

export default DescriptionBox;
