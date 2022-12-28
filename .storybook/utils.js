const getBabelLoaderPresets = (config) => {
  let babelLoaderIndex = 0;

  const babelRule = config.module.rules.find((rule) => {
    if (!Array.isArray(rule.use)) {
      return false;
    }

    const targetIndex = rule.use.findIndex(({ loader }) => loader?.includes('babel-loader'));

    if (targetIndex === -1) {
      return;
    }

    babelLoaderIndex = targetIndex;

    return true;
  });

  if (babelRule === undefined) {
    return undefined;
  }

  return babelRule.use[babelLoaderIndex].options.presets;
};

const getPresetReactIndex = (babelPresets) => {
  const presetReactIndex = babelPresets.findIndex((preset) => {
    let isPresetReact = false;

    if (typeof preset === 'string') {
      isPresetReact = preset.includes('preset-react');
    }

    if (Array.isArray(preset)) {
      isPresetReact = preset[0].includes('preset-react');
    }

    return isPresetReact;
  });

  return presetReactIndex;
};

const setEmotionReact = (config) => {
  const babelPresets = getBabelLoaderPresets(config);

  if (babelPresets === undefined) {
    console.warn('You Do not have babel-loader');

    return;
  }

  const presetReactIndex = getPresetReactIndex(babelPresets);

  if (presetReactIndex === -1) {
    console.warn('You Do not have preset-react');

    return;
  }

  if (typeof babelPresets[presetReactIndex] === 'string') {
    babelPresets[presetReactIndex] = [
      babelPresets[presetReactIndex],
      { runtime: 'automatic', importSource: '@emotion/react' },
    ];
  } else if (Array.isArray(babelPresets[presetReactIndex])) {
    babelPresets[presetReactIndex][1].importSource = '@emotion/react';
  }
};

module.exports = {
  setEmotionReact,
};
