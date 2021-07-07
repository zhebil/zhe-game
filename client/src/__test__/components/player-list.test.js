import { create } from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import { PlayersList } from '../../components/Players/PlayersList';
import { ListItem } from '../../components/Players/PlayerListItem';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('player-list tests', () => {
  let i = 0;
  const getTestPlayer = () => ({
    name: 'test1',
    id: ++i,
  });
  const testPlayers = [getTestPlayer(), getTestPlayer()];
  const createTestApp = (players, isPage = true) => {
    return create(
      <Provider store={store}>
        <BrowserRouter>
          <PlayersList players={players} isPage={isPage} />
        </BrowserRouter>
      </Provider>
    );
  };
  test('should display players of props', () => {
    const playersListComponent = createTestApp(testPlayers, false);
    const root = playersListComponent.root;
    expect(root.findAllByType(ListItem).length).toBe(testPlayers.length);
    expect(root.findByType(Link).props.children).toBe('Изменить');
  });

  test('should`t display link if is`t player-list page', () => {
    const playersListComponent = createTestApp(testPlayers, true);
    const root = playersListComponent.root;
    expect(() => root.findByType(Link)).toThrow();
  });
});
