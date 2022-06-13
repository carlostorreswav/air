#### https://blog.bitsrc.io/how-to-share-react-components-between-nextjs-projects-c0857bbc1fcb

### In a NextJS project

    yarn add babel-plugin-styled-components

#### .babel.config.js

    module.exports = {
        presets: ["next/babel"],
        plugins: [["styled-components", { ssr: true }]],
    }
