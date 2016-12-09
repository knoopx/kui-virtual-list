import React from 'react'
import { render } from 'react-dom'
import VirtualList from '../src/index.jsx'

class App extends React.Component {
  static defaultProps = {
    itemHeight: 50,
  }

  renderItem = item => (
    <div key={item} style={{ display: 'flex', alignItems: 'center', height: this.props.itemHeight, borderBottom: '1px solid #eee', boxSizing: 'border-box', padding: '8px 16px' }}>Row #{item}</div>
  )

  render() {
    const items = []
    for (let i = 0; i < 100000; i++) { items.push(i + 1) }

    return (
      <div style={{ display: 'flex', height: '300px', border: '1px solid black' }}>
        <VirtualList itemHeight={this.props.itemHeight} items={items} renderItem={this.renderItem} />
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'))
