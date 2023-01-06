import Checkbox from "../../atoms/Checkbox";
import { useProducts } from "../../contexts/productContext";
import "./filter.scss";

export const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    filterProducts(filters);
  };

  const createCheckbox = (label: string) => (
    <Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );

  const createCheckboxes = () => availableSizes.map(createCheckbox);

  return (
    <div className="filterContainer">
      <h4 className="filterTitle">Sizes:</h4>
      {createCheckboxes()}
    </div>
  );
};

export default Filter;
