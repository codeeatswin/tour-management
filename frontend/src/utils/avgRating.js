//? -------- 리뷰 별점 계산 표시 ------------ */

const calculateAvgRating = (reviews) => {
  const totalRation = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    totalRation === 0
      ? ''
      : totalRation === 1
      ? totalRation
      : (totalRation / reviews?.length).toFixed(1);
  // toFixed (1)  - 소숫점 한자리 표시
  return {
    totalRation,
    avgRating,
  };
};

export default calculateAvgRating;
