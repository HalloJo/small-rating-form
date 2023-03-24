import React from "react";

type ThankYouProps = {
  selectedRating: number | undefined;
  rating: number[];
  setSubmitted: (rating: boolean) => void;
};

const ThankYou = ({ selectedRating, rating, setSubmitted }: ThankYouProps) => {
  return (
    <div>
      <h4>Thank you for your rating!</h4>
      <p>
        You have selected {selectedRating} out of {rating.length}
      </p>
      <button onClick={() => setSubmitted(false)}>Rate again</button>
    </div>
  );
};

export default ThankYou;
