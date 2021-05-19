import GlobalStyles from '../src/styles/global'



const withGlobalStyles = (Story) => {
    <>
    <GlobalStyles/>
    <Story/>
    </>
}

export default withGlobalStyles
