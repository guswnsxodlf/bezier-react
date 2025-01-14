const config = {
  repository: {
    name: 'bezier-react',
    iconExtractPath: 'packages/bezier-react/src/components/Icon/assets',
    baseBranchName: 'next-v1',
    owner: 'channel-io',
  },
  commit: {
    message: 'feat(icons): update the icons',
    author: {
      name: 'ch-builder',
      email: 'eng@channel.io',
    },
  },
  pr: {
    title: 'Extract the icons from Figma',
    body: 'Please check the changed part!\n---\nThis Pull Request was generated by bezier-figma-plugin.',
  },
}

export default config
