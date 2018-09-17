import Loadable from 'react-loadable';
import Loading from "../components/Loading";

export const load = (loader) => {
  try {
    return Loadable({
      loader,
      loading: Loading,
      delay: 300
    });
  } catch (error) {
    throw new Error(error);
  }
}
