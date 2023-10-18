module.exports = {
  packagerConfig: {
    asar: true,
    icon: './sonetel.ico',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'sonetel',
        setupIcon: './sonetel.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        maintainer: 'Aashish Joshi',
        homepage: 'https://github.com/aashish-joshi/sonetel_desktop',
        genericName: 'sonetel',
        name: 'sonetel',
        icon: './sonetel.ico',
        categories: ['Office'],
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        name: 'sonetel',
        setupIcon: './sonetel.ico',
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
