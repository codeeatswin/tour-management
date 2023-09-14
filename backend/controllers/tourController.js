import Tour from '../models/Tour.js';

// create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to create. Try again' });
  }
};

// update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: 'Successfully Updated',
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to update. Try again' });
  }
};
// delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Deleted',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};
// getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tour,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};
// getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  try {
    // 8개를 건너뛰고 8개를 가져온다  ( 0 * 8 = 0  , 0~7개의 문서를 보내준다  )
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      message: 'Successful',
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};

//get tour by search

export const getTourBySearch = async (req, res) => {
  // 정규표현식으로 검색어에 대한 대소문자 구분 없이 일치하는 모든 값들을 찾을 수 있습니다.
  const city = new RegExp(req.query.city, 'i');
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // 여러줄 주석 shift + alt + a
    // gte means greater than equal
    // $gte는 '이상'을 의미하며, 해당 값 이상인 값을 가지고 있는 문서들을 찾습니다
    // MongoDB에서 조건에 맞는 투어(Tour) 문서들을 조회하고 해당 결과를 변수 tours에 할당합니다.
    // 조회 결과로 반환되는 문서들은 주어진 조건(city, distance, maxGroupSize)에 따라 필터링되므로, 해당 조건과 일치하는 투어 정보를 가져올 수 있습니다.

    // $gt: "greater than"의 약어로, 주어진 값보다 큰 값을 가지고 있는 문서를 조회합니다.
    // $lt: "less than"의 약어로, 주어진 값보다 작은 값을 가지고 있는 문서를 조회합니다.
    // $gte: "greater than or equal to"의 약어로, 주어진 값보다 크거나 같은 값을 가지고 있는 문서를 조회합니다.
    // $lte: "less than or equal to"의 약어로, 주어진 값보다 작거나 같은 값을 가지고 있는 문서를 조회합니다.
    // 예제
    /*    const tours = await Tour.find({
      price: { $gt: 100 }, // price가 100보다 큰 투어 조회
      rating: { $gte: 4.5 }, // rating이 4.5 이상인 투어 조회
      duration: { $lt: 7 }, // duration이 7 미만인 투어 조회
    }); */

    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });
    res.status(200).json({
      success: true,
      message: 'Successful',
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};

// getfeatured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8);
    res.status(200).json({
      success: true,
      message: 'Successful',
      count: tours.length,
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'failed to fetch' });
  }
};
