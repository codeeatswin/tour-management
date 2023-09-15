import Tour from '../models/Tour.js';
import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();
    //새 리뷰를 만든 후 투어의 리뷰 배열을 업데이트합니다.
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({success:true,message:'Review submitted',data:savedReview})
  } catch (error) {
    res.status(500).json({success:false,message:'failed to submit'})

  }
};
