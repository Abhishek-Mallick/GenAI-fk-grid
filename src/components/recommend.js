// import React from "react";

// const Product = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-300">
//       <div className="relative">
//         <div className="bg-gray-100 w-100 rounded-lg p-4">
//           {/* Replace this with your image */}
//           <img
//             src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
//             alt="Your Image"
//             className="w-80 h-100 object-cover"
//           />
//         </div>
//         <div className="bg-gray-100 w-100 rounded-lg p-4">
//           {/* Replace this with your image */}
//           <img
//             src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
//             alt="Your Image"
//             className="w-80 h-100 object-cover"
//           />
//         </div>

//         {/* Add a hover overlay */}
//         <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition duration-300"></div>
//       </div>
//       {/* If you want to display product title or other information, you can add them here */}
//       {/* <h2 className="text-lg font-semibold">{product.title}</h2> */}
//       {/* Other product information */}
//     </div>
//   );
// };

// export default Product;

import React from "react";

const Product = ({ product }) => {
  return (
    // <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-300">
    //   <div className="flex space-x-4">
    //     <div className="bg-gray-100 w-1/2 rounded-lg p-4 w-40 h-80">
    //       {/* Replace this with your image */}
    //       <img
    //         src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
    //         alt="Your Image"
    //         className="w-full h-auto bg-white rounded-lg shadow-md p-2 hover:opacity-80 hover:shadow-lg transition duration-300"
    //       />
    //     </div>
        
    //   </div>

    // <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2">
    //   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
    //     {/* Replace this with your image */}
    //     <img
    //       src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
    //       alt="Your Image"
    //       className="w-full h-auto rounded-t-lg"
    //     />

    //   </div>
    //   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
    //     {/* Replace this with your image */}
    //     <img
    //       src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
    //       alt="Your Image"
    //       className="w-full h-auto rounded-t-lg"
    //     />

    //   </div>
    //   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
    //     {/* Replace this with your image */}
    //     <img
    //       src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
    //       alt="Your Image"
    //       className="w-full h-auto rounded-t-lg"
    //     />

    //   </div>
    //   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
    //     {/* Replace this with your image */}
    //     <img
    //       src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg"
    //       alt="Your Image"
    //       className="w-full h-auto rounded-t-lg"
    //     />

    //   </div>
    // </div>

    
    <>
  <title>Side by Side Images</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .image-container {\n            display: inline-block;\n            width: fit-content; /* Adjust the width as needed */\n            margin: 10px;\n            box-sizing: border-box;\n            vertical-align: top;\n        }\n\n  .image-container:hover {\n            transform: scale(1.02); box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);\\n        }\n\n      .image {\n            width: 450px;\n            height: 580px;\n        }\n    "
    }}
  />
  <div className="image-container">
    <img className="image" src="https://absolutelydesi.com/wp-content/uploads/2022/03/Jaipur-Kurti-Women-Blue-White-Printed-Kurta-with-Trousers-Dupatta-1.jpg" alt="Image 1" />
  </div>
  <div className="image-container">
    <img className="image" src="https://absolutelydesi.com/wp-content/uploads/2023/07/Madhvi17001-A-768x1152.jpg" alt="Image 2" />
  </div>
  <div className="image-container">
    <img className="image" src="https://absolutelydesi.com/wp-content/uploads/2023/07/Libas-Floral-Printed-Pure-Cotton-Empire-Kurti-1-1-600x900.jpg" alt="Image 3" />
  </div>
  <div className="image-container">
    <img className="image" src="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/2147883/2017/11/7/11510046595664-Jaipur-Kurti-Women-Navy-Blue-Printed-Kurta-with-Trousers-8001510046595392-2.jpg" alt="Image 4" />
  </div>
  <div className="image-container">
    <img className="image" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/7/6/tr:w-480,/764c0d6NFJK_NYFJPKR010063_1.jpg?rnd=20200526195200" alt="Image 5" />
  </div>
  <div className="image-container">
    <img className="image" src="https://assets.ajio.com/medias/sys_master/root/20230621/Navv/6492dad9d55b7d0c639a01be/-473Wx593H-464327983-blue-MODEL2.jpg" alt="Image 6" />
  </div>
  <div className="image-container">
    <img className="image" src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/e/tr:w-480,/0e59f55JK4983_1.jpg?rnd=20200526195200" alt="Image 7" />
  </div>
  <div className="image-container">
    <img className="image" src="https://i.etsystatic.com/24158944/r/il/d52eb4/4395523094/il_794xN.4395523094_hk4s.jpg" alt="Image 8" />
  </div>
</>
  );
};

export default Product;
