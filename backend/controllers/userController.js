import User from '../models/User.js';


// update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: 'Successfully Updated',
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Failed to update. Try again' });
  }
};
// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: 'Successfully Deleted',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete' });
  }
};
// getSingle user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: 'Successful',
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};
// getAll user
export const getAllUser = async (req, res) => {
  try {
    // 8개를 건너뛰고 8개를 가져온다  ( 0 * 8 = 0  , 0~7개의 문서를 보내준다  )
    const user = await User.find({})
   
    res.status(200).json({
      success: true,
      message: 'Successful',
      count: user.length,
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: 'not found' });
  }
};

