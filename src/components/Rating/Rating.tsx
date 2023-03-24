import React, { FormEvent, FormEventHandler, useState } from "react";
import styles from "../Rating/Rating.module.scss";
import ThankYou from "../ThankYou/ThankYou";

const Rating = () => {
  const rating = [1, 2, 3, 4, 5];

  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleClickedRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <ThankYou
      rating={rating}
      selectedRating={selectedRating}
      setSubmitted={setSubmitted}
    />
  ) : (
    <form onSubmit={handleSubmit}>
      <h3>Your rating please!</h3>
      <p>
        We would appreciate some rating. For the sake of this small project.
      </p>
      <div className={styles.buttons}>
        <div className={styles.ratings}>
          {rating.map((rate, index) => (
            <button
              key={index}
              onClick={() => handleClickedRating(rate)}
              type="button"
            >
              {rate}
            </button>
          ))}
        </div>
        <button disabled={selectedRating === 0 || undefined} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Rating;
