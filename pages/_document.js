import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="/fonts/fonts.css" rel="stylesheet" />
                    <meta name="description"
                          content="We started a venture studio to empower entrepreneurs and accelerate growth within the Polkadot ecosystem. The venture studio enables entrepreneurs to efficiently convert their ideas into companies through operational support, company building, product design, and funding."/>
                    <meta name="keywords" content="polkadot, supercolony, venture studio, venture capital"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument