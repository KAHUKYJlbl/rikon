import { Provider } from 'react-redux';

import { store } from './provider/store/ui/store';
import { MainPage } from '../pages/main-page';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MainPage height={562} width={500} />
    </Provider>
  );
}
