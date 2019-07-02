import React from 'react'
import { Link } from 'react-router-dom'

import { Content, List, Block } from '../styled'

function IntroductionPage() {
    return (
        <Content>
            <h1>Introduction</h1>
            <h2>🚀 Reactive state management based on MobX</h2>
            <Block>
                <List>
                    <li>💪 Fully fledged typescript support</li>
                    <li>🙌 Simple in use</li>
                    <li>😎 Model based</li>
                    <li>👀 Observable form state</li>
                    <li>😉 Write once and fall in love</li>
                </List>
            </Block>

            <h2>Advantages</h2>
            <Block>
                <List listStyle="disc">
                    <li>Sync & Async Validation</li>
                    <li>Field value normalizers</li>
                    <li>Field array support</li>
                    <li>Simple api</li>
                    <li>Strongly typed</li>
                    <li>Dedicated DevTools dynamically catch form instances</li>
                    <li>React bindings. Supports hooks</li>
                </List>
            </Block>

            <h2>Installation</h2>
            <Block>
                <List listStyle="disc">
                    <li>
                        Core package: <code>yarn add @mobx-form-constructor/core</code>
                    </li>
                    <li>
                        React bindings: <code>yarn add @mobx-form-constructor/react</code>
                    </li>
                </List>
            </Block>

            <h2>Let's go</h2>
            <Block>
                <Link to="/examples/simple">Simple example</Link>
            </Block>
        </Content>
    )
}

export default IntroductionPage
