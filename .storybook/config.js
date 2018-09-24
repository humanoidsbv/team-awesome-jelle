import { configure } from '@storybook/react';

function loadStories() {
  require('../shared/components/select-box/__stories__/index.jsx');
}

configure(loadStories, module);
