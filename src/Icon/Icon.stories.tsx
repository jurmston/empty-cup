import React from 'react'
import * as Icons from '../icons'

export default {
  title: 'Icons',
}

export const Primary = () => {
  const [style, setStyle] = React.useState('Rounded')
  const [color, setColor] = React.useState('default')
  const [size, setSize] = React.useState(16)

  function handleStyleChange(event) {
    setStyle(event.target.value)
  }

  function handleColorChange(event) {
    setColor(event.target.value)
  }

  function handleSizeChange(event) {
    setSize(event.target.value)
  }

  return (
    <div>
      <select value={style} onChange={handleStyleChange}>
        <option value="Rounded">Rounded</option>
        <option value="TwoTone">Two-tone</option>
      </select>

      <select value={color} onChange={handleColorChange}>
        <option value="default">Default Color</option>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
        <option value="action">Action</option>
      </select>

      <select value={size} onChange={handleSizeChange}>
        <option value={14}>Small</option>
        <option value={16}>Medium</option>
        <option value={18}>Large</option>
        <option value={24}>X-Large</option>
      </select>

      <div style={{ marginBottom: 16 }} />

      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {Object.entries(Icons).filter(([title, ]) => title.endsWith(style)).map(([title, IconComponent], index) => (
          <div
            key={index}
            style={{
              flexBasis: '20%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 8
            }}
          >
            <div>
              <IconComponent color={color} size={size} />
            </div>
            <div>
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
