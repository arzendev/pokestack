import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useAppDispatch } from "./interfaces/hook";
import { AppRouter } from "./router/AppRouter";
import { getLocalStorage } from "./helpers/getLocalStorage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const page = getLocalStorage("next-page");
    const limit = getLocalStorage("limit");
    if (!page && !limit) {
      dispatch(getPokemons());
    } else {
      dispatch(getPokemons(limit, page));
    }
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
