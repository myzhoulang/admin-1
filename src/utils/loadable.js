import Loadable from "react-loadable";
import Loading from "./Loading";

const loadable = loader => {
  try {
    return Loadable({
      loader,
      loading: Loading
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default loadable