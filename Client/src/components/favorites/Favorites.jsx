import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { CardsContainer, OptionContainer } from "../Cards/styleCards";
import { orderCards, filterCards } from "../../redux/actions/actions";
import { useState } from "react";

const Favorites = () => {
  const options = [
    { value: "", disabled: true, text: "Order By..." },
    { value: "Ascendente", disabled: false, text: "Ascendente" },
    { value: "Descendente", disabled: false, text: "Descendente" },
  ];

  const options2 = [
    { value: "", disabled: true, text: "Filter By..." },
    { value: "allFavorites", disabled: false, text: "All Favorites" },
    { value: "Male", disabled: false, text: "Male" },
    { value: "Female", disabled: false, text: "Female" },
    { value: "Genderless", disabled: false, text: "Genderless" },
    { value: "unknown", disabled: false, text: "Unknown" },
  ];

  const myFavorites = useSelector((state) => state.myFavorites);

  const [selected, setSelected] = useState(options[0].value);
  const [selected2, setSelected2] = useState(options2[0].value);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setSelected(event.target.value);
  };

  const handleFiltered = (event) => {
    dispatch(filterCards(event.target.value));
    setSelected2(event.target.value);
  };
  return (
    <CardsContainer>
      <OptionContainer>
        <select name="ordenamiento" value={selected} onChange={handleOrder}>
          {options.map((option) => (
            <option
              key={option.value}
              disabled={option.disabled}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
        <select name="filtrado" value={selected2} onChange={handleFiltered}>
          {options2.map((option) => (
            <option
              key={option.value}
              disabled={option.disabled}
              value={option.value}
            >
              {option.text}
            </option>
          ))}
        </select>
      </OptionContainer>
      {myFavorites.map(({ id, image, name, species, gender }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </CardsContainer>
  );
};

export default Favorites;
