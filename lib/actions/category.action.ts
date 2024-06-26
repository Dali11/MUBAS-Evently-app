"use server"

import { CreateCategoryParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import Category from "../database/models/category.model"


export const createCategory = async ({categoryName} : CreateCategoryParams) => {
     try {
          await connectToDatabase();
          const newCategory = await Category.create({name: categoryName})
          return JSON.parse(JSON.stringify(newCategory))
     } catch (error) {
          handleError(error)
     }
}


export const getAllCategories = async () => {
     try {
          await connectToDatabase();
          const categories = await Category.find()
          return JSON.parse(JSON.stringify(categories))
     } catch (error) {
          handleError(error)
     }
}

export const addCategoryIfNotExists = async () => {
     try {
          await connectToDatabase();
          const checkExist = await Category.find({Category})
          return !!checkExist
     } catch (error) {
          handleError(error)
     }
}

export const deleteCategory = async (props: { id: string }) => {
     const { id } = props

     try {
          await connectToDatabase();
          const  catedgoryDeleted = await Category.deleteOne({ _id: id }).exec()
          return JSON.parse(JSON.stringify(catedgoryDeleted))
     } catch (error) {
          handleError(error)
     }
}