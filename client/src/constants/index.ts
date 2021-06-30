const constants = {
  ROUTES: {
    TRUTH: '/',
    NEVER: '/never',
    QUESTIONS: '/questions',
    SELECT_PLAYER: '/select-players',
    ADMIN_PAGE: '/admin',
    PRESETS: '/presets',
  },
  DEFAULT_PRESET: {
    currentName: 'default',
    data: {
      truth: 'truth',
      dare: 'dare',
      never: 'never',
    },
  },
} as const;

export default constants;
