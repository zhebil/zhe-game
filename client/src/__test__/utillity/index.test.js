import {
  createMessage,
  tranformDataByAddingToStore,
  getRandomInteger,
} from '../../utillity/index.ts';

describe('getRandom function test', () => {
  const casesWithoutError = [
    [0, 100, null],
    [0, 0, null],
    [20, 100, null],
  ];
  test.each(casesWithoutError)(
    'testing call with %s, %s',
    (min, max, expected) => {
      const value = getRandomInteger(min, max);
      expect(value).not.toBeNull();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(max);
    }
  );
  const casesWithError = [
    [-100, 0, null],
    [100, 20, null],
    [20, -100, null],
  ];
  test.each(casesWithError)(
    'testing errors call with %s, %s',
    (min, max, expected) => {
      expect(() => getRandomInteger(min, max)).toThrow(Error);
    }
  );
});

describe('tranformDataByAddingToStore tests', () => {
  test('equal mock with expected data', () => {
    const mockData = [
      { _id: 3123123, text: 'test text' },
      { _id: 3123123, text: 'test text 2' },
      { _id: 3123123, text: 'test text 3' },
    ];
    const expectedData = {
      all: [
        { _id: 3123123, text: 'test text' },
        { _id: 3123123, text: 'test text 2' },
        { _id: 3123123, text: 'test text 3' },
      ],
      rest: [
        { _id: 3123123, text: 'test text' },
        { _id: 3123123, text: 'test text 2' },
        { _id: 3123123, text: 'test text 3' },
      ],
      done: [],
    };
    expect(tranformDataByAddingToStore(mockData)).toEqual(expectedData);
  });
});

describe('slideToggle testing', () => {
  // in development
});

describe('create message testing', () => {
  const text = 'text message';
  const messageTypes = {
    error: 'error',
    success: 'success',
    warning: 'warning',
  };
  const expectedErrorMessage = {
    id: 1,
    text: text,
    type: messageTypes.error,
  };
  const expectedSuccesMessage = {
    id: 2,
    text: text,
    type: messageTypes.success,
  };
  const expectedWarningMessage = {
    id: 3,
    text: text,
    type: messageTypes.warning,
  };

  test('should create eror message', () => {
    expect(createMessage(text, messageTypes.error)).toEqual(
      expectedErrorMessage
    );
  });
  test('should create success message', () => {
    expect(createMessage(text, messageTypes.success)).toEqual(
      expectedSuccesMessage
    );
  });
  test('should create warning message', () => {
    expect(createMessage(text, messageTypes.warning)).toEqual(
      expectedWarningMessage
    );
  });
});
