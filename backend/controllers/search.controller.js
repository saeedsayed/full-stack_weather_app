import CityModel from "../models/cities.model.js";
import appError from "../utils/appError.js";

export const searchByCityName = async (req, res, next) => {
  let { q: searchKey, skip } = req.query;
  const limit = 100;
  if (!searchKey) {
    const err = appError.create({
      message: "no search key provide",
      status: "fail",
      code: 400,
    });
    return next(err);
  }
  const resultLength = await CityModel.find({
    name: { $regex: "^" + searchKey, $options: "i" },
  }).countDocuments();
  if (limit > resultLength) skip = 0;
  if (skip > resultLength) skip = Math.ceil(resultLength / limit- 1) *limit;
  const searchResult = await CityModel.find({
    name: { $regex: "^" + searchKey, $options: "i" },
  })
    .skip(+skip)
    .limit(100);
  res.json({
    result: resultLength,
    pagination: {
      limit: 100,
      skip: +skip || 0,
    },
    data: searchResult,
  });
};
