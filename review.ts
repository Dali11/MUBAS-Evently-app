/* import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICantegory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import { createCategory, getAllCategories } from "@/lib/actions/category.action";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const CategoriesDropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICantegory[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [isAdding, setIsAdding] = useState(false); // Track adding state
  const [errorMessage, setErrorMessage] = useState(""); // Store error message

  const handleAddCategory = async () => {
    setIsAdding(true); // Set adding state to show loading/disable button
    setErrorMessage(""); // Clear any previous error

    try {
      const trimmedCategory = newCategory.trim();
      if (!trimmedCategory) {
        setErrorMessage("Category name cannot be empty.");
        return;
      }

      const existingCategory = categories.find(
        (cat) => cat.name.toLowerCase() === trimmedCategory.toLowerCase()
      );
      if (existingCategory) {
        setErrorMessage(`"${newCategory}" already exist`);
        return;
      } /*  */

      const category = await createCategory({ categoryName: trimmedCategory });
      setCategories((prevState) => [...prevState, category]);
      setNewCategory(""); // Clear input after successful creation
    } catch (error) {
      console.error("Error creating category:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsAdding(false); // Reset adding state
    }
  };          

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories(categoryList as ICantegory[]);
    };

    getCategories();
  }, []);


  // const handleCategoryChange = () => {
  //   setErrorMessage("");
  //   onChangeHandler && onChangeHandler();
  // };

  return (
    <div>
      <Select onValueChange={() => {setErrorMessage("")}} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={`${category.name}`}
                value={category._id.toString()}
                className="select-item p-regular-14"
              >
                {category.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>

      <AlertDialog>
        <AlertDialogTrigger className="p-medium-14 flex flex-col w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 hover:rounded-full focus:text-primary-500">
        {isAdding ? "Adding..." : "Add new category"} 
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white w-[90vw] max-h-[70vh] p-6 overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>New Category</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                type="text"
                placeholder="Category name"
                className="input-field mt-3"
                onChange={(e) => setNewCategory(e.target.value)}
              />
              
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>
              Add
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default CategoriesDropdown */