import { create } from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux.hook';
import Layout from '../../layout/Layout';
import PlayersList from '../../components/PlayersList';

jest.mock('../../hooks/redux.hook');

describe('testing Layout component', () => {
  const testTitle = 'Test title';
  let i = 0;
  const getTestPlayer = () => ({
    name: 'test1',
    id: ++i,
  });
  const testPlayers = [getTestPlayer(), getTestPlayer()];

  test('should displaying h1 with right title', () => {
    useAppSelector.mockReturnValue([]);
    const layoutComponent = create(
      <BrowserRouter>
        <Layout title={testTitle}></Layout>
      </BrowserRouter>
    );
    const root = layoutComponent.root;
    expect(root.findByType('h1').props.children).toBe(testTitle);
  });

  test('should displaying link without players', () => {
    useAppSelector.mockReturnValue([]);
    const layoutComponent = create(
      <BrowserRouter>
        <Layout title={testTitle}></Layout>
      </BrowserRouter>
    );
    const root = layoutComponent.root;
    expect(root.findByType(Link).props.children).toBe('Выбрать игроков');
    expect(() => root.findByType(PlayersList)).toThrowError();
  });

  test('should displaying link with 1 players', () => {
    useAppSelector.mockReturnValue([getTestPlayer()]);
    const layoutComponent = create(
      <BrowserRouter>
        <Layout title={testTitle}></Layout>
      </BrowserRouter>
    );
    const root = layoutComponent.root;
    expect(root.findByType(Link).props.children).toBe('Выбрать игроков');
    expect(() => root.findByType(PlayersList)).toThrowError();
  });

  test('should displaying peolpleList with players', () => {
    useAppSelector.mockReturnValue(testPlayers);
    const layoutComponent = create(
      <BrowserRouter>
        <Layout title={testTitle}></Layout>
      </BrowserRouter>
    );
    const root = layoutComponent.root;
    expect(root.findByType(PlayersList).props.players).toBe(testPlayers);
  });
  test('should displaying children when has players', () => {
    useAppSelector.mockReturnValue(testPlayers);
    const children = <p>children</p>;
    const layoutComponent = create(
      <BrowserRouter>
        <Layout title={testTitle}>{children}</Layout>
      </BrowserRouter>
    );
    const root = layoutComponent.root;
    expect(root.findByType('p').props.children).toBe('children');
  });
});
