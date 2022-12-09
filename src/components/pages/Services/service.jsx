import React from "react";
import { DataCard } from "./CardData";
import  {MyCard}  from "./MyCard";
const service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {DataCard.map((curValue)=>{
                return<MyCard 
                key={curValue.id}
                title={curValue.title} 
                description={curValue.description} 
                CardImage={curValue.CardImage}
                CardBtn={curValue.CardBtn}

                />
              }
              
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default service;
