import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { CardsContainer, OptionContainer } from "../Cards/styleCards";
import { orderCards, filterCards } from "../../redux/actions/actions";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch()

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFiltered = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <CardsContainer>
      <OptionContainer>
        <select name="ordenamiento" onChange={handleOrder}>
          <option value="" disabled selected>Order By...</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filtrado" onChange={handleFiltered}>
          <option value="FilterBy" disabled selected>Filter By...</option>
          <option value="allFavorites">All Favorites</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
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
