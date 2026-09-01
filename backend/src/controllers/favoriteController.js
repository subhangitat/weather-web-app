import Favorite from "../models/Favorite.js"

export const addFavorite = async (req, res) => {
  try {
    const { city } = req.body

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      })
    }

    const existingFavorite = await Favorite.findOne({
      user: req.user,
      city,
    })

    if (existingFavorite) {
      return res.status(400).json({
        message: "City already added to favorites",
      })
    }

    const favorite = await Favorite.create({
      user: req.user,
      city,
    })

    res.status(201).json({
      message: "City added to favorites",
      favorite,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Server error",
    })
  }
}

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.user,
    })

    res.status(200).json({
      favorites,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Server error",
    })
  }
}

export const removeFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    })

    if (!favorite) {
      return res.status(404).json({
        message: "Favorite not found",
      })
    }

    res.status(200).json({
      message: "City removed from favorites",
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Server error",
    })
  }
}