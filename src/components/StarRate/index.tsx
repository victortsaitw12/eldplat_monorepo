import React from "react";
import Star from "./Star";
import { StarRateSTY } from "./style";

interface I_StarRate {
  rate: number | string;
  reviews: number | string;
}

function StarRate({ rate, reviews }: I_StarRate) {
  return (
    <StarRateSTY>
      <span className="rate">{rate}</span>

      {[...new Array(5)].map((_, i) => {
        if (i + 1 <= +rate) return <Star key={i} status="full" />;
        if (+rate % 1 > 0 && i === Math.floor(+rate))
          return <Star key={i} status="half" />;
        return <Star key={i} />;
      })}

      <a className="reviews" href="">
        {reviews} reviews
      </a>
    </StarRateSTY>
  );
}

export default StarRate;
